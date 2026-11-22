import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AccessibilityToolbar } from './components/AccessibilityToolbar';
import { EmergencySOSModal } from './components/EmergencySOSModal';
import { HomePage } from './pages/HomePage';
import { ScamAwarenessPage } from './pages/ScamAwarenessPage';
import { QuizGamePage } from './pages/QuizGamePage';
import { WhatToDoIfScammedPage } from './pages/WhatToDoIfScammedPage';
import { SecurityToolsPage } from './pages/SecurityToolsPage';
import { SeniorCitizenModePage } from './pages/SeniorCitizenModePage';
import { StudentModePage } from './pages/StudentModePage';
import { HelplineDirectoryPage } from './pages/HelplineDirectoryPage';
import { CyberChatbot } from './components/CyberChatbot';
import { ActivePage, LanguageCode, AccessibilitySettings } from './types';
import { TRANSLATIONS } from './data/translations';
import { PhoneCall, Bot } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = React.useState<ActivePage>('home');
  const [isChatbotOpen, setIsChatbotOpen] = React.useState<boolean>(false);
  const [language, setLanguage] = React.useState<LanguageCode>(() => {
    try {
      const saved = localStorage.getItem('cybershield_lang') as LanguageCode;
      if (saved && TRANSLATIONS[saved]) return saved;
    } catch {}
    return 'en';
  });

  const [isDark, setIsDark] = React.useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('cybershield_theme');
      if (saved) return saved === 'dark';
    } catch {}
    return false;
  });

  const [isSosOpen, setIsSosOpen] = React.useState<boolean>(false);

  const [accessibilitySettings, setAccessibilitySettings] = React.useState<AccessibilitySettings>(() => {
    try {
      const saved = localStorage.getItem('cybershield_a11y');
      if (saved) return JSON.parse(saved);
    } catch {}
    return {
      fontSize: 'normal',
      highContrast: false,
      dyslexicFont: false,
      soundEnabled: true,
    };
  });

  // Apply dark mode class to document & persist
  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      try { localStorage.setItem('cybershield_theme', 'dark'); } catch {}
    } else {
      document.documentElement.classList.remove('dark');
      try { localStorage.setItem('cybershield_theme', 'light'); } catch {}
    }
  }, [isDark]);

  // Apply accessibility classes & persist
  React.useEffect(() => {
    if (accessibilitySettings.highContrast) {
      document.documentElement.classList.add('high-contrast-mode');
    } else {
      document.documentElement.classList.remove('high-contrast-mode');
    }

    if (accessibilitySettings.dyslexicFont) {
      document.documentElement.classList.add('font-dyslexic');
    } else {
      document.documentElement.classList.remove('font-dyslexic');
    }

    // Toggle Root Font Size scaling for A, A+, A++
    document.documentElement.classList.remove('font-size-large', 'font-size-xlarge');
    if (accessibilitySettings.fontSize === 'large') {
      document.documentElement.classList.add('font-size-large');
    } else if (accessibilitySettings.fontSize === 'xlarge') {
      document.documentElement.classList.add('font-size-xlarge');
    }

    try {
      localStorage.setItem('cybershield_a11y', JSON.stringify(accessibilitySettings));
    } catch {}
  }, [accessibilitySettings.highContrast, accessibilitySettings.dyslexicFont, accessibilitySettings.fontSize]);

  const handleLanguageChange = (newLang: LanguageCode) => {
    setLanguage(newLang);
    try {
      localStorage.setItem('cybershield_lang', newLang);
    } catch {}
  };

  // Handle navigation
  const handleNavigate = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpdateAccessibility = (newSettings: Partial<AccessibilitySettings>) => {
    setAccessibilitySettings(prev => ({ ...prev, ...newSettings }));
  };

  // Determine current page summaries for audio readout in AccessibilityToolbar
  const getPageInfo = () => {
    const t = TRANSLATIONS[language] || TRANSLATIONS.en;
    switch (activePage) {
      case 'home':
        return {
          title: t.navHome,
          summary: t.heroSubtitle
        };
      case 'scams':
        return {
          title: t.navScams,
          summary: language === 'kn'
            ? 'ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್, ಒಟಿಪಿ ಯುಪಿಐ ವಂಚನೆಗಳು, ಎಐ ವಾಯ್ಸ್ ಕ್ಲೋನಿಂಗ್ ಮತ್ತು ಫಿಶಿಂಗ್ ವಂಚನೆಗಳ ಸಂಪೂರ್ಣ ವಿವರ.'
            : 'Explore all threat vectors including Digital Arrest, OTP UPI fraud, AI voice cloning, and biometric AePS theft.'
        };
      case 'quiz':
        return {
          title: t.navQuiz,
          summary: language === 'kn'
            ? 'ನೈಜ ಎಸ್ಎಂಎಸ್ ಮತ್ತು ವಾಟ್ಸಾಪ್ ವಂಚನೆಗಳನ್ನು ಗುರುತಿಸುವ ಸಂವಾದಾತ್ಮಕ ರಸಪ್ರಶ್ನೆ ಸಿಮ್ಯುಲೇಟರ್.'
            : 'Interactive simulation challenges to spot fake SMS, WhatsApp messages, and scam phone calls.'
        };
      case 'emergency':
        return {
          title: t.navEmergency,
          summary: language === 'kn'
            ? 'ಖಾತೆ ಸ್ಥಗಿತಗೊಳಿಸಲು ಸುವರ್ಣ ಗಂಟೆ ಕ್ರಮಗಳು ಮತ್ತು 1930 ಗೆ ದೂರು ದಾಖಲಿಸುವ ಅಧಿಕೃತ ಪತ್ರ ಜನರೇಟರ್.'
            : 'Golden hour checklist and formal dispute complaint letter generator to freeze compromised bank accounts.'
        };
      case 'tools':
        return {
          title: t.navTools,
          summary: language === 'kn'
            ? 'ಪಾಸ್‌ವರ್ಡ್ ಜನರೇಟರ್, ನಕಲಿ ಲಿಂಕ್ ಗುರುತಿಸುವಿಕೆ ಮತ್ತು ಕ್ಯೂಆರ್ ಕೋಡ್ ಇನ್ಸ್‌ಪೆಕ್ಟರ್.'
            : 'Cryptographic password generator with entropy calculator, fake link identifier, and QR code payload analyzer.'
        };
      case 'senior':
        return {
          title: t.navSenior,
          summary: t.seniorSubtitle
        };
      case 'student':
        return {
          title: t.navStudent,
          summary: t.studentSubtitle
        };
      case 'helplines':
        return {
          title: t.navHelpline,
          summary: language === 'kn'
            ? '1930, ಬ್ಯಾಂಕ್ ತುರ್ತು ಸಂಖ್ಯೆಗಳು ಮತ್ತು ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಕ್ರೈಮ್ ಪೋರ್ಟಲ್ ವಿವರಗಳು.'
            : 'National and international contacts including 1930, bank fraud hotlines, and cyber crime portals.'
        };
      case 'chatbot':
        return {
          title: t.navChatbot || 'CyberShield AI Advisor',
          summary: language === 'kn'
            ? 'ನೈಜ ಸಮಯದ ಸೈಬರ್ ಭದ್ರತಾ & ವಂಚನೆ ತಡೆ ಎಐ ಸಹಾಯಕ. ಯಾವುದೇ ಸಂದೇಶ ಅಥವಾ ಕರೆಯನ್ನು ಪರಿಶೀಲಿಸಿ.'
            : 'Multi-turn AI assistant to analyze suspicious calls, phishing links, and guide you through emergency fraud recovery.'
        };
      default:
        return { title: 'CyberShield', summary: 'Cyber security awareness platform.' };
    }
  };

  const pageInfo = getPageInfo();

  // Font size multiplier class
  const getFontSizeClass = () => {
    switch (accessibilitySettings.fontSize) {
      case 'large': return 'text-lg';
      case 'xlarge': return 'text-xl';
      default: return 'text-base';
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col bg-[var(--color-bg-white)] dark:bg-[#0D0B14] text-[var(--color-heading-navy)] dark:text-slate-100 transition-colors overflow-x-hidden w-full max-w-full ${getFontSizeClass()}`}
      style={{ backgroundColor: 'var(--color-bg-white)' }}
    >
      {/* Top Accessibility Bar */}
      <AccessibilityToolbar
        settings={accessibilitySettings}
        onUpdateSettings={handleUpdateAccessibility}
        currentPageTitle={pageInfo.title}
        currentPageSummary={pageInfo.summary}
        language={language}
        onLanguageChange={handleLanguageChange}
      />

      {/* Main Responsive Navbar */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        language={language}
        onLanguageChange={handleLanguageChange}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        onOpenSOS={() => setIsSosOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        {activePage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
            language={language} 
            onOpenSOS={() => setIsSosOpen(true)} 
          />
        )}
        {activePage === 'scams' && (
          <ScamAwarenessPage 
            language={language} 
            onOpenSOS={() => setIsSosOpen(true)} 
          />
        )}
        {activePage === 'quiz' && <QuizGamePage language={language} />}
        {activePage === 'emergency' && <WhatToDoIfScammedPage language={language} />}
        {activePage === 'tools' && <SecurityToolsPage language={language} />}
        {activePage === 'senior' && (
          <SeniorCitizenModePage onOpenSOS={() => setIsSosOpen(true)} language={language} />
        )}
        {activePage === 'student' && <StudentModePage language={language} />}
        {activePage === 'helplines' && <HelplineDirectoryPage language={language} />}
        {activePage === 'chatbot' && (
          <div className="py-6 sm:py-8 space-y-4">
            <CyberChatbot 
              isFloating={false} 
              onOpenSOS={() => setIsSosOpen(true)} 
              language={language}
              onNavigate={handleNavigate}
            />
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} onOpenSOS={() => setIsSosOpen(true)} />

      {/* Emergency SOS Modal */}
      <EmergencySOSModal
        isOpen={isSosOpen}
        onClose={() => setIsSosOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Floating Action Controls (AI Chatbot & Emergency SOS) */}
      <aside aria-label="Quick assistance actions" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Floating AI Chatbot Toggle Button */}
        {activePage !== 'chatbot' && !isChatbotOpen && (
          <button
            onClick={() => setIsChatbotOpen(true)}
            className="pointer-events-auto p-3 sm:px-4 sm:py-3.5 bg-[#5E17EB] hover:bg-[#4D0FD4] text-white font-extrabold text-xs sm:text-sm rounded-full sm:rounded-2xl shadow-xl shadow-[#5E17EB]/40 border border-[#8D65EC]/50 flex items-center gap-2.5 hover:scale-105 active:scale-95 transition-all cursor-pointer group"
            title="Chat with CyberShield AI Advisor"
            aria-label="Open CyberShield AI Assistant"
          >
            <div className="relative">
              <Bot className="w-5 h-5 text-purple-200" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-900 animate-ping" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-900" />
            </div>
            <div className="hidden sm:block text-left">
              <span className="block font-black text-xs leading-none">
                {language === 'kn' ? 'ಸೈಬರ್ ಎಐ ಸಹಾಯಕ' : 'AI Cyber Advisor'}
              </span>
              <span className="block text-[10px] text-purple-200 font-medium">
                {language === 'kn' ? '24/7 ರಕ್ಷಣೆ' : '24/7 Scam Defense'}
              </span>
            </div>
          </button>
        )}

        {/* Sticky Floating SOS Button */}
        <button
          onClick={() => setIsSosOpen(true)}
          className="pointer-events-auto p-3.5 sm:px-5 sm:py-3.5 bg-red-600 hover:bg-red-500 text-white font-extrabold text-sm rounded-full sm:rounded-2xl shadow-2xl shadow-red-900/60 border-2 border-red-400 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          title="Emergency Scam Helpline SOS"
          aria-label="Launch Emergency Scam Helpline SOS modal"
        >
          <PhoneCall className="w-5 h-5 animate-pulse" />
          <span className="hidden sm:inline">EMERGENCY SOS (1930)</span>
        </button>
      </aside>

      {/* Floating Chatbot Modal Window */}
      {activePage !== 'chatbot' && isChatbotOpen && (
        <CyberChatbot
          isFloating={true}
          isOpen={isChatbotOpen}
          onClose={() => setIsChatbotOpen(false)}
          onOpenSOS={() => setIsSosOpen(true)}
          language={language}
          onNavigate={handleNavigate}
        />
      )}
    </div>
  );
}
