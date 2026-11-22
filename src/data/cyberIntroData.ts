export interface RealWorldStat {
  id: string;
  metric: string;
  value: string;
  trend: string;
  source: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  scamType: string;
  amountLost: string;
  summary: string;
  victimProfile: string;
  attackVector: string;
  timeline: { step: number; title: string; description: string }[];
  scammerTactics: string[];
  howItCouldHaveBeenStopped: string[];
}

export const REAL_WORLD_STATS: RealWorldStat[] = [
  {
    id: 'global-loss',
    metric: 'Global Annual Scam Losses',
    value: '$1.03 Trillion',
    trend: '+18% YoY',
    source: 'Global Anti-Scam Alliance (GASA) & FBI IC3',
    description: 'Total financial fraud losses reported across 43 countries, surpassing the GDP of many individual nations.'
  },
  {
    id: 'phishing-volume',
    metric: 'Phishing Attacks Detected Daily',
    value: '3.4 Billion',
    trend: '78% targeting mobile',
    source: 'APWG Phishing Activity Trends',
    description: 'Malicious emails, SMS (Smishing), and instant messaging links sent globally every single day.'
  },
  {
    id: 'upi-fraud',
    metric: 'UPI / Digital Payment Fraud Rate',
    value: '₹1,770+ Crores',
    trend: 'Over 66,000 cases/mo',
    source: 'Indian Cyber Crime Coordination Centre (I4C)',
    description: 'QR code lures, fake cashback links, and remote desktop app hijackings targeting digital wallets.'
  },
  {
    id: 'deepfake-surge',
    metric: 'AI Deepfake & Voice Impersonation',
    value: '1,530% Increase',
    trend: 'Fastest growing threat',
    source: 'Cybersecurity Threat Horizon Report',
    description: 'Scammers cloning voices from 3-second audio clips to impersonate children or executives for urgent wire transfers.'
  }
];

export const THREAT_RADAR_ITEMS = [
  { id: '1', type: 'Smishing', message: 'Fake Electricity Power-Cut SMS: "Your power will be disconnected at 9:30 PM tonight unless bill is updated via this APK"', threatLevel: 'Critical', region: 'India / Multi-State' },
  { id: '2', type: 'Phishing', message: 'Spoofed Netflix Billing Renewal: "Account suspended due to billing error, verify payment details at netflix-billing-update.cc"', threatLevel: 'High', region: 'Global' },
  { id: '3', type: 'Digital Arrest', message: 'Fake Mumbai Police / CBI Skype interrogation intimidating victims into transferring funds for "clearance verification"', threatLevel: 'Critical', region: 'South Asia' },
  { id: '4', type: 'Crypto Lure', message: 'WhatsApp group "VIP Institutional Wealth Club" claiming guaranteed 180% monthly returns via bogus trading portal', threatLevel: 'High', region: 'US / UK / APAC' },
  { id: '5', type: 'Job Scam', message: 'Telegram tasks: "Earn ₹3,000 to ₹8,000 daily by liking YouTube videos and rating hotels on Google Maps"', threatLevel: 'High', region: 'Global' },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'digital-arrest-case',
    title: 'The ₹84 Lakh "Digital Arrest" & Fake Supreme Court Extortion',
    scamType: 'Impersonation & Coercion Scam',
    amountLost: '₹84,00,000 (~$100,000 USD)',
    victimProfile: '64-year-old retired government officer living in Bengaluru',
    attackVector: 'Unsolicited phone call impersonating FedEx Customs and CBI Cyber Cell',
    summary: 'The victim was placed under 4-day continuous video call surveillance ("Digital Arrest") by scammers posing in police uniforms with fake agency seals, falsely claiming an illegal narcotics package was registered in their name.',
    timeline: [
      { step: 1, title: 'The Hook', description: 'Caller claimed a package containing 5 expired passports and 140g MDMA was intercepted in Taiwan.' },
      { step: 2, title: 'The Transfer', description: 'Call transferred to "Senior Inspector" on Skype who showed a fake Supreme Court warrant with the victim’s Aadhaar photo.' },
      { step: 3, title: 'The Intimidation', description: 'Told they were under secret judicial arrest. Ordered not to disconnect the camera or speak to family for "national security".' },
      { step: 4, title: 'The Drain', description: 'Scammers ordered victim to liquidate fixed deposits and wire all funds to a "Reserve Bank verification vault account".' }
    ],
    scammerTactics: [
      'Fabricated official-looking police rooms with flags and fake badges',
      'Extreme psychological isolation and continuous video monitoring',
      'Exploitation of fear of legal arrest and defamation',
      'Urgent command to bypass regular bank staff queries'
    ],
    howItCouldHaveBeenStopped: [
      'Law enforcement NEVER conducts judicial arrests or trials over Skype or WhatsApp video.',
      'No police or government agency ever asks citizens to transfer money to a "verification account".',
      'Calling 1930 or walking into the local police station immediately breaks the illusion.'
    ]
  },
  {
    id: 'part-time-job-trap',
    title: 'The "Earn ₹5,000/Day Liking YouTube Videos" Telegram Trap',
    scamType: 'Task-Based Advance Fee Job Fraud',
    amountLost: '₹4,50,000 ($5,400 USD)',
    victimProfile: '22-year-old university student seeking remote internship',
    attackVector: 'WhatsApp invitation from unverified international (+880) number',
    summary: 'A student began completing simple tasks (subscribing to YouTube channels) and received small ₹300 payouts to build trust, before being lured into depositing larger sums into a fake crypto merchant site to unlock "VIP commission rewards".',
    timeline: [
      { step: 1, title: 'The Easy Payout', description: 'Victim completed 3 video likes and instantly received ₹300 via UPI. Scammer established genuine payout credibility.' },
      { step: 2, title: 'The VIP Upgrade', description: 'Added to a 400-member Telegram group where fake bot accounts posted fake screenshots of ₹50,000 payouts.' },
      { step: 3, title: 'The Investment Task', description: 'Told to invest ₹5,000 to earn ₹8,000. Dashboard showed a simulated balance of ₹8,000, encouraging a bigger ₹50,000 deposit.' },
      { step: 4, title: 'The Frozen Withdrawal', description: 'When victim attempted to withdraw ₹2,00,000, scammers demanded an additional ₹1,00,000 "income tax clearance fee" before disappearing.' }
    ],
    scammerTactics: [
      'Initial micro-payments to disarm natural suspicion',
      'Social proof engineering using fabricated group testimonials',
      'Manipulated dashboard showing fictitious profits',
      'Sunk cost fallacy: demanding more money to release already deposited money'
    ],
    howItCouldHaveBeenStopped: [
      'Legitimate businesses never pay high wages for trivial tasks like clicking likes.',
      'Legitimate employers NEVER ask employees or interns to pay money to unlock their salary.',
      'Any job requiring Telegram coordination or crypto deposit is an automatic red flag.'
    ]
  },
  {
    id: 'qr-marketplace-scam',
    title: 'The "I am paying you via QR code" Second-Hand Seller Scam',
    scamType: 'UPI Reversal / QR Code Fraud',
    amountLost: '₹60,000 ($720 USD)',
    victimProfile: '35-year-old selling a used refrigerator on an online classifieds site',
    attackVector: 'Classifieds buyer agreeing to buy item immediately without negotiation',
    summary: 'A fraudulent buyer offered to pay a ₹15,000 advance. The buyer sent a QR code claiming "Scan this on PhonePe to receive the money into your account". The seller scanned it, entered their PIN, and was debited ₹15,000 instead of receiving it.',
    timeline: [
      { step: 1, title: 'Immediate Agreement', description: 'Buyer did not negotiate price, claiming they were an Army officer being transferred.' },
      { step: 2, title: 'The QR Code Lure', description: 'Buyer sent a QR code stating: "My army account only works via merchant scan. Scan this to accept ₹15,000."' },
      { step: 3, title: 'Entering the PIN', description: 'Victim scanned the code, saw a prompt for PIN, and entered it believing it was an authorization to receive.' },
      { step: 4, title: 'Double Trap', description: 'When ₹15,000 was debited, the scammer apologized, claimed it was a "system error", and sent another QR code for ₹30,000 to "refund everything", draining ₹30,000 more.' }
    ],
    scammerTactics: [
      'Impersonation of trusted defense or police personnel with fake ID cards',
      'Exploitation of confusion regarding how UPI and QR codes function',
      'Rushing the victim and pretending the transaction is time-sensitive'
    ],
    howItCouldHaveBeenStopped: [
      'GOLDEN RULE: You NEVER need to scan a QR code or enter your UPI PIN to RECEIVE money.',
      'Receiving money via UPI is 100% passive—funds credit directly using your phone number or UPI ID without any PIN.',
      'Entering a PIN is solely for AUTHORIZING DEBITS from your bank account.'
    ]
  }
];

export const CYBER_FUNDAMENTALS = [
  {
    title: 'The CIA Triad of Security',
    concept: 'Confidentiality, Integrity, Availability',
    description: 'The three pillars of information protection: ensuring data is confidential from unauthorized eyes, accurate and untampered (integrity), and accessible when needed by authorized users (availability).'
  },
  {
    title: 'The Human Vulnerability (Social Engineering)',
    concept: 'Hacking the Human Mind',
    description: '90%+ of modern breaches do not crack complex encryption; they exploit fear, urgency, curiosity, or greed to manipulate humans into handing over keys, OTPs, or credentials voluntarily.'
  },
  {
    title: 'Zero Trust Philosophy',
    concept: 'Never Trust, Always Verify',
    description: 'Treat every incoming email, SMS, caller, or link as potentially untrusted until verified through an independent, secondary communication channel.'
  },
  {
    title: 'Multi-Factor Authentication (MFA)',
    concept: 'Beyond Simple Passwords',
    description: 'Something you know (password) + something you have (hardware key or authenticator app) + something you are (biometrics). Stops 99.9% of automated credential stuffing attacks.'
  }
];
