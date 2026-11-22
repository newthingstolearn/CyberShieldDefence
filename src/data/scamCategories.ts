import { ScamCategory } from '../types';

export const SCAM_CATEGORIES: ScamCategory[] = [
  {
    id: 'otp-upi',
    title: 'OTP & UPI Payment Scams',
    shortDesc: 'QR codes to "receive money", remote screen-sharing apps, and OTP social engineering.',
    icon: 'Smartphone',
    severity: 'Critical',
    victimCountGlobal: '12M+ Annual Victims',
    avgLoss: '$850 - $4,200 (₹25,000 - ₹2,50,000)',
    psychologicalTrigger: 'Exploitation of UPI unfamiliarity, urgency, and eagerness to receive marketplace sales/cashback.',
    legalProvisions: 'IT Act 2000 Sec 66C (Identity theft), 66D (Cheating by personation using computer resource), IPC 420 / BNS 318(4).',
    targetDemographic: 'Online marketplace sellers (OLX, Quikr, Facebook Marketplace), retail shopkeepers, and elderly pension holders.',
    recoveryProbability: 'High (85%+) if reported to 1930 within the 2-hour Golden Window before mule cash withdrawal.',
    howItWorks: [
      'Scammer poses as an eager buyer or army officer on classifieds platforms (OLX, Facebook Marketplace) agreeing to buy your item instantly without negotiation.',
      'They claim: "I am sending money from a government merchant account. Please scan this QR code or click this link to authorize credit into your bank."',
      'In reality, the QR code contains a UPI intent string (`upi://pay?pa=...`) that requests a DEBIT from your account rather than a credit.',
      'When you scan and enter your 4-digit or 6-digit PIN, money is immediately debited from your linked savings account.',
      'Alternatively, they ask you to install AnyDesk, TeamViewer QuickSupport, or RustDesk to "clear a pending reversal", allowing them to see your incoming OTPs.'
    ],
    redFlags: [
      'Anyone asking you to scan a QR code to "receive", "accept", or "claim" money.',
      'Any instruction demanding you enter your secret 4-digit or 6-digit UPI PIN to get paid.',
      'Caller insisting you install remote desktop applications (AnyDesk, TeamViewer, RustDesk) on your smartphone.',
      'Caller sending fake payment screenshots showing "Money Sent" created via fraudulent billing simulator apps.'
    ],
    realWorldExample: {
      title: 'The "Army Major" OLX Furniture Scam',
      scenario: 'You post a dining table for sale. A caller claiming to be an Army Major transferred to your city offers to pay ₹18,000 immediately without bargaining. He sends a QR code on WhatsApp stating: "Scan this on Google Pay / PhonePe to approve the receipt of defense funds."',
      sampleMessage: {
        sender: '+91 98765 43210 (Army Profile Picture)',
        body: 'Sir, I have generated direct transfer barcode voucher of Rs 18000. Please scan this QR in your GPay app, enter your secret PIN, and amount will credit within 5 seconds to your account.',
        suspiciousElements: [
          { text: 'Army Profile Picture', reason: 'Scammers systematically harvest stolen ID photos of armed forces to bypass natural skepticism.' },
          { text: 'scan this QR in your GPay app', reason: 'QR codes are strictly used to TRANSMIT payments, never to receive incoming funds.' },
          { text: 'enter your secret PIN', reason: 'Entering a PIN on any UPI app initiates a debit transaction from your bank account.' }
        ]
      },
      preventionTip: 'GOLDEN RULE OF UPI: You NEVER need to scan a QR code or enter your secret PIN to receive money. Funds credit automatically using your mobile number.'
    },
    dosAndDonts: {
      dos: [
        'Share ONLY your phone number or UPI handle (VPA) to receive funds—nothing else.',
        'Immediately disconnect any phone call where the caller instructs you to install AnyDesk or screen-sharing tools.',
        'Report fraudulent UPI IDs on the NPCI portal (npci.org.in) or inside your payment app dispute center.'
      ],
      donts: [
        'NEVER enter your UPI PIN to receive money, lottery rewards, or refunds.',
        'NEVER scan any QR code or barcode sent by a buyer over WhatsApp or SMS.',
        'NEVER share an OTP with ANYONE—banks explicitly remind: "Do not share OTP with bank staff".'
      ]
    }
  },
  {
    id: 'digital-arrest',
    title: 'Digital Arrest & Police / CBI Extortion',
    shortDesc: 'Fake Skype video calls with scammers posing as CBI, Narcotics, or Supreme Court judges threatening arrest.',
    icon: 'ShieldAlert',
    severity: 'Critical',
    victimCountGlobal: '₹120+ Crores lost in South Asia alone in 2024-2026',
    avgLoss: '₹15,00,000 - ₹2,50,00,000 ($18,000 - $300,000)',
    psychologicalTrigger: 'Extreme fear of legal incarceration, social defamation, and manufactured panic regarding narcotics/money laundering.',
    legalProvisions: 'IT Act Sec 66D, IPC 419, IPC 384 (Extortion), IPC 170 (Personating a public servant), BNS Sec 204.',
    targetDemographic: 'Educated urban professionals, retired senior citizens, doctors, engineers, and solitary home dwellers.',
    recoveryProbability: 'Moderate (40-60%) if reported within 24 hours before international crypto conversion.',
    howItWorks: [
      'Victim receives an automated IVR call claiming to be from FedEx, DHL, or Mumbai Customs stating an illegal parcel in their name was seized.',
      'The call is "transferred to Mumbai Cyber Crime Police". Scammers show simulated police control rooms with national flags and fake badges on Skype.',
      'They brandish fabricated "Supreme Court Arrest Warrants" and CBI letters containing the victim\'s real Aadhaar and passport photos.',
      'They declare the victim is placed under "Digital Arrest" and forbidden from disconnecting the camera or contacting family for "national security".',
      'Under intense psychological torture lasting days, victims are forced to liquidate fixed deposits and transfer all savings to a "Reserve Bank Government Verification Vault Account".'
    ],
    redFlags: [
      'Any claim of "Digital Arrest"—there is NO such legal concept in Indian, US, or international law.',
      'Police officers conducting interrogation or demanding you stay on video call for 24-72 hours continuously.',
      'Official demanding you transfer your savings to a "security verification account" or "RBI audit account".',
      'Strict instructions forbidding you from speaking to your spouse, children, or local police.'
    ],
    realWorldExample: {
      title: 'The 4-Day Fake Supreme Court Surveillance',
      scenario: 'A 68-year-old retired doctor was contacted on Skype by a scammer wearing a fake police uniform with the display name "DCP Cyber Cell". The scammer displayed a bogus court document alleging the doctor was named in a ₹50 Crore money laundering case and compelled him to wire ₹1.2 Crores for "forensic verification".',
      sampleMessage: {
        sender: 'CBI Cyber Cell Investigation Desk (Skype)',
        body: 'SUPREME COURT NOTICE: You are placed under provisional Digital Arrest in FIR #9283/2026 (Narcotics & AML). Keep video camera ON continuously. Do not inform family. Transfer entire savings to RBI escrow account for verification.',
        suspiciousElements: [
          { text: 'Digital Arrest', reason: 'Complete legal fiction created by cybercrime syndicates.' },
          { text: 'Transfer entire savings to RBI escrow', reason: 'RBI never holds private citizen escrow accounts for police clearance.' },
          { text: 'Keep video camera ON continuously', reason: 'Psychological isolation tactic to prevent victims from consulting trusted relatives.' }
        ]
      },
      preventionTip: 'Hang up immediately! Law enforcement agencies never arrest or conduct court proceedings via Skype or WhatsApp. Walk into your local police station.'
    },
    dosAndDonts: {
      dos: [
        'Disconnect the call immediately—real police serve physical paper summons at your residence.',
        'Call 1930 or your local police station to report the caller’s number.',
        'Inform your family members and neighbors immediately to break the psychological isolation.'
      ],
      donts: [
        'NEVER transfer money to any account for "police clearance", "case closure", or "financial audit".',
        'NEVER download Skype or video apps on the instructions of an unknown caller.',
        'NEVER share bank statements, passbook copies, or fixed deposit details with phone callers.'
      ]
    }
  },
  {
    id: 'phishing-websites',
    title: 'Phishing & Fake Banking Websites',
    shortDesc: 'Deceptive clones of banks, Netflix, Amazon, and government tax portals capturing passwords.',
    icon: 'Globe',
    severity: 'Critical',
    victimCountGlobal: '45M+ Annual Incidents Worldwide',
    avgLoss: '$1,200 - $15,000 (₹50,000 - ₹8,00,000)',
    psychologicalTrigger: 'Panic over account deactivation, billing interruption, or curiosity over unexpected refunds.',
    legalProvisions: 'IT Act 2000 Sec 43, 66 (Hacking), 66C, 66D, IPC 420.',
    targetDemographic: 'Net banking users, online shoppers, Netflix/OTT subscribers, and tax filing citizens.',
    recoveryProbability: 'High if disputed within 30 minutes before 2FA token expiry.',
    howItWorks: [
      'Scammers send SMS or emails spoofing trusted institutions (State Bank, HDFC, Netflix, Apple, Income Tax Department).',
      'The message warns: "Your account is temporarily suspended due to billing failure. Verify details within 12 hours."',
      'Clicking the link navigates to a copycat webpage with pixel-perfect logos, fonts, and login inputs.',
      'When you enter your username, password, ATM PIN, or card CVV, the credentials are captured instantly and used by automated scripts.'
    ],
    redFlags: [
      'Domain name does not match the official website (e.g. `sbi-netbanking-verify.xyz` instead of `sbi.co.in`).',
      'Sender email address uses generic free domains like `@gmail.com` or spoofed domains with hyphenated names.',
      'Manufactured urgency: "Act within 12 hours or account permanently closed".',
      'Presence of the padlock icon is NOT proof of safety—over 80% of phishing sites utilize free SSL certificates!'
    ],
    realWorldExample: {
      title: 'The Fake Income Tax Refund SMS Trap',
      scenario: 'You receive an SMS: "Income Tax Department: Refund of ₹24,850 has been approved. Submit your bank account and debit card PIN to receive credit directly: http://incometax-refund-claim.xyz/login"',
      sampleMessage: {
        sender: '+91 88123 45678 (Spoofed Header IT-REFUND)',
        body: 'Dear Taxpayer, Refund of Rs 24,850 has been approved for AY 2025-26. Click here to confirm account number and enter debit card PIN: http://incometax-refund-claim.xyz/login',
        suspiciousElements: [
          { text: 'incometax-refund-claim.xyz', reason: 'Official government websites use `.gov.in`, never `.xyz` or `.com`.' },
          { text: 'enter debit card PIN', reason: 'Government tax authorities NEVER ask for debit card PINs or CVV numbers.' },
          { text: '+91 88123 45678', reason: 'Originates from a private phone number rather than a telecom header.' }
        ]
      },
      preventionTip: 'Never click links in SMS or emails claiming refunds or bill updates. Always type the verified URL directly into your browser address bar.'
    },
    dosAndDonts: {
      dos: [
        'Bookmark official banking portals and navigate strictly through saved bookmarks.',
        'Use an open-source password manager (like Bitwarden); password managers refuse to autofill on spoofed domains.',
        'Inspect the URL in the browser address bar for subdomain tricks (e.g. `chase.com.fake-login.net`).'
      ],
      donts: [
        'NEVER trust the HTTPS padlock alone as a guarantee of legitimacy.',
        'NEVER click shortened links (bit.ly, tinyurl, t.co) sent in unsolicited messages.',
        'NEVER submit card CVVs or net banking passwords on web pages opened via SMS.'
      ]
    }
  },
  {
    id: 'ai-voice-cloning',
    title: 'AI Deepfake & Voice Cloning Scams',
    shortDesc: 'Scammers cloning family members\' voices from 3-second social media clips to demand emergency ransoms.',
    icon: 'Users',
    severity: 'Critical',
    victimCountGlobal: 'Surging 1,530% YoY worldwide',
    avgLoss: '$3,000 - $45,000 (₹1,50,000 - ₹20,00,000)',
    psychologicalTrigger: 'Parental empathy, visceral panic, and sudden terror of a child in life-threatening peril.',
    legalProvisions: 'IT Act Sec 66D, IPC 419, IPC 383/384 Extortion, BNS Sec 308.',
    targetDemographic: 'Parents of college-going students, elderly grandparents, and corporate finance executives.',
    recoveryProbability: 'Low if transferred via crypto or cash drop; Moderate if sent via domestic IMPS.',
    howItWorks: [
      'Scammers scrape 3 to 10 seconds of audio from public Instagram reels, YouTube videos, or voice notes of a family member.',
      'Using generative AI voice cloning software (e.g. ElevenLabs), they replicate the voice with near 99% accuracy including breathing, crying, and vocal cadence.',
      'They call parents in the middle of the night: The child\'s voice cries: "Mom, I got into a terrible car accident, police arrested me, please send money!"',
      'A fake police officer or kidnapper takes the phone and demands immediate transfer to avoid putting the child in jail.'
    ],
    redFlags: [
      'Family member calling from an unfamiliar phone number with extreme background noise or sobbing.',
      'Caller refusing to let the family member speak for more than 5 seconds.',
      'Demands for untraceable payment methods: Crypto, Apple Gift Cards, Western Union, or immediate cash handoff.',
      'Refusal to confirm basic personal facts that only the real family member would know.'
    ],
    realWorldExample: {
      title: 'The AI Cloned Voice "Kidnapped Daughter" Ransom',
      scenario: 'A mother in Arizona received a call from an unknown number. Her 15-year-old daughter’s voice was sobbing hysterically: "Mom, these bad men have me, help me!" A man then demanded $50,000 ransom. While keeping the man on the line, the father called the daughter’s school and found her safely sitting in math class.',
      sampleMessage: {
        sender: 'Unknown Caller (+1 555-019-8472)',
        body: '[Simulated AI voice of daughter sobbing]: "Mom please help me, they grabbed me from soccer practice, they have guns, pay whatever they ask!"',
        suspiciousElements: [
          { text: 'Daughter sobbing hysterically', reason: 'High emotional distress is deliberately used to mask minor robotic artifacts in synthetic voice.' },
          { text: 'Pay whatever they ask', reason: 'Manufactured emergency designed to prevent parents from verifying whereabouts.' }
        ]
      },
      preventionTip: 'Establish a secret family "SAFE WORD" known only to immediate family members. Ask the caller for the safe word.'
    },
    dosAndDonts: {
      dos: [
        'Agree on a private family "Safe Word" that can never be guessed from social media.',
        'Hang up and dial your child or relative directly on their known, saved phone number.',
        'Keep family social media profiles set to "Private" to restrict access to voice and video clips.'
      ],
      donts: [
        'NEVER send ransom money or wire transfers before independently verifying the person\'s location.',
        'NEVER reveal family names or travel details to unverified callers.',
        'NEVER purchase retail gift cards or cryptocurrency as payment for an emergency.'
      ]
    }
  },
  {
    id: 'kyc-bank',
    title: 'KYC & Electricity Disconnection APK Scams',
    shortDesc: '"Account/Power will be disconnected tonight" SMS prompting download of malicious banking trojans.',
    icon: 'ShieldAlert',
    severity: 'Critical',
    victimCountGlobal: '20M+ Annual Incidents',
    avgLoss: '$1,500 - $12,000 (₹50,000 - ₹5,00,000)',
    psychologicalTrigger: 'Immediate fear of utilities disruption (power cut, frozen bank balance, SIM deactivation).',
    legalProvisions: 'IT Act Sec 43, 66, 66C, 66D, IPC 420.',
    targetDemographic: 'Households, senior citizens, small traders, and SIM card owners.',
    recoveryProbability: 'High if device is disconnected from internet within 30 minutes.',
    howItWorks: [
      'Victim receives an urgent SMS: "Dear Customer, your electricity connection / SBI account will be disconnected at 9:30 PM due to pending KYC update."',
      'The message provides a phone number or a direct download link ending in `.apk` (e.g. `BSES_Bill_Pay.apk` or `SBI_KYC_Verification.apk`).',
      'When installed, this malicious Android application requests "SMS permissions" and "Accessibility Service permissions".',
      'The banking trojan silently intercepts all incoming OTPs, forwards them to the scammer’s command server, and hides notification banners, draining accounts invisibly.'
    ],
    redFlags: [
      'SMS originating from regular 10-digit mobile numbers (+91 9xxxxxxxxx) rather than official telecom sender headers.',
      'Web links prompting you to download files ending in `.apk`.',
      'Threatening account suspension or power cutoff on the same evening.',
      'Asking for debit card PIN or Netbanking password under the pretense of "updating KYC".'
    ],
    realWorldExample: {
      title: 'The ₹3 Lakh Electricity Disconnection APK Trap',
      scenario: 'A senior citizen received an SMS claiming power would be cut off at 9:30 PM. He called the number in the SMS. The caller instructed him to download an app from a web link to pay a ₹10 fee. Within 10 minutes of installing the APK, ₹3,20,000 was debited in four transactions without any SMS alert appearing on his screen.',
      sampleMessage: {
        sender: '+91 87654 32109',
        body: 'URGENT: Your Electricity connection will be cut today at 9:30 PM by order of Electricity Board. Immediately download update app to clear bill: http://bses-bill-portal.live/update.apk',
        suspiciousElements: [
          { text: 'Cut today at 9:30 PM', reason: 'Utility companies provide formal printed notices and grace periods, never sudden same-night SMS warnings.' },
          { text: '/update.apk', reason: 'Direct Android APK download link containing banking trojan.' },
          { text: '+91 87654 32109', reason: 'Personal 10-digit mobile number instead of official power utility sender.' }
        ]
      },
      preventionTip: 'Never install `.apk` files from web links or WhatsApp. Real utility boards and banks only distribute apps via Google Play Store and Apple App Store.'
    },
    dosAndDonts: {
      dos: [
        'Visit your physical bank branch or open the official verified utility app if in doubt.',
        'Keep Google Play Protect turned ON in your Android device settings.',
        'Turn on Airplane Mode immediately if you accidentally installed an unknown APK.'
      ],
      donts: [
        'NEVER download or sideload `.apk` files sent on WhatsApp, SMS, or websites.',
        'NEVER call the phone number printed inside a suspicious threat SMS.',
        'NEVER grant "Accessibility" or "Notification Access" permissions to unverified applications.'
      ]
    }
  },
  {
    id: 'fake-jobs',
    title: 'Fake Job & Telegram Task Scams',
    shortDesc: 'Work-from-home Telegram task scams: like YouTube videos, get ₹150 bait, then lose ₹5 Lakhs in VIP tasks.',
    icon: 'Briefcase',
    severity: 'High',
    victimCountGlobal: '15M+ Victims (Mostly unemployed youth & students)',
    avgLoss: '$600 - $6,500 (₹40,000 - ₹5,00,000)',
    psychologicalTrigger: 'Desire for easy remote income, sunk-cost fallacy, and manufactured trust through initial micro-payouts.',
    legalProvisions: 'IT Act Sec 66D, IPC 420, IPC 406 (Criminal breach of trust), BNS Sec 318.',
    targetDemographic: 'College students, stay-at-home parents, fresh graduates, and remote job seekers.',
    recoveryProbability: 'Moderate to Low (funds quickly converted to USDT crypto on peer-to-peer exchanges).',
    howItWorks: [
      'Recruiters reach out via WhatsApp/Telegram from international numbers (+62, +880, +234) offering ₹3,000 - ₹8,000 daily for simple remote tasks.',
      'Task 1 is trivial: Like 3 YouTube videos or review 2 hotels on Google Maps. The scammer genuinely transfers ₹150 - ₹300 via UPI to build trust.',
      'The victim is added to a 500-member Telegram group where fake bot accounts post forged screenshots of ₹50,000 payouts.',
      'The victim is introduced to "Prepaid Tasks": Deposit ₹5,000 into a crypto merchant portal to earn ₹8,000. The dashboard shows a simulated balance of ₹8,000.',
      'When the victim attempts to withdraw, withdrawals are frozen, and scammers demand more deposits for "tax clearance" until the victim is bankrupt.'
    ],
    redFlags: [
      'Unbelievably high salaries for basic tasks (e.g. "Earn ₹5,000/day by liking YouTube videos").',
      'The recruitment and onboarding occurs entirely on Telegram or WhatsApp with no video interview.',
      'Any requirement to pay money or deposit funds to "unlock tasks" or "upgrade VIP status".',
      'Recruiter uses a free personal email address (`@gmail.com`) instead of a corporate domain.'
    ],
    realWorldExample: {
      title: 'The ₹4.5 Lakh "Google Maps Review Associate" Scam',
      scenario: 'A college graduate completed 5 review tasks and received ₹450. Convinced it was legitimate, he joined a VIP tier, depositing ₹10,000, then ₹50,000, and finally borrowed ₹3,00,000 to "unlock" his frozen dashboard balance of ₹6,50,000, losing everything.',
      sampleMessage: {
        sender: 'HR Emma (Global Media Associates via Telegram)',
        body: 'Congratulations! You have completed trial tasks. To unlock Tier-2 High Commission tasks (₹8,000 payout), deposit ₹5,000 into merchant account for liquidity allocation.',
        suspiciousElements: [
          { text: 'Deposit ₹5,000 to unlock payout', reason: 'Legitimate employers pay you for work; they NEVER demand you pay them to work.' },
          { text: 'HR Emma via Telegram', reason: 'Corporate HR personnel do not manage hiring anonymously over Telegram.' }
        ]
      },
      preventionTip: 'Whenever a job requires you to deposit or pay money to work, it is 100% a fraudulent advance-fee scam.'
    },
    dosAndDonts: {
      dos: [
        'Verify job postings on the official corporate career portal or LinkedIn page.',
        'Check the recruiter’s email address domain—ensure it ends in `@company.com`.',
        'Report fraudulent job solicitations to LinkedIn and the national cyber crime portal.'
      ],
      donts: [
        'NEVER pay any registration fee, software fee, or training fee for an employment offer.',
        'NEVER accept jobs coordinated exclusively through Telegram channels.',
        'NEVER execute financial transactions or deposit funds on behalf of an employer.'
      ]
    }
  },
  {
    id: 'investment-crypto',
    title: 'Banking & Investment Pig-Butchering Scams',
    shortDesc: 'Pig butchering (Sha Zhu Pan), Ponzi schemes, algorithmic crypto tips, and fake SEBI/SEC apps.',
    icon: 'TrendingUp',
    severity: 'Critical',
    victimCountGlobal: '6M+ Victims (Highest overall financial losses)',
    avgLoss: '$5,000 - $180,000+ (₹4,00,000 - ₹1,50,00,000)',
    psychologicalTrigger: 'Greed for exorbitant guaranteed returns, emotional grooming, and fear of missing out (FOMO).',
    legalProvisions: 'IT Act Sec 66D, IPC 420, SEBI Act 1992, Banning of Unregulated Deposit Schemes Act 2019 (BUDS).',
    targetDemographic: 'High net-worth professionals, crypto traders, retail stock investors, and matrimonial app users.',
    recoveryProbability: 'Low (scammers operate out of Southeast Asian industrial scam syndicates).',
    howItWorks: [
      'A scammer establishes casual contact via WhatsApp or dating apps ("Wrong number, but you seem friendly").',
      'Over weeks of friendly grooming ("fattening the pig"), they casually claim to make millions using inside algorithmic trading tips from a wealthy uncle.',
      'They guide the victim to deposit funds into a rigged trading website or APK that shows fictitious, skyrocketing profit charts.',
      'Once the victim deposits their life savings or pension, withdrawals are frozen, and the platform demands 30% "tax fee" or "AML fee" to release funds.'
    ],
    redFlags: [
      'Promises of "Guaranteed" returns of 10% to 50% weekly with "zero risk".',
      'Trading platform is not registered with regulatory bodies (SEBI in India, SEC in US, FCA in UK).',
      'Requirement to transfer investment funds to personal bank accounts or private crypto wallets.',
      'Demands for "tax clearance fees" or "liquidity deposits" before you are allowed to withdraw your own money.'
    ],
    realWorldExample: {
      title: 'The "Institutional Forex VIP Club" Pig Butchering Trap',
      scenario: 'A professional was added to a WhatsApp community discussing stock market tips. The "admin" claimed to be a licensed portfolio manager and invited members to download their proprietary institutional trading APK. The victim invested ₹15,00,000 and the app showed profits of ₹45,00,000. When they tried to withdraw, the admin demanded ₹12,00,000 more for "capital gains tax".',
      sampleMessage: {
        sender: 'Chief Analyst Vikram (VIP Trading Hub)',
        body: 'Special Institutional Allocation: Today we enter VIP block trade on AI chips. Guaranteed 45% net yield in 48 hours. Transfer capital to our clearing partner account to lock your position before market open.',
        suspiciousElements: [
          { text: 'Guaranteed 45% yield', reason: 'No legitimate financial asset can ever guarantee exorbitant yields.' },
          { text: 'Clearing partner account', reason: 'Mule bank account used to launder victims’ funds.' }
        ]
      },
      preventionTip: 'All legitimate investments fluctuate. Any guarantee of high returns is the universal hallmark of a Ponzi or Pig Butchering scheme.'
    },
    dosAndDonts: {
      dos: [
        'Verify broker registrations on SEBI, SEC, or FCA official registry databases.',
        'Invest only through regulated stock exchanges and established mutual fund houses.',
        'Discuss investment opportunities with a certified, fee-only financial planner before wiring money.'
      ],
      donts: [
        'NEVER trust investment advice from WhatsApp groups, Telegram channels, or dating app matches.',
        'NEVER install trading apps outside the official Google Play or Apple App Store.',
        'NEVER pay "clearance fees" or "taxes" to an unknown platform to withdraw your money.'
      ]
    }
  },
  {
    id: 'aeps-biometric',
    title: 'Aadhaar AePS Biometric Cloning Fraud',
    shortDesc: 'Cloned silicon thumbprints used at merchant micro-ATMs to siphon funds from bank accounts silently.',
    icon: 'ShieldAlert',
    severity: 'High',
    victimCountGlobal: 'Over 85,000 incidents reported across rural & semi-urban districts',
    avgLoss: '₹10,000 - ₹80,000',
    psychologicalTrigger: 'Silent vulnerability: victim is unaware their biometric thumbprint was cloned from property registration records.',
    legalProvisions: 'Aadhaar Act 2016 Sec 38, 42, IT Act Sec 66C, IPC 420.',
    targetDemographic: 'Citizens who registered property/land sale deeds, bank account holders with AePS enabled.',
    recoveryProbability: 'High if reported to bank within 3 days under RBI unauthorized electronic transaction circular.',
    howItWorks: [
      'Scammers harvest public land registry sale deeds from state land portals, which display scanned citizen fingerprints and Aadhaar numbers.',
      'Using polymer resin, silicon glue, or 3D molds, criminals fabricate cloned rubber thumb impressions.',
      'Criminals use unauthorized biometric PoS devices / Micro-ATMs to execute daily AePS cash withdrawals (up to ₹10,000 daily) without needing any OTP or debit card!'
    ],
    redFlags: [
      'Debit SMS alerts mentioning "AePS CW" (Cash Withdrawal) when you never visited a banking kiosk.',
      'Money debited at 2:00 AM or from a micro-ATM located in another state.',
      'No OTP received prior to the transaction debit alert.'
    ],
    realWorldExample: {
      title: 'The Land Registry Biometric Cloning Theft',
      scenario: 'A homeowner received an SMS stating ₹10,000 was debited via AePS from his bank account at a business correspondent kiosk in Bihar, while he was asleep in Bengaluru. Scammers had cloned his fingerprint from a publicly uploaded property registry PDF.',
      sampleMessage: {
        sender: 'VM-SBIINB',
        body: 'A/c XX4821 debited for Rs 10,000.00 on 04-Oct-26 by AePS Cash Withdrawal at BC Agent 92837. Bal: Rs 14,200.00.',
        suspiciousElements: [
          { text: 'AePS Cash Withdrawal', reason: 'Indicates biometric withdrawal without debit card or OTP.' },
          { text: 'BC Agent 92837', reason: 'Rogue business correspondent kiosk operating hundreds of kilometers away.' }
        ]
      },
      preventionTip: 'LOCK YOUR BIOMETRICS on the official UIDAI portal or mAadhaar app immediately. When locked, nobody can use your fingerprint for AePS!'
    },
    dosAndDonts: {
      dos: [
        'Open the mAadhaar app or uidai.gov.in and click "Lock Biometrics" immediately.',
        'File an immediate written dispute with your home bank branch citing RBI circular on zero customer liability.',
        'Use Masked Aadhaar (where only last 4 digits are visible) whenever submitting identity proofs.'
      ],
      donts: [
        'NEVER leave biometrics unlocked unless you are actively performing a biometric verification.',
        'NEVER share full 12-digit Aadhaar photocopies with unverified private vendors.',
        'NEVER ignore sudden AePS debit notifications, even for small amounts like ₹500.'
      ]
    }
  },
  {
    id: 'fake-payment-refund',
    title: 'Fake Payment & Accidental Refund Scams',
    shortDesc: '"I sent money to your account by mistake, please refund me" & fake banking screenshot alerts.',
    icon: 'Receipt',
    severity: 'High',
    victimCountGlobal: '8M+ Annual Victims',
    avgLoss: '$300 - $2,500 (₹10,000 - ₹1,00,000)',
    psychologicalTrigger: 'Moral obligation, honesty, and emotional pressure from a caller pretending to have a medical emergency.',
    legalProvisions: 'IT Act Sec 66D, IPC 420, BNS Sec 318.',
    targetDemographic: 'Small retail merchants, freelancers, cab drivers, and honest citizens.',
    recoveryProbability: 'Low (the victim voluntarily transfers their own funds to the scammer).',
    howItWorks: [
      'Scammer sends you a forged SMS that mimics a bank credit alert (e.g. "₹25,000 credited to A/C XX4921").',
      'Seconds later, they call crying or panicked: "Sir, I made a mistake while sending money to my hospital patient and accidentally sent ₹25,000 to your number! Please refund it back!"',
      'In reality, no real money was ever credited to your bank account; only a fake spoofed SMS was sent.',
      'If you send them ₹25,000 from your own money, you have lost your hard-earned funds.'
    ],
    redFlags: [
      'Unsolicited calls claiming money was transferred to your phone by accident.',
      'Sender shows a screenshot of a "successful payment" generated using a fake payment generator app.',
      'Bank credit notification comes from an ordinary 10-digit mobile number instead of an official bank sender ID (like `VM-HDFCBK`).',
      'The caller is extremely pushy, emotional, or threatening legal action if you do not pay immediately.'
    ],
    realWorldExample: {
      title: 'The Overpayment & Fake Hospital Refund Call',
      scenario: 'You run a small retail store or freelance service. A customer orders a ₹2,000 service, then sends a screenshot showing a ₹20,000 transfer, claiming their finger slipped and demanding an immediate ₹18,000 cash refund.',
      sampleMessage: {
        sender: '+91 91234 56789',
        body: 'A/C 8921 credited with Rs. 20,000.00 on 05-Oct-26 via UPI Ref 9283748291. Bal: Rs. 24,190.00. - Bank Notification',
        suspiciousElements: [
          { text: '+91 91234 56789', reason: 'Banks never send credit SMS from random 10-digit numbers.' },
          { text: 'Bal: Rs. 24,190.00', reason: 'Attackers fabricate the balance field to trick victims who do not log into their app.' }
        ]
      },
      preventionTip: 'Never trust SMS notifications or screenshots. Open your official banking app and check your actual statement balance.'
    },
    dosAndDonts: {
      dos: [
        'Always open your bank mobile app and verify the actual account statement.',
        'Tell any caller who mistakenly sent money: "Please file a formal reversal request with your bank; I will cooperate with official banking channels."',
        'Check sender IDs for official bank alphabetic prefixes (e.g., `AX-SBIINB`, `BP-ICICIB`).'
      ],
      donts: [
        'NEVER transfer money back based on an SMS notification alone.',
        'NEVER trust payment screenshots—they can be forged in under 10 seconds.',
        'NEVER succumb to emotional pleas or abusive threats without verifying your real account balance.'
      ]
    }
  },
  {
    id: 'social-media-impersonation',
    title: 'Social Media & Impersonation Scams',
    shortDesc: 'Cloned friend profiles, WhatsApp CEO fraud, and account hijacking.',
    icon: 'Users',
    severity: 'High',
    victimCountGlobal: '18M+ Annual Victims',
    avgLoss: '$500 - $8,000 (₹20,000 - ₹3,00,000)',
    psychologicalTrigger: 'Trust in close friendships, workplace authority (CEO fraud), and willingness to help.',
    legalProvisions: 'IT Act Sec 66C, 66D, IPC 419, IPC 420.',
    targetDemographic: 'Active social media users, corporate employees, and family circles.',
    recoveryProbability: 'Moderate if reported to social platforms and banks within 4 hours.',
    howItWorks: [
      'Scammers scrape photos and friend lists from Facebook or Instagram to create an exact duplicate clone profile.',
      'They message friends and family: "I lost my phone and wallet while traveling, can you lend me $400 until tomorrow?"',
      'In corporate environments (CEO Fraud), scammers impersonate company executives emailing junior finance staff demanding urgent gift cards or vendor wire transfers.'
    ],
    redFlags: [
      'A close friend contacts you from a brand-new profile or unexpected number asking for money.',
      'The caller makes excuses why they cannot talk on phone or video call.',
      'Unusual payment requests (e.g. Apple Gift cards, Amazon vouchers, or instant crypto transfers).'
    ],
    realWorldExample: {
      title: 'The WhatsApp "CEO Emergency Gift Card" Trap',
      scenario: 'A junior accountant received a WhatsApp message from a number displaying their CEO’s portrait: "I am in a critical board meeting, buy 10 Apple Gift Cards worth ₹10,000 each for client gifts and send photo of codes right away."',
      sampleMessage: {
        sender: 'CEO Rajesh (Display Picture) +91 97777 66666',
        body: 'Urgent: I am in client negotiation meeting. Need you to purchase 10 Apple Gift Cards of Rs 10000 each immediately. Send scratch codes on WhatsApp. Will reimburse in expense claim today.',
        suspiciousElements: [
          { text: 'Need you to purchase Apple Gift Cards', reason: 'Universal corporate gift card scam signature.' },
          { text: 'I am in client negotiation meeting', reason: 'Excuse to prevent direct verbal verification.' }
        ]
      },
      preventionTip: 'Always verify unexpected financial requests via an independent phone call or in-person check.'
    },
    dosAndDonts: {
      dos: [
        'Always call the friend or executive on their verified, saved number before wiring funds.',
        'Keep social media accounts private to restrict personal data scraping.',
        'Report impersonating profiles to Meta / LinkedIn / WhatsApp.'
      ],
      donts: [
        'NEVER send money based on a direct message alone.',
        'NEVER purchase gift cards as payment for corporate or personal emergencies.',
        'NEVER accept duplicate friend requests from existing contacts without confirming.'
      ]
    }
  },
  {
    id: 'online-shopping',
    title: 'Online Shopping & Fake E-Commerce Scams',
    shortDesc: 'Unbelievable 90% discount social media ads, phantom couriers, and Cash-on-Delivery empty boxes.',
    icon: 'ShoppingBag',
    severity: 'Medium',
    victimCountGlobal: '25M+ Annual Incidents',
    avgLoss: '$80 - $900 (₹2,000 - ₹35,000)',
    psychologicalTrigger: 'Bargain hunting, FOMO, and impulsiveness driven by countdown timers.',
    legalProvisions: 'Consumer Protection Act 2019, IT Act Sec 66D, IPC 420.',
    targetDemographic: 'Bargain hunters, festive season shoppers, and social media ad browsers.',
    recoveryProbability: 'Moderate for Credit Cards (via chargeback); Low for UPI/COD cash.',
    howItWorks: [
      'Scammers set up ephemeral Shopify or WooCommerce stores advertising brand-name electronics or sneakers at 80-90% discount.',
      'Sponsored ads on Instagram and Facebook drive thousands of buyers to the site.',
      'Victims pay via card or UPI. The item is never shipped, and customer support emails bounce.',
      'Alternatively, for Cash-on-Delivery orders, couriers deliver an empty box containing cardboard or soap bars, and delivery drivers refuse refunds once opened.'
    ],
    redFlags: [
      'Prices that are too good to be true (e.g. brand-new PS5 or iPhone 16 for $99).',
      'Online store created only a few days ago with no physical address, phone number, or return policy.',
      'Only accepted payment method is direct UPI transfer, Western Union, or crypto.',
      'Social media comments on ads are turned off or hidden.'
    ],
    realWorldExample: {
      title: 'The ₹999 Branded Sneaker Instagram Ad',
      scenario: 'An Instagram advertisement offers authentic Nike sneakers for ₹999 (regularly ₹12,000) claiming an "Annual Warehouse Clearance". You order via Cash on Delivery. When the parcel arrives and you pay the delivery person, you open the box to find old newspapers and used flip-flops.',
      sampleMessage: {
        sender: 'Sponsored Ad: @SneakerHubClearance',
        body: 'MEGA SALE: 92% OFF all authentic Air Jordans! Only 14 pairs left in stock! Order today and pay on delivery.',
        suspiciousElements: [
          { text: '92% OFF authentic sneakers', reason: 'Impossible pricing for high-demand luxury items.' },
          { text: 'Only 14 pairs left', reason: 'Artificial urgency timer forcing impulsive purchase.' },
          { text: 'No verified corporate contact', reason: 'Fly-by-night fraudulent operation.' }
        ]
      },
      preventionTip: 'If a deal appears ridiculously cheap, it is counterfeit or a total scam. Stick to verified merchants.'
    },
    dosAndDonts: {
      dos: [
        'Check website age on WHOIS lookup before purchasing from unknown brands.',
        'Use credit cards with built-in fraud and chargeback protection rather than direct debit or UPI.',
        'Record an unboxing video without cuts when receiving parcels from third-party sellers.'
      ],
      donts: [
        'NEVER trust sponsored social media ads blindly without researching external customer reviews.',
        'NEVER pay advance fees for "customs clearance" or "delivery insurance".',
        'NEVER hand over OTPs to delivery drivers before actually inspecting the parcel.'
      ]
    }
  },
  {
    id: 'password-account',
    title: 'Password Re-use & Credential Stuffing',
    shortDesc: 'Dark-web credential stuffing, session hijacking, and migrating to biometric passkeys.',
    icon: 'KeyRound',
    severity: 'High',
    victimCountGlobal: '60M+ Accounts Compromised',
    avgLoss: 'Complete digital identity theft & secondary financial compromise',
    psychologicalTrigger: 'Cognitive fatigue leading to password recycling across dozens of websites.',
    legalProvisions: 'IT Act Sec 43, 66, 66C.',
    targetDemographic: 'Anyone using identical passwords across email, banking, and entertainment portals.',
    recoveryProbability: 'High if 2FA and secondary email recovery are configured in advance.',
    howItWorks: [
      'Billions of username/password combinations leaked from past corporate breaches circulate on dark web databases.',
      'Automated bots test these credentials on thousands of banking, email, and social services (Credential Stuffing).',
      'If you reuse the same password across multiple sites, a breach on an obscure gaming forum grants hackers access to your primary email or banking portal.',
      'Attackers also bribe telecom agents or spoof IDs to execute a SIM Swap, redirecting your SMS OTPs to their burner phone.'
    ],
    redFlags: [
      'Notifications from Google, Apple, or Microsoft stating "New sign-in from unknown device in Russia/Nigeria".',
      'Sudden loss of cellular network signal ("No Service") that persists for hours—may indicate a SIM Swap.',
      'Emails requesting password reset that you never requested.',
      'Two-factor authentication prompts appearing on your phone when you are not trying to log in (MFA Fatigue Attack).'
    ],
    realWorldExample: {
      title: 'The Single Password That Cost ₹6 Lakhs',
      scenario: 'A user used "Praveen@1984" for his food delivery app, personal Gmail, and net banking. When the food delivery app suffered a database breach, attackers credential-stuffed his Gmail, accessed his bank account, and transferred his funds.',
      sampleMessage: {
        sender: 'Security Alert (System)',
        body: 'A duplicate SIM for your mobile number has been requested. If not requested by you, SMS CANCEL to 1900 within 2 hours.',
        suspiciousElements: [
          { text: 'Sent late at night', reason: 'Scammers initiate SIM swaps between 1:00 AM and 4:00 AM when victims are asleep.' }
        ]
      },
      preventionTip: 'Upgrade from vulnerable SMS OTPs to App-based Authenticators (Google Authenticator, Bitwarden, or Hardware Passkeys).'
    },
    dosAndDonts: {
      dos: [
        'Use unique, 16+ character passphrases for every single online account.',
        'Use a reliable Password Manager (e.g., Bitwarden, 1Password, Apple Keychain).',
        'Enable app-based authenticator (TOTP) or biometric Passkeys instead of SMS-based verification.'
      ],
      donts: [
        'NEVER reuse the same password across multiple websites.',
        'NEVER approve an MFA prompt or push notification unless you are actively logging in.',
        'NEVER write down passwords on sticky notes attached to your monitor or desk.'
      ]
    }
  }
];
