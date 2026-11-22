import React from 'react';
import { 
  ShieldAlert, 
  BrainCircuit, 
  Fingerprint, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Lock, 
  PhoneCall, 
  Scale, 
  Clock, 
  Eye, 
  KeyRound, 
  ExternalLink,
  ShieldCheck,
  Building2,
  FileWarning
} from 'lucide-react';
import { LanguageCode } from '../types';

interface Props {
  language?: LanguageCode;
  onOpenSOS?: () => void;
}

export type DeepDiveTab = 'digital-arrest' | 'voice-cloning' | 'aeps-theft';

export const ScamDeepDives: React.FC<Props> = ({ language = 'en', onOpenSOS }) => {
  const [activeTab, setActiveTab] = React.useState<DeepDiveTab>('digital-arrest');
  const [activeWalkthroughStep, setActiveWalkthroughStep] = React.useState<number>(1);

  const isKn = language === 'kn';
  const isHi = language === 'hi';

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#161224] text-[#1D1B28] dark:text-white rounded-3xl p-6 sm:p-10 border border-[#8D65EC]/30 shadow-xl space-y-8 my-8 transition-colors">
      {/* Header */}
      <div className="space-y-3 border-b border-[#8D65EC]/20 pb-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-red-600 text-white shadow-md animate-pulse">
            {isKn ? 'ಅತ್ಯಂತ ಅಪಾಯಕಾರಿ ವಂಚನೆಗಳ ತನಿಖಾ ವಿಶ್ಲೇಷಣೆ' : 'HIGH-THREAT FORENSIC DEEP-DIVES'}
          </span>
          <span className="text-xs text-[#6E6B7B] dark:text-slate-400 font-bold">
            {isKn ? 'ಸಮಕಾಲೀನ 3 ಪ್ರಮುಖ ಸೈಬರ್ ಅಪರಾಧಗಳ ಸಂಪೂರ್ಣ ವಿವರ' : '3 Most Dangerous Contemporary Fraud Operations'}
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black text-[#1D1B28] dark:text-white tracking-tight">
          {isKn ? 'ವಿಶೇಷ ಆಳವಾದ ತನಿಖಾ ವಿಭಾಗ' : 'Special Investigative Deep-Dives'}
        </h2>

        <p className="text-[#6E6B7B] dark:text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
          {isKn
            ? 'ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್, ಎಐ ಧ್ವನಿ ಕ್ಲೋನಿಂಗ್ ಮತ್ತು ಆಧಾರ್ ಬಯೋಮೆಟ್ರಿಕ್ ಕಳ್ಳತನದ ಕಾರ್ಯವಿಧಾನ, ಎಚ್ಚರಿಕೆಯ ಕೆಂಪು ಚಿಹ್ನೆಗಳು (ರೆಡ್ ಫ್ಲ್ಯಾಗ್ಸ್) ಮತ್ತು ಹಂತ-ಹಂತದ ತಡೆಗಟ್ಟುವ ಕ್ರಮಗಳು.'
            : 'Detailed forensic analysis, attack-chain mechanics, common red flags, and step-by-step prevention blueprints for Digital Arrest, AI Voice Cloning, and Biometric AePS Theft.'}
        </p>

        {/* 3 Quick-Select Deep-Dive Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
          <button
            onClick={() => setActiveTab('digital-arrest')}
            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
              activeTab === 'digital-arrest'
                ? 'bg-red-600 border-red-500 text-white shadow-lg shadow-red-950/30 scale-[1.02]'
                : 'bg-white dark:bg-slate-800/80 hover:bg-[#F2EEFC]/30 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            <div className={`p-2.5 rounded-xl ${activeTab === 'digital-arrest' ? 'bg-black/30 text-white' : 'bg-red-100 dark:bg-slate-700 text-red-600 dark:text-red-400'}`}>
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-black">{isKn ? 'ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್ ವಂಚನೆ' : 'Digital Arrest Extortion'}</div>
              <div className={`text-[11px] ${activeTab === 'digital-arrest' ? 'text-red-100' : 'text-slate-500 dark:text-slate-400'}`}>
                {isKn ? 'ನಕಲಿ ಸಿಬಿಐ/ಪೊಲೀಸ್ ವಿಡಿಯೋ ಕರೆ' : 'Fake CBI / Police Video Calls'}
              </div>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('voice-cloning')}
            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
              activeTab === 'voice-cloning'
                ? 'bg-[#5E17EB] border-[#5E17EB] text-white shadow-lg shadow-[#5E17EB]/30 scale-[1.02]'
                : 'bg-white dark:bg-slate-800/80 hover:bg-[#F2EEFC]/30 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            <div className={`p-2.5 rounded-xl ${activeTab === 'voice-cloning' ? 'bg-black/30 text-white' : 'bg-[#F2EEFC] dark:bg-slate-700 text-[#5E17EB] dark:text-[#C4B5FD]'}`}>
              <BrainCircuit className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-black">{isKn ? 'ಎಐ ಧ್ವನಿ ಕ್ಲೋನಿಂಗ್' : 'AI Voice Cloning'}</div>
              <div className={`text-[11px] ${activeTab === 'voice-cloning' ? 'text-purple-100' : 'text-slate-500 dark:text-slate-400'}`}>
                {isKn ? 'ಡೀಪ್‌ಫೇಕ್ ಆಡಿಯೋ ಅಪಹರಣ ಸುಲಿಗೆ' : 'Deepfake Audio Ransoms'}
              </div>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('aeps-theft')}
            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
              activeTab === 'aeps-theft'
                ? 'bg-amber-600 border-amber-500 text-white shadow-lg shadow-amber-950/30 scale-[1.02]'
                : 'bg-white dark:bg-slate-800/80 hover:bg-[#F2EEFC]/30 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            <div className={`p-2.5 rounded-xl ${activeTab === 'aeps-theft' ? 'bg-black/30 text-white' : 'bg-amber-100 dark:bg-slate-700 text-amber-600 dark:text-amber-400'}`}>
              <Fingerprint className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-black">{isKn ? 'ಬಯೋಮೆಟ್ರಿಕ್ AePS ಕಳ್ಳತನ' : 'Biometric AePS Theft'}</div>
              <div className={`text-[11px] ${activeTab === 'aeps-theft' ? 'text-amber-100' : 'text-slate-500 dark:text-slate-400'}`}>
                {isKn ? 'ಸಿಲಿಕಾನ್ ಹೆಬ್ಬೆರಳು ಕ್ಲೋನಿಂಗ್' : 'Silicon Thumbprint Fraud'}
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* ===================== DEEP DIVE 1: DIGITAL ARREST ===================== */}
      {activeTab === 'digital-arrest' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Executive Summary Card */}
          <div className="bg-red-50 dark:bg-red-950/40 border border-red-300 dark:border-red-500/60 rounded-2xl p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-red-200 dark:border-red-900/60 pb-3">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-red-600 dark:text-red-400" />
                <span className="font-black text-red-800 dark:text-red-300 text-sm uppercase">
                  {isKn ? 'ಬೆದರಿಕೆ ಪ್ರೊಫೈಲ್: ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್ ಸುಲಿಗೆ' : 'Threat Profile: Digital Arrest Extortion'}
                </span>
              </div>
              <span className="text-xs bg-red-600 text-white px-2.5 py-0.5 rounded-full font-bold">
                {isKn ? 'ಕಾನೂನು ಸ್ಥಾನಮಾನ: 100% ಕ್ರಿಮಿನಲ್ ವಂಚನೆ' : 'Legal Status: 100% Criminal Extortion'}
              </span>
            </div>

            <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
              {isKn ? (
                <>
                  <strong>"ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್"</strong> ಎಂಬುದು ಸೈಬರ್ ಅಪರಾಧಿಗಳು ಸಿಬಿಐ, ನಾರ್ಕೋಟಿಕ್ಸ್ ಬ್ಯೂರೋ, ಜಾರಿ ನಿರ್ದೇಶನಾಲಯ (ED) ಅಥವಾ ಮುಂಬೈ ಪೊಲೀಸರಂತೆ ನಟಿಸಿ ನಡೆಸುವ ತೀವ್ರ ಮಾನಸಿಕ ಒತ್ತಡದ ವಂಚನೆಯಾಗಿದೆ. ಸಂತ್ರಸ್ತರನ್ನು ದಿನಗಟ್ಟಲೆ ಸ್ಕೈಪ್ ಅಥವಾ ವಾಟ್ಸಾಪ್ ವಿಡಿಯೋ ಕರೆಯಲ್ಲಿ ಕೂಡಿಹಾಕಿ, ಅವರ ಜೀವಮಾನದ ಉಳಿತಾಯ ಮತ್ತು ಫಿಕ್ಸೆಡ್ ಡೆಪಾಸಿಟ್ ಹಣವನ್ನು ಲೂಟಿ ಮಾಡಲಾಗುತ್ತದೆ.
                </>
              ) : (
                <>
                  <strong>"Digital Arrest"</strong> is an aggressive psychological hostage scheme where cyber syndicates impersonate the <strong>Central Bureau of Investigation (CBI), Enforcement Directorate (ED), Narcotics Control Bureau (NCB), or Mumbai Police</strong>. Victims are confined in their homes over multi-day Skype or WhatsApp video calls under simulated judicial arrest until their entire life savings and fixed deposits are liquidated.
                </>
              )}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
              <div className="bg-white dark:bg-slate-900/80 p-3 rounded-xl border border-red-200 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 block mb-0.5">{isKn ? 'ಸರಾಸರಿ ಹಣದ ನಷ್ಟ:' : 'Average Financial Loss:'}</span>
                <span className="text-red-600 dark:text-red-400 font-black text-sm">₹15 Lakhs to ₹2.5 Crores</span>
              </div>
              <div className="bg-white dark:bg-slate-900/80 p-3 rounded-xl border border-red-200 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 block mb-0.5">{isKn ? 'ಪ್ರಮುಖ ಗುರಿ:' : 'Primary Target:'}</span>
                <span className="text-slate-800 dark:text-slate-200 font-bold">{isKn ? 'ನಿವೃತ್ತ ಹಿರಿಯರು & ವೈದ್ಯರು' : 'Retired Seniors & Doctors'}</span>
              </div>
              <div className="bg-white dark:bg-slate-900/80 p-3 rounded-xl border border-red-200 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 block mb-0.5">{isKn ? 'ಅನ್ವಯವಾಗುವ ಕಾನೂನುಗಳು:' : 'Applicable Penal Code:'}</span>
                <span className="text-cyan-700 dark:text-cyan-300 font-mono font-bold">IPC 384 (Extortion), 419, IT 66D</span>
              </div>
            </div>
          </div>

          {/* 4-Phase Attack Chain Mechanics */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400 flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>{isKn ? '4-ಹಂತಗಳ ಮಾನಸಿಕ ವಂಚನಾ ಜಾಲ (ಕಾರ್ಯವಿಧಾನ):' : 'The 4-Phase Psychological Attack Chain:'}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="w-6 h-6 rounded-lg bg-red-600 text-white font-black flex items-center justify-center">1</div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{isKn ? 'ಕಸ್ಟಮ್ಸ್ ಬೆದರಿಕೆ' : 'The Customs Hook'}</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {isKn
                    ? 'ಫೆಡೆಕ್ಸ್ ಅಥವಾ ಡಿಎಚ್‌ಎಲ್ ಹೆಸರಿನಲ್ಲಿ ನಿಮ್ಮ ಹೆಸರಿನ ಪಾರ್ಸೆಲ್‌ನಲ್ಲಿ ಮಾದಕವಸ್ತು ಸಿಕ್ಕಿದೆ ಎಂದು ಸ್ವಯಂಚಾಲಿತ ಕರೆ ಬರುತ್ತದೆ.'
                    : 'Automated IVR call claiming an illegal FedEx parcel containing expired passports and narcotics was intercepted with your Aadhaar number.'}
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="w-6 h-6 rounded-lg bg-red-600 text-white font-black flex items-center justify-center">2</div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{isKn ? 'ವಿಡಿಯೋ ಕಾಲ್ ವರ್ಗಾವಣೆ' : 'The Video Transfer'}</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {isKn
                    ? 'ಕರೆಯನ್ನು ಸ್ಕೈಪ್‌ನಲ್ಲಿ ನಕಲಿ ಪೊಲೀಸ್ ಠಾಣೆಗೆ ಜೋಡಿಸಲಾಗುತ್ತದೆ. ಸಮವಸ್ತ್ರಧಾರಿ ನಕಲಿ ಅಧಿಕಾರಿಗಳು ನಕಲಿ ಸುಪ್ರೀಂ ಕೋರ್ಟ್ ವಾರೆಂಟ್ ತೋರಿಸುತ್ತಾರೆ.'
                    : 'Call transferred to Skype showing a simulated police station with uniforms, Indian flags, and forged Supreme Court arrest warrants.'}
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="w-6 h-6 rounded-lg bg-red-600 text-white font-black flex items-center justify-center">3</div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{isKn ? 'ಏಕಾಂಗಿ ಬಂಧನ' : 'Hostage Isolation'}</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {isKn
                    ? 'ಕ್ಯಾಮರಾ ಆಫ್ ಮಾಡದಂತೆ ಮತ್ತು ಯಾರಿಗೂ ಹೇಳದಂತೆ ಬೆದರಿಸಿ 24-72 ಗಂಟೆಗಳ ಕಾಲ ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಬಂಧಿಸುತ್ತಾರೆ.'
                    : 'Declared under "Digital Arrest". Ordered not to turn off camera or speak with family. Threatened with 20 years in jail if secrecy is broken.'}
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="w-6 h-6 rounded-lg bg-red-600 text-white font-black flex items-center justify-center">4</div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{isKn ? 'ಹಣ ಲೂಟಿ' : 'The Vault Drain'}</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {isKn
                    ? 'ಖಾತೆ ಪರಿಶೀಲನೆ ನೆಪದಲ್ಲಿ ನಿಮ್ಮ ಎಲ್ಲಾ ಫಿಕ್ಸೆಡ್ ಡೆಪಾಸಿಟ್ ಹಣವನ್ನು "ಆರ್‌ಬಿಐ ಪರಿಶೀಲನಾ ಖಾತೆ"ಗೆ ಕಳುಹಿಸಿಕೊಂಡು ಮಾಯವಾಗುತ್ತಾರೆ.'
                    : 'Victim is instructed to break fixed deposits and wire money to a "Reserve Bank Government Verification Vault", drained in minutes.'}
                </p>
              </div>
            </div>
          </div>

          {/* Common Red Flags Table */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-red-600 dark:text-red-400 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              <span>{isKn ? 'ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್‌ನ ಪ್ರಮುಖ ಎಚ್ಚರಿಕೆಯ ಕೆಂಪು ಚಿಹ್ನೆಗಳು (ರೆಡ್ ಫ್ಲ್ಯಾಗ್ಸ್):' : 'Deadly Red Flags of a Digital Arrest Call:'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {[
                { 
                  flag: isKn ? '"ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್" ಎಂಬ ಪದ' : 'The term "Digital Arrest"', 
                  reason: isKn ? 'ಭಾರತೀಯ ಯಾವುದೇ ಕಾನೂನಿನಲ್ಲಿ "ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್" ಎಂಬ ಪರಿಕಲ್ಪನೆಯೇ ಇಲ್ಲ!' : 'There is NO law or provision of "Digital Arrest" anywhere in Indian criminal procedure.' 
                },
                { 
                  flag: isKn ? '24 ಗಂಟೆ ವಿಡಿಯೋ ಕಾಲ್‌ನಲ್ಲಿರುವಂತೆ ಒತ್ತಾಯ' : 'Demands to stay on video call 24x7', 
                  reason: isKn ? 'ನಿಜವಾದ ಪೊಲೀಸರು ಎಂದಿಗೂ ಸ್ಕೈಪ್ ಅಥವಾ ವಾಟ್ಸಾಪ್ ವಿಡಿಯೋ ಕಾಲ್‌ನಲ್ಲಿ ವಿಚಾರಣೆ ನಡೆಸುವುದಿಲ್ಲ.' : 'Real police never monitor citizens via Skype/WhatsApp video. Interrogations happen strictly in registered stations.' 
                },
                { 
                  flag: isKn ? 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಸುಪ್ರೀಂ ಕೋರ್ಟ್ ಸೀಲ್' : 'Supreme Court or CBI seals on WhatsApp', 
                  reason: isKn ? 'ನ್ಯಾಯಾಲಯಗಳು ಎಂದಿಗೂ ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಬಂಧನ ವಾರೆಂಟ್ ಅಥವಾ ನೋಟಿಸ್ ಕಳುಹಿಸುವುದಿಲ್ಲ.' : 'Judicial courts do not issue notices, warrants, or bails over instant messaging or email.' 
                },
                { 
                  flag: isKn ? '"ಆರ್‌ಬಿಐ ಪರಿಶೀಲನಾ ಖಾತೆ"ಗೆ ಹಣ ವರ್ಗಾವಣೆ' : 'Wiring funds to an "RBI Verification Account"', 
                  reason: isKn ? 'ರಿಸರ್ವ್ ಬ್ಯಾಂಕ್ ಆಫ್ ಇಂಡಿಯಾ ಖಾಸಗಿ ನಾಗರಿಕರ ಯಾವುದೇ ಪರಿಶೀಲನಾ ಖಾತೆಗಳನ್ನು ನಿರ್ವಹಿಸುವುದಿಲ್ಲ.' : 'The Reserve Bank of India does NOT hold accounts for private individuals or investigative asset freezing.' 
                },
                { 
                  flag: isKn ? 'ಕುಟುಂಬ ಅಥವಾ ವಕೀಲರೊಂದಿಗೆ ಮಾತನಾಡದಂತೆ ನಿಷೇಧ' : 'Forbidding you from speaking to family', 
                  reason: isKn ? 'ಮಾನಸಿಕವಾಗಿ ಏಕಾಂಗಿ ಮಾಡಲು ವಂಚಕರು ಈ ಸುಳ್ಳು ಬೆದರಿಕೆ ಬಳಸುತ್ತಾರೆ.' : 'Psychological isolation tactic designed to stop you from consulting trusted relatives.' 
                },
                { 
                  flag: isKn ? 'ಬ್ಯಾಂಕ್ ಮ್ಯಾನೇಜರ್‌ಗೆ ಸುಳ್ಳು ಹೇಳಲು ತರಬೇತಿ' : 'Instructions to lie to bank managers', 
                  reason: isKn ? '"ಆಸ್ತಿ ಖರೀದಿ" ಅಥವಾ "ವೈದ್ಯಕೀಯ ಖರ್ಚು" ಎಂದು ಬ್ಯಾಂಕ್‌ಗೆ ಸುಳ್ಳು ಹೇಳುವಂತೆ ವಂಚಕರು ಒತ್ತಾಯಿಸುತ್ತಾರೆ.' : 'Scammers coach victims to tell bank cashiers that transfers are for "real estate" or "medical emergency".' 
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/80 flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block font-bold">{item.flag}</strong>
                    <span className="text-slate-600 dark:text-slate-400">{item.reason}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step Prevention Blueprint */}
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-500/60 rounded-2xl p-6 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              <span>{isKn ? 'ಹಂತ-ಹಂತದ ತಡೆಗಟ್ಟುವ ಕ್ರಮಗಳು (ತಕ್ಷಣ ಏನು ಮಾಡಬೇಕು?):' : 'Step-by-Step Defense Protocol (What to do immediately):'}</span>
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
              <div className="flex items-start gap-3 bg-white dark:bg-slate-900/60 p-3 rounded-xl border border-emerald-200 dark:border-slate-800">
                <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-black shrink-0">STEP 1</span>
                <div>
                  <strong className="text-slate-900 dark:text-white block font-bold">{isKn ? 'ಕರೆಯನ್ನು ತಕ್ಷಣವೇ ಕಡಿತಗೊಳಿಸಿ' : 'Cut the Call Instantly'}</strong>
                  <span>{isKn ? 'ಫೋನ್ ಅಥವಾ ವಿಡಿಯೋ ಕರೆಯನ್ನು ತಕ್ಷಣ ಕಟ್ ಮಾಡಿ. ಕರೆಯನ್ನು ಕಡಿತಗೊಳಿಸಿದ್ದಕ್ಕಾಗಿ ಯಾರೂ ನಿಮ್ಮನ್ನು ಬಂಧಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ!' : 'Hang up the call immediately. You will NOT be arrested for disconnecting a phone or Skype call. No legal action can be taken against you.'}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white dark:bg-slate-900/60 p-3 rounded-xl border border-emerald-200 dark:border-slate-800">
                <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-black shrink-0">STEP 2</span>
                <div>
                  <strong className="text-slate-900 dark:text-white block font-bold">{isKn ? '1930 ಗೆ ಕರೆ ಮಾಡಿ & ಕುಟುಂಬಕ್ಕೆ ತಿಳಿಸಿ' : 'Call 1930 & Inform Family'}</strong>
                  <span>{isKn ? 'ತಕ್ಷಣ 1930 ಸೈಬರ್ ಕ್ರೈಮ್ ಸಹಾಯವಾಣಿಗೆ ಕರೆ ಮಾಡಿ ಅಥವಾ ನಿಮ್ಮ ಕುಟುಂಬದ ಸದಸ್ಯರು, ಮಕ್ಕಳು ಅಥವಾ ನೆರೆಹೊರೆಯವರಿಗೆ ವಿಷಯ ತಿಳಿಸಿ.' : 'Immediately dial 1930 (National Cyber Crime Helpline) or notify your local police station. Speak to your children or relatives right away.'}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white dark:bg-slate-900/60 p-3 rounded-xl border border-emerald-200 dark:border-slate-800">
                <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-black shrink-0">STEP 3</span>
                <div>
                  <strong className="text-slate-900 dark:text-white block font-bold">{isKn ? 'ಲಿಖಿತ ಸಮನ್ಸ್ ಕೇಳಿ' : 'Demand Physical Summons via Post'}</strong>
                  <span>{isKn ? 'ಸಿಆರ್‌ಪಿಸಿ ಸೆಕ್ಷನ್ 41A ಪ್ರಕಾರ ಪೊಲೀಸರು ನಿಮ್ಮ ಮನೆ ವಿಳಾಸಕ್ಕೆ ಅಧಿಕೃತ ಪೇಪರ್ ಸಮನ್ಸ್ ಕಳುಹಿಸಬೇಕು ವಿನಃ ವಿಡಿಯೋ ಕರೆ ಮಾಡುವಂತಿಲ್ಲ.' : 'Under Section 41A of the Code of Criminal Procedure (CrPC), law enforcement must serve a physical paper summons delivered to your registered home address.'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================== DEEP DIVE 2: AI VOICE CLONING ===================== */}
      {activeTab === 'voice-cloning' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Executive Summary Card */}
          <div className="bg-purple-50 dark:bg-purple-950/40 border border-purple-300 dark:border-purple-500/60 rounded-2xl p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-purple-200 dark:border-purple-900/60 pb-3">
              <div className="flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span className="font-black text-purple-800 dark:text-purple-300 text-sm uppercase">
                  {isKn ? 'ಬೆದರಿಕೆ ಪ್ರೊಫೈಲ್: ಜನರೇಟಿವ್ ಎಐ ಧ್ವನಿ ಕ್ಲೋನಿಂಗ್' : 'Threat Profile: Generative AI Voice Cloning'}
                </span>
              </div>
              <span className="text-xs bg-purple-600 text-white px-2.5 py-0.5 rounded-full font-bold">
                {isKn ? 'ತಂತ್ರಜ್ಞಾನ: ಡೀಪ್ ಲರ್ನಿಂಗ್ ಆಡಿಯೋ ಸಿಂಥೆಸಿಸ್' : 'Tech: Deep Learning Audio Synthesis'}
              </span>
            </div>

            <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
              {isKn ? (
                <>
                  ಸಾರ್ವಜನಿಕ ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್ ರೀಲ್ಸ್ ಅಥವಾ ಯೂಟ್ಯೂಬ್ ವೀಡಿಯೊಗಳಿಂದ ಕೇವಲ <strong>3 ರಿಂದ 5 ಸೆಕೆಂಡುಗಳ ಆಡಿಯೋ</strong> ಪಡೆದು, ಎಐ ತಂತ್ರಜ್ಞಾನದ ಮೂಲಕ ನಿಮ್ಮ ಮಗ, ಮಗಳು ಅಥವಾ ಸಂಬಂಧಿಕರ ಧ್ವನಿಯನ್ನು 99% ನಿಖರವಾಗಿ ನಕಲು ಮಾಡಲಾಗುತ್ತದೆ. ಅಪಘಾತ ಅಥವಾ ಅಪಹರಣದ ಸುಳ್ಳು ಕಥೆ ಕಟ್ಟಿ ಪೋಷಕರಿಂದ ಲಕ್ಷಾಂತರ ರೂಪಾಯಿ ಸುಲಿಗೆ ಮಾಡಲಾಗುತ್ತದೆ.
                </>
              ) : (
                <>
                  With as little as <strong>3 to 5 seconds of audio</strong> scraped from public Instagram reels, YouTube shorts, or TikTok clips, cybercriminals use neural voice synthesis engines to clone your loved one's exact vocal timbre, breath pauses, and speech cadence. They use this cloned voice in simulated panic phone calls to extract rapid ransoms.
                </>
              )}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
              <div className="bg-white dark:bg-slate-900/80 p-3 rounded-xl border border-purple-200 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 block mb-0.5">{isKn ? 'ಜಾಗತಿಕ ಹೆಚ್ಚಳ:' : 'Global Growth:'}</span>
                <span className="text-purple-600 dark:text-purple-400 font-black text-sm">+1,530% Increase</span>
              </div>
              <div className="bg-white dark:bg-slate-900/80 p-3 rounded-xl border border-purple-200 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 block mb-0.5">{isKn ? 'ಬೇಡಿಕೆಯಿಡುವ ಸುಲಿಗೆ ಹಣ:' : 'Average Ransom Demanded:'}</span>
                <span className="text-slate-800 dark:text-slate-200 font-bold">₹1.5 Lakhs to ₹12 Lakhs</span>
              </div>
              <div className="bg-white dark:bg-slate-900/80 p-3 rounded-xl border border-purple-200 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 block mb-0.5">{isKn ? 'ಪ್ರಮುಖ ಗುರಿ:' : 'Primary Target:'}</span>
                <span className="text-cyan-700 dark:text-cyan-300 font-bold">{isKn ? 'ಕಾಲೇಜು ವಿದ್ಯಾರ್ಥಿಗಳ ಪೋಷಕರು' : 'Parents of college students & travelers'}</span>
              </div>
            </div>
          </div>

          {/* How the Clone is Weaponized */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400 flex items-center gap-2">
              <Eye className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>{isKn ? 'ಧ್ವನಿ ಕ್ಲೋನಿಂಗ್ ಅಪಹರಣ ವಂಚನೆಯ ಹಂತಗಳು:' : 'Anatomy of a Voice Clone Kidnapping Scam:'}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="text-purple-600 dark:text-purple-400 font-black text-base">{isKn ? 'ಹಂತ 1: ಧ್ವನಿ ಸಂಗ್ರಹ' : 'Stage 1: Scraping'}</span>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{isKn ? 'ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ ಶೋಧನೆ' : 'Audio Ingestion'}</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {isKn
                    ? 'ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್ ಅಥವಾ ಯೂಟ್ಯೂಬ್‌ನಿಂದ ಸ್ವಚ್ಛವಾದ 5 ಸೆಕೆಂಡುಗಳ ಆಡಿಯೋ ಪಡೆದು ಎಐ ಸಾಫ್ಟ್‌ವೇರ್‌ಗೆ ತರಬೇತಿ ನೀಡುತ್ತಾರೆ.'
                    : 'Scammers search social media for college students who post speaking videos. They isolate clean 5-second audio snippets to train a synthetic model.'}
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="text-purple-600 dark:text-purple-400 font-black text-base">{isKn ? 'ಹಂತ 2: ನಕಲಿ ಕರೆ' : 'Stage 2: Synthetic Call'}</span>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{isKn ? 'ಅಳುವಿನ ನಟನೆ' : 'Emotional Masking'}</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {isKn
                    ? 'ರಾತ್ರಿ ವೇಳೆ ಕರೆ ಮಾಡಿ ಅಳುತ್ತಾ ಮಾತನಾಡುತ್ತಾರೆ. ಅಳುವಿಕೆ ಎಐ ಧ್ವನಿಯ ಸಣ್ಣ ನ್ಯೂನತೆಗಳನ್ನು ಮರೆಮಾಚುತ್ತದೆ.'
                    : 'Caller dials parents late at night. The synthetic voice weeps hysterically to intentionally hide tiny robotic synthesis flaws.'}
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="text-purple-600 dark:text-purple-400 font-black text-base">{isKn ? 'ಹಂತ 3: ಬೆದರಿಕೆ' : 'Stage 3: The Threat'}</span>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{isKn ? 'ತಕ್ಷಣದ ಹಣ ವರ್ಗಾವಣೆ' : 'Unilateral Transfer'}</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {isKn
                    ? 'ನಕಲಿ ಪೊಲೀಸ್ ಅಥವಾ ಕಿಡ್ನ್ಯಾಪರ್ ಫೋನ್ ಪಡೆದು, 15 ನಿಮಿಷಗಳಲ್ಲಿ ಹಣ ಕಳುಹಿಸದಿದ್ದರೆ ಜೈಲಿಗೆ ಕಳುಹಿಸುವುದಾಗಿ ಬೆದರಿಸುತ್ತಾನೆ.'
                    : 'A fake police officer or kidnapper takes the phone and warns: "Transfer funds within 15 minutes or your child goes to jail."'}
                </p>
              </div>
            </div>
          </div>

          {/* Common Red Flags */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-red-600 dark:text-red-400 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              <span>{isKn ? 'ಧ್ವನಿ ಕ್ಲೋನಿಂಗ್‌ನ ಎಚ್ಚರಿಕೆಯ ಕೆಂಪು ಚಿಹ್ನೆಗಳು (ರೆಡ್ ಫ್ಲ್ಯಾಗ್ಸ್):' : 'Audio Red Flags & Tell-Tale Signals:'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {[
                { 
                  flag: isKn ? 'ಅಸಹಜ ರೋಬೋಟಿಕ್ ಉಸಿರಾಟ ಅಥವಾ ನಿಲುಗಡೆ' : 'Unnatural robotic cadence or breathing', 
                  reason: isKn ? 'ಎಐ ಧ್ವನಿ ಮಾದರಿಗಳು ಸಹಜ ಉಸಿರಾಟದ ಏರಿಳಿತಗಳನ್ನು ನಿಖರವಾಗಿ ನಕಲು ಮಾಡಲು ಹೆಣಗಾಡುತ್ತವೆ.' : 'Synthetic voice models struggle with irregular breathing or emotional voice breaks.' 
                },
                { 
                  flag: isKn ? 'ಮಕ್ಕಳಿಗೆ ಕೇವಲ 3-5 ಸೆಕೆಂಡು ಮಾತ್ರ ಮಾತನಾಡಲು ಬಿಡುವುದು' : 'Child only speaks for 3-5 seconds', 
                  reason: isKn ? 'ಹೆಚ್ಚು ಹೊತ್ತು ಮಾತನಾಡಿಸಿದರೆ ಎಐ ಧ್ವನಿಯ ಲೋಪದೋಷಗಳು ಬಯಲಾಗುತ್ತವೆ ಎಂದು ವಂಚಕರು ತಕ್ಷಣ ಫೋನ್ ಕಸಿದುಕೊಳ್ಳುತ್ತಾರೆ.' : 'Scammers quickly yank the phone away because prolonged synthetic conversation reveals glitching.' 
                },
                { 
                  flag: isKn ? 'ಅಪರಿಚಿತ ಫೋನ್ ಸಂಖ್ಯೆಯಿಂದ ಕರೆ ಬರುವುದು' : 'Call comes from an unknown phone number', 
                  reason: isKn ? '"ನನ್ನ ಫೋನ್ ಕಳೆದುಹೋಗಿದೆ" ಅಥವಾ "ಪೊಲೀಸರು ಜಪ್ತಿ ಮಾಡಿದ್ದಾರೆ" ಎಂಬ ನೆಪ ಹೇಳುತ್ತಾರೆ.' : 'Claiming "I lost my phone" or "My phone was seized by police".' 
                },
                { 
                  flag: isKn ? 'ಕ್ರಿಪ್ಟೋ, ಗಿಫ್ಟ್ ಕಾರ್ಡ್ ಅಥವಾ ಯುಪಿಐ ಮೂಲಕವೇ ಹಣ ಕೇಳುವುದು' : 'Demands for cryptocurrency or Gift Cards', 
                  reason: isKn ? 'ಪೊಲೀಸರು, ಆಸ್ಪತ್ರೆಗಳು ಎಂದಿಗೂ ಗಿಫ್ಟ್ ಕಾರ್ಡ್ ಅಥವಾ ಕ್ರಿಪ್ಟೋ ಮೂಲಕ ಹಣ ಸ್ವೀಕರಿಸುವುದಿಲ್ಲ.' : 'Law enforcement, hospitals, or court bails NEVER accept retail gift cards or crypto.' 
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/80 flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block font-bold">{item.flag}</strong>
                    <span className="text-slate-600 dark:text-slate-400">{item.reason}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The Safe Word & Defense Blueprint */}
          <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-300 dark:border-purple-500/60 rounded-2xl p-6 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-800 dark:text-purple-300 flex items-center gap-2">
              <KeyRound className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span>{isKn ? 'ಹಂತ-ಹಂತದ ತಡೆಗಟ್ಟುವ ಕ್ರಮಗಳು (ರಹಸ್ಯ ಕೋಡ್ ವರ್ಡ್ ತಂತ್ರ):' : 'The 3-Step Defense Blueprint:'}</span>
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
              <div className="flex items-start gap-3 bg-white dark:bg-slate-900/60 p-3.5 rounded-xl border border-purple-200 dark:border-slate-800">
                <span className="px-2 py-0.5 rounded bg-purple-600 text-white font-black shrink-0">1. SAFE WORD</span>
                <div>
                  <strong className="text-slate-900 dark:text-white block font-bold">{isKn ? 'ಕುಟುಂಬದ ರಹಸ್ಯ ಕೋಡ್ ವರ್ಡ್ ನಿಗದಿಪಡಿಸಿ' : 'The Family Code Word Protocol'}</strong>
                  <span>{isKn ? 'ಕುಟುಂಬಕ್ಕೆ ಮಾತ್ರ ತಿಳಿದಿರುವ ಒಂದು ರಹಸ್ಯ ಪದವನ್ನು ಮೊದಲೇ ನಿರ್ಧರಿಸಿಟ್ಟುಕೊಳ್ಳಿ. ತುರ್ತು ಕರೆ ಬಂದಾಗ: "ನಮ್ಮ ಕೋಡ್ ವರ್ಡ್ ಯಾವುದು?" ಎಂದು ಕೇಳಿ. ಎಐ ಧ್ವನಿಗೆ ಉತ್ತರಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ!' : 'Create a confidential family secret word known only to parents and children. Ask: "What is our family safe word?" An AI clone will never be able to answer.'}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white dark:bg-slate-900/60 p-3.5 rounded-xl border border-purple-200 dark:border-slate-800">
                <span className="px-2 py-0.5 rounded bg-purple-600 text-white font-black shrink-0">2. TRAP QUESTION</span>
                <div>
                  <strong className="text-slate-900 dark:text-white block font-bold">{isKn ? 'ಸುಳ್ಳು ಪ್ರಶ್ನೆ ಕೇಳಿ ಬಲೆ ಬೀಸಿ' : 'Ask a Question with a Fake Premise'}</strong>
                  <span>{isKn ? 'ಉದಾಹರಣೆಗೆ: "ನಿನ್ನ ಜತೆ ನಿನ್ನ ಕಸಿನ್ ರಮೇಶ್ ಇದ್ದಾನಾ?" ಎಂದು ಕೇಳಿ (ನಿಮಗೆ ರಮೇಶ್ ಎಂಬ ಕಸಿನ್ ಇಲ್ಲದಿದ್ದರೂ). ಗಾಬರಿಯ ವಂಚಕ "ಹೌದು" ಎಂದು ಹೇಳಿದ ತಕ್ಷಣ ಮೋಸ ಬಯಲಾಗುತ್ತದೆ!' : 'Ask: "Is your cousin David still outside?" when you don\'t have a cousin David. A panicked scammer will say "Yes!", instantly exposing the fraud.'}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white dark:bg-slate-900/60 p-3.5 rounded-xl border border-purple-200 dark:border-slate-800">
                <span className="px-2 py-0.5 rounded bg-purple-600 text-white font-black shrink-0">3. DIRECT CHECK</span>
                <div>
                  <strong className="text-slate-900 dark:text-white block font-bold">{isKn ? 'ಮ್ಯೂಟ್ ಮಾಡಿ ನೇರವಾಗಿ ಕರೆ ಮಾಡಿ' : 'Keep Caller on Mute & Dial Directly'}</strong>
                  <span>{isKn ? 'ಕರೆಯನ್ನು ಮ್ಯೂಟ್‌ನಲ್ಲಿಟ್ಟು ಮತ್ತೊಂದು ಫೋನ್‌ನಿಂದ ನಿಮ್ಮ ಮಗ ಅಥವಾ ಮಗಳ ನೈಜ ನಂಬರ್‌ಗೆ ಅಥವಾ ಅವರ ಕಾಲೇಜು ರೂಮ್‌ಮೇಟ್‌ಗೆ ಕರೆ ಮಾಡಿ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.' : 'Simply mute the call and use another phone to dial your child\'s known phone number or call their school/college roommate.'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================== DEEP DIVE 3: BIOMETRIC AEPS THEFT ===================== */}
      {activeTab === 'aeps-theft' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Executive Summary Card */}
          <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-500/60 rounded-2xl p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200 dark:border-amber-900/60 pb-3">
              <div className="flex items-center gap-2">
                <Fingerprint className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <span className="font-black text-amber-800 dark:text-amber-300 text-sm uppercase">
                  {isKn ? 'ಬೆದರಿಕೆ ಪ್ರೊಫೈಲ್: ಆಧಾರ್ AePS ಬಯೋಮೆಟ್ರಿಕ್ ಕ್ಲೋನಿಂಗ್' : 'Threat Profile: Aadhaar AePS Biometric Cloning'}
                </span>
              </div>
              <span className="text-xs bg-amber-600 text-white px-2.5 py-0.5 rounded-full font-bold">
                {isKn ? 'ದಾಳಿ ವಿಧಾನ: ಮೈಕ್ರೋ-ಎಟಿಎಂ / PoS ದುರುಪಯೋಗ' : 'Attack Vector: Micro-ATM / PoS Exploit'}
              </span>
            </div>

            <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
              {isKn ? (
                <>
                  <strong>ಆಧಾರ್ ಸಕ್ರಿಯಗೊಳಿಸಿದ ಪಾವತಿ ವ್ಯವಸ್ಥೆ (AePS)</strong> ಮೂಲಕ ಯಾವುದೇ ಎಟಿಎಂ ಕಾರ್ಡ್, ಪಿನ್ ಅಥವಾ ಒಟಿಪಿ ಇಲ್ಲದೆಯೇ ಕೇವಲ <strong>12-ಅಂಕಿಯ ಆಧಾರ್ ಸಂಖ್ಯೆ ಮತ್ತು ಹೆಬ್ಬೆರಳಿನ ಗುರುತಿನಿಂದ</strong> ಮೈಕ್ರೋ-ಎಟಿಎಂಗಳ ಮೂಲಕ ನಗದು ಹಿಂಪಡೆಯಬಹುದು! ವಂಚಕರು ಸಾರ್ವಜನಿಕ ಭೂ ನೋಂದಣಿ ವೆಬ್‌ಸೈಟ್‌ಗಳಿಂದ ಜನರ ಹೆಬ್ಬೆರಳಿನ ಮುದ್ರೆಯನ್ನು ಪಡೆದು, ಸಿಲಿಕಾನ್ ರಬ್ಬರ್ ಬೆರಳುಗಳನ್ನು ತಯಾರಿಸಿ ಬ್ಯಾಂಕ್ ಖಾತೆಯಿಂದ ಹಣ ಲೂಟಿ ಮಾಡುತ್ತಿದ್ದಾರೆ.
                </>
              ) : (
                <>
                  The <strong>Aadhaar Enabled Payment System (AePS)</strong> allows bank account holders to withdraw cash at merchant micro-ATMs using only their <strong>12-digit Aadhaar number and a thumb biometric scan—without needing any ATM PIN, debit card, or OTP!</strong> Criminals extract scanned citizen thumbprints from public land registration portals, create silicon rubber molds, and silently siphon up to ₹10,000 every night.
                </>
              )}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
              <div className="bg-white dark:bg-slate-900/80 p-3 rounded-xl border border-amber-200 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 block mb-0.5">{isKn ? 'ವರದಿಯಾದ ಪ್ರಕರಣಗಳು:' : 'Reported Cases:'}</span>
                <span className="text-amber-600 dark:text-amber-400 font-black text-sm">85,000+ Incidents in India</span>
              </div>
              <div className="bg-white dark:bg-slate-900/80 p-3 rounded-xl border border-amber-200 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 block mb-0.5">{isKn ? 'ಸರಾಸರಿ ನಷ್ಟ:' : 'Average Loss per Victim:'}</span>
                <span className="text-slate-800 dark:text-slate-200 font-bold">₹10,000 to ₹80,000</span>
              </div>
              <div className="bg-white dark:bg-slate-900/80 p-3 rounded-xl border border-amber-200 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 block mb-0.5">{isKn ? 'ಬಯೋಮೆಟ್ರಿಕ್ ಸೋರಿಕೆಯ ಮೂಲ:' : 'Primary Leaked Source:'}</span>
                <span className="text-cyan-700 dark:text-cyan-300 font-bold">{isKn ? 'ಜಮೀನು/ಆಸ್ತಿ ನೋಂದಣಿ ಪತ್ರಗಳು' : 'Land Registry Deeds & Sale Records'}</span>
              </div>
            </div>
          </div>

          {/* How Criminals Clone Biometrics */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400 flex items-center gap-2">
              <Eye className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>{isKn ? 'ಬಯೋಮೆಟ್ರಿಕ್ ಕಳ್ಳತನ ಹೇಗೆ ನಡೆಯುತ್ತದೆ (ಕಾರ್ಯವಿಧಾನ):' : 'How The Biometric Cloning Attack Works:'}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="text-amber-600 dark:text-amber-400 font-black text-base">{isKn ? 'ಹಂತ 1: ಹೆಬ್ಬೆರಳು ಕಳವು' : 'Step 1: Harvesting'}</span>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{isKn ? 'ಆಸ್ತಿ ನೋಂದಣಿ ಪೋರ್ಟಲ್' : 'Land Registry PDFs'}</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {isKn
                    ? 'ಸರ್ಕಾರಿ ಕಂದಾಯ ವೆಬ್‌ಸೈಟ್‌ಗಳಲ್ಲಿ ಪ್ರಕಟವಾಗುವ ಆಸ್ತಿ ಕ್ರಯಪತ್ರಗಳಲ್ಲಿ ನಾಗರಿಕರ ಹೆಬ್ಬೆರಳಿನ ಗುರುತು ಮತ್ತು ಆಧಾರ್ ಸಂಖ್ಯೆ ಸ್ಪಷ್ಟವಾಗಿ ಕಾಣಿಸುತ್ತದೆ.'
                    : 'State land record websites often publish property sale deeds containing high-resolution scanned citizen fingerprints and Aadhaar numbers.'}
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="text-amber-600 dark:text-amber-400 font-black text-base">{isKn ? 'ಹಂತ 2: ನಕಲು ತಯಾರಿಕೆ' : 'Step 2: Fabrication'}</span>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{isKn ? 'ಸಿಲಿಕಾನ್ ರಬ್ಬರ್ ಬೆರಳು' : 'Polymer Silicon Molds'}</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {isKn
                    ? 'ಕೆಮಿಕಲ್ ಎಚ್ಚಿಂಗ್ ಮತ್ತು ಸಿಲಿಕಾನ್ ಗಮ್ ಬಳಸಿ ಜನರ ನೈಜ ಬೆರಳಚ್ಚಿನಂತೆಯೇ ನಕಲಿ ರಬ್ಬರ್ ಹೆಬ್ಬೆರಳುಗಳನ್ನು ಅಚ್ಚು ಹಾಕುತ್ತಾರೆ.'
                    : 'Using photographic chemical etching or silicon adhesive, criminals fabricate replica rubber thumbs with identical dermal ridges.'}
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
                <span className="text-amber-600 dark:text-amber-400 font-black text-base">{isKn ? 'ಹಂತ 3: ಮಧ್ಯರಾತ್ರಿ ಲೂಟಿ' : 'Step 3: Midnight Drain'}</span>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{isKn ? 'ಮೈಕ್ರೋ-ಎಟಿಎಂ ನಗದು ಡ್ರಾ' : 'Micro-ATM Cash-out'}</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {isKn
                    ? 'ಬೇರೆ ರಾಜ್ಯದ ಅಜ್ಞಾತ ಮೈಕ್ರೋ-ಎಟಿಎಂಗಳಲ್ಲಿ ರಾತ್ರಿ 2 ಗಂಟೆಗೆ ಯಾವುದೇ ಒಟಿಪಿ ಇಲ್ಲದೆ ದಿನಕ್ಕೆ ₹10,000 ನಗದು ಕದಿಯುತ್ತಾರೆ.'
                    : 'Scammers use rogue PoS devices in another state to withdraw ₹10,000 cash at 2 AM without triggering any OTP.'}
                </p>
              </div>
            </div>
          </div>

          {/* Common Red Flags */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-red-600 dark:text-red-400 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              <span>{isKn ? 'AePS ಕಳ್ಳತನದ ಎಚ್ಚರಿಕೆಯ ಕೆಂಪು ಚಿಹ್ನೆಗಳು (ರೆಡ್ ಫ್ಲ್ಯಾಗ್ಸ್):' : 'AePS Theft Red Flags:'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {[
                { 
                  flag: isKn ? '"AePS CW" ಅಥವಾ "BC AGENT" ಎಂದು ಬ್ಯಾಂಕ್ ಎಸ್ಎಂಎಸ್' : 'Debit SMS mentioning "AePS CW" or "BC AGENT"', 
                  reason: isKn ? 'ನೀವು ಬ್ಯಾಂಕ್ ಅಥವಾ ಎಟಿಎಂಗೆ ಹೋಗದಿದ್ದರೂ ಈ ಸಂದೇಶ ಬಂದರೆ ಹೆಬ್ಬೆರಳು ದುರುಪಯೋಗವಾಗಿದೆ ಎಂದರ್ಥ.' : 'Indicates cash was withdrawn at a biometric micro-ATM point, not an official bank branch.' 
                },
                { 
                  flag: isKn ? 'ಹಣ ಕಡಿತಕ್ಕೆ ಮುನ್ನ ಯಾವುದೇ ಒಟಿಪಿ (OTP) ಬಾರದಿರುವುದು' : 'No OTP SMS arrived prior to the debit', 
                  reason: isKn ? 'AePS ವ್ಯವಸ್ಥೆಯಲ್ಲಿ ಒಟಿಪಿ ಇರುವುದಿಲ್ಲ—ಕೇವಲ ಹೆಬ್ಬೆರಳಿನ ಗುರುತಿನಿಂದ ಹಣ ಡ್ರಾ ಆಗುತ್ತದೆ.' : 'AePS relies solely on fingerprint verification—OTP is never required for cash withdrawals.' 
                },
                { 
                  flag: isKn ? 'ಪ್ರತಿದಿನ ನಿಖರವಾಗಿ ₹10,000 ಕಡಿತವಾಗುವುದು' : 'Debits of exactly ₹10,000 repeatedly', 
                  reason: isKn ? 'AePS ನಲ್ಲಿ ದೈನಂದಿನ ಗರಿಷ್ಠ ಮಿತಿ ₹10,000; ವಂಚಕರು ಪ್ರತಿದಿನ ಪೂರ್ಣ ಹಣ ಡ್ರಾ ಮಾಡುತ್ತಾರೆ.' : '₹10,000 is the daily cap for biometric withdrawals; criminals drain it systematically every 24 hours.' 
                },
                { 
                  flag: isKn ? 'ನೀವು ಮಲಗಿರುವಾಗ ಮಧ್ಯರಾತ್ರಿ 2 ಗಂಟೆಗೆ ಹಣ ಕಡಿತ' : 'Transactions occurring while you are asleep', 
                  reason: isKn ? 'ಗ್ರಾಹಕರಿಗೆ ತಕ್ಷಣ ತಿಳಿಯದಂತೆ ವಂಚಕರು ಮಧ್ಯರಾತ್ರಿ ವೇಳೆ ಕಳ್ಳತನ ನಡೆಸುತ್ತಾರೆ.' : 'Attackers operate between 1:00 AM and 4:00 AM to delay customer awareness.' 
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700/80 flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block font-bold">{item.flag}</strong>
                    <span className="text-slate-600 dark:text-slate-400">{item.reason}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive UIDAI Biometric Lock Walkthrough */}
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-500/60 rounded-2xl p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-200 dark:border-amber-900/60 pb-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 flex items-center gap-2">
                <Lock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <span>{isKn ? '60-ಸೆಕೆಂಡುಗಳ ಬಯೋಮೆಟ್ರಿಕ್ ಲಾಕ್ ರಕ್ಷಣೆ (ಯುಐಡಿಎಐ ಅಧಿಕೃತ ಮಾರ್ಗದರ್ಶಿ):' : 'The 60-Second Biometric Lock Defense (Official UIDAI Guide):'}</span>
              </h3>
              <a
                href="https://myaadhaar.uidai.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1 font-bold"
              >
                <span>myaadhaar.uidai.gov.in</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
              {[
                { 
                  step: 1, 
                  title: isKn ? '1. myAadhaar ಗೆ ಲಾಗಿನ್' : '1. Log into myAadhaar', 
                  desc: isKn ? 'myaadhaar.uidai.gov.in ಅಥವಾ mAadhaar ಆಪ್ ತೆರೆದು ನಿಮ್ಮ ಆಧಾರ್ & ಒಟಿಪಿ ನಮೂದಿಸಿ.' : 'Visit myaadhaar.uidai.gov.in or open mAadhaar app. Log in with Aadhaar & OTP.' 
                },
                { 
                  step: 2, 
                  title: isKn ? '2. "ಲಾಕ್ ಬಯೋಮೆಟ್ರಿಕ್ಸ್" ಆಯ್ಕೆ' : '2. Select "Lock Biometrics"', 
                  desc: isKn ? 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ನಲ್ಲಿರುವ "Lock / Unlock Biometrics" ಟೈಲ್ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ.' : 'Click the prominent tile labeled "Lock / Unlock Biometrics".' 
                },
                { 
                  step: 3, 
                  title: isKn ? '3. ಲಾಕ್ (LOCKED) ಮಾಡಿ' : '3. Toggle to LOCKED', 
                  desc: isKn ? '"Lock" ಕ್ಲಿಕ್ ಮಾಡಿ. ನಿಮ್ಮ ಹೆಬ್ಬೆರಳು ಮತ್ತು ಕಣ್ಣಿನ ಪಾಪೆ ತಕ್ಷಣ ಲಾಕ್ ಆಗುತ್ತದೆ!' : 'Click "Lock". Your biometric records are now cryptographically locked across all Indian banks!' 
                },
                { 
                  step: 4, 
                  title: isKn ? '4. ಎರರ್ 330 ರಕ್ಷಣೆ' : '4. Error 330 Protection', 
                  desc: isKn ? 'ವಂಚಕರು ಕ್ಲೋನ್ಡ್ ಹೆಬ್ಬೆರಳು ಬಳಸಿದರೂ "Error 330: Biometrics Locked" ಬಂದು ಹಣ ರಕ್ಷಿಸಲ್ಪಡುತ್ತದೆ!' : 'If any scammer attempts to use a cloned thumbprint, the transaction fails instantly with "Error 330"!' 
                }
              ].map((s) => (
                <div 
                  key={s.step}
                  onClick={() => setActiveWalkthroughStep(s.step)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer space-y-1.5 ${
                    activeWalkthroughStep === s.step
                      ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md scale-[1.02]'
                      : 'bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="text-xs font-black">{s.title}</div>
                  <p className="text-[11px] leading-relaxed opacity-90">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* RBI Zero-Liability Refund Rights */}
            <div className="bg-white dark:bg-slate-900/90 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs space-y-2">
              <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 uppercase">
                <Scale className="w-4 h-4" />
                <span>{isKn ? '100% ಮರುಪಾವತಿ ಪಡೆಯುವ ನಿಮ್ಮ ಕಾನೂನು ಹಕ್ಕು (ಆರ್‌ಬಿಐ ಸುತ್ತೋಲೆ):' : 'Your Legal Right to 100% Refund (RBI Circular RBI/2017-18/15):'}</span>
              </span>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {isKn
                  ? 'ಭಾರತೀಯ ರಿಸರ್ವ್ ಬ್ಯಾಂಕ್ (RBI) ನಿಯಮಾವಳಿಗಳ ಪ್ರಕಾರ: ಅನಧಿಕೃತ AePS ಹಣ ಕಡಿತವಾದ 3 ಕೆಲಸದ ದಿನಗಳೊಳಗೆ ನಿಮ್ಮ ಬ್ಯಾಂಕ್‌ಗೆ ಲಿಖಿತ ದೂರು ಸಲ್ಲಿಸಿದರೆ, ಗ್ರಾಹಕರ ಮೇಲೆ ಯಾವುದೇ ಹೊಣೆಗಾರಿಕೆ ಇರುವುದಿಲ್ಲ (ZERO LIABILITY) ಮತ್ತು ಬ್ಯಾಂಕ್ 10 ಕೆಲಸದ ದಿನಗಳೊಳಗೆ ನಿಮ್ಮ ಪೂರ್ಣ ಹಣವನ್ನು ಮರುಪಾವತಿಸಬೇಕು!'
                  : 'Under the Reserve Bank of India charter on "Customer Protection – Limiting Liability of Customers in Unauthorised Electronic Banking Transactions": If you notify your bank in writing within 3 working days, customer has ZERO LIABILITY, and bank must credit the disputed amount within 10 working days!'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
