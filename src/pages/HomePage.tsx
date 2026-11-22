import React from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  TrendingUp, 
  Users, 
  ArrowRight, 
  Lock, 
  FileText, 
  PhoneCall, 
  CheckCircle2, 
  Sparkles,
  Zap,
  Globe2,
  ChevronRight,
  HelpCircle,
  Eye,
  Radio,
  Bot,
  MessageSquare
} from 'lucide-react';
import { ActivePage, LanguageCode } from '../types';
import { REAL_WORLD_STATS, CASE_STUDIES, CYBER_FUNDAMENTALS, THREAT_RADAR_ITEMS } from '../data/cyberIntroData';
import { SCAM_CATEGORIES } from '../data/scamCategories';
import { TRANSLATIONS } from '../data/translations';
import { LOCALIZED_HOME } from '../data/localizedContent';
import { RecentScamAlerts } from '../components/RecentScamAlerts';
import { PasswordTrustCard } from '../components/PasswordTrustCard';
import { LOCALIZED_SCAMS } from '../data/localizedScams';

interface Props {
  onNavigate: (page: ActivePage) => void;
  language: LanguageCode;
  onOpenSOS: () => void;
}

export const HomePage: React.FC<Props> = ({ onNavigate, language, onOpenSOS }) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;
  const lh = LOCALIZED_HOME[language] || LOCALIZED_HOME.en;
  const [selectedCaseStudy, setSelectedCaseStudy] = React.useState(CASE_STUDIES[0]);

  return (
    <div className="space-y-16 py-6 sm:py-10 max-w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[32px] bg-[var(--color-bg-white)] dark:bg-[#161224] p-6 sm:p-12 border border-[#8D65EC]/20 shadow-[0_18px_50px_-28px_rgba(94,23,235,0.38)]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F2EEFC] dark:bg-[#5E17EB]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F2EEFC]/80 dark:bg-[#8D65EC]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F2EEFC] dark:bg-[#5E17EB]/25 border border-[#8D65EC]/35 text-[#5E17EB] dark:text-[#C4B5FD] text-xs font-bold tracking-[0.12em] uppercase">
            <Radio className="w-3.5 h-3.5 text-[#5E17EB] dark:text-[#8D65EC] animate-pulse" />
            <span>{lh.heroBadge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-0.04em] text-[#1D1B28] dark:text-white leading-[0.95]">
            {lh.heroTitle}
          </h1>

          <p className="text-base sm:text-xl text-[#6E6B7B] dark:text-slate-300 max-w-2xl leading-relaxed">
            {lh.heroSubtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4">
            {/* Primary Button: Start a lesson (#5E17EB) */}
            <button
              onClick={() => onNavigate('quiz')}
              className="px-6 py-3.5 bg-[#5E17EB] hover:bg-[#4D0FD4] text-white font-extrabold rounded-xl flex items-center gap-2 transition-all hover:scale-105 shadow-lg shadow-[#5E17EB]/35 text-sm sm:text-base cursor-pointer border border-[#5E17EB]"
            >
              <Zap className="w-4 h-4 text-amber-300" />
              <span>{language === 'kn' ? 'ಪಾಠ ಪ್ರಾರಂಭಿಸಿ' : 'Start a lesson'}</span>
            </button>

            {/* Secondary Button Outline: See common threats (#8D65EC outline) */}
            <button
              onClick={() => onNavigate('scams')}
              className="px-6 py-3.5 bg-transparent hover:bg-[#8D65EC]/15 text-[#8D65EC] hover:text-[#5E17EB] font-extrabold rounded-xl flex items-center gap-2 transition-all hover:scale-105 border-2 border-[#8D65EC] hover:border-[#5E17EB] text-sm sm:text-base cursor-pointer"
            >
              <span>{language === 'kn' ? 'ಸಾಮಾನ್ಯ ಬೆದರಿಕೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ' : 'See common threats'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Primary Button: Report an issue (#5E17EB) */}
            <button
              onClick={onOpenSOS}
              className="px-6 py-3.5 bg-[#5E17EB] hover:bg-[#4D0FD4] text-white font-extrabold rounded-xl flex items-center gap-2 transition-all hover:scale-105 shadow-lg shadow-[#5E17EB]/35 text-sm sm:text-base cursor-pointer border border-[#8D65EC]/40"
            >
              <PhoneCall className="w-4 h-4 text-white" />
              <span>{language === 'kn' ? 'ಸಮಸ್ಯೆ ವರದಿ ಮಾಡಿ' : 'Report an issue'}</span>
            </button>

            {/* AI Advisor Button */}
            <button
              onClick={() => onNavigate('chatbot')}
              className="px-6 py-3.5 bg-gradient-to-r from-[#5E17EB] to-[#8D65EC] hover:from-[#4D0FD4] hover:to-[#7B51E8] text-white font-extrabold rounded-xl flex items-center gap-2 transition-all hover:scale-105 shadow-lg shadow-[#5E17EB]/25 text-sm sm:text-base cursor-pointer border border-[#8D65EC]/40"
            >
              <Bot className="w-4 h-4 text-purple-200" />
              <span>{language === 'kn' ? 'ಎಐ ಸೈಬರ್ ಸಲಹೆಗಾರ' : 'AI Cyber Advisor'}</span>
            </button>
          </div>
        </div>

        {/* Live Threat Ticker */}
        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800/80">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold text-[#8D65EC] uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4" />
            <span>{lh.threatRadarTitle}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {THREAT_RADAR_ITEMS.slice(0, 3).map((threat) => (
              <div 
                key={threat.id} 
                className="bg-[#F2EEFC] dark:bg-slate-800/60 border border-[#8D65EC]/20 rounded-xl p-3 text-xs flex items-start gap-2.5"
              >
                <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 border border-red-300 dark:border-red-800 shrink-0">
                  {threat.type}
                </span>
                <p className="text-[#6E6B7B] dark:text-slate-300 leading-snug line-clamp-2">
                  {threat.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Interactive "Which password would you trust?" Card */}
      <PasswordTrustCard onNavigate={onNavigate} language={language} />

      {/* Recent Scam Alerts (Search Grounding Enabled) */}
      <RecentScamAlerts language={language} />

      {/* 24/7 AI Cybersecurity Defense Assistant Spotlight */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1D1B28] via-[#2F145C] to-[#1D1B28] text-white p-6 sm:p-10 border border-[#8D65EC]/35 shadow-2xl space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5E17EB]/30 text-[#C4B5FD] border border-[#8D65EC]/40 text-xs font-extrabold uppercase tracking-wider">
              <Bot className="w-3.5 h-3.5 text-[#C4B5FD]" />
              <span>{language === 'kn' ? '24/7 ನೈಜ ಸಮಯದ ಎಐ ರಕ್ಷಣೆ' : '24/7 Live AI Cyber Defense'}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              {language === 'kn' ? 'ಸೈಬರ್‌ಶೀಲ್ಡ್ ಎಐ ಭದ್ರತಾ ಸಹಾಯಕ' : 'Ask CyberShield AI Security Advisor'}
            </h2>
            <p className="text-xs sm:text-sm text-purple-200/90 leading-relaxed">
              {language === 'kn'
                ? 'ಸಂಶಯಾಸ್ಪದ ಪೊಲೀಸ್ ವಿಡಿಯೋ ಕಾಲ್‌ಗಳು, ಅಜ್ಞಾತ ಕ್ಯೂಆರ್ ಕೋಡ್‌ಗಳು, ನಕಲಿ ಎಪಿಕೆ ಲಿಂಕ್‌ಗಳು ಅಥವಾ ತುರ್ತು ಹಣ ಕಡಿತದ ಕುರಿತು ತ್ವರಿತ ವಿಧಿವಿಜ್ಞಾನ ವಿಶ್ಲೇಷಣೆ ಪಡೆಯಿರಿ.'
                : 'Instant forensic analysis for coercive police video calls, suspicious marketplace QR codes, malicious APK download links, and rapid Golden Hour banking freeze guidance.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('chatbot')}
              className="px-6 py-3.5 bg-[#5E17EB] hover:bg-[#4D0FD4] text-white font-black rounded-2xl flex items-center justify-center gap-2 text-sm shadow-xl shadow-[#5E17EB]/40 hover:scale-105 transition-all cursor-pointer border border-[#8D65EC]/40"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{language === 'kn' ? 'ಎಐ ಜೊತೆ ಚಾಟ್ ಪ್ರಾರಂಭಿಸಿ' : 'Launch Cyber Chatbot'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Interactive Sample Inquiry Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
          {[
            {
              icon: '🚨',
              title: language === 'kn' ? 'ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್ ಪರಿಶೀಲನೆ' : 'Verify Police Video Call',
              desc: language === 'kn' ? 'ಸ್ಕೈಪ್‌ನಲ್ಲಿ ಸಿಬಿಐ ಅಥವಾ ಮುಂಬೈ ಪೊಲೀಸ್ ಕರೆ ಬಂದಿದೆಯೇ?' : 'Coercive video call claiming to be CBI or customs parcel?',
              prompt: language === 'kn' ? 'ನಕಲಿ ಪೊಲೀಸ್ / ಸಿಬಿಐ ವಿಡಿಯೋ ಕಾಲ್ ಬಂದಿದೆ (ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್)' : 'I received a video call claiming to be Mumbai Police or CBI saying an illegal parcel has my Aadhaar card.'
            },
            {
              icon: '💳',
              title: language === 'kn' ? 'ಕ್ಯೂಆರ್ ಕೋಡ್ & ಯುಪಿಐ' : 'Marketplace QR Code Check',
              desc: language === 'kn' ? 'ಹಣ ಪಡೆಯಲು ಕ್ಯೂಆರ್ ಸ್ಕ್ಯಾನ್ ಅಥವಾ ಪಿನ್ ಕೇಳುತ್ತಿದ್ದಾರಾ?' : 'Buyer sent a QR code to pay you and asked for your PIN?',
              prompt: language === 'kn' ? 'ಕ್ಯೂಆರ್ ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಹಣ ಸ್ವೀಕರಿಸಲು ಹೇಳುತ್ತಿದ್ದಾರೆ' : 'A buyer on OLX sent me a QR code and told me to scan it and enter my PIN to receive payment.'
            },
            {
              icon: '⚡',
              title: language === 'kn' ? 'ನಕಲಿ ವಿದ್ಯುತ್ ಬಿಲ್ / APK' : 'Fake Utility Bill & APK Link',
              desc: language === 'kn' ? 'ಇಂದು ವಿದ್ಯುತ್ ಕಟ್ ಆಗುತ್ತದೆ ಎಂದು APK ಆಪ್ ಕಳುಹಿಸಿದ್ದಾರಾ?' : 'Unsolicited SMS claiming power will be cut tonight unless you install an APK?',
              prompt: language === 'kn' ? 'ವಿದ್ಯುತ್ ಕಟ್ ಆಗುತ್ತದೆ ಎಂದು APK ಆಪ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಲು ಸಂದೇಶ ಬಂದಿದೆ' : 'Received an SMS saying my electricity bill is unpaid and power will be cut tonight unless I click a link.'
            },
            {
              icon: '🛑',
              title: language === 'kn' ? 'ತುರ್ತು ಸುವರ್ಣ ಗಂಟೆ ಕ್ರಮ' : 'Golden Hour Bank Debit',
              desc: language === 'kn' ? 'ಅನುಮತಿಯಿಲ್ಲದೆ ಖಾತೆಯಿಂದ ಹಣ ಕಡಿತಗೊಂಡಿದೆಯೇ?' : 'Money debited without authorization in the last 2 hours?',
              prompt: language === 'kn' ? 'ನನ್ನ ಅನುಮತಿಯಿಲ್ಲದೆ ಖಾತೆಯಿಂದ ಹಣ ಕಡಿತವಾಗಿದೆ — ಏನು ಮಾಡಬೇಕು?' : 'Money was just debited from my bank account without my permission. What are my exact Golden Hour steps?'
            }
          ].map((card, cIdx) => (
            <div
              key={cIdx}
              onClick={() => {
                sessionStorage.setItem(`cybershield_chat_history_${language}`, JSON.stringify([
                  {
                    id: `usr-${Date.now()}`,
                    role: 'user',
                    text: card.prompt,
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                  }
                ]));
                onNavigate('chatbot');
              }}
              className="bg-[#161224]/90 hover:bg-[#1D1B28] border border-[#8D65EC]/30 hover:border-[#8D65EC] rounded-2xl p-4 transition-all duration-200 cursor-pointer group flex flex-col justify-between space-y-2 hover:scale-[1.02] shadow-sm"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xl">{card.icon}</span>
                  <span className="text-[10px] font-bold text-[#C4B5FD] group-hover:underline flex items-center gap-0.5">
                    <span>Ask AI</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </span>
                </div>
                <h4 className="font-extrabold text-sm text-white group-hover:text-[#C4B5FD] transition-colors">
                  {card.title}
                </h4>
                <p className="text-[11px] text-purple-200/80 leading-snug">
                  {card.desc}
                </p>
              </div>
              <div className="pt-2 border-t border-[#8D65EC]/20 text-[10px] text-purple-300 font-medium">
                Tap to analyze threat →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Real-World Data & Statistics */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#8D65EC]/20 pb-4">
          <div>
            <div className="flex items-center gap-2 text-[#8D65EC] text-xs font-bold uppercase tracking-wider">
              <TrendingUp className="w-4 h-4" />
              <span>{lh.statsSectionTitle}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1D1B28] dark:text-white mt-1">
              {lh.statsSectionTitle}
            </h2>
          </div>
          <p className="text-xs text-[#6E6B7B] dark:text-slate-400">
            {lh.statsSectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {REAL_WORLD_STATS.map((stat) => (
            <div 
              key={stat.id}
              className="card-pure-white rounded-2xl p-5 hover:border-[#5E17EB]/40 transition-all space-y-3"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[#6E6B7B] dark:text-slate-400 uppercase tracking-wide">
                  {stat.metric}
                </span>
                <span className="px-2 py-0.5 rounded-full font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800">
                  {stat.trend}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-[#1D1B28] dark:text-white tracking-tight">
                {stat.value}
              </div>
              <p className="text-xs text-[#6E6B7B] dark:text-slate-400 leading-relaxed">
                {stat.description}
              </p>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-[#6E6B7B] italic">
                {stat.source}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Introduction to Cybersecurity Fundamentals */}
      <section className="card-soft-lavender rounded-3xl p-6 sm:p-10 space-y-8 shadow-[0_18px_45px_-28px_rgba(94,23,235,0.45)]">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8D65EC] uppercase tracking-wider">
            <Lock className="w-4 h-4" />
            <span>Cybersecurity 101</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1D1B28] dark:text-white">
            {lh.introSectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#6E6B7B] dark:text-slate-300 leading-relaxed">
            {lh.introSectionDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {CYBER_FUNDAMENTALS.map((fund, idx) => (
            <div 
              key={idx}
              className="bg-[#FFFFFF] dark:bg-slate-900 p-5 rounded-2xl border border-[#8D65EC]/20 shadow-sm space-y-2.5"
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#F2EEFC] dark:bg-[#5E17EB]/25 text-[#5E17EB] dark:text-[#C4B5FD] flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-[#1D1B28] dark:text-white text-base">
                  {fund.title}
                </h3>
              </div>
              <div className="text-xs font-bold text-[#8D65EC]">
                Key Concept: {fund.concept}
              </div>
              <p className="text-xs sm:text-sm text-[#6E6B7B] dark:text-slate-400 leading-relaxed">
                {fund.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Real-World Case Studies: How People Get Scammed & How to Stop It */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#8D65EC]/20 pb-4">
          <div>
            <div className="flex items-center gap-2 text-red-500 text-xs font-bold uppercase tracking-wider">
              <Eye className="w-4 h-4" />
              <span>{lh.caseStudyTitle}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1D1B28] dark:text-white mt-1">
              {lh.caseStudyTitle}
            </h2>
          </div>
          <p className="text-xs text-[#6E6B7B] dark:text-slate-400">
            {lh.caseStudySubtitle}
          </p>
        </div>

        {/* Case Study Tabs */}
        <div className="flex flex-wrap gap-2">
          {CASE_STUDIES.map((cs) => {
            const isSelected = selectedCaseStudy.id === cs.id;
            return (
              <button
                key={cs.id}
                onClick={() => setSelectedCaseStudy(cs)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all text-left flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#5E17EB] text-white shadow-md shadow-[#5E17EB]/25'
                    : 'bg-[#FFFFFF] dark:bg-slate-900 text-[#6E6B7B] dark:text-slate-300 border border-[#8D65EC]/20 hover:bg-[#F2EEFC]/50 dark:hover:bg-slate-800'
                }`}
              >
                <span>{cs.title.split(' ')[0]} {cs.title.split(' ')[1]}</span>
                <span className="text-[11px] opacity-75 hidden sm:inline">({cs.amountLost})</span>
              </button>
            );
          })}
        </div>

        {/* Selected Case Study Details */}
        <div className="card-pure-white rounded-3xl p-6 sm:p-8 shadow-[0_18px_45px_-28px_rgba(94,23,235,0.45)] space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-extrabold uppercase bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 border border-red-300 dark:border-red-800">
                  {selectedCaseStudy.scamType}
                </span>
                <span className="text-xs text-[#6E6B7B] dark:text-slate-400">
                  Victim: {selectedCaseStudy.victimProfile}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#1D1B28] dark:text-white">
                {selectedCaseStudy.title}
              </h3>
            </div>
            <div className="bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 p-3 rounded-2xl shrink-0">
              <span className="text-xs text-red-600 dark:text-red-400 font-bold block uppercase">{lh.financialLossLabel}</span>
              <span className="text-xl font-black text-red-600 dark:text-red-400">{selectedCaseStudy.amountLost}</span>
            </div>
          </div>

          <p className="text-sm text-[#6E6B7B] dark:text-slate-300 leading-relaxed italic bg-[#F2EEFC] dark:bg-slate-800/40 p-4 rounded-xl border border-[#8D65EC]/15">
            "{selectedCaseStudy.summary}"
          </p>

          {/* Timeline */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#6E6B7B] dark:text-slate-400">
              How The Scam Unfolded (Step-by-Step Timeline):
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {selectedCaseStudy.timeline.map((step) => (
                <div 
                  key={step.step}
                  className="bg-[#F2EEFC] dark:bg-slate-800/60 p-4 rounded-xl border border-[#8D65EC]/15 text-xs space-y-1.5"
                >
                  <div className="w-6 h-6 rounded-full bg-[#5E17EB] text-white flex items-center justify-center font-black">
                    {step.step}
                  </div>
                  <h5 className="font-bold text-[#1D1B28] dark:text-white text-sm">
                    {step.title}
                  </h5>
                  <p className="text-[#6E6B7B] dark:text-slate-300 leading-normal">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Scammer Tactics vs How it could be stopped */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-2xl border border-red-200 dark:border-red-900/50 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-red-600 dark:text-red-400 uppercase">
                <AlertTriangle className="w-4 h-4" />
                <span>{lh.tacticsLabel}</span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#6E6B7B] dark:text-slate-300">
                {selectedCaseStudy.scammerTactics.map((tactic, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-red-500 font-bold">•</span>
                    <span>{tactic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-2xl border border-emerald-200 dark:border-emerald-900/50 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                <CheckCircle2 className="w-4 h-4" />
                <span>{lh.preventionLabel}</span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#6E6B7B] dark:text-slate-300">
                {selectedCaseStudy.howItCouldHaveBeenStopped.map((stop, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>{stop}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9 Scam Categories Showcase */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#8D65EC]/20 pb-4">
          <div>
            <div className="flex items-center gap-2 text-[#8D65EC] text-xs font-bold uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              <span>{language === 'kn' ? 'ಸಮಗ್ರ ಸೈಬರ್ ವಂಚನೆ ಜಾಗೃತಿ' : 'Complete Awareness Curriculum'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1D1B28] dark:text-white mt-1">
              {language === 'kn' ? 'ಪ್ರಮುಖ ಸೈಬರ್ ವಂಚನೆಗಳ ಸಮಗ್ರ ವಿವರ' : 'Explore All Major Scam Vectors'}
            </h2>
          </div>
          <button
            onClick={() => onNavigate('scams')}
            className="text-xs font-bold text-[#5E17EB] dark:text-[#C4B5FD] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>{language === 'kn' ? 'ವಿವರವಾದ ರೆಡ್ ಫ್ಲ್ಯಾಗ್ ಮಾರ್ಗದರ್ಶಿ ವೀಕ್ಷಿಸಿ' : 'View detailed guides with red flags'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SCAM_CATEGORIES.map((scam) => {
            const localized = LOCALIZED_SCAMS[scam.id]?.[language];
            const title = localized?.title || scam.title;
            const desc = localized?.shortDesc || scam.shortDesc;
            return (
              <div
                key={scam.id}
                onClick={() => onNavigate('scams')}
                className="bg-[#FFFFFF] dark:bg-slate-900 p-5 rounded-2xl border border-[#8D65EC]/20 hover:border-[#5E17EB] hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                      scam.severity === 'Critical'
                        ? 'bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 border border-red-300 dark:border-red-900'
                        : 'bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 border border-amber-300 dark:border-amber-900'
                    }`}>
                      {scam.severity} {language === 'kn' ? 'ಅಪಾಯ' : 'Risk'}
                    </span>
                    <span className="text-[11px] text-[#6E6B7B] font-medium">
                      {scam.victimCountGlobal}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-[#1D1B28] dark:text-white text-base group-hover:text-[#5E17EB] transition-colors">
                    {title}
                  </h3>
                  <p className="text-xs text-[#6E6B7B] dark:text-slate-400 line-clamp-2">
                    {desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-[#5E17EB] dark:text-[#C4B5FD] font-bold">
                  <span>{language === 'kn' ? 'ತಡೆಗಟ್ಟುವ ನಿಯಮಗಳನ್ನು ಕಲಿಯಿರಿ' : 'Learn prevention rules'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Senior Citizen & Student Modes Feature Banner */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-[#1D1B28] via-[#2F145C] to-[#1D1B28] rounded-3xl p-6 sm:p-8 text-white border border-[#8D65EC]/40 shadow-xl space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-[#5E17EB]/40 text-[#C4B5FD] border border-[#8D65EC]/40 text-xs font-bold">
            {language === 'kn' ? 'ಹಿರಿಯ ಪೋಷಕರು & ಅಜ್ಜ-ಅಜ್ಜಿಯರಿಗಾಗಿ ವಿಶೇಷ ವಿನ್ಯಾಸ' : 'Specially Crafted for Elderly Parents & Grandparents'}
          </div>
          <h3 className="text-2xl font-black text-white">
            {language === 'kn' ? 'ಹಿರಿಯ ನಾಗರಿಕರ ಸುರಕ್ಷತಾ ಮೋಡ್' : 'Senior Citizen Mode'}
          </h3>
          <p className="text-xs sm:text-sm text-purple-200 leading-relaxed">
            {language === 'kn'
              ? 'ದೊಡ್ಡ ಅಕ್ಷರಗಳು, ಸರಳ ವಿವರಣೆ, ಧ್ವನಿ ಸೌಲಭ್ಯ ಮತ್ತು ಬ್ಯಾಂಕ್ ಕರೆಗಳ ಕುರಿತು ಸರಳ DO / DON\'T ಮಾರ್ಗದರ್ಶಿ.'
              : 'Large text, huge tactile buttons, simple language with zero technical jargon, audio explanations, and clear "DO / DON\'T" cards for bank calls and pension issues.'}
          </p>
          <button
            onClick={() => onNavigate('senior')}
            className="px-5 py-2.5 bg-[#5E17EB] hover:bg-[#4D0FD4] text-white font-extrabold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-md shadow-[#5E17EB]/30"
          >
            <span>{language === 'kn' ? 'ಹಿರಿಯ ನಾಗರಿಕರ ಮೋಡ್ ತೆರೆಯಿರಿ' : 'Open Senior Citizen Mode'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-gradient-to-br from-[#1D1B28] via-[#1A1847] to-[#1D1B28] rounded-3xl p-6 sm:p-8 text-white border border-[#8D65EC]/40 shadow-xl space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-[#5E17EB]/40 text-[#C4B5FD] border border-[#8D65EC]/40 text-xs font-bold">
            {language === 'kn' ? 'ಕಾಲೇಜು ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಯುವಜನರಿಗಾಗಿ' : 'For College Students, Teens & Gen-Z'}
          </div>
          <h3 className="text-2xl font-black text-white">
            {language === 'kn' ? 'ವಿದ್ಯಾರ್ಥಿ & ಯುವ ಸುರಕ್ಷತಾ ಮೋಡ್' : 'Student & Youth Mode'}
          </h3>
          <p className="text-xs sm:text-sm text-purple-200 leading-relaxed">
            {language === 'kn'
              ? 'ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್ ಹ್ಯಾಕಿಂಗ್, ಟೆಲಿಗ್ರಾಂ ಪಾರ್ಟ್-ಟೈಮ್ ಟಾಸ್ಕ್ ಮೋಸ, ಗೇಮಿಂಗ್ ಲೂಟಿ ಮತ್ತು ನಕಲಿ ವಿದ್ಯಾರ್ಥಿವೇತನಗಳಿಂದ ರಕ್ಷಣೆ.'
              : 'Protect yourself against Instagram account takeovers, Telegram part-time job task traps, gaming lures, fake scholarships, and fraudulent giveaways.'}
          </p>
          <button
            onClick={() => onNavigate('student')}
            className="px-5 py-2.5 bg-[#5E17EB] hover:bg-[#4D0FD4] text-white font-extrabold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-md shadow-[#5E17EB]/30"
          >
            <span>{language === 'kn' ? 'ವಿದ್ಯಾರ್ಥಿ ಮೋಡ್ ತೆರೆಯಿರಿ' : 'Open Student Mode'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
