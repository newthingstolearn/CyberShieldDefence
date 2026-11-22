export type ActivePage = 
  | 'home'
  | 'scams'
  | 'quiz'
  | 'emergency'
  | 'tools'
  | 'senior'
  | 'student'
  | 'helplines'
  | 'chatbot';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

export type LanguageCode = 'en' | 'hi' | 'kn' | 'es' | 'fr' | 'de' | 'bn' | 'ta' | 'te' | 'mr';

export type FontSize = 'normal' | 'large' | 'xlarge';

export interface AccessibilitySettings {
  fontSize: FontSize;
  highContrast: boolean;
  dyslexicFont: boolean;
  soundEnabled: boolean;
}

export interface ScamCategory {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  severity: 'Critical' | 'High' | 'Medium';
  victimCountGlobal: string;
  avgLoss: string;
  psychologicalTrigger?: string;
  legalProvisions?: string;
  targetDemographic?: string;
  recoveryProbability?: string;
  howItWorks: string[];
  redFlags: string[];
  realWorldExample: {
    title: string;
    scenario: string;
    sampleMessage?: {
      sender: string;
      body: string;
      suspiciousElements: { text: string; reason: string }[];
    };
    preventionTip: string;
  };
  dosAndDonts: {
    dos: string[];
    donts: string[];
  };
}

export interface QuizScenario {
  id: string;
  title: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  context: string;
  messageType: 'sms' | 'email' | 'whatsapp' | 'call' | 'qr' | 'dm';
  sender: string;
  content: string;
  attachmentOrLink?: string;
  isScam: boolean;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
  redFlagsHighlighted: string[];
  learningTakeaway: string;
}

export interface HelplineItem {
  id: string;
  name: string;
  category: 'Police & Cybercrime' | 'Banking & UPI' | 'Telecom & SIM' | 'International';
  country: string;
  number: string;
  availability: string;
  description: string;
  website?: string;
  tollFree: boolean;
  urgent: boolean;
}

export interface SeniorDoDont {
  id: string;
  scenarioTitle: string;
  audioText: string;
  callerClaim: string;
  whatScammerWants: string;
  doAction: string;
  dontAction: string;
  dangerLevel: 'Emergency' | 'High Alert' | 'Be Careful';
}

export interface StudentScamTopic {
  id: string;
  title: string;
  tag: string;
  hook: string;
  theTrap: string;
  howToIdentify: string[];
  realStory: string;
  quickDefense: string;
}

export interface UrlAnalysisResult {
  url: string;
  hostname: string;
  protocol: string;
  riskScore: number; // 0 (Safe) to 100 (Extremely Dangerous)
  riskLevel: 'Safe' | 'Low Risk' | 'Suspicious' | 'Dangerous';
  verdict: string;
  flags: {
    title: string;
    description: string;
    severity: 'danger' | 'warning' | 'info' | 'safe';
  }[];
  domainAgeSimulated?: string;
  recommendations: string[];
}

export interface QrAnalysisResult {
  rawContent: string;
  type: 'upi' | 'url' | 'app_download' | 'text' | 'phone' | 'unknown';
  riskScore: number;
  riskLevel: 'Safe' | 'Suspicious' | 'Dangerous';
  summary: string;
  details: {
    label: string;
    value: string;
    warning?: string;
  }[];
  warnings: string[];
  safetyChecklist: string[];
}
