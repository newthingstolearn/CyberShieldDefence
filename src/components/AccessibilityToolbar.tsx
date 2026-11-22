import React from 'react';
import { Volume2, VolumeX, Eye, Type, Contrast } from 'lucide-react';
import { AccessibilitySettings, FontSize, LanguageCode } from '../types';
import { speechService, getLangLocale } from '../utils/speechUtils';
import { TRANSLATIONS } from '../data/translations';
import { LanguageDropdown } from './LanguageDropdown';

interface Props {
  settings: AccessibilitySettings;
  onUpdateSettings: (newSettings: Partial<AccessibilitySettings>) => void;
  currentPageTitle: string;
  currentPageSummary: string;
  language: LanguageCode;
  onLanguageChange?: (lang: LanguageCode) => void;
}

export const AccessibilityToolbar: React.FC<Props> = ({
  settings,
  onUpdateSettings,
  currentPageTitle,
  currentPageSummary,
  language,
  onLanguageChange,
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  const toggleSpeech = () => {
    if (isPlaying) {
      speechService.stop();
      setIsPlaying(false);
    } else {
      const textToRead = `${currentPageTitle}. ${currentPageSummary}`;
      const locale = getLangLocale(language);
      speechService.speak(textToRead, locale, () => setIsPlaying(false));
      setIsPlaying(true);
    }
  };

  const handleFontSizeChange = (size: FontSize) => {
    onUpdateSettings({ fontSize: size });
  };

  return (
    <div 
      className="bg-[#FFFFFF]/95 dark:bg-[#100D1C]/95 text-[#6E6B7B] dark:text-slate-100 border-b border-[#8D65EC]/20 px-3 sm:px-4 py-2 text-xs backdrop-blur-md sticky top-0 z-50 shadow-xs transition-colors w-full"
      role="region"
      aria-label="Accessibility and preference options"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-3">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-[#5E17EB] shrink-0" />
          <span className="font-bold text-[#1D1B28] dark:text-slate-200">{t.accessibility}:</span>
        </div>

        <div className="flex items-center flex-wrap gap-2 sm:gap-3">
          {/* Audio Readout */}
          <button
            onClick={toggleSpeech}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
              isPlaying 
                ? 'bg-amber-500 text-black animate-pulse shadow-sm' 
                : 'bg-white dark:bg-slate-800 hover:bg-[#F2EEFC] dark:hover:bg-slate-700 text-[#5E17EB] dark:text-[#C4B5FD] border border-[#8D65EC]/30'
            }`}
            title="Read current page content aloud"
            aria-label={isPlaying ? t.stopAudio : t.readAloud}
          >
            {isPlaying ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            <span>{isPlaying ? t.stopAudio : t.readAloud}</span>
          </button>

          {/* Quick Language Switcher Dropdown (Supports all 10 languages seamlessly) */}
          {onLanguageChange && (
            <LanguageDropdown 
              language={language} 
              onLanguageChange={onLanguageChange} 
              variant="toolbar" 
            />
          )}

          {/* Font Size Selector */}
          <div className="flex items-center gap-1 bg-white dark:bg-slate-800 rounded-md p-0.5 border border-[#8D65EC]/25 shadow-xs">
            <Type className="w-3.5 h-3.5 ml-1.5 text-[#8D65EC]" />
            <button
              onClick={() => handleFontSizeChange('normal')}
              className={`px-2 py-0.5 rounded text-xs transition-all cursor-pointer font-bold ${
                settings.fontSize === 'normal' 
                  ? 'bg-[#5E17EB] text-white shadow-xs' 
                  : 'text-[#6E6B7B] dark:text-slate-300 hover:text-[#1D1B28] dark:hover:text-white'
              }`}
              title={t.normal}
            >
              A
            </button>
            <button
              onClick={() => handleFontSizeChange('large')}
              className={`px-2 py-0.5 rounded text-xs transition-all cursor-pointer font-bold ${
                settings.fontSize === 'large' 
                  ? 'bg-[#5E17EB] text-white shadow-xs' 
                  : 'text-[#6E6B7B] dark:text-slate-300 hover:text-[#1D1B28] dark:hover:text-white'
              }`}
              title={t.large}
            >
              A+
            </button>
            <button
              onClick={() => handleFontSizeChange('xlarge')}
              className={`px-2 py-0.5 rounded text-xs transition-all cursor-pointer font-bold ${
                settings.fontSize === 'xlarge' 
                  ? 'bg-[#5E17EB] text-white shadow-xs' 
                  : 'text-[#6E6B7B] dark:text-slate-300 hover:text-[#1D1B28] dark:hover:text-white'
              }`}
              title={t.xlarge}
            >
              A++
            </button>
          </div>

          {/* High Contrast Toggle */}
          <button
            onClick={() => onUpdateSettings({ highContrast: !settings.highContrast })}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
              settings.highContrast 
                ? 'bg-yellow-400 text-black font-bold' 
                : 'bg-white dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700'
            }`}
            title="Toggle High Contrast for low-vision readability"
            aria-pressed={settings.highContrast}
          >
            <Contrast className="w-3.5 h-3.5" />
            <span>{t.highContrast}</span>
          </button>

          {/* Dyslexic Font Toggle */}
          <button
            onClick={() => onUpdateSettings({ dyslexicFont: !settings.dyslexicFont })}
            className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
              settings.dyslexicFont 
                ? 'bg-purple-600 text-white font-bold' 
                : 'bg-white dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700'
            }`}
            title="Toggle high-legibility font for dyslexic readers"
            aria-pressed={settings.dyslexicFont}
          >
            {t.dyslexicFont}
          </button>
        </div>
      </div>
    </div>
  );
};
