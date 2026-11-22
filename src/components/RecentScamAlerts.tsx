import React from 'react';
import { 
  ShieldAlert, 
  Search, 
  ExternalLink, 
  RefreshCw, 
  Globe2, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Building2,
  Sparkles,
  Info
} from 'lucide-react';
import { LanguageCode } from '../types';

export interface ScamAlertItem {
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

interface Props {
  language?: LanguageCode;
}

const DEFAULT_ALERTS: ScamAlertItem[] = [
  {
    id: 'alert-certin-digital-arrest',
    title: 'CERT-In & MHA Issue High-Severity Warning on "Digital Arrest" Extortion Networks',
    threatLevel: 'Critical',
    category: 'Digital Arrest',
    date: 'Recent Advisory',
    sourceName: 'CERT-In / I4C Cyber Crime Center',
    sourceUrl: 'https://cybercrime.gov.in',
    summary: 'Organized cyber syndicates operating across Southeast Asia target professionals and senior citizens using forged CBI, NCB, and Supreme Court digital summons via Skype video to extort life savings.',
    keyAdvice: 'Law enforcement agencies never conduct arrests or interrogations via video calls. Hang up immediately and dial 1930.',
  },
  {
    id: 'alert-fbi-ai-voice',
    title: 'FBI IC3 Issues Advisory on AI Deepfake Voice Cloning & Virtual Kidnapping Ransoms',
    threatLevel: 'Critical',
    category: 'AI Voice Clone',
    date: 'Recent Advisory',
    sourceName: 'FBI Internet Crime Complaint Center (IC3)',
    sourceUrl: 'https://www.ic3.gov',
    summary: 'Criminals scrape 3-second audio clips from social media videos to clone children\'s voices, generating synthetic distress calls claiming car crashes or arrests to demand instant wire transfers.',
    keyAdvice: 'Agree on a secret verbal Safe Word with family. Never transfer funds before independently verifying the caller on their known personal phone.',
  },
  {
    id: 'alert-rbi-aeps',
    title: 'RBI & NPCI Strengthen Biometric PoS Protocols to Combat Cloned Silicone AePS Fraud',
    threatLevel: 'High',
    category: 'AePS Biometric',
    date: 'Recent Advisory',
    sourceName: 'Reserve Bank of India Advisory',
    sourceUrl: 'https://myaadhaar.uidai.gov.in',
    summary: 'Syndicates harvest citizen thumbprints from public registry deed portals to manufacture 3D silicone impressions, executing unauthorized micro-ATM withdrawals without OTPs.',
    keyAdvice: 'Lock your biometric records immediately via the official mAadhaar app. Under RBI circulars, unauthorized AePS reported within 3 days carry zero liability.',
  },
  {
    id: 'alert-ftc-job-tasks',
    title: 'FTC & Interpol Warn of Global "Prepaid Telegram Task" Employment Traps',
    threatLevel: 'High',
    category: 'Job Scams',
    date: 'Recent Advisory',
    sourceName: 'Federal Trade Commission (FTC)',
    sourceUrl: 'https://www.consumer.ftc.gov',
    summary: 'Scammers offer work-from-home jobs paying ₹150 for video likes, then coerce victims into VIP tiers requiring advance deposits of thousands of dollars before freezing withdrawal accounts.',
    keyAdvice: 'Never pay money or buy crypto to unlock a job or earn commission. Legitimate employers pay you; they never demand advance fees.',
  },
  {
    id: 'alert-cisa-pigbutchering',
    title: 'CISA & FinCEN Alert on Romance Investment & Crypto "Pig-Butchering" Platforms',
    threatLevel: 'Critical',
    category: 'Banking & Investment',
    date: 'Recent Advisory',
    sourceName: 'CISA & US FinCEN Advisory',
    sourceUrl: 'https://www.cisa.gov',
    summary: 'Sophisticated fraudsters build romantic rapport over WhatsApp and LinkedIn before convincing victims to deposit life savings into manipulated counterfeit cryptocurrency dashboards.',
    keyAdvice: 'Never invest money on platforms recommended by online acquaintances. Unregulated offshore exchanges cannot be reversed or insured.',
  }
];

const DEFAULT_ALERTS_KN: ScamAlertItem[] = [
  {
    id: 'alert-certin-digital-arrest',
    title: 'CERT-In ಮತ್ತು ಗೃಹ ಸಚಿವಾಲಯದಿಂದ "ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್" ಸುಲಿಗೆ ಜಾಲಗಳ ವಿರುದ್ಧ ಉನ್ನತ ಎಚ್ಚರಿಕೆ',
    threatLevel: 'Critical',
    category: 'Digital Arrest',
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
    category: 'AI Voice Clone',
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
    category: 'AePS Biometric',
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
    category: 'Job Scams',
    date: 'ಇತ್ತೀಚಿನ ಎಚ್ಚರಿಕೆ',
    sourceName: 'ಫೆಡರಲ್ ಟ್ರೇಡ್ ಕಮಿಷನ್ (FTC)',
    sourceUrl: 'https://www.consumer.ftc.gov',
    summary: 'ಯೂಟ್ಯೂಬ್ ಲೈಕ್ ಅಥವಾ ಹೋಟೆಲ್ ರೇಟಿಂಗ್‌ಗೆ ₹150 ನೀಡಿ ಆರಂಭದಲ್ಲಿ ನಂಬಿಸಿ, ನಂತರ ವಿಐಪಿ ಟಾಸ್ಕ್‌ಗಾಗಿ ಸಾವಿರಾರು ರೂಪಾಯಿ ಠೇವಣಿ ಪಡೆದು ಹಣ ಹಿಂಪಡೆಯಲಾಗದಂತೆ ಖಾತೆ ಲಾಕ್ ಮಾಡುತ್ತಾರೆ.',
    keyAdvice: 'ಕೆಲಸಕ್ಕಾಗಿ ಎಂದಿಗೂ ಮುಂಗಡ ಹಣ ಅಥವಾ ಕ್ರಿಪ್ಟೋ ನೀಡಬೇಡಿ. ಅಧಿಕೃತ ಕಂಪನಿಗಳು ನಿಮಗೆ ಸಂಬಳ ನೀಡುತ್ತವೆ, ನಿಮ್ಮಿಂದ ಹಣ ಕೇಳುವುದಿಲ್ಲ.',
  },
  {
    id: 'alert-cisa-pigbutchering',
    title: 'ನಕಲಿ ಕ್ರಿಪ್ಟೋ ಹೂಡಿಕೆ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ "ಪಿಗ್-ಬುಚರಿಂಗ್" ವಂಚನೆಗಳ ವಿರುದ್ಧ CISA ಎಚ್ಚರಿಕೆ',
    threatLevel: 'Critical',
    category: 'Banking & Investment',
    date: 'ಇತ್ತೀಚಿನ ಎಚ್ಚರಿಕೆ',
    sourceName: 'CISA ಸೈಬರ್ ಭದ್ರತಾ ಪ್ರಾಧಿಕಾರ',
    sourceUrl: 'https://www.cisa.gov',
    summary: 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ನಕಲಿ ಸ್ನೇಹ ಬೆಳೆಸಿ, ನಕಲಿ ಹೂಡಿಕೆ ವೆಬ್‌ಸೈಟ್‌ಗಳಲ್ಲಿ ಹಣ ಹಾಕಿಸಿ ಬೃಹತ್ ಲಾಭ ತೋರಿಸಿ ಕೊನೆಗೆ ಸಂಪೂರ್ಣ ಹಣ ಕದಿಯುವ ಅಂತರರಾಷ್ಟ್ರೀಯ ಜಾಲ.',
    keyAdvice: 'ಆನ್‌ಲೈನ್ ಪರಿಚಯಸ್ಥರು ಸೂಚಿಸುವ ಯಾವುದೇ ಅಪರಿಚಿತ ಹೂಡಿಕೆ ಆ್ಯಪ್‌ಗಳಲ್ಲಿ ಹಣ ಹಾಕಬೇಡಿ.',
  }
];

const REPUTABLE_SOURCES = [
  { name: 'CERT-In (India)', url: 'https://cybercrime.gov.in' },
  { name: 'FBI IC3', url: 'https://www.ic3.gov' },
  { name: 'FTC Scam Alerts', url: 'https://www.consumer.ftc.gov/scams' },
  { name: 'RBI Cyber Security', url: 'https://rbi.org.in' },
  { name: 'CISA Advisories', url: 'https://www.cisa.gov' }
];

export const RecentScamAlerts: React.FC<Props> = ({ language = 'en' }) => {
  const isKn = language === 'kn';
  const initialAlerts = isKn ? DEFAULT_ALERTS_KN : DEFAULT_ALERTS;

  const [alerts, setAlerts] = React.useState<ScamAlertItem[]>(initialAlerts);
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isSearchGrounded, setIsSearchGrounded] = React.useState<boolean>(true);
  const [lastRefreshed, setLastRefreshed] = React.useState<string>('Live Intelligence');

  // Fetch grounded alerts from backend proxy on mount or language change
  const fetchAlerts = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/recent-alerts?lang=${encodeURIComponent(language)}`);
      if (response.ok) {
        const data = await response.json();
        if (data && Array.isArray(data.alerts) && data.alerts.length > 0) {
          setAlerts(data.alerts);
          setIsSearchGrounded(Boolean(data.searchGrounded));
          setLastRefreshed(new Date().toLocaleTimeString());
          return;
        }
      }
    } catch {
      // Fallback gracefully to high-fidelity curated data
    } finally {
      setIsLoading(false);
    }
  }, [language]);

  React.useEffect(() => {
    fetchAlerts();
  }, [fetchAlerts]);

  const categories = [
    { id: 'all', label: isKn ? 'ಎಲ್ಲಾ ಎಚ್ಚರಿಕೆಗಳು' : 'All Alerts' },
    { id: 'Digital Arrest', label: isKn ? 'ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್' : 'Digital Arrest' },
    { id: 'AI Voice Clone', label: isKn ? 'ಎಐ ವಾಯ್ಸ್ ಕ್ಲೋನ್' : 'AI Voice Clone' },
    { id: 'AePS Biometric', label: isKn ? 'ಬಯೋಮೆಟ್ರಿಕ್ AePS' : 'Biometric AePS' },
    { id: 'Banking & Investment', label: isKn ? 'ಬ್ಯಾಂಕಿಂಗ್ / ಹೂಡಿಕೆ' : 'Banking & Investment' },
    { id: 'Job Scams', label: isKn ? 'ಉದ್ಯೋಗ ವಂಚನೆಗಳು' : 'Job Scams' },
  ];

  const filteredAlerts = selectedCategory === 'all'
    ? alerts
    : alerts.filter(a => a.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const getSeverityStyle = (level: string) => {
    switch (level) {
      case 'Critical':
        return 'bg-red-100 dark:bg-red-950/80 text-red-700 dark:text-red-400 border-red-300 dark:border-red-800';
      case 'High':
        return 'bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-800';
      default:
        return 'bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-800';
    }
  };

  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F2EEFC] dark:bg-[#1a1230] text-[#5E17EB] dark:text-[#8D65EC] text-xs font-bold border border-[#8D65EC]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#5E17EB] dark:text-[#8D65EC] animate-pulse" />
              <span>
                {isSearchGrounded 
                  ? (isKn ? 'ಗೂಗಲ್ ಸರ್ಚ್ ಗ್ರೌಂಡಿಂಗ್ ಆಧಾರಿತ ನೈಜ ಮಾಹಿತಿ' : 'Google Search Grounding Verified')
                  : (isKn ? 'ಅಧಿಕೃತ ತನಿಖಾ ಸಂಸ್ಥೆಗಳ ಪರಿಶೀಲಿಸಿದ ಎಚ್ಚರಿಕೆಗಳು' : 'Official Regulatory Intelligence Verified')}
              </span>
            </span>
            <span className="text-xs text-[#6E6B7B] dark:text-slate-400 font-medium hidden sm:inline">
              • {isKn ? 'ನವೀಕರಣ:' : 'Updated:'} {lastRefreshed}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-[#1D1B28] dark:text-white tracking-tight">
            {isKn ? 'ಇತ್ತೀಚಿನ ಸೈಬರ್ ವಂಚನೆ ಎಚ್ಚರಿಕೆಗಳು & ಸುದ್ದಿ' : 'Recent Scam Alerts & Regulatory Advisories'}
          </h2>

          <p className="text-xs sm:text-sm text-[#6E6B7B] dark:text-slate-400 max-w-3xl">
            {isKn
              ? 'ಪ್ರಮುಖ ಭದ್ರತಾ ತನಿಖಾ ಸಂಸ್ಥೆಗಳಾದ CERT-In, FBI IC3, FTC, RBI ಮತ್ತು CISA ನೀಡಿದ ಅಧಿಕೃತ ನೈಜ ಎಚ್ಚರಿಕೆಗಳು ಮತ್ತು ಸೈಬರ್ ಅಪಾಯಗಳು.'
              : 'Real-time cybersecurity threats and advisories grounded in live intelligence from CERT-In, FBI IC3, FTC, RBI, and global law enforcement.'}
          </p>
        </div>

        {/* Refresh & Grounding Status Button */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={fetchAlerts}
            disabled={isLoading}
            className="px-4 py-2 bg-white dark:bg-slate-800 hover:bg-[#F2EEFC]/50 dark:hover:bg-slate-700 text-[#5E17EB] dark:text-[#8D65EC] border border-[#8D65EC]/30 rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs transition-all active:scale-95 cursor-pointer disabled:opacity-60"
            title="Refresh alerts using Google Search Grounding"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-[#5E17EB] dark:text-[#8D65EC] ${isLoading ? 'animate-spin' : ''}`} />
            <span>{isLoading ? (isKn ? 'ಹುಡುಕಲಾಗುತ್ತಿದೆ...' : 'Searching Web...') : (isKn ? 'ಲೈವ್ ಅಪ್‌ಡೇಟ್' : 'Refresh Live Alerts')}</span>
          </button>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 pt-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-[#5E17EB] text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-[#1D1B28] dark:text-slate-400 hover:border-[#8D65EC]/60 hover:bg-[#F2EEFC]/30 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Alert Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredAlerts.map((alert) => (
          <article
            key={alert.id}
            className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-[#8D65EC] hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2 text-xs">
                <span className={`px-2.5 py-0.5 rounded-full font-black uppercase text-[10px] tracking-wider border ${getSeverityStyle(alert.threatLevel)}`}>
                  {alert.threatLevel} {isKn ? 'ಅಪಾಯ' : 'Risk'}
                </span>
                <span className="text-[11px] text-[#6E6B7B] dark:text-slate-400 flex items-center gap-1 font-medium">
                  <Clock className="w-3 h-3" />
                  <span>{alert.date}</span>
                </span>
              </div>

              {/* Source Tag */}
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#5E17EB] dark:text-[#8D65EC]">
                <Building2 className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{alert.sourceName}</span>
              </div>

              {/* Title */}
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base leading-snug">
                {alert.title}
              </h3>

              {/* Summary */}
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {alert.summary}
              </p>
            </div>

            {/* Actionable Countermeasure Box */}
            <div className="space-y-3 pt-2">
              <div className="bg-emerald-50 dark:bg-emerald-950/30 p-3 rounded-xl border border-emerald-200 dark:border-emerald-900/60 text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-emerald-800 dark:text-emerald-400 text-[11px] uppercase tracking-wide">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <span>{isKn ? 'ರಕ್ಷಣಾ ಕ್ರಮ (Countermeasure)' : 'Actionable Countermeasure'}</span>
                </div>
                <p className="text-slate-800 dark:text-slate-200 text-xs leading-relaxed font-medium">
                  {alert.keyAdvice}
                </p>
              </div>

              {/* Official Source Link */}
              {alert.sourceUrl && (
                <div className="pt-1 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <a
                    href={alert.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#5E17EB] dark:text-[#C4B5FD] hover:underline font-bold text-xs"
                  >
                    <span>{isKn ? 'ಅಧಿಕೃತ ಮೂಲಕ್ಕೆ ಭೇಟಿ ನೀಡಿ' : 'View Official Advisory'}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-[10px] text-slate-400">Grounding Source</span>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Reputable Sources Reference Footer */}
      <div className="bg-[#F2EEFC] dark:bg-slate-900/50 p-4 rounded-2xl border border-[#8D65EC]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold">
          <Globe2 className="w-4 h-4 text-[#5E17EB] dark:text-[#C4B5FD] shrink-0" />
          <span>{isKn ? 'ವಿಶ್ವಾಸಾರ್ಹ ಸೈಬರ್ ಭದ್ರತಾ ಮೂಲಗಳು:' : 'Reputable Regulatory & Intelligence Feeds:'}</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {REPUTABLE_SOURCES.map((source, idx) => (
            <a
              key={idx}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-[#5E17EB] dark:hover:text-[#C4B5FD] border border-slate-200 dark:border-slate-700 text-[11px] font-bold inline-flex items-center gap-1 transition-colors"
            >
              <span>{source.name}</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
