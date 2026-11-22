import React from 'react';
import { 
  Shield, 
  AlertOctagon, 
  HelpCircle, 
  LifeBuoy, 
  Wrench, 
  HeartHandshake, 
  GraduationCap, 
  PhoneCall, 
  Moon, 
  Sun, 
  Globe, 
  Menu, 
  X, 
  PhoneForwarded,
  Bot,
  ChevronDown,
  Check
} from 'lucide-react';
import { ActivePage, LanguageCode } from '../types';
import { LANGUAGE_OPTIONS, TRANSLATIONS } from '../data/translations';
import { LanguageDropdown } from './LanguageDropdown';

interface Props {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  language: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenSOS: () => void;
}

export const Navbar: React.FC<Props> = ({
  activePage,
  onNavigate,
  language,
  onLanguageChange,
  isDark,
  onToggleTheme,
  onOpenSOS,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const t = TRANSLATIONS[language] || TRANSLATIONS.en;
  const currentLangOption = LANGUAGE_OPTIONS.find(o => o.code === language) || LANGUAGE_OPTIONS[0];

  // Clean concise labels for desktop navigation to prevent wrapping and overflow
  const getNavLabel = (id: ActivePage): string => {
    if (language === 'kn') {
      switch (id) {
        case 'home': return 'ಮುಖಪುಟ';
        case 'scams': return 'ವಂಚನೆಗಳು';
        case 'quiz': return 'ರಸಪ್ರಶ್ನೆ';
        case 'emergency': return 'ತುರ್ತು ನೆರವು';
        case 'tools': return 'ಪರಿಕರಗಳು';
        case 'senior': return 'ಹಿರಿಯರು';
        case 'student': return 'ವಿದ್ಯಾರ್ಥಿ';
        case 'helplines': return 'ಸಹಾಯವಾಣಿ';
        case 'chatbot': return 'ಎಐ ಸಲಹೆಗಾರ';
        default: return '';
      }
    }
    if (language === 'hi') {
      switch (id) {
        case 'home': return 'होम';
        case 'scams': return 'घोटाले';
        case 'quiz': return 'क्विज';
        case 'emergency': return 'धोखाधड़ी';
        case 'tools': return 'टूल्स';
        case 'senior': return 'वरिष्ठ';
        case 'student': return 'छात्र';
        case 'helplines': return 'हेल्पलाइन';
        case 'chatbot': return 'एआई सलाहकार';
        default: return '';
      }
    }
    if (language === 'es') {
      switch (id) {
        case 'home': return 'Inicio';
        case 'scams': return 'Estafas';
        case 'quiz': return 'Quiz';
        case 'emergency': return 'Auxilio';
        case 'tools': return 'Herramientas';
        case 'senior': return 'Adultos';
        case 'student': return 'Jóvenes';
        case 'helplines': return 'Ayuda';
        case 'chatbot': return 'IA Asesor';
        default: return '';
      }
    }
    if (language === 'fr') {
      switch (id) {
        case 'home': return 'Accueil';
        case 'scams': return 'Arnaques';
        case 'quiz': return 'Quiz';
        case 'emergency': return 'Urgence';
        case 'tools': return 'Outils';
        case 'senior': return 'Seniors';
        case 'student': return 'Jeunes';
        case 'helplines': return 'Numéros';
        case 'chatbot': return 'IA Conseil';
        default: return '';
      }
    }
    if (language === 'de') {
      switch (id) {
        case 'home': return 'Start';
        case 'scams': return 'Betrug';
        case 'quiz': return 'Quiz';
        case 'emergency': return 'Notfall';
        case 'tools': return 'Tools';
        case 'senior': return 'Senioren';
        case 'student': return 'Jugend';
        case 'helplines': return 'Hilfe';
        case 'chatbot': return 'KI-Berater';
        default: return '';
      }
    }
    if (language === 'bn') {
      switch (id) {
        case 'home': return 'হোম';
        case 'scams': return 'প্রতারণা';
        case 'quiz': return 'কুইজ';
        case 'emergency': return 'জরুরি';
        case 'tools': return 'টুলস';
        case 'senior': return 'প্রবীণ';
        case 'student': return 'শিক্ষার্থী';
        case 'helplines': return 'হেল্পলাইন';
        case 'chatbot': return 'এআই পরামর্শক';
        default: return '';
      }
    }
    if (language === 'ta') {
      switch (id) {
        case 'home': return 'முகப்பு';
        case 'scams': return 'மோசடிகள்';
        case 'quiz': return 'வினாடி';
        case 'emergency': return 'அவசரம்';
        case 'tools': return 'கருவிகள்';
        case 'senior': return 'முதியோர்';
        case 'student': return 'மாணவர்';
        case 'helplines': return 'உதவி';
        case 'chatbot': return 'AI ஆலோசகர்';
        default: return '';
      }
    }
    if (language === 'te') {
      switch (id) {
        case 'home': return 'హోమ్';
        case 'scams': return 'మోసాలు';
        case 'quiz': return 'క్విజ్';
        case 'emergency': return 'సహాయం';
        case 'tools': return 'సాధనాలు';
        case 'senior': return 'వృద్ధులు';
        case 'student': return 'విద్యార్థి';
        case 'helplines': return 'నంబర్లు';
        case 'chatbot': return 'AI సలహాదారు';
        default: return '';
      }
    }
    if (language === 'mr') {
      switch (id) {
        case 'home': return 'मुख्यपृष्ठ';
        case 'scams': return 'घोटाळे';
        case 'quiz': return 'क्विझ';
        case 'emergency': return 'मदत';
        case 'tools': return 'टूल्स';
        case 'senior': return 'ज्येष्ठ';
        case 'student': return 'विद्यार्थी';
        case 'helplines': return 'हेल्पलाइन';
        case 'chatbot': return 'एआय सल्लागार';
        default: return '';
      }
    }
    switch (id) {
      case 'home': return 'Home';
      case 'scams': return 'Scams';
      case 'quiz': return 'Quiz';
      case 'emergency': return 'If Scammed';
      case 'tools': return 'Tools';
      case 'senior': return 'Seniors';
      case 'student': return 'Students';
      case 'helplines': return 'Helplines';
      case 'chatbot': return 'AI Advisor';
      default: return '';
    }
  };

  const navItems = [
    { id: 'home' as ActivePage, label: getNavLabel('home'), fullTitle: t.navHome, icon: <Shield className="w-3.5 h-3.5 shrink-0" /> },
    { id: 'scams' as ActivePage, label: getNavLabel('scams'), fullTitle: t.navScams, icon: <AlertOctagon className="w-3.5 h-3.5 shrink-0" />, badge: '9 Types', badgeColor: 'bg-red-500/20 text-red-300' },
    { id: 'quiz' as ActivePage, label: getNavLabel('quiz'), fullTitle: t.navQuiz, icon: <HelpCircle className="w-3.5 h-3.5 shrink-0" />, badge: 'Game', badgeColor: 'bg-emerald-500/20 text-emerald-300' },
    { id: 'emergency' as ActivePage, label: getNavLabel('emergency'), fullTitle: t.navEmergency, icon: <LifeBuoy className="w-3.5 h-3.5 shrink-0" />, badge: 'SOS', badgeColor: 'bg-amber-500/20 text-amber-300' },
    { id: 'tools' as ActivePage, label: getNavLabel('tools'), fullTitle: t.navTools, icon: <Wrench className="w-3.5 h-3.5 shrink-0" /> },
    { id: 'senior' as ActivePage, label: getNavLabel('senior'), fullTitle: t.navSenior, icon: <HeartHandshake className="w-3.5 h-3.5 shrink-0" />, badge: 'Accessible', badgeColor: 'bg-purple-500/20 text-purple-300' },
    { id: 'student' as ActivePage, label: getNavLabel('student'), fullTitle: t.navStudent, icon: <GraduationCap className="w-3.5 h-3.5 shrink-0" />, badge: 'Youth', badgeColor: 'bg-cyan-500/20 text-cyan-300' },
    { id: 'helplines' as ActivePage, label: getNavLabel('helplines'), fullTitle: t.navHelpline, icon: <PhoneCall className="w-3.5 h-3.5 shrink-0" /> },
    { id: 'chatbot' as ActivePage, label: getNavLabel('chatbot'), fullTitle: t.navChatbot || 'AI Advisor', icon: <Bot className="w-3.5 h-3.5 shrink-0 text-cyan-500" />, badge: 'AI', badgeColor: 'bg-cyan-500/20 text-cyan-400' },
  ];

  const handleSelectNav = (page: ActivePage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2">
          {/* Logo & Brand */}
          <div 
            onClick={() => handleSelectNav('home')}
            className="flex items-center gap-2 cursor-pointer select-none group shrink-0"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#5E17EB] flex items-center justify-center text-white shadow-md shadow-[#5E17EB]/30 ring-2 ring-[#8D65EC]/30 group-hover:scale-105 transition-transform shrink-0">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-[#1D1B28] dark:text-white leading-none">
                  Cyber<span className="text-[#5E17EB] dark:text-[#8D65EC]">Shield</span>
                </span>
                <span className="text-[9px] px-1.5 py-0.5 rounded font-black tracking-wider uppercase bg-[#F2EEFC] dark:bg-[#5E17EB]/25 text-[#5E17EB] dark:text-[#C4B5FD] border border-[#8D65EC]/40 hidden sm:inline leading-none">
                  DEFENSE
                </span>
              </div>
              <p className="text-[9px] text-slate-500 dark:text-slate-400 font-medium hidden 2xl:block leading-none mt-0.5">
                National Cyber Defense & Anti-Fraud Center
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectNav(item.id)}
                  title={item.fullTitle}
                  className={`px-2 xl:px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all whitespace-nowrap shrink-0 relative cursor-pointer ${
                    isActive
                      ? 'bg-[#F2EEFC] dark:bg-[#5E17EB]/20 text-[#5E17EB] dark:text-[#C4B5FD] font-bold ring-1 ring-[#8D65EC]/30'
                      : 'text-[#6E6B7B] dark:text-slate-300 hover:bg-[#F2EEFC]/60 dark:hover:bg-slate-800 hover:text-[#1D1B28] dark:hover:text-white'
                  }`}
                >
                  {item.icon}
                  <span className="whitespace-nowrap">{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#5E17EB] dark:bg-[#8D65EC] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Primary Report Button */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Primary Button: Report an issue */}
            <button
              onClick={onOpenSOS}
              className="px-2.5 sm:px-3 py-1.5 bg-[#5E17EB] hover:bg-[#4D0FD4] text-white font-extrabold text-xs rounded-xl flex items-center gap-1.5 shadow-md shadow-[#5E17EB]/30 border border-[#8D65EC]/40 transition-all hover:scale-105 active:scale-95 shrink-0 whitespace-nowrap cursor-pointer"
              title="Report an issue / Emergency 1930"
              aria-label="Report an issue or cyber fraud"
            >
              <PhoneForwarded className="w-3.5 h-3.5 shrink-0" />
              <span>Report an issue</span>
            </button>

            {/* Language Selector Dropdown (Fixed & fully accessible) */}
            <LanguageDropdown
              language={language}
              onLanguageChange={onLanguageChange}
              variant="nav"
            />

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={onToggleTheme}
              className="p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shrink-0 cursor-pointer"
              title={isDark ? t.lightMode : t.darkMode}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-700" />}
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shrink-0 cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-4">
          {/* Navigation Links */}
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectNav(item.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#5E17EB] text-white font-bold shadow-md shadow-[#5E17EB]/30'
                      : 'text-[#6E6B7B] dark:text-slate-300 hover:bg-[#F2EEFC]/60 dark:hover:bg-slate-800 hover:text-[#1D1B28]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {item.icon}
                    <span>{item.fullTitle}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                      isActive ? 'bg-black text-cyan-300' : item.badgeColor || 'bg-slate-200 text-slate-700'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Language Selector Grid */}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#5E17EB] dark:text-[#8D65EC]" />
                <span>{language === 'kn' ? 'ಭಾಷೆ ಬದಲಾಯಿಸಿ' : 'Change Language'}</span>
              </span>
              <span className="text-[10px] text-[#5E17EB] dark:text-[#C4B5FD] font-extrabold uppercase">
                {currentLangOption.label}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 max-h-48 overflow-y-auto">
              {LANGUAGE_OPTIONS.map((opt) => {
                const isSelected = language === opt.code;
                return (
                  <button
                    key={opt.code}
                    onClick={() => {
                      onLanguageChange(opt.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`p-2 rounded-xl text-xs text-left border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#5E17EB] text-white border-[#5E17EB] font-bold shadow-xs'
                        : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-[#8D65EC]'
                    }`}
                  >
                    <div>
                      <div className="font-bold leading-tight">{opt.label}</div>
                      <div className={`text-[10px] ${isSelected ? 'text-purple-100' : 'text-slate-400'}`}>
                        {opt.nativeName}
                      </div>
                    </div>
                    {isSelected && <Check className="w-3.5 h-3.5 text-white shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
