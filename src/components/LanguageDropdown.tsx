import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { LanguageCode } from '../types';
import { LANGUAGE_OPTIONS } from '../data/translations';

interface Props {
  language: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  className?: string;
  variant?: 'nav' | 'toolbar';
}

export const LanguageDropdown: React.FC<Props> = ({
  language,
  onLanguageChange,
  className = '',
  variant = 'nav',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption = LANGUAGE_OPTIONS.find(o => o.code === language) || LANGUAGE_OPTIONS[0];

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleDocumentClick);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (code: LanguageCode) => {
    onLanguageChange(code);
    setIsOpen(false);
  };

  const isNav = variant === 'nav';

  return (
    <div className={`relative shrink-0 ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 transition-all cursor-pointer font-bold select-none ${
          isNav
            ? `px-2.5 py-1.5 rounded-xl border text-xs shadow-xs ${
                isOpen
                  ? 'bg-[#F2EEFC] dark:bg-[#5E17EB]/25 border-[#8D65EC] text-[#5E17EB] dark:text-[#C4B5FD] ring-2 ring-[#8D65EC]/20'
                  : 'bg-slate-100 dark:bg-slate-800 hover:bg-[#F2EEFC]/50 dark:hover:bg-slate-700 border-slate-300 dark:border-slate-700 text-[#1D1B28] dark:text-slate-200'
              }`
            : `px-2 py-1 rounded-md border text-xs shadow-xs ${
                isOpen
                  ? 'bg-[#F2EEFC] dark:bg-[#5E17EB]/25 border-[#8D65EC] text-[#5E17EB] dark:text-[#C4B5FD]'
                  : 'bg-white dark:bg-slate-800 hover:bg-[#F2EEFC]/50 dark:hover:bg-slate-700/80 border-slate-300 dark:border-slate-700 text-[#1D1B28] dark:text-slate-200'
              }`
        }`}
        aria-label="Select Language"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        title={`Current Language: ${currentOption.label} (${currentOption.nativeName})`}
      >
        <Globe className="w-3.5 h-3.5 text-[#5E17EB] dark:text-[#8D65EC] shrink-0" />
        <span className="uppercase tracking-wider">{currentOption.code}</span>
        <span className="hidden sm:inline font-medium text-[#6E6B7B] dark:text-slate-400 text-[11px]">
          ({currentOption.nativeName})
        </span>
        <ChevronDown 
          className={`w-3 h-3 text-[#6E6B7B] transition-transform duration-200 shrink-0 ${
            isOpen ? 'rotate-180 text-[#5E17EB]' : ''
          }`} 
        />
      </button>

      {isOpen && (
        <div 
          role="listbox"
          aria-label="Choose application language"
          className="absolute right-0 top-full mt-1.5 w-60 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-[#8D65EC]/30 py-1.5 z-50 max-h-80 overflow-y-auto animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="px-3.5 py-2 text-[10px] font-black uppercase tracking-wider text-[#6E6B7B] dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between sticky top-0 bg-white dark:bg-slate-900 z-10">
            <span>
              {language === 'kn' ? 'ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ (10 ಭಾಷೆಗಳು)' : language === 'hi' ? 'भाषा चुनें (10 भाषाएं)' : 'Select Language (10 Languages)'}
            </span>
            <Globe className="w-3.5 h-3.5 text-[#5E17EB]" />
          </div>

          <div className="p-1 space-y-0.5">
            {LANGUAGE_OPTIONS.map((opt) => {
              const isSelected = language === opt.code;
              return (
                <button
                  key={opt.code}
                  role="option"
                  aria-selected={isSelected}
                  type="button"
                  onClick={() => handleSelect(opt.code)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#F2EEFC] dark:bg-[#5E17EB]/25 text-[#5E17EB] dark:text-[#C4B5FD] font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-[#F2EEFC]/40 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-xs">{opt.label}</span>
                      <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">
                        [{opt.code}]
                      </span>
                    </div>
                    <span className="text-[11px] text-[#5E17EB] dark:text-[#C4B5FD] font-medium">
                      {opt.nativeName}
                    </span>
                  </div>
                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-[#5E17EB]/20 text-[#5E17EB] dark:text-[#C4B5FD] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
