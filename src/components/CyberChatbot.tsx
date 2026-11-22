import React, { useState, useRef, useEffect } from 'react';
import { 
  ShieldAlert, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  X, 
  Minimize2, 
  Maximize2, 
  PhoneCall, 
  RotateCcw, 
  Copy, 
  Check, 
  AlertTriangle, 
  HelpCircle,
  MessageSquare,
  ShieldCheck,
  Lock,
  ChevronDown,
  Volume2,
  VolumeX,
  Download,
  FileText,
  Search,
  ExternalLink,
  Zap,
  ArrowRight
} from 'lucide-react';
import { LanguageCode, ChatMessage, ActivePage } from '../types';

interface Props {
  isFloating?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
  onOpenSOS: () => void;
  language?: LanguageCode;
  onNavigate?: (page: ActivePage) => void;
}

interface CategoryPrompt {
  id: string;
  category: string;
  icon: string;
  prompts: string[];
}

const CATEGORY_PROMPTS_EN: CategoryPrompt[] = [
  {
    id: 'digital-arrest',
    category: 'Digital Arrest',
    icon: '🚨',
    prompts: [
      "I received a WhatsApp/Skype video call claiming to be Mumbai Police or CBI saying an illegal parcel has my Aadhaar card.",
      "A caller claiming to be Supreme Court issued a 'Digital Arrest Warrant' and wants me to stay on video call."
    ]
  },
  {
    id: 'upi-qr',
    category: 'UPI & QR Scams',
    icon: '💳',
    prompts: [
      "A buyer on OLX sent me a QR code and told me to scan it and enter my PIN to receive payment.",
      "Received an SMS saying my electricity bill is unpaid and power will be cut tonight unless I click a link."
    ]
  },
  {
    id: 'apk-malware',
    category: 'APK Trojans & SMS',
    icon: '⚡',
    prompts: [
      "I installed an APK sent on WhatsApp for e-Challan payment / electricity update. How do I remove it?",
      "Received a message from a 10-digit number claiming my bank KYC is blocked with a quick update link."
    ]
  },
  {
    id: 'job-task',
    category: 'Task & Job Scams',
    icon: '💼',
    prompts: [
      "Offered a part-time job on Telegram paying ₹500 for liking YouTube videos, but now they demand ₹5,000 to withdraw.",
      "Added to a VIP WhatsApp investment group claiming 500% weekly guaranteed returns on stock options."
    ]
  },
  {
    id: 'biometric-voice',
    category: 'Biometrics & AI Voice',
    icon: '🎙️',
    prompts: [
      "Someone called in my child's voice crying that they were arrested in a car accident and need immediate cash.",
      "How do I lock my Aadhaar biometrics to prevent AePS unauthorized money deductions?"
    ]
  },
  {
    id: 'emergency-debit',
    category: 'Unauthorized Debits',
    icon: '🛑',
    prompts: [
      "Money was just debited from my bank account without my permission. What are my exact Golden Hour steps?",
      "How do I file an official dispute letter with my bank for unauthorized cyber transactions?"
    ]
  }
];

const CATEGORY_PROMPTS_KN: CategoryPrompt[] = [
  {
    id: 'digital-arrest',
    category: 'ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್',
    icon: '🚨',
    prompts: [
      "ಮುಂಬೈ ಪೊಲೀಸ್ ಅಥವಾ ಸಿಬಿಐ ಎಂದು ಹೇಳಿ ವಾಟ್ಸಾಪ್ ವಿಡಿಯೋ ಕಾಲ್ ಬಂದಿದೆ. ನನ್ನ ಆಧಾರ್ ಹೆಸರಲ್ಲಿ ಅಕ್ರಮ ಪಾರ್ಸೆಲ್ ಇದೆ ಎನ್ನುತ್ತಿದ್ದಾರೆ.",
      "ಸುಪ್ರೀಂ ಕೋರ್ಟ್ ಹೆಸರಿನಲ್ಲಿ 'ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್ ವಾರಂಟ್' ತೋರಿಸಿ ಕ್ಯಾಮೆರಾ ಆನ್ ಇಡಲು ಹೇಳುತ್ತಿದ್ದಾರೆ."
    ]
  },
  {
    id: 'upi-qr',
    category: 'ಯುಪಿಐ & ಕ್ಯೂಆರ್',
    icon: '💳',
    prompts: [
      "ಓಎಲ್‌ಎಕ್ಸ್‌ನಲ್ಲಿ ಖರೀದಿದಾರ ಕ್ಯೂಆರ್ ಕೋಡ್ ಕಳುಹಿಸಿ ಹಣ ಪಡೆಯಲು ಪಿನ್ ಹಾಕಲು ಹೇಳುತ್ತಿದ್ದಾನೆ.",
      "ಇಂದು ರಾತ್ರಿ ವಿದ್ಯುತ್ ಸಂಪರ್ಕ ಕಟ್ ಆಗುತ್ತದೆ ಎಂದು ಬಿಲ್ ಪಾವತಿಸಲು ಲಿಂಕ್ ಕಳುಹಿಸಿದ್ದಾರೆ."
    ]
  },
  {
    id: 'apk-malware',
    category: 'APK ಟ್ರೋಜನ್ & ಎಸ್ಎಂಎಸ್',
    icon: '⚡',
    prompts: [
      "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಬಂದ APK ಫೈಲ್ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿದ್ದೇನೆ, ನನ್ನ ಫೋನ್‌ಗೆ ರಕ್ಷಣೆ ಹೇಗೆ?",
      "ಬ್ಯಾಂಕ್ ಕೆವೈಸಿ ಬ್ಲಾಕ್ ಆಗಿದೆ ಎಂದು ಅಪರಿಚಿತ ಸಂಖ್ಯೆಯಿಂದ ಲಿಂಕ್ ಬಂದಿದೆ."
    ]
  },
  {
    id: 'job-task',
    category: 'ಪಾರ್ಟ್-ಟೈಮ್ ಟಾಸ್ಕ್',
    icon: '💼',
    prompts: [
      "ಟೆಲಿಗ್ರಾಂನಲ್ಲಿ ಯೂಟ್ಯೂಬ್ ಲೈಕ್ ಮಾಡಲು ₹500 ಕೊಟ್ಟು, ಈಗ ಹಣ ಡ್ರಾ ಮಾಡಲು ₹5,000 ಠೇವಣಿ ಕೇಳುತ್ತಿದ್ದಾರೆ.",
      "ವಾಟ್ಸಾಪ್ ಗ್ರೂಪ್‌ನಲ್ಲಿ ಷೇರು ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ 500% ಲಾಭ ಕೊಡುವುದಾಗಿ ಹೇಳುತ್ತಿದ್ದಾರೆ."
    ]
  },
  {
    id: 'biometric-voice',
    category: 'ಬಯೋಮೆಟ್ರಿಕ್ & ಎಐ ಧ್ವನಿ',
    icon: '🎙️',
    prompts: [
      "ನನ್ನ ಮಗ/ಮಗಳ ಧ್ವನಿಯಲ್ಲಿ ಕರೆ ಮಾಡಿ ಅಪಘಾತವಾಗಿದೆ, ತುರ್ತು ಹಣ ಬೇಕು ಎಂದು ಅಳುತ್ತಿದ್ದಾರೆ.",
      "ಆಧಾರ್ ಮೂಲಕ ಬ್ಯಾಂಕ್ ಹಣ ಕಳ್ಳತನವಾಗದಂತೆ ಬಯೋಮೆಟ್ರಿಕ್ ಲಾಕ್ ಮಾಡುವುದು ಹೇಗೆ?"
    ]
  },
  {
    id: 'emergency-debit',
    category: 'ತುರ್ತು ಹಣ ಕಡಿತ',
    icon: '🛑',
    prompts: [
      "ನನ್ನ ಅನುಮತಿಯಿಲ್ಲದೆ ಖಾತೆಯಿಂದ ಹಣ ಕಡಿತವಾಗಿದೆ. ಸುವರ್ಣ ಗಂಟೆಯಲ್ಲಿ ಏನು ಮಾಡಬೇಕು?",
      "ಬ್ಯಾಂಕಿಗೆ ಅಧಿಕೃತ ಸೈಬರ್ ವಂಚನೆ ದೂರು ಪತ್ರ ನೀಡುವುದು ಹೇಗೆ?"
    ]
  }
];

export const CyberChatbot: React.FC<Props> = ({
  isFloating = false,
  isOpen = true,
  onClose,
  onOpenSOS,
  language = 'en',
  onNavigate,
}) => {
  const isKn = language === 'kn';
  const categoryPrompts = isKn ? CATEGORY_PROMPTS_KN : CATEGORY_PROMPTS_EN;
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<string>(categoryPrompts[0].id);

  const initialGreeting = isKn 
    ? "ನಮಸ್ಕಾರ! ನಾನು ಸೈಬರ್‌ಶೀಲ್ಡ್ ಎಐ (CyberShield AI) - ನಿಮ್ಮ 24/7 ಸೈಬರ್ ಭದ್ರತಾ & ವಂಚನೆ ತಡೆ ರಕ್ಷಣಾ ತಜ್ಞ. ಯಾವುದೇ ಅನುಮಾನಾಸ್ಪದ ಸಂದೇಶ, ನಕಲಿ ಪೊಲೀಸ್ ವಿಡಿಯೋ ಕಾಲ್, ಯುಪಿಐ ವಂಚನೆ ಅಥವಾ ತುರ್ತು ಹಣ ಕಡಿತದ ಸನ್ನಿವೇಶದಲ್ಲಿ ನಿಮಗೆ ನೆರವಾಗಲು ನಾನು ಸಿದ್ಧನಾಗಿದ್ದೇನೆ. ನಿಮ್ಮ ಪರಿಸ್ಥಿತಿ ತಿಳಿಸಿ!"
    : "Hello! I am CyberShield AI, your 24/7 Cybersecurity & Anti-Fraud Defense Specialist. Whether you received a coercive police video call, a suspicious APK link, an unknown UPI request, or suffered an unauthorized bank debit, I am here to analyze the threat and guide your immediate defense. How can I assist you today?";

  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      const saved = sessionStorage.getItem(`cybershield_chat_history_${language}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {}
    return [
      {
        id: 'msg-init',
        role: 'model',
        text: initialGreeting,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
    ];
  });

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [speakingMsgId, setSpeakingMsgId] = useState<string | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of conversation
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Save to sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem(`cybershield_chat_history_${language}`, JSON.stringify(messages));
    } catch {}
  }, [messages, language]);

  // Clean up speech synthesis on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    // Stop ongoing speech
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setSpeakingMsgId(null);
    }

    const userMessage: ChatMessage = {
      id: `usr-${Date.now()}`,
      role: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, text: m.text })),
          language,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const aiMessage: ChatMessage = {
          id: `ai-${Date.now()}`,
          role: 'model',
          text: data.reply || (isKn ? 'ನಾನು ನಿಮ್ಮ ಸೈಬರ್ ರಕ್ಷಣೆಗಾಗಿ ಸದಾ ಇಲ್ಲಿದ್ದೇನೆ.' : 'I am here to protect you from cyber fraud.'),
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages(prev => [...prev, aiMessage]);
      } else {
        throw new Error('Chat API response not ok');
      }
    } catch {
      // Local graceful fallback reply
      const fallbackText = isKn
        ? "🚨 **ಸೈಬರ್ ಭದ್ರತಾ ರಕ್ಷಣಾ ಮಾರ್ಗದರ್ಶಿ:**\n\n1. **ಯಾವುದೇ ಒಟಿಪಿ ಅಥವಾ ಪಿನ್ ಹಂಚಿಕೊಳ್ಳಬೇಡಿ:** ನೈಜ ಬ್ಯಾಂಕ್ ಅಥವಾ ಪೊಲೀಸ್ ಅಧಿಕಾರಿಗಳು ಎಂದಿಗೂ ಒಟಿಪಿ, ಪಾಸ್‌ವರ್ಡ್ ಅಥವಾ ಯುಪಿಐ ಪಿನ್ ಕೇಳುವುದಿಲ್ಲ.\n2. **ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್ ಕರೆ ಬಂದಿದ್ದರೆ:** ತಕ್ಷಣ ಕಾಲ್ ಕಟ್ ಮಾಡಿ. ಭಾರತೀಯ ಕಾನೂನಿನಲ್ಲಿ ವಿಡಿಯೋ ಕಾಲ್ ಬಂಧನವಿಲ್ಲ.\n3. **ಹಣ ಕಳೆದುಹೋಗಿದ್ದರೆ:** ತಕ್ಷಣ **1930** ಗೆ ಕರೆ ಮಾಡಿ ಖಾತೆಗಳನ್ನು ಫ್ರೀಜ್ ಮಾಡಿಸಿ."
        : "🚨 **CYBERSHIELD CRITICAL DEFENSE NOTICE:**\n\n1. **Never Disclose Credentials:** Bank officials, police, or judicial officers will NEVER ask for your OTP, netbanking passwords, or UPI PIN.\n2. **Digital Arrest Video Calls:** Hang up immediately. Indian law enforcement never places citizens under arrest via Skype or WhatsApp.\n3. **Unauthorized Deductions:** Dial **1930** immediately to activate banking network freeze protocols.";
      
      const aiMessage: ChatMessage = {
        id: `ai-err-${Date.now()}`,
        role: 'model',
        text: fallbackText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, aiMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setSpeakingMsgId(null);
    }
    const resetGreeting: ChatMessage = {
      id: `msg-reset-${Date.now()}`,
      role: 'model',
      text: initialGreeting,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([resetGreeting]);
    try {
      sessionStorage.removeItem(`cybershield_chat_history_${language}`);
    } catch {}
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Text-to-speech audio support for accessibility
  const handleToggleSpeak = (msgId: string, text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    if (speakingMsgId === msgId) {
      window.speechSynthesis.cancel();
      setSpeakingMsgId(null);
      return;
    }

    window.speechSynthesis.cancel();
    // Clean text of markdown characters
    const cleanText = text
      .replace(/[*#_~`]/g, '')
      .replace(/\[(.*?)\]\(.*?\)/g, '$1')
      .replace(/https?:\/\/\S+/g, 'link');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = language === 'kn' ? 'kn-IN' : 'en-US';
    utterance.rate = 0.95;
    utterance.onend = () => setSpeakingMsgId(null);
    utterance.onerror = () => setSpeakingMsgId(null);

    window.speechSynthesis.speak(utterance);
    setSpeakingMsgId(msgId);
  };

  // Export conversation transcript
  const handleDownloadTranscript = () => {
    const reportHeader = `==========================================================\n` +
      `CYBERSHIELD NATIONAL CYBER DEFENSE INCIDENT ADVISORY\n` +
      `Date & Time: ${new Date().toLocaleString()}\n` +
      `Emergency Helpline: 1930 | National Portal: cybercrime.gov.in\n` +
      `==========================================================\n\n`;

    const reportBody = messages.map(m => {
      const sender = m.role === 'user' ? 'CITIZEN' : 'CYBERSHIELD AI DEFENSE';
      return `[${m.timestamp}] ${sender}:\n${m.text}\n----------------------------------------------------------\n`;
    }).join('\n');

    const reportFooter = `\n==========================================================\n` +
      `LEGAL NOTE: Preserve this record alongside your transaction SMS, UTR receipts, and call logs when filing an official FIR.\n` +
      `==========================================================\n`;

    const blob = new Blob([reportHeader + reportBody + reportFooter], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CyberShield_Advisory_${Date.now()}.txt`;
    link.click();
    URL.revokeObjectURL(url);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  // Render markdown text formatting cleanly (bolding, numbered steps, bullets, links, callout blocks)
  const renderFormattedText = (raw: string) => {
    const lines = raw.split('\n');
    return lines.map((line, idx) => {
      if (!line.trim()) {
        return <div key={idx} className="h-2" />;
      }

      // Format markdown links [text](url)
      const renderWithLinks = (textChunk: string) => {
        const linkRegex = /\[(.*?)\]\((https?:\/\/.*?)\)/g;
        const result: React.ReactNode[] = [];
        let lastIndex = 0;
        let match;

        while ((match = linkRegex.exec(textChunk)) !== null) {
          if (match.index > lastIndex) {
            result.push(textChunk.substring(lastIndex, match.index));
          }
          const linkText = match[1];
          const linkUrl = match[2];
          result.push(
            <a
              key={match.index}
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 dark:text-cyan-400 font-bold underline inline-flex items-center gap-0.5 hover:text-cyan-500"
            >
              <span>{linkText}</span>
              <ExternalLink className="w-2.5 h-2.5 inline" />
            </a>
          );
          lastIndex = linkRegex.lastIndex;
        }

        if (lastIndex < textChunk.length) {
          result.push(textChunk.substring(lastIndex));
        }

        return result.length > 0 ? result : [textChunk];
      };

      // Format bold markdown (**text**)
      const formatBoldAndLinks = (str: string) => {
        const parts = str.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, pIdx) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return (
              <strong key={pIdx} className="font-extrabold text-slate-900 dark:text-white">
                {part.slice(2, -2)}
              </strong>
            );
          }
          return <React.Fragment key={pIdx}>{renderWithLinks(part)}</React.Fragment>;
        });
      };

      const trimmed = line.trim();

      // Heading 3 or 4
      if (trimmed.startsWith('### ') || trimmed.startsWith('## ')) {
        const hText = trimmed.replace(/^#{2,3}\s+/, '');
        return (
          <h4 key={idx} className="font-black text-sm sm:text-base text-slate-900 dark:text-white mt-2 mb-1">
            {formatBoldAndLinks(hText)}
          </h4>
        );
      }

      // Numbered items e.g. "1. " or "2. "
      const numberMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
      if (numberMatch) {
        const stepNum = numberMatch[1];
        const stepText = numberMatch[2];
        return (
          <div key={idx} className="flex items-start gap-2.5 my-1.5 pl-0.5">
            <span className="w-5 h-5 rounded-md bg-[#F2EEFC] dark:bg-[#5E17EB]/25 text-[#5E17EB] dark:text-[#C4B5FD] font-black text-[11px] flex items-center justify-center shrink-0 border border-[#8D65EC]/30">
              {stepNum}
            </span>
            <div className="flex-1 leading-relaxed">
              {formatBoldAndLinks(stepText)}
            </div>
          </div>
        );
      }

      // Bullet items e.g. "- " or "* "
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const bulletText = trimmed.slice(2);
        return (
          <div key={idx} className="flex items-start gap-2 my-1 pl-1">
            <span className="text-[#5E17EB] font-bold leading-none mt-1">•</span>
            <div className="flex-1 leading-relaxed">
              {formatBoldAndLinks(bulletText)}
            </div>
          </div>
        );
      }

      // Standard paragraph
      return (
        <p key={idx} className="my-1 leading-relaxed">
          {formatBoldAndLinks(trimmed)}
        </p>
      );
    });
  };

  if (isFloating && !isOpen) return null;

  const currentCategory = categoryPrompts.find(c => c.id === selectedCategoryTab) || categoryPrompts[0];

  const containerClasses = isFloating
    ? `fixed z-50 transition-all duration-300 shadow-2xl flex flex-col ${
        isExpanded
          ? 'inset-3 sm:inset-8 md:inset-12 rounded-3xl'
          : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[94vw] sm:w-[480px] h-[640px] max-h-[88vh] rounded-3xl'
      } bg-white dark:bg-slate-900 border border-[#8D65EC]/30 backdrop-blur-xl`
    : 'w-full max-w-4xl mx-auto rounded-3xl bg-white dark:bg-slate-900 border border-[#8D65EC]/30 shadow-xl flex flex-col h-[780px] max-h-[85vh] overflow-hidden';

  return (
    <div className={containerClasses} role="region" aria-label="Cybersecurity AI Chatbot">
      {/* Chatbot Header */}
      <div className="bg-gradient-to-r from-slate-900 via-[#19102c] to-slate-900 text-white p-3.5 sm:p-5 flex items-center justify-between gap-3 rounded-t-3xl border-b border-[#8D65EC]/30 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#5E17EB] flex items-center justify-center text-white shadow-md shadow-[#5E17EB]/40 border border-[#8D65EC]/40">
            <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-extrabold text-sm sm:text-base tracking-tight text-white flex items-center gap-1.5">
                <span>CyberShield AI</span>
                <span className="hidden sm:inline font-normal text-xs text-[#C4B5FD]">| Security Defense</span>
              </h3>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-950 text-emerald-400 border border-emerald-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>ONLINE</span>
              </span>
            </div>
            <p className="text-[11px] text-slate-300 font-medium">
              {isKn ? '24/7 ಸೈಬರ್ ಭದ್ರತಾ & ವಂಚನೆ ತಡೆ ಸಲಹೆಗಾರ' : '24/7 Cybersecurity & Anti-Fraud Specialist'}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1">
          <button
            onClick={onOpenSOS}
            className="px-2.5 py-1.5 bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs rounded-xl flex items-center gap-1 shadow-md shadow-red-950 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            title="Open Emergency SOS 1930 Protocol"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">SOS 1930</span>
          </button>

          <button
            onClick={handleDownloadTranscript}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Download Incident Transcript"
          >
            {downloadSuccess ? <Check className="w-4 h-4 text-emerald-400" /> : <Download className="w-4 h-4" />}
          </button>

          <button
            onClick={handleClearChat}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Clear Chat History"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {isFloating && (
            <>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="hidden sm:inline-flex p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title={isExpanded ? "Collapse Window" : "Expand Window"}
              >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              {onClose && (
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  title="Close Assistant"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </>
          )}
        </div>
      </div>

      {/* Safety Notice Banner */}
      <div className="bg-[#F2EEFC] dark:bg-[#1f1638] px-4 py-2 border-b border-[#8D65EC]/30 flex items-center justify-between text-[11px] text-[#5E17EB] dark:text-[#C4B5FD] shrink-0">
        <div className="flex items-center gap-1.5">
          <Lock className="w-3.5 h-3.5 text-[#5E17EB] dark:text-[#8D65EC] shrink-0" />
          <span>
            {isKn
              ? 'ಗಮನಿಸಿ: ನಿಮ್ಮ ನಿಜವಾದ ಒಟಿಪಿ, ಪಾಸ್‌ವರ್ಡ್ ಅಥವಾ ಕಾರ್ಡ್ ಪಿನ್ ಎಂದಿಗೂ ಹಂಚಿಕೊಳ್ಳಬೇಡಿ.'
              : 'Safety Rule: Never disclose actual OTPs, passwords, or UPI PINs.'}
          </span>
        </div>
        <span className="font-bold text-[#5E17EB] dark:text-[#C4B5FD] hidden sm:inline">100% Confidential</span>
      </div>

      {/* Message Scrollable Thread */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
        {messages.map((msg) => {
          const isUser = msg.role === 'user';
          const isSpeaking = speakingMsgId === msg.id;

          // Check if message discusses financial debits or digital arrest
          const isHighPriority = !isUser && (
            msg.text.includes('1930') || 
            msg.text.includes('Golden Hour') || 
            msg.text.includes('ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್') ||
            msg.text.includes('DIGITAL ARREST')
          );

          return (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {/* Avatar */}
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold ${
                  isUser
                    ? 'bg-[#5E17EB] text-white shadow-xs'
                    : 'bg-[#F2EEFC] dark:bg-[#1f1638] text-[#5E17EB] dark:text-[#C4B5FD] border border-[#8D65EC]/40'
                }`}
              >
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              {/* Message Bubble */}
              <div
                className={`group relative max-w-[88%] sm:max-w-[82%] rounded-2xl px-4 py-3 text-xs sm:text-sm shadow-xs ${
                  isUser
                    ? 'bg-[#5E17EB] text-white rounded-tr-none shadow-md shadow-[#5E17EB]/25'
                    : isHighPriority
                    ? 'bg-slate-50 dark:bg-slate-800/95 text-slate-800 dark:text-slate-100 rounded-tl-none border-2 border-red-500/40 shadow-md shadow-red-500/5'
                    : 'bg-[#F2EEFC] dark:bg-slate-800/90 text-[#1D1B28] dark:text-slate-100 rounded-tl-none border border-[#8D65EC]/20'
                }`}
              >
                {/* Content */}
                <div>{renderFormattedText(msg.text)}</div>

                {/* Direct Action Chips for high-priority bot responses */}
                {isHighPriority && onNavigate && (
                  <div className="mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-700 flex flex-wrap gap-1.5">
                    <button
                      onClick={onOpenSOS}
                      className="px-2.5 py-1 rounded-lg bg-red-600 hover:bg-red-500 text-white text-[11px] font-bold flex items-center gap-1 shadow-xs cursor-pointer"
                    >
                      <PhoneCall className="w-3 h-3" />
                      <span>{isKn ? '1930 ಕರೆ ಮಾಡಿ' : 'Emergency 1930'}</span>
                    </button>
                    <button
                      onClick={() => onNavigate('emergency')}
                      className="px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-700 dark:text-amber-300 border border-amber-500/30 text-[11px] font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <FileText className="w-3 h-3" />
                      <span>{isKn ? 'ದೂರು ಪತ್ರ ಸಿದ್ಧಪಡಿಸಿ' : 'Formal Dispute Letter'}</span>
                    </button>
                    <button
                      onClick={() => onNavigate('tools')}
                      className="px-2.5 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 text-[11px] font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <Search className="w-3 h-3" />
                      <span>{isKn ? 'ಲಿಂಕ್ / ಕ್ಯೂಆರ್ ಸ್ಕ್ಯಾನರ್' : 'Scan Link/QR'}</span>
                    </button>
                  </div>
                )}

                {/* Footer Time & Tools */}
                <div className={`mt-2 pt-1 border-t flex items-center justify-between text-[10px] ${
                  isUser ? 'border-white/20 text-blue-100' : 'border-slate-200 dark:border-slate-700 text-slate-400'
                }`}>
                  <span>{msg.timestamp}</span>
                  {!isUser && (
                    <div className="flex items-center gap-1">
                      {/* Audio Read-Aloud Toggle */}
                      <button
                        onClick={() => handleToggleSpeak(msg.id, msg.text)}
                        className={`p-1 rounded transition-colors flex items-center gap-1 ${
                          isSpeaking 
                            ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 font-bold' 
                            : 'hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                        }`}
                        title={isSpeaking ? "Stop Speaking" : "Read Aloud"}
                      >
                        {isSpeaking ? (
                          <>
                            <VolumeX className="w-3 h-3 animate-pulse text-cyan-500" />
                            <span className="text-cyan-500">Stop</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3 h-3" />
                            <span>Audio</span>
                          </>
                        )}
                      </button>

                      {/* Copy Text Button */}
                      <button
                        onClick={() => handleCopy(msg.id, msg.text)}
                        className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors flex items-center gap-1"
                        title="Copy advice"
                      >
                        {copiedId === msg.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-500" />
                            <span className="text-emerald-500 font-bold">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Typing indicator */}
        {isLoading && (
          <div className="flex items-start gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 border border-cyan-300 dark:border-cyan-800 flex items-center justify-center">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-slate-100 dark:bg-slate-800/90 rounded-2xl rounded-tl-none p-4 text-xs flex items-center gap-2 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
              <span>{isKn ? 'ಸೈಬರ್ ಭದ್ರತಾ ವಿಶ್ಲೇಷಣೆ ನಡೆಸಲಾಗುತ್ತಿದೆ...' : 'CyberShield AI is analyzing threat vectors...'}</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Categorized Starter Prompts Section */}
      <div className="p-3 bg-[#F2EEFC] dark:bg-slate-900/60 border-t border-[#8D65EC]/20 space-y-2 shrink-0">
        <div className="flex items-center justify-between text-[11px] font-bold text-[#6E6B7B] dark:text-slate-400 uppercase tracking-wider px-1">
          <div className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#5E17EB]" />
            <span>{isKn ? 'ಪ್ರಮುಖ ವಂಚನೆ ಪರಿಶೀಲನೆ:' : 'Quick Threat Verification:'}</span>
          </div>
          <span className="text-[10px] text-slate-400 font-normal">Click to test instant defense</span>
        </div>

        {/* Category pill tabs */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
          {categoryPrompts.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategoryTab(cat.id)}
              className={`px-2 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all flex items-center gap-1 cursor-pointer ${
                selectedCategoryTab === cat.id
                  ? 'bg-[#5E17EB] text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-[#8D65EC]'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Prompts for active category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-24 overflow-y-auto">
          {currentCategory.prompts.map((promptText, pIdx) => (
            <button
              key={pIdx}
              onClick={() => handleSend(promptText)}
              disabled={isLoading}
              className="text-left text-xs p-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-[#F2EEFC]/60 dark:hover:bg-[#5E17EB]/20 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-colors shadow-2xs hover:border-[#8D65EC] cursor-pointer disabled:opacity-50 line-clamp-2"
            >
              {promptText}
            </button>
          ))}
        </div>
      </div>

      {/* Input Message Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 sm:p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shrink-0 rounded-b-3xl"
      >
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            placeholder={
              isKn
                ? "ಸಂದೇಶ, ಲಿಂಕ್, ಕರೆ ಅಥವಾ ವಂಚನೆಯ ಸನ್ನಿವೇಶ ಬರೆಯಿರಿ..."
                : "Describe a suspicious call, paste an SMS link, or ask about scams..."
            }
            className="flex-1 px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 text-[#1D1B28] dark:text-white placeholder-slate-400 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5E17EB] text-xs sm:text-sm disabled:opacity-50"
          />

          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="p-3 sm:px-4 sm:py-3 bg-[#5E17EB] hover:bg-[#4D0FD4] text-white rounded-2xl transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md shadow-[#5E17EB]/30 active:scale-95 cursor-pointer shrink-0 flex items-center justify-center gap-1.5"
            aria-label="Send message to CyberShield AI"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline font-bold text-xs">{isKn ? 'ಕಳುಹಿಸಿ' : 'Send'}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
