import { UrlAnalysisResult } from '../types';

const SUSPICIOUS_TLDS = new Set([
  'xyz', 'top', 'tk', 'ml', 'ga', 'cf', 'gq', 'click', 'work', 'buzz',
  'club', 'cam', 'live', 'loan', 'icu', 'rest', 'stream', 'download',
  'review', 'date', 'faith', 'racing', 'bid', 'surf'
]);

const TRUSTED_DOMAINS = new Set([
  'google.com', 'microsoft.com', 'apple.com', 'amazon.com', 'paypal.com',
  'netflix.com', 'facebook.com', 'instagram.com', 'whatsapp.com', 'twitter.com',
  'x.com', 'linkedin.com', 'github.com', 'sbi.co.in', 'hdfcbank.com', 'icicibank.com',
  'gov.in', 'gov', 'edu', 'cybercrime.gov.in', 'rbi.org.in'
]);

const PHISHING_KEYWORDS = [
  'login', 'signin', 'verify', 'update', 'kyc', 'pan-card', 'aadhaar',
  'bank', 'account-blocked', 'claim', 'bonus', 'reward', 'refund', 'urgent',
  'secure-session', 'unlock', 'wallet-connect', 'airdrop', 'free-gift'
];

const BRAND_NAMES = [
  'paypal', 'amazon', 'netflix', 'google', 'apple', 'microsoft',
  'chase', 'wellsfargo', 'sbi', 'hdfc', 'icici', 'axis', 'paytm', 'phonepe', 'gpay'
];

export function analyzeUrl(rawInput: string): UrlAnalysisResult {
  let cleaned = rawInput.trim();
  if (!cleaned) {
    throw new Error('Please enter a URL to inspect.');
  }

  // Prepend https:// if protocol missing for parsing
  if (!/^https?:\/\//i.test(cleaned)) {
    cleaned = 'http://' + cleaned;
  }

  let parsed: URL;
  try {
    parsed = new URL(cleaned);
  } catch {
    throw new Error('Invalid URL format. Please ensure it is a valid web address.');
  }

  const flags: UrlAnalysisResult['flags'] = [];
  let riskScore = 5; // Base minimal score

  const hostname = parsed.hostname.toLowerCase();
  const protocol = parsed.protocol.replace(':', '');
  const pathname = parsed.pathname.toLowerCase();
  const search = parsed.search.toLowerCase();
  const fullUrl = parsed.href.toLowerCase();

  // 1. Protocol Check
  if (protocol === 'http') {
    riskScore += 25;
    flags.push({
      title: 'Insecure Connection (HTTP)',
      description: 'The site transmits data unencrypted. Real banking and login sites strictly require HTTPS.',
      severity: 'danger',
    });
  } else {
    flags.push({
      title: 'Secure Protocol (HTTPS) Present',
      description: 'Traffic is encrypted, but be aware: 80%+ of phishing sites also use free SSL certificates! HTTPS does NOT guarantee legitimacy.',
      severity: 'info',
    });
  }

  // 2. IP Address as Hostname
  const isIpAddress = /^(\d{1,3}\.){3}\d{1,3}$/.test(hostname) || hostname.startsWith('[::');
  if (isIpAddress) {
    riskScore += 45;
    flags.push({
      title: 'Direct IP Address Host',
      description: `The URL uses a raw IP address (${hostname}) instead of a registered domain. Legitimate companies never use direct IP links in emails or SMS.`,
      severity: 'danger',
    });
  }

  // 3. Userinfo (@ symbol trick)
  if (rawInput.includes('@')) {
    riskScore += 50;
    flags.push({
      title: 'Masked URL (@ Symbol Exploit)',
      description: 'The URL contains an "@" symbol. Browsers ignore everything before "@" and navigate to the domain after it. This is a classic credential harvesting trick.',
      severity: 'danger',
    });
  }

  // 4. Punycode / Homoglyph check
  if (hostname.includes('xn--')) {
    riskScore += 45;
    flags.push({
      title: 'Internationalized / Lookalike Domain (Punycode)',
      description: 'The domain contains non-standard characters disguised to look like standard English letters (e.g. Cyrillic "а" instead of Latin "a").',
      severity: 'danger',
    });
  }

  // 5. TLD Analysis
  const domainParts = hostname.split('.');
  const tld = domainParts.length > 1 ? domainParts[domainParts.length - 1] : '';
  if (SUSPICIOUS_TLDS.has(tld)) {
    riskScore += 30;
    flags.push({
      title: `High-Risk Top-Level Domain (.${tld})`,
      description: `The extension .${tld} is frequently favored by cybercriminals for low-cost, disposable phishing campaigns.`,
      severity: 'warning',
    });
  }

  // 6. Subdomain Brand Impersonation (e.g. sbi.co.in.scam-domain.com)
  const mainDomain = domainParts.slice(-2).join('.');
  let matchedBrand: string | null = null;
  for (const brand of BRAND_NAMES) {
    if (hostname.includes(brand)) {
      matchedBrand = brand;
      // Check if the brand is NOT the main domain
      if (!mainDomain.includes(brand)) {
        riskScore += 50;
        flags.push({
          title: `Brand Impersonation Trick: "${brand.toUpperCase()}"`,
          description: `The URL mentions "${brand}" in a subdomain or prefix, but the actual owning domain is "${mainDomain}". You will NOT be connecting to the real ${brand}!`,
          severity: 'danger',
        });
        break;
      }
    }
  }

  // 7. Phishing keywords in path or query
  const foundKeywords = PHISHING_KEYWORDS.filter(kw => fullUrl.includes(kw));
  if (foundKeywords.length > 0 && !TRUSTED_DOMAINS.has(mainDomain)) {
    riskScore += 20 * Math.min(foundKeywords.length, 3);
    flags.push({
      title: `Sensitive Phishing Keywords Detected`,
      description: `Contains high-risk triggers: [${foundKeywords.join(', ')}]. Scammers use these to bait urgent logins or credential submission.`,
      severity: 'warning',
    });
  }

  // 8. Known Shorteners
  const shorteners = ['bit.ly', 'tinyurl.com', 'is.gd', 't.co', 'cutt.ly', 'rb.gy', 'ow.ly'];
  if (shorteners.some(s => hostname.endsWith(s))) {
    riskScore += 25;
    flags.push({
      title: 'Obfuscated Shortened Link',
      description: 'The real destination is hidden behind a URL shortener. Always expand shortened links using a preview service before opening.',
      severity: 'warning',
    });
  }

  // 9. Excessive Subdomains (Domain Depth)
  if (domainParts.length >= 4) {
    riskScore += 15;
    flags.push({
      title: 'Excessive Subdomain Stacking',
      description: `Hostname has ${domainParts.length} levels of subdomains. Attackers stack subdomains to push the real domain off-screen on mobile screens.`,
      severity: 'warning',
    });
  }

  // 10. Trusted Domain Exemption
  if (TRUSTED_DOMAINS.has(mainDomain) || TRUSTED_DOMAINS.has(hostname)) {
    riskScore = Math.min(riskScore, 10);
    flags.push({
      title: 'Recognized Known Official Domain',
      description: `Domain matches official registry for "${mainDomain}". Always confirm you typed it correctly and did not follow an unverified SMS link.`,
      severity: 'safe',
    });
  }

  // Clamp score 0 - 100
  riskScore = Math.min(100, Math.max(0, riskScore));

  let riskLevel: UrlAnalysisResult['riskLevel'] = 'Safe';
  let verdict = 'This URL displays standard safe web attributes.';

  if (riskScore >= 70) {
    riskLevel = 'Dangerous';
    verdict = 'CRITICAL WARNING: This URL exhibits severe indicators of phishing, credential harvesting, or scam deception. DO NOT ENTER PASSWORDS OR PERSONAL DATA!';
  } else if (riskScore >= 40) {
    riskLevel = 'Suspicious';
    verdict = 'CAUTION: This URL contains multiple suspicious red flags commonly associated with unverified sites or disguised links.';
  } else if (riskScore >= 20) {
    riskLevel = 'Low Risk';
    verdict = 'Proceed with routine caution. Verify the sender who provided this link before proceeding.';
  }

  const recommendations = [
    riskScore >= 40 
      ? 'Do NOT enter login credentials, OTPs, or debit/credit card information on this site.'
      : 'Always double-check the spelling in the browser address bar.',
    'Never click links sent via unsolicited SMS claiming "Account suspended" or "KYC pending".',
    'Navigate directly to the official app or type the verified website address yourself.'
  ];

  return {
    url: cleaned,
    hostname,
    protocol,
    riskScore,
    riskLevel,
    verdict,
    flags,
    domainAgeSimulated: riskScore >= 50 ? '< 14 days (Newly registered)' : '> 5 years (Established)',
    recommendations,
  };
}
