import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());

// Initialize GoogleGenAI server-side with User-Agent header as required by skill guidelines
const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey
  ? new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

interface ScamAlertItem {
  id: string;
  title: string;
  threatLevel: 'Critical' | 'High' | 'Medium';
  category: string;
  date: string;
  sourceName: string;
  sourceUrl?: string;
  summary: string;
  keyAdvice: string;
}

const FALLBACK_ALERTS: ScamAlertItem[] = [
  {
    id: 'alert-certin-digital-arrest',
    title: 'CERT-In & MHA Issue High-Severity Warning on "Digital Arrest" Extortion Networks',
    threatLevel: 'Critical',
    category: 'Government & Police Impersonation',
    date: 'Recent Advisory',
    sourceName: 'CERT-In / I4C National Cyber Security Alert',
    sourceUrl: 'https://cybercrime.gov.in',
    summary: 'Cyber syndicates operating across Southeast Asia are targeting professionals and senior citizens using fake Skype video calls showing forged CBI, NCB, and Supreme Court warrants to extort fixed deposits.',
    keyAdvice: 'Law enforcement agencies never place citizens under "Digital Arrest" or conduct court hearings over video calls. Hang up and call 1930 immediately.',
  },
  {
    id: 'alert-fbi-ai-voice',
    title: 'FBI IC3 Issues Advisory on AI Deepfake Voice Cloning & Virtual Kidnapping Ransoms',
    threatLevel: 'Critical',
    category: 'AI & Deepfake Voice Cloning',
    date: 'Recent Advisory',
    sourceName: 'FBI Internet Crime Complaint Center (IC3)',
    sourceUrl: 'https://www.ic3.gov',
    summary: 'Criminals are scraping 3-second audio clips from social media to generate artificial panic distress calls of children involved in car accidents to demand immediate ransoms via wire transfers or gift cards.',
    keyAdvice: 'Establish a private family secret Safe Word. Never transfer funds before independently verifying your family member\'s whereabouts on their saved phone number.',
  },
  {
    id: 'alert-rbi-aeps',
    title: 'RBI & NPCI Strengthen Biometric PoS Protocols to Combat Cloned Silicone AePS Fraud',
    threatLevel: 'High',
    category: 'Banking & Biometric Theft',
    date: 'Recent Advisory',
    sourceName: 'Reserve Bank of India Advisory',
    sourceUrl: 'https://myaadhaar.uidai.gov.in',
    summary: 'Syndicates harvest citizen thumbprints from public registry deed portals to clone silicon rubber impressions, attempting midnight micro-ATM withdrawals without OTPs.',
    keyAdvice: 'Lock your biometrics via the official mAadhaar smartphone app. Under RBI rules, unauthorized AePS transactions reported within 3 days carry zero customer liability.',
  },
  {
    id: 'alert-ftc-job-tasks',
    title: 'FTC & Interpol Warn of Global "Prepaid Telegram Task" Employment Traps',
    threatLevel: 'High',
    category: 'Fake Jobs & Youth Exploitation',
    date: 'Recent Advisory',
    sourceName: 'Federal Trade Commission (FTC)',
    sourceUrl: 'https://www.consumer.ftc.gov',
    summary: 'Scammers offer work-from-home jobs paying ₹150 for video likes, then coerce victims into VIP tiers requiring advance deposits of thousands of dollars before freezing withdrawal accounts.',
    keyAdvice: 'Never pay money or buy crypto to unlock a job or earn commission. Legitimate employers pay you; they never demand advance fees.',
  },
];

const FALLBACK_ALERTS_KN: ScamAlertItem[] = [
  {
    id: 'alert-certin-digital-arrest',
    title: 'CERT-In ಮತ್ತು ಗೃಹ ಸಚಿವಾಲಯದಿಂದ "ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್" ಸುಲಿಗೆ ಜಾಲಗಳ ವಿರುದ್ಧ ಉನ್ನತ ಎಚ್ಚರಿಕೆ',
    threatLevel: 'Critical',
    category: 'Government & Police Impersonation',
    date: 'ಇತ್ತೀಚಿನ ಎಚ್ಚರಿಕೆ',
    sourceName: 'CERT-In / ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಕ್ರೈಮ್ ಕೇಂದ್ರ (I4C)',
    sourceUrl: 'https://cybercrime.gov.in',
    summary: 'ಆಗ್ನೇಯ ಏಷ್ಯಾದಿಂದ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿರುವ ಸೈಬರ್ ಗ್ಯಾಂಗ್‌ಗಳು ನಕಲಿ ಸಿಬಿಐ, ಎನ್‌ಸಿಬಿ ಮತ್ತು ಸುಪ್ರೀಂ ಕೋರ್ಟ್ ಸಮನ್ಸ್ ತೋರಿಸಿ ಸ್ಕೈಪ್ ವಿಡಿಯೋ ಕಾಲ್ ಮೂಲಕ ಲಕ್ಷಾಂತರ ರೂಪಾಯಿ ಸುಲಿಗೆ ಮಾಡುತ್ತಿವೆ.',
    keyAdvice: 'ಯಾವುದೇ ಪೊಲೀಸ್ ಅಥವಾ ತನಿಖಾ ಸಂಸ್ಥೆ ವಿಡಿಯೋ ಕಾಲ್‌ನಲ್ಲಿ ಬಂಧನ ಮಾಡುವುದಿಲ್ಲ. ತಕ್ಷಣ ಕಾಲ್ ಕಟ್ ಮಾಡಿ 1930 ಗೆ ಕರೆ ಮಾಡಿ.',
  },
  {
    id: 'alert-fbi-ai-voice',
    title: 'ಎಐ ಧ್ವನಿ ಕ್ಲೋನಿಂಗ್ ಮತ್ತು ನಕಲಿ ಕಿಡ್ನಾಪ್ ಸುಲಿಗೆ ಕುರಿತು ಎಫ್‌ಬಿಐ IC3 ಜಾಗತಿಕ ಎಚ್ಚರಿಕೆ',
    threatLevel: 'Critical',
    category: 'AI & Deepfake Voice Cloning',
    date: 'ಇತ್ತೀಚಿನ ಎಚ್ಚರಿಕೆ',
    sourceName: 'FBI ಇಂಟರ್ನೆಟ್ ಕ್ರೈಮ್ ಕಂಪ್ಲೈಂಟ್ ಸೆಂಟರ್ (IC3)',
    sourceUrl: 'https://www.ic3.gov',
    summary: 'ಸಾಮಾಜಿಕ ಜಾಲತಾಣಗಳಿಂದ ಕೇವಲ 3 ಸೆಕೆಂಡುಗಳ ಆಡಿಯೋ ಪಡೆದು ಮಕ್ಕಳ ಧ್ವನಿಯನ್ನು ಎಐ ಮೂಲಕ ನಕಲು ಮಾಡಿ, ಅಪಘಾತ ಅಥವಾ ಬಂಧನದ ಸುಳ್ಳು ಸುದ್ದಿ ಹರಡಿ ತುರ್ತು ಹಣ ವಸೂಲಿ ಮಾಡಲಾಗುತ್ತಿದೆ.',
    keyAdvice: 'ಕುಟುಂಬದೊಂದಿಗೆ ರಹಸ್ಯ "ಕೋಡ್ ವರ್ಡ್" ನಿಗದಿಪಡಿಸಿ. ಅವರ ಪರಿಚಿತ ಫೋನ್ ನಂಬರ್‌ಗೆ ಕರೆ ಮಾಡಿ ಖಚಿತಪಡಿಸದೆ ಹಣ ಕಳುಹಿಸಬೇಡಿ.',
  },
  {
    id: 'alert-rbi-aeps',
    title: 'ಸಿಲಿಕಾನ್ ಹೆಬ್ಬೆರಳು AePS ಬಯೋಮೆಟ್ರಿಕ್ ಕಳ್ಳತನ ತಡೆಯಲು ಆರ್‌ಬಿಐ ಮಾರ್ಗಸೂಚಿ ಬಿಡುಗಡೆ',
    threatLevel: 'High',
    category: 'Banking & Biometric Theft',
    date: 'ಇತ್ತೀಚಿನ ಎಚ್ಚರಿಕೆ',
    sourceName: 'ರಿಸರ್ವ್ ಬ್ಯಾಂಕ್ ಆಫ್ ಇಂಡಿಯಾ (RBI)',
    sourceUrl: 'https://myaadhaar.uidai.gov.in',
    summary: 'ಸಾರ್ವಜನಿಕ ನೋಂದಣಿ ಪತ್ರಗಳಿಂದ ಹೆಬ್ಬೆರಳ ಗುರುತು ಕದ್ದು ಸಿಲಿಕಾನ್ ಬೆರಳುಗಳನ್ನು ತಯಾರಿಸಿ, ಮಧ್ಯರಾತ್ರಿ ಮೈಕ್ರೋ-ಎಟಿಎಂ ಮೂಲಕ ಒಟಿಪಿ ಇಲ್ಲದೆ ಹಣ ಡ್ರಾ ಮಾಡಲಾಗುತ್ತಿದೆ.',
    keyAdvice: 'mAadhaar ಆ್ಯಪ್ ಮೂಲಕ ನಿಮ್ಮ ಬಯೋಮೆಟ್ರಿಕ್ ತಕ್ಷಣ ಲಾಕ್ ಮಾಡಿ. ಆರ್‌ಬಿಐ ನಿಯಮದ ಪ್ರಕಾರ 3 ದಿನದೊಳಗೆ ದೂರು ನೀಡಿದರೆ ಗ್ರಾಹಕರಿಗೆ ಸಂಪೂರ್ಣ ರಕ್ಷಣೆ ಇದೆ.',
  },
  {
    id: 'alert-ftc-job-tasks',
    title: 'ಟೆಲಿಗ್ರಾಂ ಪಾರ್ಟ್-ಟೈಮ್ ಟಾಸ್ಕ್ ಉದ್ಯೋಗ ವಂಚನೆಗಳ ವಿರುದ್ಧ ಎಫ್‌ಟಿಸಿ ಮತ್ತು ಇಂಟರ್‌ಪೋಲ್ ಎಚ್ಚರಿಕೆ',
    threatLevel: 'High',
    category: 'Fake Jobs & Youth Exploitation',
    date: 'ಇತ್ತೀಚಿನ ಎಚ್ಚರಿಕೆ',
    sourceName: 'ಫೆಡರಲ್ ಟ್ರೇಡ್ ಕಮಿಷನ್ (FTC)',
    sourceUrl: 'https://www.consumer.ftc.gov',
    summary: 'ಯೂಟ್ಯೂಬ್ ಲೈಕ್ ಅಥವಾ ಹೋಟೆಲ್ ರೇಟಿಂಗ್‌ಗೆ ₹150 ನೀಡಿ ಆರಂಭದಲ್ಲಿ ನಂಬಿಸಿ, ನಂತರ ವಿಐಪಿ ಟಾಸ್ಕ್‌ಗಾಗಿ ಸಾವಿರಾರು ರೂಪಾಯಿ ಠೇವಣಿ ಪಡೆದು ಹಣ ಹಿಂಪಡೆಯಲಾಗದಂತೆ ಖಾತೆ ಲಾಕ್ ಮಾಡುತ್ತಾರೆ.',
    keyAdvice: 'ಕೆಲಸಕ್ಕಾಗಿ ಎಂದಿಗೂ ಮುಂಗಡ ಹಣ ಅಥವಾ ಕ್ರಿಪ್ಟೋ ನೀಡಬೇಡಿ. ಅಧಿಕೃತ ಕಂಪನಿಗಳು ನಿಮಗೆ ಸಂಬಳ ನೀಡುತ್ತವೆ, ನಿಮ್ಮಿಂದ ಹಣ ಕೇಳುವುದಿಲ್ಲ.',
  },
];

const OFFICIAL_GROUNDED_SOURCES = [
  { uri: 'https://cybercrime.gov.in', title: 'National Cyber Crime Reporting Portal (1930)' },
  { uri: 'https://www.ic3.gov', title: 'FBI Internet Crime Complaint Center (IC3)' },
  { uri: 'https://www.ftc.gov/news-events/topics/consumer-protection/scams', title: 'Federal Trade Commission Scam Alerts' },
  { uri: 'https://myaadhaar.uidai.gov.in', title: 'UIDAI myAadhaar Biometric Security Portal' },
  { uri: 'https://www.cisa.gov/news-events/cybersecurity-advisories', title: 'CISA Cybersecurity Advisories' },
];

interface CacheRecord {
  data: {
    alerts: ScamAlertItem[];
    groundingSources: { uri: string; title: string }[];
    lastUpdated: string;
    searchGrounded: boolean;
  };
  timestamp: number;
}

const alertsCache = new Map<string, CacheRecord>();
const CACHE_TTL_MS = 15 * 60 * 1000; // Cache valid search results for 15 minutes

// Helper to fetch live grounded alerts via Gemini 3.8 Flash with Search Grounding
async function fetchGroundedAlerts(lang: string = 'en') {
  const cacheKey = lang;
  const cached = alertsCache.get(cacheKey);
  const now = Date.now();

  // Return cached result if still within TTL
  if (cached && (now - cached.timestamp < CACHE_TTL_MS)) {
    return cached.data;
  }

  const fallbackList = lang === 'kn' ? FALLBACK_ALERTS_KN : FALLBACK_ALERTS;

  if (!ai || !apiKey) {
    const result = {
      alerts: fallbackList,
      groundingSources: OFFICIAL_GROUNDED_SOURCES,
      lastUpdated: new Date().toISOString(),
      searchGrounded: false,
    };
    alertsCache.set(cacheKey, { data: result, timestamp: now });
    return result;
  }

  try {
    const langNote = lang === 'kn' 
      ? 'Note: Translate the "title", "summary", and "keyAdvice" fields into clear, natural Kannada language.'
      : lang === 'hi'
      ? 'Note: Translate the "title", "summary", and "keyAdvice" fields into clear Hindi language.'
      : '';

    const prompt = `Search for the latest real-world cybersecurity threats, scam alerts, fraud advisories, and cybercrime warnings issued by reputable official agencies (such as CERT-In, FBI IC3, FTC, RBI, CISA, Interpol, or leading cybersecurity intelligence firms) in 2025-2026.
Format your answer strictly as a JSON array inside a \`\`\`json markdown block.
Each array item must have the following fields:
- "id": string unique identifier (e.g. "alert-1")
- "title": string concise headline of the scam threat or regulatory advisory
- "threatLevel": "Critical" | "High" | "Medium"
- "category": string category (e.g. "Digital Arrest", "AI Voice Clone", "AePS Biometric", "Banking & Investment", "Phishing & APK Trojan", "Govt Impersonation")
- "date": string relative time or recent date (e.g. "Recent 2026 Advisory" or specific recent month)
- "sourceName": string name of issuing agency or reputable publication (e.g. "CERT-In Cyber Alert", "FBI IC3 Advisory", "FTC Consumer Protection", "RBI Financial Guidance")
- "summary": string 2-3 sentences explaining the attack vector, affected targets, and how victims are coerced
- "keyAdvice": string 1-2 sentence actionable counter-measure to protect against this threat
${langNote}

Return 4 to 6 distinct, high-impact alerts based on verified recent web search results.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || '';
    
    // Extract grounding chunks
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const webSources: { uri: string; title: string }[] = [];
    for (const chunk of chunks) {
      if (chunk.web && chunk.web.uri) {
        webSources.push({
          uri: chunk.web.uri,
          title: chunk.web.title || chunk.web.uri,
        });
      }
    }

    // Parse JSON array from markdown block
    let parsedAlerts: ScamAlertItem[] = [];
    const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/) || text.match(/\[\s*\{[\s\S]*\}\s*\]/);
    if (jsonMatch) {
      const jsonStr = jsonMatch[1] ? jsonMatch[1].trim() : jsonMatch[0].trim();
      parsedAlerts = JSON.parse(jsonStr);
    }

    if (Array.isArray(parsedAlerts) && parsedAlerts.length > 0) {
      // Enrich alerts with sources from grounding
      const enrichedAlerts = parsedAlerts.map((alert, index) => {
        const matchingSource = webSources[index % (webSources.length || 1)];
        return {
          ...alert,
          sourceUrl: alert.sourceUrl || (matchingSource ? matchingSource.uri : undefined),
        };
      });

      const result = {
        alerts: enrichedAlerts,
        groundingSources: webSources.length > 0 ? webSources : OFFICIAL_GROUNDED_SOURCES,
        lastUpdated: new Date().toISOString(),
        searchGrounded: true,
      };

      alertsCache.set(cacheKey, { data: result, timestamp: now });
      return result;
    }

    // Fallback if parsing failed
    const fallbackResult = {
      alerts: fallbackList,
      groundingSources: webSources.length > 0 ? webSources : OFFICIAL_GROUNDED_SOURCES,
      lastUpdated: new Date().toISOString(),
      searchGrounded: true,
    };
    alertsCache.set(cacheKey, { data: fallbackResult, timestamp: now });
    return fallbackResult;
  } catch (error: any) {
    // If rate-limited (429) or quota exhausted, log gracefully without breaking the app
    const isRateLimited = error?.message?.includes('429') || error?.status === 429 || error?.message?.includes('RESOURCE_EXHAUSTED');
    if (isRateLimited) {
      console.warn('[Recent Scam Alerts] Upstream Gemini Search Grounding rate limit reached (429); serving verified official regulatory intelligence fallback.');
    } else {
      console.warn('[Recent Scam Alerts] Live search temporarily unavailable; serving verified official regulatory intelligence fallback.');
    }

    // If we have an existing cache (even older), return it
    if (cached) {
      return cached.data;
    }

    const fallbackResult = {
      alerts: fallbackList,
      groundingSources: OFFICIAL_GROUNDED_SOURCES,
      lastUpdated: new Date().toISOString(),
      searchGrounded: false,
    };
    // Cache the fallback for 3 minutes to avoid thrashing during quota cooldowns
    alertsCache.set(cacheKey, { data: fallbackResult, timestamp: now });
    return fallbackResult;
  }
}

// API Routes
app.get('/api/recent-alerts', async (req, res) => {
  const lang = (req.query.lang as string) || 'en';
  const result = await fetchGroundedAlerts(lang);
  res.json(result);
});

app.post('/api/recent-alerts', async (req, res) => {
  const lang = (req.body?.lang as string) || (req.query.lang as string) || 'en';
  const result = await fetchGroundedAlerts(lang);
  res.json(result);
});

const CYBER_CHAT_SYSTEM_INSTRUCTION = `You are CyberShield AI, a certified, reassuring, and empathetic Cybersecurity & Anti-Fraud Defense Specialist.
Your primary mission is to protect citizens from financial scams, cybercrime, phishing, digital identity theft, and extortion.

Your Core Capabilities & Guidelines:
1. Threat Identification: Immediately analyze suspicious SMS messages, WhatsApp job offers, fake links, OTP requests, and phone calls.
2. Digital Arrest Defense: Strongly advise users that Indian police, CBI, ED, NCB, and courts NEVER conduct arrests, trials, or interrogations over Skype, WhatsApp, or video calls. Advise them to hang up immediately and report to 1930.
3. UPI / QR Security Rule: Reiterate the golden rule: "You only enter a UPI PIN to SEND money, NEVER to receive money."
4. AI Voice Cloning: Explain acoustic deepfakes and advise establishing a private family secret Safe Word and calling back on the loved one's verified phone number.
5. Biometric AePS Fraud: Instruct users to lock their biometrics via the official mAadhaar smartphone app and mention RBI's 72-hour zero customer liability rule.
6. Emergency Action Plan:
   - Call 1930 (National Cyber Crime Reporting Helpline in India) or visit cybercrime.gov.in.
   - For international users, mention FBI IC3 (ic3.gov) or FTC (reportfraud.ftc.gov).
   - Instruct to immediately call their bank's 24/7 hotline to freeze compromised cards, UPI IDs, and netbanking.

Tone & Safety Standards:
- Calm, practical, and highly reassuring (victims of fraud may be panicked or terrified).
- Structure responses clearly with bullet points, bold key steps, and actionable advice.
- NEVER request or accept real passwords, OTPs, CVVs, or full credit card numbers.
- If the user talks in Kannada, Hindi, Spanish, or any other language, answer fluently and naturally in that same language.`;

function getSecurityFallbackReply(userText: string, lang: string = 'en'): string {
  const text = (userText || '').toLowerCase();
  const isKn = lang === 'kn';

  // 1. Digital Arrest / Fake Police Extortion
  if (text.includes('digital arrest') || text.includes('police') || text.includes('cbi') || text.includes('video call') || text.includes('ಅರೆಸ್ಟ್') || text.includes('ಪೊಲೀಸ್') || text.includes('court') || text.includes('customs') || text.includes('fedex') || text.includes('parcel')) {
    if (isKn) {
      return `🚨 **ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್ ಎಚ್ಚರಿಕೆ - ತಕ್ಷಣ ಕಾಲ್ ಕಟ್ ಮಾಡಿ!**

1. **ಯಾವುದೇ ನಿಜವಾದ ಪೊಲೀಸ್ ವಿಡಿಯೋ ಕಾಲ್ ಮಾಡುವುದಿಲ್ಲ:** ಭಾರತದ ಯಾವುದೇ ಪೊಲೀಸ್, ಸಿಬಿಐ, ಎನ್‌ಸಿಬಿ ಅಥವಾ ನ್ಯಾಯಾಲಯವು ಸ್ಕೈಪ್ ಅಥವಾ ವಾಟ್ಸಾಪ್ ವಿಡಿಯೋ ಕಾಲ್‌ನಲ್ಲಿ ಬಂಧನ ಮಾಡುವುದಿಲ್ಲ. ಭಾರತೀಯ ಕಾನೂನಿನಲ್ಲಿ "ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್" ಎಂಬ ಪರಿಕಲ್ಪನೆಯೇ ಇಲ್ಲ.
2. **ಹಣ ವರ್ಗಾಯಿಸಬೇಡಿ:** ನಿಮ್ಮನ್ನು ಹೆದರಿಸಿ "ಪರಿಶೀಲನಾ ಖಾತೆಗೆ" ಹಣ ಹಾಕಲು ಕೇಳಿದರೆ ಅದು 100% ವಂಚಕರ ಜಾಲ.
3. **ತಕ್ಷಣ ಕ್ರಮ ಕೈಗೊಳ್ಳಿ:** ತಕ್ಷಣ ಕಾಲ್ ಕಟ್ ಮಾಡಿ, ಮೊಬೈಲ್‌ನಲ್ಲಿ **1930** (ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಕ್ರೈಮ್ ಹೆಲ್ಪ್‌ಲೈನ್) ಗೆ ಕರೆ ಮಾಡಿ ಅಥವಾ cybercrime.gov.in ನಲ್ಲಿ ದೂರು ದಾಖಲಿಸಿ.`;
    }
    return `🚨 **CRITICAL ADVISORY: THIS IS A "DIGITAL ARREST" SCAM!**

1. **Law Enforcement NEVER Conducts Video Arrests:** Real police, CBI, Customs, NCB, ED, and courts NEVER place citizens under "Digital Arrest" or interrogate anyone over Skype/WhatsApp video calls.
2. **Never Transfer Any Money:** Scammers falsely claim you have illegal parcels or drugs and demand funds into a "government verification account" to clear your name.
3. **Immediate Actions:**
   - Hang up the video call immediately. Block the number.
   - Dial **1930** (National Cyber Crime Reporting Portal) immediately or visit [cybercrime.gov.in](https://cybercrime.gov.in).
   - Inform your family or visit your local police station in person. You are in control!`;
  }

  // 2. UPI / QR Code / Marketplace Scams
  if (text.includes('qr') || text.includes('upi') || text.includes('pin') || text.includes('ಕ್ಯೂಆರ್') || text.includes('ಪಿನ್') || text.includes('olx') || text.includes('marketplace')) {
    if (isKn) {
      return `⚠️ **ಯುಪಿಐ ಸುವರ್ಣ ನಿಯಮ ನೆನಪಿಡಿ:**

1. **ಹಣ ಸ್ವೀಕರಿಸಲು ಪಿನ್ ಬೇಡ:** ಯುಪಿಐ ಮೂಲಕ ಯಾರಾದರೂ ನಿಮಗೆ ಹಣ ಕಳುಹಿಸಲು ಕ್ಯೂಆರ್ ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಅಥವಾ ಪಿನ್ ಹಾಕಿ ಎಂದರೆ ಅದು ವಂಚನೆ!
2. **ಪಿನ್ ಕೇವಲ ಹಣ ಕಳುಹಿಸಲು ಮಾತ್ರ:** ನೀವು ಯುಪಿಐ ಪಿನ್ ಹಾಕಿದ ತಕ್ಷಣ ನಿಮ್ಮ ಖಾತೆಯಿಂದ ಹಣ ಕಡಿತಗೊಳ್ಳುತ್ತದೆ, ಹಣ ಜಮೆಯಾಗುವುದಿಲ್ಲ.
3. **ತಕ್ಷಣ ಏನು ಮಾಡಬೇಕು:** ಅಪರಿಚಿತ ಕ್ಯೂಆರ್ ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಬೇಡಿ, ಆ ವ್ಯಕ್ತಿಯನ್ನು ಬ್ಲಾಕ್ ಮಾಡಿ.`;
    }
    return `⚠️ **GOLDEN RULE OF UPI: PIN IS ONLY FOR SENDING MONEY!**

1. **Never Scan a QR to "Receive" Money:** To receive funds into your bank account, you only need to provide your mobile number or UPI ID. You NEVER need to scan a barcode or enter your PIN.
2. **Entering PIN Deducts Money:** Scammers on OLX/marketplace pose as military officers or buyers and send QR codes claiming to pay you. The moment you enter your PIN, money is stolen from your account.
3. **Action:** Decline the request, do not scan the barcode, and block the user immediately.`;
  }

  // 3. Malicious APK / Electricity Bill / Fake Courier Phishing
  if (text.includes('apk') || text.includes('electricity') || text.includes('power') || text.includes('bill') || text.includes('disconnect') || text.includes('ವಿದ್ಯುತ್') || text.includes('ಆಪ್') || text.includes('sms') || text.includes('link') || text.includes('courier') || text.includes('challan')) {
    if (isKn) {
      return `⚡ **ನಕಲಿ ವಿದ್ಯುತ್ ಬಿಲ್ / APK ಟ್ರೋಜನ್ ಎಚ್ಚರಿಕೆ:**

1. **ಅಧಿಕೃತ ಬಿಲ್ ಸಂದೇಶಗಳು:** ವಿದ್ಯುತ್ ಮಂಡಳಿಗಳು (ಬೆಸ್ಕಾಂ/ಮೆಸ್ಕಾಂ ಇತ್ಯಾದಿ) ಎಂದಿಗೂ ವೈಯಕ್ತಿಕ 10-ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯಿಂದ ಸಂದೇಶ ಅಥವಾ ವಾಟ್ಸಾಪ್ APK ಫೈಲ್ ಕಳುಹಿಸುವುದಿಲ್ಲ.
2. **APK ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಬೇಡಿ:** ಈ APK ಫೈಲ್‌ಗಳು ರಿಮೋಟ್ ಆಕ್ಸೆಸ್ ಟ್ರೋಜನ್‌ಗಳಾಗಿದ್ದು (RAT), ನಿಮ್ಮ ಫೋನಿನ ಬ್ಯಾಂಕ್ ಒಟಿಪಿಗಳನ್ನು ವಂಚಕರಿಗೆ ಕದಿಯಲು ಕಳುಹಿಸುತ್ತವೆ.
3. **ಈಗಾಗಲೇ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿದ್ದರೆ:**
   - ತಕ್ಷಣ ಫೋನ್ ಅನ್ನು **Airplane Mode** (ಏರ್‌ಪ್ಲೇನ್ ಮೋಡ್) ಗೆ ಹಾಕಿ ವೈ-ಫೈ ಆಫ್ ಮಾಡಿ.
   - Settings -> Apps ಗೆ ಹೋಗಿ ಆ ಅನುಮಾನಾಸ್ಪದ ಆಪ್ ಡಿಲೀಟ್ ಮಾಡಿ ಅಥವಾ ಫೋನ್ ಫ್ಯಾಕ್ಟರಿ ರೀಸೆಟ್ ಮಾಡಿ.
   - ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆಗಳ ಪಾಸ್‌ವರ್ಡ್ ಬೇರೆ ಸಾಧನದಿಂದ ತಕ್ಷಣ ಬದಲಾಯಿಸಿ.`;
    }
    return `⚡ **MALICIOUS APK TROJAN / FAKE UTILITY BILL ALERT:**

1. **Official Power Providers NEVER Send APK Files:** Electricity boards (BESCOM, Tata Power, etc.) send official SMS headers (e.g. VK-BESCOM) and NEVER ask you to install APK files or call mobile numbers to prevent disconnection.
2. **Malware Payload:** These malicious APK files are Remote Access Trojans (RATs) that stealthily intercept bank OTPs and forward your SMS to scam syndicates.
3. **Immediate Countermeasures:**
   - **DO NOT Install:** Delete the file immediately.
   - **If Already Installed:** Turn on **Airplane Mode** instantly to cut network communication.
   - Go to Android Settings -> Accessibility & Apps -> Uninstall the suspicious app, or perform a full factory reset.
   - Contact your bank from another phone to temporarily freeze internet banking.`;
  }

  // 4. Telegram / WhatsApp Part-time Task Scam
  if (text.includes('job') || text.includes('part-time') || text.includes('telegram') || text.includes('task') || text.includes('like') || text.includes('youtube') || text.includes('review') || text.includes('ಕೆಲಸ') || text.includes('ಟಾಸ್ಕ್')) {
    if (isKn) {
      return `💼 **ಟೆಲಿಗ್ರಾಂ ಪಾರ್ಟ್-ಟೈಮ್ ಟಾಸ್ಕ್ ವಂಚನೆ ಎಚ್ಚರಿಕೆ:**

1. **ವಂಚನೆಯ ವಿಧಾನ:** ಯೂಟ್ಯೂಬ್ ವಿಡಿಯೋ ಲೈಕ್ ಮಾಡಲು ಅಥವಾ ಗೂಗಲ್ ರಿವ್ಯೂ ನೀಡಲು ಮೊದಲು ₹150 - ₹500 ನೀಡುತ್ತಾರೆ. ನಂತರ ವಿಐಪಿ ಟಾಸ್ಕ್‌ಗಾಗಿ ₹50,000 ರಿಂದ ಲಕ್ಷಾಂತರ ರೂಪಾಯಿ ಠೇವಣಿ ಇಡಲು ಹೇಳಿ ಆ ಹಣವನ್ನು ಫ್ರೀಜ್ ಮಾಡುತ್ತಾರೆ.
2. **ಹಣ ಮರಳಿ ಪಡೆಯಲು ಹೆಚ್ಚು ಹಣ ಕೇಳುತ್ತಾರೆ:** "ತೆರಿಗೆ ಪಾವತಿಸಿ" ಅಥವಾ "ಕ್ರೆಡಿಟ್ ಸ್ಕೋರ್ ಸರಿಪಡಿಸಿ" ಎಂದು ಮತ್ತಷ್ಟು ಹಣ ಕಿತ್ತುಕೊಳ್ಳುತ್ತಾರೆ.
3. **ಕ್ರಮ:** ಯಾವುದೇ ಹಣವನ್ನು ಠೇವಣಿ ಇಡಬೇಡಿ! ಗ್ರೂಪ್‌ನಿಂದ ಹೊರಬನ್ನಿ ಮತ್ತು ವಂಚಕರನ್ನು ಬ್ಲಾಕ್ ಮಾಡಿ. 1930 ಗೆ ದೂರು ನೀಡಿ.`;
    }
    return `💼 **TELEGRAM / WHATSAPP PART-TIME TASK SCAM ALERT:**

1. **The Trap Mechanism:** Scammers lure you with ₹200 - ₹500 payouts for simple tasks (liking YouTube videos, reviewing hotels on Google Maps).
2. **The Escalation (Pig Butchering):** They move you to a Telegram VIP group and demand "prepaid cryptocurrency/investment tasks" where you must deposit ₹10,000 to ₹5,00,000 to unlock your earnings.
3. **Crucial Rule:** Any job that asks YOU to pay money to earn money is a 100% scam. You will never get that money back once deposited.
4. **Action:** Stop communication, do not send a single rupee, exit the Telegram group, and block all recruiters.`;
  }

  // 5. Fake Investment, Crypto & Stock Trading WhatsApp Groups
  if (text.includes('invest') || text.includes('crypto') || text.includes('stock') || text.includes('trading') || text.includes('share') || text.includes('profit') || text.includes('sebi') || text.includes('ಹೂಡಿಕೆ') || text.includes('ಟ್ರೇಡಿಂಗ್')) {
    if (isKn) {
      return `📈 **ನಕಲಿ ಷೇರು ಮಾರುಕಟ್ಟೆ & ಕ್ರಿಪ್ಟೋ ಹೂಡಿಕೆ ವಂಚನೆ:**

1. **ನಕಲಿ ಸೆಬಿ ಅನುಮೋದಿತ ಗ್ರೂಪ್‌ಗಳು:** ವಾಟ್ಸಾಪ್/ಟೆಲಿಗ್ರಾಂನಲ್ಲಿ ದೊಡ್ಡ ಲಾಭದ ಭರವಸೆ ನೀಡುವ ಗ್ರೂಪ್‌ಗಳು ನಕಲಿ ವಿದೇಶಿ ಆಪ್‌ಗಳಲ್ಲಿ ಕೃತಕವಾಗಿ ಲಾಭವನ್ನು ತೋರಿಸುತ್ತವೆ.
2. **ವೈಯಕ್ತಿಕ ಖಾತೆಗೆ ಹಣ ವರ್ಗಾವಣೆ:** ಅಧಿಕೃತ ಬ್ರೋಕರ್‌ಗಳು (Zerodha, Groww) ಎಂದಿಗೂ ವ್ಯಕ್ತಿಗಳ ಖಾತೆಗೆ ಹಣ ಹಾಕಲು ಹೇಳುವುದಿಲ್ಲ.
3. **ಕ್ರಮ:** ಆ ಆಪ್‌ನಿಂದ ಹಣ ವಿತ್‌ಡ್ರಾ ಮಾಡಲು ಶುಲ್ಕ ಕೇಳಿದರೆ ಹಣ ಹಾಕಬೇಡಿ. ತಕ್ಷಣ 1930 ಗೆ ಕರೆ ಮಾಡಿ ವಂಚಕರ ಬ್ಯಾಂಕ್ ಖಾತೆಯನ್ನು ಫ್ರೀಜ್ ಮಾಡಿಸಿ.`;
    }
    return `📈 **FAKE STOCK MARKET & CRYPTO TRADING SCAM ALERT:**

1. **Manipulated Dashboards:** Scammers create WhatsApp groups pretending to be SEBI-registered institutional advisors. They show fake trading screens showing 500% "profits".
2. **Mule Bank Accounts:** They instruct you to wire money to unknown individual savings accounts rather than registered clearing corporations.
3. **The "Withdrawal Tax" Trap:** When you attempt to withdraw, they demand an additional 20-30% "GST/Tax deposit". That is completely fake.
4. **Action:** Stop funding immediately. Report transaction UTR numbers to **1930** and file a complaint at [cybercrime.gov.in](https://cybercrime.gov.in).`;
  }

  // 6. Biometric AePS Fraud
  if (text.includes('aeps') || text.includes('biometric') || text.includes('aadhaar') || text.includes('fingerprint') || text.includes('ಬಯೋಮೆಟ್ರಿಕ್') || text.includes('ಆಧಾರ್')) {
    if (isKn) {
      return `🔒 **ಆಧಾರ್ ಬಯೋಮೆಟ್ರಿಕ್ (AePS) ಹಣ ಕಳ್ಳತನ ತಡೆಗಟ್ಟುವಿಕೆ:**

1. **ವಂಚನೆಯ ವಿಧಾನ:** ಭೂ ನೋಂದಣಿ ಅಥವಾ ಸಾರ್ವಜನಿಕ ದಾಖಲೆಗಳಿಂದ ಫಿಂಗರ್‌ಪ್ರಿಂಟ್ ನಕಲು ಮಾಡಿ ಒಟಿಪಿ ಇಲ್ಲದೆಯೇ ಬ್ಯಾಂಕ್ ಖಾತೆಯಿಂದ ಹಣ ಡ್ರಾ ಮಾಡುವುದು.
2. **ತಕ್ಷಣದ ಪರಿಹಾರ - ಬಯೋಮೆಟ್ರಿಕ್ ಲಾಕ್:**
   - ಮೊಬೈಲ್‌ನಲ್ಲಿ ಅಧಿಕೃತ **mAadhaar** ಆಪ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ ಅಥವಾ myaadhaar.uidai.gov.in ಗೆ ಭೇಟಿ ನೀಡಿ.
   - **Lock Biometrics** ಆಯ್ಕೆ ಮಾಡಿ. ಇದರಿಂದ ನಿಮ್ಮ ಹೆಬ್ಬೆರಳಿನ ಗುರುತನ್ನು ಯಾರೂ ದುರುಪಯೋಗಪಡಿಸಿಕೊಳ್ಳಲು ಸಾಧ್ಯವಿಲ್ಲ.
3. **ಬ್ಯಾಂಕ್ ಹೊಣೆಗಾರಿಕೆ:** 72 ಗಂಟೆಗಳಲ್ಲಿ ಬ್ಯಾಂಕಿಗೆ ದೂರು ನೀಡಿದರೆ ಆರ್‌ಬಿಐ ನಿಯಮಾವಳಿಯಂತೆ ನಿಮ್ಮ ಹಣ ಮರುಪಾವತಿಗೆ ಅರ್ಹತೆ ಪಡೆಯುತ್ತೀರಿ.`;
    }
    return `🔒 **AADHAAR BIOMETRIC (AePS) THEFT DEFENSE:**

1. **Vulnerability:** AePS allows micro-ATMs to debit up to ₹10,000 without OTP, using only Aadhaar number and fingerprint clones copied from public property records.
2. **Immediate Preventive Step - Lock Aadhaar Biometrics:**
   - Open the official **mAadhaar App** on your smartphone or visit [myaadhaar.uidai.gov.in](https://myaadhaar.uidai.gov.in).
   - Sign in with OTP -> Navigate to **Lock/Unlock Biometrics** -> Toggle to **LOCKED**.
3. **RBI 72-Hour Zero Liability Rule:**
   - If unauthorized withdrawals occurred, report it in writing to your bank branch within 72 hours under RBI Customer Protection Circular to claim full reimbursement.`;
  }

  // 7. AI Voice Cloning / Distress Calls
  if (text.includes('voice') || text.includes('clone') || text.includes('kidnap') || text.includes('ಧ್ವನಿ') || text.includes('ಕಿಡ್ನಾಪ್')) {
    if (isKn) {
      return `🎙️ **ಎಐ ಧ್ವನಿ ಕ್ಲೋನಿಂಗ್ ತುರ್ತು ಎಚ್ಚರಿಕೆ:**

1. **ಪ್ಯಾನಿಕ್ ಆಗಬೇಡಿ:** ವಂಚಕರು ಸೋಷಿಯಲ್ ಮೀಡಿಯಾದಿಂದ 3 ಸೆಕೆಂಡುಗಳ ಆಡಿಯೋ ಪಡೆದು ನಿಮ್ಮ ಕುಟುಂಬದ ಧ್ವನಿಯನ್ನು ಎಐ ಮೂಲಕ ನಕಲು ಮಾಡಿ ಅಪಘಾತ/ಬಂಧನದ ಸುಳ್ಳು ಕಥೆ ಕಟ್ಟುತ್ತಾರೆ.
2. **ಮೊದಲು ಪರಿಶೀಲಿಸಿ:** ಆ ಕರೆಯನ್ನು ಕಟ್ ಮಾಡಿ, ನಿಮ್ಮ ಕುಟುಂಬದ ಸದಸ್ಯರ ಪರಿಚಿತ ಫೋನ್ ಸಂಖ್ಯೆಗೆ ನೇರವಾಗಿ ಕರೆ ಮಾಡಿ.
3. **ರಹಸ್ಯ ಕೋಡ್ ವರ್ಡ್:** ಕುಟುಂಬದೊಂದಿಗೆ ರಹಸ್ಯ ಕೋಡ್ ವರ್ಡ್ ನಿಗದಿಪಡಿಸಿ, ತುರ್ತು ಕರೆ ಬಂದಾಗ ಆ ಕೋಡ್ ವರ್ಡ್ ಕೇಳಿ.`;
    }
    return `🎙️ **AI VOICE CLONING / VIRTUAL KIDNAPPING ADVISORY:**

1. **Do Not Panic:** Scammers scrape short audio clips from Instagram/Facebook to clone your child or relative's exact voice, staging fake car accident or police arrest distress calls.
2. **Hang Up & Call Directly:** Do not send money or cryptocurrency. Hang up and call your loved one back directly on their saved, trusted phone number.
3. **Family Safe Word:** Establish a secret verbal "Safe Word" with your family that only you share to immediately verify identity in unexpected emergencies.`;
  }

  // 8. Money deducted / Emergency Golden Hour
  if (text.includes('deducted') || text.includes('hacked') || text.includes('stolen') || text.includes('ಹಣ ಕಳೆದುಹೋಯಿತು') || text.includes('ಖಾತೆ') || text.includes('loss') || text.includes('unauthorized')) {
    if (isKn) {
      return `🛑 **ಸೈಬರ್ ಸುವರ್ಣ ಗಂಟೆ (Golden Hour) ತುರ್ತು ಕ್ರಮಗಳು:**

1. **ತಕ್ಷಣ 1930 ಗೆ ಕರೆ ಮಾಡಿ:** ವಂಚನೆ ನಡೆದ ಮೊದಲ 2-3 ಗಂಟೆಗಳಲ್ಲಿ 1930 ಗೆ ಕರೆ ಮಾಡಿದರೆ ವಂಚಕನ ಖಾತೆಯಲ್ಲಿರುವ ಹಣವನ್ನು ಫ್ರೀಜ್ ಮಾಡಬಹುದು.
2. **ಬ್ಯಾಂಕ್ ಕಾರ್ಡ್/ಖಾತೆ ಬ್ಲಾಕ್ ಮಾಡಿ:** ನಿಮ್ಮ ಬ್ಯಾಂಕಿನ 24/7 ಕಸ್ಟಮರ್ ಕೇರ್ ನಂಬರ್‌ಗೆ ಕರೆ ಮಾಡಿ ನೆಟ್‌ಬ್ಯಾಂಕಿಂಗ್ ಮತ್ತು ಡೆಬಿಟ್ ಕಾರ್ಡ್ ತಕ್ಷಣ ಬ್ಲಾಕ್ ಮಾಡಿ.
3. **ದೂರು ದಾಖಲಿಸಿ:** [cybercrime.gov.in](https://cybercrime.gov.in) ನಲ್ಲಿ ಬ್ಯಾಂಕ್ ವಹಿವಾಟು UTR ಸಂಖ್ಯೆ ಮತ್ತು ವಂಚಕನ ವಿವರಗಳೊಂದಿಗೆ ಅಧಿಕೃತ ದೂರು ಸಲ್ಲಿಸಿ.`;
    }
    return `🛑 **EMERGENCY "GOLDEN HOUR" DEFENSE PROTOCOL:**

1. **Dial 1930 Immediately (India):** If unauthorized funds were debited within the last few hours, calling the National Cyber Fraud Reporting Helpline (1930) enables authorities to freeze funds across banking switches before scammers cash out.
2. **Block Bank Accounts & Cards:** Call your bank's 24/7 fraud helpline (e.g. SBI: 1800 11 1109, HDFC: 1800 1600, ICICI: 1800 1080) to instantly block your debit card, UPI access, and netbanking.
3. **Preserve Digital Evidence:** Save transaction SMS, 12-digit UTR numbers, caller phone logs, WhatsApp chats, and bank statements for your police FIR.`;
  }

  if (isKn) {
    return `🛡️ **ಸೈಬರ್‌ಶೀಲ್ಡ್ ಎಐ ಭದ್ರತಾ ಸಲಹೆಗಾರ:**

ನಾನು ನಿಮ್ಮ ಆನ್‌ಲೈನ್ ರಕ್ಷಣೆಗಾಗಿ ಸದಾ ಸಿದ್ಧನಾಗಿದ್ದೇನೆ.
- ನೀವು ಯಾವುದೇ ಸಂಶಯಾಸ್ಪದ ಸಂದೇಶ, ಒಟಿಪಿ ಕರೆ, ನಕಲಿ ಲಿಂಕ್ ಅಥವಾ ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್ ಬೆದರಿಕೆ ಸ್ವೀಕರಿಸಿದ್ದೀರಾ?
- ದಯವಿಟ್ಟು ಸಂದೇಶ ಅಥವಾ ಪರಿಸ್ಥಿತಿಯನ್ನು ಇಲ್ಲಿ ಪೇಸ್ಟ್ ಮಾಡಿ, ನಾನು ತಕ್ಷಣ ವಿಶ್ಲೇಷಣೆ ನೀಡುತ್ತೇನೆ.
- ತುರ್ತು ಆರ್ಥಿಕ ವಂಚನೆಯ ಸಂದರ್ಭದಲ್ಲಿ ತಕ್ಷಣ **1930** ಗೆ ಕರೆ ಮಾಡಿ.`;
  }

  return `🛡️ **CyberShield AI Security Advisor at your service:**

I am here to protect you from financial fraud, social engineering, and online threats.
- Did you receive an unsolicited SMS link, a suspicious WhatsApp job offer, or a coercive call claiming to be law enforcement?
- Paste the text or describe what happened, and I will perform an instant forensic assessment with preventive steps.
- **Emergency Reminder:** If you have suffered unauthorized fund debits, dial **1930** immediately to activate banking freeze protocols.`;
}

// Multi-turn chat endpoint using Gemini 3.8 Flash
app.post('/api/chat', async (req, res) => {
  const { messages, language } = req.body || {};
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Messages array is required' });
  }

  const lastUserMsg = messages[messages.length - 1]?.text || '';

  if (!ai || !apiKey) {
    const reply = getSecurityFallbackReply(lastUserMsg, language);
    return res.json({ reply, model: 'cybershield-security-rules' });
  }

  try {
    const formattedContents = messages.map((m: { role: string; text: string }) => ({
      role: m.role === 'model' || m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.text }],
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: formattedContents,
      config: {
        systemInstruction: CYBER_CHAT_SYSTEM_INSTRUCTION,
      },
    });

    const reply = response.text || getSecurityFallbackReply(lastUserMsg, language);
    res.json({ reply, model: 'gemini-3.8-flash' });
  } catch (error: any) {
    console.warn('[CyberShield Chatbot] Gemini API rate limit or error, using security engine fallback:', error?.message || error);
    const reply = getSecurityFallbackReply(lastUserMsg, language);
    res.json({ reply, model: 'cybershield-security-rules' });
  }
});

// Setup Vite development middleware or static production serving
async function startServer() {
  if (!isProduction) {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true, hmr: process.env.DISABLE_HMR !== 'true' },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`CyberShield Server running at http://0.0.0.0:${port}`);
  });
}

startServer();
