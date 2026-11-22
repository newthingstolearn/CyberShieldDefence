import React from 'react';
import { 
  ShieldAlert, 
  Search, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  HelpCircle, 
  Smartphone, 
  Globe, 
  Receipt, 
  Users, 
  Briefcase, 
  ShoppingBag, 
  TrendingUp, 
  KeyRound, 
  ChevronRight, 
  Info, 
  Lightbulb, 
  Scale, 
  BrainCircuit, 
  Target, 
  Clock 
} from 'lucide-react';
import { SCAM_CATEGORIES } from '../data/scamCategories';
import { ScamCategory, LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { ScamDeepDives } from '../components/ScamDeepDives';
import { LOCALIZED_SCAMS } from '../data/localizedScams';

interface Props {
  language?: LanguageCode;
  onOpenSOS?: () => void;
}

export const ScamAwarenessPage: React.FC<Props> = ({ language = 'en', onOpenSOS }) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;
  const [selectedScamId, setSelectedScamId] = React.useState<string>(SCAM_CATEGORIES[0].id);
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [activeSuspiciousElement, setActiveSuspiciousElement] = React.useState<string | null>(null);

  const isKn = language === 'kn';

  // Localized helper
  const getLocalizedScam = (scam: ScamCategory) => {
    const loc = LOCALIZED_SCAMS[language]?.[scam.id];
    return {
      ...scam,
      title: loc?.title || scam.title,
      shortDesc: loc?.shortDesc || scam.shortDesc,
      severityLabel: loc?.severityLabel || `${scam.severity} Threat Level`,
      psychologicalTrigger: loc?.psychologicalTrigger || scam.psychologicalTrigger,
      targetDemographic: loc?.targetDemographic || scam.targetDemographic,
      howItWorks: loc?.howItWorks || scam.howItWorks,
      redFlags: loc?.redFlags || scam.redFlags,
      preventionTip: loc?.preventionTip || scam.realWorldExample.preventionTip,
      dos: loc?.dos || scam.dosAndDonts.dos,
      donts: loc?.donts || scam.dosAndDonts.donts,
    };
  };

  const filteredCategories = SCAM_CATEGORIES.filter(scam => {
    const loc = getLocalizedScam(scam);
    return (
      loc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.redFlags.some(rf => rf.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (loc.psychologicalTrigger && loc.psychologicalTrigger.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const rawScam = SCAM_CATEGORIES.find(s => s.id === selectedScamId) || SCAM_CATEGORIES[0];
  const currentScam = getLocalizedScam(rawScam);

  const getIcon = (id: string) => {
    switch (id) {
      case 'otp-upi': return <Smartphone className="w-5 h-5" />;
      case 'digital-arrest': return <ShieldAlert className="w-5 h-5 text-red-400" />;
      case 'phishing-websites': return <Globe className="w-5 h-5" />;
      case 'ai-voice-cloning': return <BrainCircuit className="w-5 h-5 text-purple-400" />;
      case 'fake-payment-refund': return <Receipt className="w-5 h-5" />;
      case 'social-media-impersonation': return <Users className="w-5 h-5" />;
      case 'kyc-bank': return <ShieldAlert className="w-5 h-5" />;
      case 'fake-jobs': return <Briefcase className="w-5 h-5" />;
      case 'online-shopping': return <ShoppingBag className="w-5 h-5" />;
      case 'investment-crypto': return <TrendingUp className="w-5 h-5" />;
      case 'aeps-biometric': return <Target className="w-5 h-5 text-amber-400" />;
      case 'password-account': return <KeyRound className="w-5 h-5" />;
      default: return <AlertTriangle className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-8 py-6 sm:py-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-[#19102c] to-slate-900 p-6 sm:p-10 rounded-3xl text-white border border-[#8D65EC]/30 shadow-xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5E17EB]/20 text-[#8D65EC] text-xs font-bold border border-[#8D65EC]/40">
          <ShieldAlert className="w-3.5 h-3.5 text-[#8D65EC]" />
          <span>{SCAM_CATEGORIES.length} Threat Vectors & Forensic Blueprints</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
          {t.navScams}: Threat Encyclopedia & Defense Blueprints
        </h1>
        <p className="text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed">
          Comprehensive forensic breakdown of contemporary fraud operations including Digital Arrests, OTP/UPI scams, AI voice cloning, AePS biometric theft, and fake jobs. Learn the psychological triggers, legal provisions, red flags, and step-by-step counter-measures.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-xl pt-2">
          <Search className="absolute left-3.5 top-5 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-800/90 border border-slate-700 rounded-xl text-white text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#5E17EB] focus:ring-2 focus:ring-[#5E17EB]/30 transition-all"
          />
        </div>
      </div>

      {/* Dedicated Investigative Deep-Dives for Digital Arrest, AI Voice Cloning, and Biometric AePS Theft */}
      <ScamDeepDives language={language} onOpenSOS={onOpenSOS} />

      {/* Main Content: Left Category Navigation + Right Deep Dive */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar: Category List */}
        <div className="lg:col-span-4 space-y-2">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#6E6B7B] dark:text-slate-400 px-1 mb-2">
            <span>{isKn ? 'ವಂಚನೆ ವರ್ಗಗಳು' : 'Threat Categories'}</span>
            <span className="bg-[#F2EEFC] dark:bg-slate-800 text-[#5E17EB] dark:text-[#8D65EC] border border-[#8D65EC]/20 px-2 py-0.5 rounded text-[11px] font-bold">
              {filteredCategories.length}
            </span>
          </div>

          <div className="space-y-1.5 max-h-[750px] overflow-y-auto pr-1">
            {filteredCategories.map((rawItem) => {
              const item = getLocalizedScam(rawItem);
              const isSelected = item.id === currentScam.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedScamId(item.id);
                    setActiveSuspiciousElement(null);
                  }}
                  className={`w-full text-left p-3.5 rounded-2xl transition-all border flex items-center justify-between gap-3 cursor-pointer ${
                    isSelected
                      ? 'bg-[#5E17EB] text-white font-bold border-[#5E17EB] shadow-md shadow-[#5E17EB]/30 scale-[1.01]'
                      : 'bg-white dark:bg-slate-900 text-[#1D1B28] dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-[#8D65EC]/50 hover:bg-[#F2EEFC]/40 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`p-2 rounded-xl shrink-0 ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-[#F2EEFC] dark:bg-slate-800 text-[#5E17EB] dark:text-[#8D65EC]'
                    }`}>
                      {getIcon(item.id)}
                    </div>
                    <div className="truncate">
                      <div className="text-sm font-bold truncate">{item.title}</div>
                      <div className={`text-xs truncate ${isSelected ? 'text-white/80' : 'text-[#6E6B7B] dark:text-slate-400'}`}>
                        {item.severity} • {item.avgLoss}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Deep Dive Column */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          {/* Header */}
          <div className="border-b border-slate-100 dark:border-slate-800 pb-6 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider ${
                currentScam.severity === 'Critical'
                  ? 'bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 border border-red-300 dark:border-red-900'
                  : 'bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 border border-amber-300 dark:border-amber-900'
              }`}>
                {currentScam.severity} Threat Level
              </span>
              <span className="text-xs text-[#6E6B7B] dark:text-slate-400">
                Impact: <strong className="text-[#1D1B28] dark:text-slate-200">{currentScam.victimCountGlobal}</strong>
              </span>
              <span className="text-xs text-[#6E6B7B] dark:text-slate-400">
                Average Loss: <strong className="text-[#1D1B28] dark:text-slate-200">{currentScam.avgLoss}</strong>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-[#F2EEFC] dark:bg-[#1a1230] text-[#5E17EB] dark:text-[#8D65EC] border border-[#8D65EC]/30">
                {getIcon(currentScam.id)}
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1D1B28] dark:text-white">
                {currentScam.title}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#6E6B7B] dark:text-slate-300 leading-relaxed">
              {currentScam.shortDesc}
            </p>

            {/* Forensic Badges (Psychology, Law, Recovery) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              {currentScam.psychologicalTrigger && (
                <div className="bg-[#F2EEFC] dark:bg-[#1a1230]/70 p-3 rounded-xl border border-[#8D65EC]/40 text-xs">
                  <div className="font-bold text-[#5E17EB] dark:text-[#8D65EC] flex items-center gap-1.5 mb-1">
                    <BrainCircuit className="w-3.5 h-3.5" />
                    <span>Psychological Trigger Used:</span>
                  </div>
                  <p className="text-[#1D1B28] dark:text-slate-300 leading-snug">
                    {currentScam.psychologicalTrigger}
                  </p>
                </div>
              )}

              {currentScam.recoveryProbability && (
                <div className="bg-emerald-50 dark:bg-emerald-950/30 p-3 rounded-xl border border-emerald-200 dark:border-emerald-900/50 text-xs">
                  <div className="font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5 mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Financial Recovery Likelihood:</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-snug">
                    {currentScam.recoveryProbability}
                  </p>
                </div>
              )}

              {currentScam.targetDemographic && (
                <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-xl border border-blue-200 dark:border-blue-900/50 text-xs">
                  <div className="font-bold text-blue-700 dark:text-blue-300 flex items-center gap-1.5 mb-1">
                    <Target className="w-3.5 h-3.5" />
                    <span>Primary Target Demographic:</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-snug">
                    {currentScam.targetDemographic}
                  </p>
                </div>
              )}

              {currentScam.legalProvisions && (
                <div className="bg-slate-100 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
                  <div className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 mb-1">
                    <Scale className="w-3.5 h-3.5 text-[#5E17EB]" />
                    <span>Applicable Penal & IT Act Sections:</span>
                  </div>
                  <p className="text-[#6E6B7B] dark:text-slate-400 font-mono text-[11px] leading-snug">
                    {currentScam.legalProvisions}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* How The Scam Works */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#6E6B7B] dark:text-slate-400 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-[#5E17EB]" />
              <span>{t.howItWorksTitle}</span>
            </h3>

            <div className="space-y-2">
              {currentScam.howItWorks.map((step, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-[#1D1B28] dark:text-slate-300 flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-lg bg-[#F2EEFC] text-[#5E17EB] dark:bg-[#1a1230] dark:text-[#8D65EC] border border-[#8D65EC]/30 font-bold flex items-center justify-center shrink-0 text-xs">
                    {idx + 1}
                  </span>
                  <p className="leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Major Red Flags */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-red-500 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" />
              <span>{t.redFlagsTitle}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentScam.redFlags.map((flag, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5"
                >
                  <span className="text-red-500 font-bold shrink-0 text-sm">⚠️</span>
                  <span className="leading-snug">{flag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Real World Example & Red Flag Inspector */}
          {currentScam.realWorldExample.sampleMessage && (
            <div className="space-y-3 bg-slate-900 text-white rounded-2xl p-5 border border-[#8D65EC]/30">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8D65EC] flex items-center gap-1">
                  <Lightbulb className="w-4 h-4" />
                  <span>Interactive Red-Flag Inspector (Click suspicious elements)</span>
                </span>
                <span className="text-[11px] text-slate-400 hidden sm:inline">Simulated Malicious Communication</span>
              </div>

              {/* Message Simulator Box */}
              <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 font-mono text-xs space-y-2">
                <div className="text-slate-400 border-b border-slate-800 pb-1.5">
                  <span className="text-slate-500">FROM: </span>
                  <span className="text-red-400 font-semibold">{currentScam.realWorldExample.sampleMessage.sender}</span>
                </div>

                <div className="text-slate-200 leading-relaxed py-2">
                  {currentScam.realWorldExample.sampleMessage.body}
                </div>

                {/* Hotspot buttons */}
                <div className="pt-2 border-t border-slate-800 space-y-2">
                  <span className="text-[11px] text-slate-400 font-sans block">
                    Click any suspicious marker to reveal why it is dangerous:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentScam.realWorldExample.sampleMessage.suspiciousElements.map((elem, idx) => {
                      const isActive = activeSuspiciousElement === elem.text;
                      return (
                        <button
                          key={idx}
                          onClick={() => setActiveSuspiciousElement(isActive ? null : elem.text)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-sans font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                            isActive
                              ? 'bg-[#5E17EB] text-white shadow-md shadow-[#5E17EB]/40'
                              : 'bg-slate-800 hover:bg-slate-700 text-[#8D65EC] border border-[#8D65EC]/40'
                          }`}
                        >
                          <span>🔍 "{elem.text}"</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Explanation Banner */}
                  {activeSuspiciousElement && (
                    <div className="mt-3 p-3 rounded-lg bg-amber-950/80 border border-amber-500/80 text-amber-200 font-sans text-xs space-y-1 animate-fadeIn">
                      <div className="font-bold flex items-center gap-1.5 text-amber-300">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>Why "{activeSuspiciousElement}" is a trap:</span>
                      </div>
                      <p>
                        {currentScam.realWorldExample.sampleMessage.suspiciousElements.find(
                          e => e.text === activeSuspiciousElement
                        )?.reason}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="text-xs text-[#5E17EB] dark:text-[#8D65EC] bg-[#F2EEFC] dark:bg-[#1a1230] p-3 rounded-xl border border-[#8D65EC]/40">
                <strong>{isKn ? 'ಸುವರ್ಣ ನಿಯಮ: ' : 'Golden Takeaway: '}</strong> {currentScam.preventionTip || currentScam.realWorldExample.preventionTip}
              </div>
            </div>
          )}

          {/* DO's and DON'Ts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* DOs */}
            <div className="bg-emerald-50 dark:bg-emerald-950/20 p-5 rounded-2xl border border-emerald-200 dark:border-emerald-900/40 space-y-3">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>{t.dosTitle}</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {(currentScam.dos || currentScam.dosAndDonts.dos).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* DONTs */}
            <div className="bg-red-50 dark:bg-red-950/20 p-5 rounded-2xl border border-red-200 dark:border-red-900/40 space-y-3">
              <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-sm">
                <XCircle className="w-4 h-4" />
                <span>{t.dontsTitle}</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {(currentScam.donts || currentScam.dosAndDonts.donts).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
