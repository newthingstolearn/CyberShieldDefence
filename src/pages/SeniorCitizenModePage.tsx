import React from 'react';
import { 
  HeartHandshake, 
  Volume2, 
  VolumeX, 
  PhoneCall, 
  CheckCircle, 
  XCircle, 
  ShieldAlert, 
  AlertTriangle 
} from 'lucide-react';
import { 
  SENIOR_SCENARIOS, 
  SENIOR_SCENARIOS_KN, 
  SENIOR_SIMPLE_TIPS, 
  SENIOR_SIMPLE_TIPS_KN 
} from '../data/seniorCitizenData';
import { SeniorDoDont, LanguageCode } from '../types';
import { speechService, getLangLocale } from '../utils/speechUtils';
import { TRANSLATIONS } from '../data/translations';

interface Props {
  onOpenSOS: () => void;
  language?: LanguageCode;
}

export const SeniorCitizenModePage: React.FC<Props> = ({ onOpenSOS, language = 'en' }) => {
  const [activeAudioId, setActiveAudioId] = React.useState<string | null>(null);
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  const scenarios = language === 'kn' ? SENIOR_SCENARIOS_KN : SENIOR_SCENARIOS;
  const tips = language === 'kn' ? SENIOR_SIMPLE_TIPS_KN : SENIOR_SIMPLE_TIPS;

  const handlePlayAudio = (scenario: SeniorDoDont) => {
    if (activeAudioId === scenario.id) {
      speechService.stop();
      setActiveAudioId(null);
    } else {
      speechService.stop();
      setActiveAudioId(scenario.id);
      const locale = getLangLocale(language);
      speechService.speak(scenario.audioText, locale, () => {
        setActiveAudioId(null);
      }, 0.88); // slower speech rate for seniors
    }
  };

  const handleStopAllAudio = () => {
    speechService.stop();
    setActiveAudioId(null);
  };

  return (
    <div className="space-y-12 py-8 max-w-5xl mx-auto">
      {/* Friendly Accessible Header */}
      <div className="bg-gradient-to-br from-slate-900 via-[#19102c] to-slate-900 p-6 sm:p-12 rounded-3xl text-white border-2 border-[#8D65EC]/50 shadow-2xl space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#5E17EB]/20 text-[#8D65EC] text-sm font-black border border-[#8D65EC]/40">
          <HeartHandshake className="w-5 h-5 text-[#8D65EC]" />
          <span>{language === 'kn' ? 'ಹಿರಿಯ ನಾಗರಿಕರ ಸರಳ ರಕ್ಷಣೆ' : 'SAFE & SIMPLE SENIOR CITIZEN GUIDE'}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
          {language === 'kn' 
            ? 'ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆ & ಪಿಂಚಣಿ ರಕ್ಷಣೆಗೆ ಸುಲಭ ಮಾರ್ಗದರ್ಶಿ' 
            : 'Clear, Easy Protection for You & Your Pension'}
        </h1>

        <p className="text-base sm:text-xl text-slate-200 max-w-3xl leading-relaxed">
          {t.seniorSubtitle} {language === 'kn' 
            ? 'ಓದಲು ಕಷ್ಟವಾದರೆ, ಯಾವುದೇ ಕಾರ್ಡ್ ಮೇಲಿರುವ "ಧ್ವನಿಯಲ್ಲಿ ಆಲಿಸಿ" ಬಟನ್ ಒತ್ತಿ.' 
            : 'Click the "Listen to Audio" button on any card to hear it read out loud in a clear, friendly voice.'}
        </p>

        {/* Big Emergency Panic SOS Button */}
        <div className="pt-2 flex flex-col sm:flex-row gap-4">
          <button
            onClick={onOpenSOS}
            className="px-8 py-5 bg-red-600 hover:bg-red-500 text-white font-black text-lg sm:text-xl rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-red-950 transition-transform active:scale-95 cursor-pointer"
          >
            <PhoneCall className="w-6 h-6 animate-bounce" />
            <span>{language === 'kn' ? 'ನನಗೆ ತಕ್ಷಣ ಸಹಾಯ ಬೇಕು (ತುರ್ತು SOS 1930)' : 'I NEED HELP RIGHT NOW (EMERGENCY SOS)'}</span>
          </button>

          {activeAudioId && (
            <button
              onClick={handleStopAllAudio}
              className="px-6 py-5 bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-base rounded-2xl flex items-center justify-center gap-2 border border-amber-400 cursor-pointer"
            >
              <VolumeX className="w-6 h-6" />
              <span>{t.stopAudio}</span>
            </button>
          )}
        </div>
      </div>

      {/* 4 Golden Simple Rules for Seniors */}
      <section className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-black text-[#1D1B28] dark:text-white">
          {language === 'kn' ? 'ನೆನಪಿನಲ್ಲಿಡಬೇಕಾದ 4 ಸುವರ್ಣ ನಿಯಮಗಳು' : '4 Simple Rules to Remember'}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tips.map((tip, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl border-2 border-[#8D65EC]/20 shadow-sm space-y-2 hover:border-[#8D65EC]/60 transition-all"
            >
              <h3 className="text-lg sm:text-xl font-black text-[#5E17EB] dark:text-[#8D65EC]">
                {tip.title}
              </h3>
              <p className="text-sm sm:text-base text-[#1D1B28] dark:text-slate-300 leading-relaxed font-medium">
                {tip.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Real-World DO / DON'T Scenarios */}
      <section className="space-y-8">
        <div className="border-b-2 border-slate-200 dark:border-slate-800 pb-4">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1D1B28] dark:text-white">
            {language === 'kn' ? 'ಈ ಸಂದರ್ಭಗಳಲ್ಲಿ ಏನು ಮಾಡಬೇಕು (DO / DON\'T):' : 'What To Do In These Common Situations:'}
          </h2>
          <p className="text-base text-[#6E6B7B] dark:text-slate-400 mt-1">
            {language === 'kn' ? 'ಓದುವ ಬದಲು ಧ್ವನಿಯಲ್ಲಿ ಕೇಳಲು ಬಟನ್ ಒತ್ತಿ.' : 'Click "Listen to Voice Explanation" if you want to listen instead of reading.'}
          </p>
        </div>

        <div className="space-y-8">
          {scenarios.map((item) => {
            const isPlaying = activeAudioId === item.id;
            return (
              <div 
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-[#8D65EC]/30 shadow-lg space-y-6"
              >
                {/* Scenario Header with Audio Button */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div>
                    <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-400 border border-red-300 dark:border-red-800">
                      {item.dangerLevel}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#1D1B28] dark:text-white mt-2">
                      {item.scenarioTitle}
                    </h3>
                  </div>

                  <button
                    onClick={() => handlePlayAudio(item)}
                    className={`px-5 py-3 rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shrink-0 ${
                      isPlaying
                        ? 'bg-amber-500 text-slate-950 font-black animate-pulse'
                        : 'bg-[#5E17EB] hover:bg-[#4D0FD4] text-white shadow-[#5E17EB]/30'
                    }`}
                    aria-label={`Listen to audio explanation for ${item.scenarioTitle}`}
                  >
                    {isPlaying ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    <span>{isPlaying ? t.pauseAudio : t.listenAudio}</span>
                  </button>
                </div>

                {/* What The Caller Says & Wants */}
                <div className="space-y-3">
                  <div className="bg-[#F2EEFC] dark:bg-[#1a1230]/70 p-4 rounded-2xl border border-[#8D65EC]/40 text-sm sm:text-base">
                    <span className="font-black text-[#5E17EB] dark:text-[#8D65EC] block mb-1">
                      {language === 'kn' ? 'ಕರೆ ಮಾಡಿದವರು ಏನು ಹೇಳುತ್ತಾರೆ:' : 'WHAT THE CALLER SAYS:'}
                    </span>
                    <p className="text-[#1D1B28] dark:text-slate-200 italic font-medium">
                      {item.callerClaim}
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 text-sm sm:text-base">
                    <span className="font-black text-slate-700 dark:text-slate-300 block mb-1">
                      {language === 'kn' ? 'ವಂಚಕರು ರಹಸ್ಯವಾಗಿ ಏನು ಬಯಸುತ್ತಾರೆ:' : 'WHAT THE SCAMMER SECRETLY WANTS:'}
                    </span>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                      {item.whatScammerWants}
                    </p>
                  </div>
                </div>

                {/* BIG DO and DONT Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {/* DO */}
                  <div className="bg-emerald-50 dark:bg-emerald-950/30 p-5 rounded-2xl border-2 border-emerald-500 text-sm sm:text-base space-y-2">
                    <div className="flex items-center gap-2 font-black text-emerald-700 dark:text-emerald-400 text-lg">
                      <CheckCircle className="w-6 h-6 shrink-0" />
                      <span>{t.dosTitle}</span>
                    </div>
                    <p className="text-slate-800 dark:text-slate-100 font-bold leading-relaxed">
                      {item.doAction}
                    </p>
                  </div>

                  {/* DONT */}
                  <div className="bg-red-50 dark:bg-red-950/30 p-5 rounded-2xl border-2 border-red-500 text-sm sm:text-base space-y-2">
                    <div className="flex items-center gap-2 font-black text-red-700 dark:text-red-400 text-lg">
                      <XCircle className="w-6 h-6 shrink-0" />
                      <span>{t.dontsTitle}</span>
                    </div>
                    <p className="text-slate-800 dark:text-slate-100 font-bold leading-relaxed">
                      {item.dontAction}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Helpful Reassurance Footer Card */}
      <div className="bg-[#F2EEFC] dark:bg-[#1a1230] p-6 sm:p-8 rounded-3xl border-2 border-[#8D65EC]/40 text-center space-y-3">
        <h3 className="text-xl sm:text-2xl font-black text-[#1D1B28] dark:text-white">
          {language === 'kn' ? 'ನೆನಪಿಡಿ: ನಿರ್ಧಾರ ನಿಮ್ಮ ಕೈಯಲ್ಲಿದೆ' : 'Remember: You Are In Control.'}
        </h3>
        <p className="text-sm sm:text-base text-[#6E6B7B] dark:text-purple-300 max-w-xl mx-auto leading-relaxed">
          {language === 'kn'
            ? 'ಯಾವುದೇ ಅನುಮಾನ ಬಂದರೂ ತಕ್ಷಣ ಫೋನ್ ಕಟ್ ಮಾಡಿ. ಯಾರಾದರೂ ನಿಮ್ಮನ್ನು ಹೆದರಿಸಿದರೆ ಎಂದಿಗೂ ಹೆದರಬೇಡಿ, ತಕ್ಷಣ ನಿಮ್ಮ ಮಕ್ಕಳಿಗೆ ಅಥವಾ ಸ್ಥಳೀಯ ಬ್ಯಾಂಕಿಗೆ ತಿಳಿಸಿ.'
            : 'You have every right to hang up any telephone call at any moment. If anyone ever tries to rush you or scare you, hang up immediately and talk to your family or bank branch in person.'}
        </p>
      </div>
    </div>
  );
};
