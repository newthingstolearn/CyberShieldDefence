import jsQR from 'jsqr';
import { QrAnalysisResult } from '../types';

export function analyzeQrString(raw: string): QrAnalysisResult {
  const text = raw.trim();
  const warnings: string[] = [];
  const details: QrAnalysisResult['details'] = [];
  let riskScore = 0;
  let type: QrAnalysisResult['type'] = 'unknown';

  // 1. UPI Payment QR Code
  if (text.startsWith('upi://pay') || text.includes('upi://')) {
    type = 'upi';
    try {
      const url = new URL(text);
      const pa = url.searchParams.get('pa') || 'Not specified';
      const pn = url.searchParams.get('pn') || 'Not specified';
      const am = url.searchParams.get('am');
      const tn = url.searchParams.get('tn') || 'None';

      details.push({ label: 'Payment Protocol', value: 'Unified Payments Interface (UPI)' });
      details.push({ label: 'Payee VPA / UPI ID', value: pa });
      details.push({ label: 'Payee Registered Name', value: decodeURIComponent(pn) });
      details.push({ label: 'Requested Amount', value: am ? `₹${am}` : 'Dynamic / User input' });
      details.push({ label: 'Transaction Note', value: decodeURIComponent(tn) });

      // Golden Rule Warning
      riskScore = 85; // Flag for high caution because UPI QR scams are rampant
      warnings.push(
        'CRITICAL SAFETY RULE: Scanning this QR code will DEBIT (DEDUCT) money from your account! You NEVER scan a QR code or enter your UPI PIN to RECEIVE money!'
      );
      warnings.push(
        'If a buyer on OLX, Facebook Marketplace, or a phone caller sent you this QR code saying "Scan to get paid / claim refund", this is 100% FRAUD!'
      );
    } catch {
      details.push({ label: 'Malformed UPI Payload', value: text });
      riskScore = 90;
      warnings.push('Malformed UPI payload detected. May be an attempt to crash payment apps or bypass validation.');
    }
  }
  // 2. Direct Application or File Download (.apk, .exe, .dmg)
  else if (/\.(apk|exe|dmg|bat|msi|vbs|zip)($|\?)/i.test(text)) {
    type = 'app_download';
    riskScore = 95;
    details.push({ label: 'Payload Action', value: 'Direct Executable / App Download' });
    details.push({ label: 'Target URL', value: text });
    warnings.push(
      'EXTREME DANGER: This QR code initiates the download of an application installer (e.g. .APK file). Malicious APKs sent via QR or WhatsApp hijack SMS, steal OTPs, and control your device remotely!'
    );
    warnings.push('Never sideload APK files from unverified QR codes or messages. Only install apps from the official Google Play Store or Apple App Store.');
  }
  // 3. Web URL
  else if (/^https?:\/\//i.test(text)) {
    type = 'url';
    details.push({ label: 'Target URL', value: text });
    try {
      const parsed = new URL(text);
      details.push({ label: 'Destination Hostname', value: parsed.hostname });
      if (parsed.protocol === 'http:') {
        riskScore += 40;
        warnings.push('Insecure HTTP destination. Your connection is not encrypted.');
      } else {
        riskScore += 15;
      }

      // Shortener check
      if (['bit.ly', 'tinyurl.com', 't.co', 'is.gd'].some(s => parsed.hostname.includes(s))) {
        riskScore += 35;
        warnings.push('URL Shortener detected: The true web address is obscured.');
      }

      // Lookalike or suspicious words
      if (['kyc', 'bonus', 'claim', 'gift', 'login', 'verify'].some(k => text.toLowerCase().includes(k))) {
        riskScore += 30;
        warnings.push('Contains deceptive high-pressure keywords commonly found in credential theft campaigns.');
      }
    } catch {
      riskScore += 40;
    }
  }
  // 4. SMS / Phone Call Intent
  else if (text.startsWith('tel:') || text.startsWith('smsto:') || text.startsWith('sms:')) {
    type = 'phone';
    riskScore = 60;
    details.push({ label: 'Action Type', value: 'Automatic Call / SMS Trigger' });
    details.push({ label: 'Target Value', value: text });
    warnings.push(
      'Scanning will initiate a phone call or premium SMS from your device. Scammers use this for SIM porting fraud or premium subscription scams.'
    );
  }
  // 5. Wi-Fi Config
  else if (text.startsWith('WIFI:')) {
    type = 'text';
    details.push({ label: 'Action Type', value: 'Wi-Fi Network Configuration' });
    details.push({ label: 'Content', value: text });
    warnings.push('Connecting to rogue Wi-Fi access points can expose unencrypted network traffic (Evil Twin attack).');
    riskScore = 25;
  }
  // 6. Generic Text
  else {
    type = 'text';
    details.push({ label: 'Data Type', value: 'Plain Text' });
    details.push({ label: 'Content Preview', value: text.length > 80 ? text.slice(0, 80) + '...' : text });
    riskScore = 10;
  }

  // Safety checklist based on payload
  const safetyChecklist = [
    'Remember: QR codes cannot transfer money into your bank account. Entering a PIN always sends money.',
    'Always inspect the destination domain on your phone screen before clicking "Open in Browser".',
    'Do not scan random stickers pasted over legitimate merchant QR codes in restaurants or fuel stations (QR Quishing).'
  ];

  let riskLevel: QrAnalysisResult['riskLevel'] = 'Safe';
  let summary = 'This QR code appears to contain benign information.';

  if (riskScore >= 75) {
    riskLevel = 'Dangerous';
    summary = 'HIGH FINANCIAL OR SECURITY RISK: Potential payment fraud, unauthorized debit, or malicious app download!';
  } else if (riskScore >= 35) {
    riskLevel = 'Suspicious';
    summary = 'PROCEED WITH CAUTION: Hidden redirects, shortened links, or automatic action triggers detected.';
  }

  return {
    rawContent: text,
    type,
    riskScore,
    riskLevel,
    summary,
    details,
    warnings,
    safetyChecklist,
  };
}

/**
 * Decodes an image file into a QR code string using canvas and jsQR
 */
export async function decodeQrFromImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Canvas 2D context not available'));
          return;
        }

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: 'attemptBoth',
        });

        if (code && code.data) {
          resolve(code.data);
        } else {
          reject(new Error('No readable QR code found in this image. Please upload a clear, well-lit QR photo.'));
        }
      };
      img.onerror = () => reject(new Error('Failed to load image file.'));
      img.src = e.target?.result as string;
    };
    reader.onerror = () => reject(new Error('Failed to read file.'));
    reader.readAsDataURL(file);
  });
}
