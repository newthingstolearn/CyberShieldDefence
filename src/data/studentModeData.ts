import { StudentScamTopic } from '../types';

export const STUDENT_TOPICS: StudentScamTopic[] = [
  {
    id: 'instagram-social',
    title: 'Instagram & Social Media Account Takeovers',
    tag: 'Social Media & Phishing',
    hook: '"Hey! Can you do me a huge favor and vote for me in an influencer ambassador contest? I will send you a link to confirm your vote."',
    theTrap: 'The link asks you to sign in with your Instagram credentials or copy a password reset link sent to your SMS and send it back to the "friend". In reality, the friend’s account was already hacked. When you share that link or enter your password, the hacker logs into your account, changes the email and 2FA, and locks you out forever.',
    howToIdentify: [
      'Messages from friends using phrases they never normally use, or asking you to vote for them in an unknown contest.',
      'DMs claiming your account violated copyright rules and will be deleted in 24 hours unless you appeal via an external link.',
      'Any request asking you to take a screenshot of a 6-digit code or link received on your phone.'
    ],
    realStory: 'Priya, a college sophomore with 12,000 photography followers, lost her entire account in 2 minutes after clicking a "Meta Copyright Infringement Appeal" link sent via an Instagram DM. The hackers demanded ₹15,000 ransom to return the account.',
    quickDefense: 'Enable App-Based Two-Factor Authentication (TOTP via Google Authenticator or Duo) and never share password reset links with anyone.'
  },
  {
    id: 'fake-jobs-internships',
    title: 'Fake Job & Remote Internship Scams',
    tag: 'Career & Internships',
    hook: '"Work from home for 2 hours daily! Earn ₹4,000/day by reviewing hotels on Google Maps and subscribing to YouTube channels. No experience needed!"',
    theTrap: 'You are invited into a Telegram channel. The first few tasks pay small real amounts (₹150 to ₹300) directly to your UPI to build trust. Then, you are told to join the "Prepaid Commission Scheme" where you deposit ₹5,000 to earn ₹8,000. Once you deposit larger sums, the scammers freeze your dashboard and demand more money for "withdrawal tax".',
    howToIdentify: [
      'Unsolicited job offers received via WhatsApp or Telegram from foreign numbers (+62, +880, +234).',
      'The company asks for an upfront fee for "training material", "background check", or "laptop courier".',
      'Job description is absurdly simple (liking videos, copy-pasting text) with executive-level compensation.'
    ],
    realStory: 'Aryan, an engineering 3rd-year student, lost his semester tuition savings of ₹65,000 trying to withdraw his "earned commission" from a fake crypto-merchant website after completing Telegram video tasks.',
    quickDefense: 'A legitimate employer will NEVER ask you to deposit money, buy crypto, or pay registration fees. Always verify internships on official company career portals or university placement cells.'
  },
  {
    id: 'gaming-scams',
    title: 'Gaming Scams & Free In-Game Currency Lures',
    tag: 'Gaming & Virtual Assets',
    hook: '"GET FREE 10,000 ROBUX / V-BUCKS! Enter your gamertag and download these two free apps to verify you are human!"',
    theTrap: 'Websites promising free game currency (Robux, V-Bucks, COD Points, Free Fire Diamonds) prompt you to install APKs or enter your Epic Games / Steam / Roblox login credentials. The downloads contain keyloggers or malware (infostealers like RedLine) that siphon your browser passwords, saved credit cards, and inventory items.',
    howToIdentify: [
      'Third-party websites or YouTube videos claiming secret glitch generators for unlimited free in-game currency.',
      'Steam trade offers from "Steam Admin" bot accounts claiming your inventory items are duplicate or reported.',
      'Discord direct messages from friends offering "1 Month of Free Discord Nitro" linking to `discorcl-nitro.com`.'
    ],
    realStory: 'Sam, an avid gamer, clicked a "Free Discord Nitro" link sent by a friend whose Discord account was compromised. Within 15 minutes, his Steam inventory containing rare CS2 knives worth $800 was traded away to an automated scam bot.',
    quickDefense: 'There is no such thing as a "Robux or V-Bucks generator". Never log into your Steam or gaming account through third-party links outside the official game launcher.'
  },
  {
    id: 'scholarship-scams',
    title: 'Scholarship & Student Loan Scams',
    tag: 'Education & Grants',
    hook: '"Congratulations! You have been awarded the National Student Merit Scholarship of ₹1,00,000. Pay ₹1,499 application processing fee to disburse the funds."',
    theTrap: 'Scammers target students during admissions and exam seasons. They send emails or SMS formatted with government seals claiming a scholarship grant has been approved. To release the money, the student is instructed to pay an "administrative disbursement fee" or share their parents\' net banking credentials.',
    howToIdentify: [
      'Being awarded a scholarship that you never applied for.',
      'Requirement to pay a "processing fee", "redemption charge", or "guarantee deposit" to receive a grant.',
      'Government agency or university emails sent from `@gmail.com` or `@outlook.com` addresses.'
    ],
    realStory: 'Meera, an aspirant applying for medical entrance exams, paid ₹3,500 to a counterfeit website mimicking the National Scholarship Portal, only to discover the entire website was a copycat clone.',
    quickDefense: 'Legitimate scholarships deduct administrative fees from the grant itself, or are completely free to apply. Always verify scholarship schemes on the official National Scholarship Portal (scholarships.gov.in) or your university registrar office.'
  },
  {
    id: 'fake-giveaways',
    title: 'Fake Giveaway & Influencer Impersonations',
    tag: 'Giveaways & Prizes',
    hook: '"MR BEAST / INFLUENCER CELEBRATION: The first 1,000 people to click here receive a brand new PS5 and $500 cash! Just pay $12 for delivery insurance!"',
    theTrap: 'Deepfake videos or scraped clips of popular YouTubers like MrBeast, CarryMinati, or tech influencers are posted as sponsored ads on TikTok, Instagram, and YouTube. Clicking takes you to a fake spin-the-wheel game where everyone "wins". To claim, you must enter your credit card number to pay a minor $10-$20 shipping fee, which enrolls you in an unauthorized recurring monthly subscription of $89.',
    howToIdentify: [
      'Account username has typos or underscores (e.g. `@mrbeast_official_giveaways_92` instead of verified blue checkmark).',
      'Requires a credit card number or UPI transfer to receive a "free" prize.',
      'Comments on the post are disabled, or filled with identical copy-paste bot messages saying "Thank you for the iPhone!"'
    ],
    realStory: 'Rohan paid ₹800 delivery fee on an Instagram giveaway for a gaming monitor. Over the next three months, his card was secretly billed ₹4,999 each month by an overseas shell company until his bank alerted him.',
    quickDefense: 'Real brand giveaways never ask winners to pay for shipping, customs clearance, or insurance. If a fee is required, it is not a giveaway—it is a scam.'
  }
];

export const STUDENT_CHECKLIST = [
  'Turn on 2FA using Google Authenticator or Microsoft Authenticator (not SMS).',
  'Review "Authorized Apps" in your Instagram, Google, and Discord settings every month.',
  'Never share your screen while entering passwords or looking at banking apps.',
  'Check suspicious links using the Fake Link Identifier tool before opening.',
  'If an offer sounds too good to be true, it 100% is.'
];

export const STUDENT_TOPICS_KN: StudentScamTopic[] = [
  {
    id: 'instagram-social',
    title: 'ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್ & ಸೋಷಿಯಲ್ ಮೀಡಿಯಾ ಹ್ಯಾಕಿಂಗ್',
    tag: 'ಸಾಮಾಜಿಕ ಜಾಲತಾಣ & ಫಿಶಿಂಗ್',
    hook: '"ನನ್ನ ಸ್ಪರ್ಧೆಯಲ್ಲಿ ಗೆಲ್ಲಲು ನನಗೊಂದು ವೋಟ್ ಮಾಡ್ತೀಯಾ? ನಿನ್ನ ಮೊಬೈಲ್‌ಗೆ ಬರುವ ಲಿಂಕ್ ನನಗೆ ಕಳುಹಿಸು!"',
    theTrap: 'ಸ್ನೇಹಿತನಂತೆ ನಟಿಸಿ ಪಾಸ್‌ವರ್ಡ್ ರಿಸೆಟ್ ಲಿಂಕ್ ಪಡೆದು ನಿಮ್ಮ ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್ ಖಾತೆಯನ್ನು ಹ್ಯಾಕ್ ಮಾಡಿ, ಮರಳಿ ನೀಡಲು ಹಣಕ್ಕೆ ಬೇಡಿಕೆಯಿಡುತ್ತಾರೆ.',
    howToIdentify: [
      'ಸ್ನೇಹಿತರು ಎಂದಿಗೂ ಬಳಸದ ಭಾಷೆಯಲ್ಲಿ ಸ್ಪರ್ಧೆಯ ವೋಟ್ ಕೇಳುವ ಸಂದೇಶಗಳು.',
      'ನಿಮ್ಮ ಖಾತೆ 24 ಗಂಟೆಯಲ್ಲಿ ಡಿಲೀಟ್ ಆಗುತ್ತದೆ ಎಂದು ಬೆದರಿಸುವ ನಕಲಿ ಕಾಪಿರೈಟ್ ನೋಟಿಸ್‌ಗಳು.'
    ],
    realStory: 'ಪ್ರಿಯಾ ಎಂಬ ಕಾಲೇಜು ವಿದ್ಯಾರ್ಥಿನಿ "ಕಾಪಿರೈಟ್ ಮೇಲ್ಮನವಿ" ಲಿಂಕ್ ಕ್ಲಿಕ್ ಮಾಡಿದ 2 ನಿಮಿಷದಲ್ಲಿ ತನ್ನ 12,000 ಫಾಲೋವರ್ಸ್ ಇದ್ದ ಖಾತೆಯನ್ನು ಕಳೆದುಕೊಂಡಳು.',
    quickDefense: 'Google Authenticator ಆಪ್ ಮೂಲಕ Two-Factor Authentication (2FA) ಸಕ್ರಿಯಗೊಳಿಸಿ. ಯಾವುದೇ ಲಿಂಕ್ ಅಥವಾ ಒಟಿಪಿಯನ್ನು ಯಾರಿಗೂ ಕಳುಹಿಸಬೇಡಿ.'
  },
  {
    id: 'fake-jobs-internships',
    title: 'ನಕಲಿ ಪಾರ್ಟ್‌ಟೈಮ್ ಜಾಬ್ & ಇಂಟರ್ನ್‌ಶಿಪ್ ಮೋಸ',
    tag: 'ಉದ್ಯೋಗ & ಇಂಟರ್ನ್‌ಶಿಪ್',
    hook: '"ದಿನಕ್ಕೆ 2 ಗಂಟೆ ಕೆಲಸ ಮಾಡಿ ₹4,000 ಗಳಿಸಿ! ಯೂಟ್ಯೂಬ್ ಲೈಕ್ ಮಾಡಿ ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್ ರಿವ್ಯೂ ನೀಡಿ."',
    theTrap: 'ಆರಂಭದಲ್ಲಿ ₹150 ನೀಡಿ ನಂಬಿಕೆ ಹುಟ್ಟಿಸಿ, ನಂತರ ವಿಐಪಿ ಟಾಸ್ಕ್ ಹೆಸರಿನಲ್ಲಿ ಕಾಲೇಜು ಶುಲ್ಕದ ಹಣವನ್ನೆಲ್ಲಾ ಲೂಟಿ ಮಾಡುತ್ತಾರೆ.',
    howToIdentify: [
      'ವಾಟ್ಸಾಪ್ ಅಥವಾ ಟೆಲಿಗ್ರಾಂ ಮೂಲಕ ಬರುವ ಅತಿಯಾದ ಸಂಬಳದ ಸುಲಭ ಕೆಲಸದ ಆಫರ್‌ಗಳು.',
      'ಕೆಲಸ ಪ್ರಾರಂಭಿಸಲು ನಿಮ್ಮಿಂದಲೇ ರಿಜಿಸ್ಟ್ರೇಷನ್ ಅಥವಾ ಡೆಪಾಸಿಟ್ ಶುಲ್ಕ ಕೇಳುವುದು.'
    ],
    realStory: 'ಆರ್ಯನ್ ಎಂಬ ಇಂಜಿನಿಯರಿಂಗ್ ವಿದ್ಯಾರ್ಥಿ ಟೆಲಿಗ್ರಾಂ ವಿಡಿಯೋ ಟಾಸ್ಕ್ ಮಾಡಿ ತನ್ನ ಸೆಮಿಸ್ಟರ್ ಫೀಸ್‌ನ ₹65,000 ಹಣವನ್ನು ಕಳೆದುಕೊಂಡನು.',
    quickDefense: 'ಯಾವುದೇ ನೈಜ ಉದ್ಯೋಗದಾತರು ಕೆಲಸ ಮಾಡಲು ನಿಮ್ಮಿಂದ ಡೆಪಾಸಿಟ್ ಕೇಳುವುದಿಲ್ಲ. ಕಾಲೇಜು ಪ್ಲೇಸ್‌ಮೆಂಟ್ ಸೆಲ್ ಮೂಲಕ ಮಾತ್ರ ಉದ್ಯೋಗ ಹುಡುಕಿ.'
  },
  {
    id: 'gaming-scams',
    title: 'ಗೇಮಿಂಗ್ ಮೋಸಗಳು & ಉಚಿತ ರೋಬಕ್ಸ್/ಡೈಮಂಡ್ ಆಮಿಷ',
    tag: 'ಗೇಮಿಂಗ್ & ವರ್ಚುವಲ್ ಆಸ್ತಿಗಳು',
    hook: '"ಉಚಿತ 10,000 ROBUX ಅಥವಾ ಫ್ರೀ ಫೈರ್ ಡೈಮಂಡ್ಸ್ ಪಡೆಯಲು ಈ ಆಪ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ!"',
    theTrap: 'ಉಚಿತ ಆಟದ ಕರೆನ್ಸಿ ನೆಪದಲ್ಲಿ ನಿಮ್ಮ ಮೊಬೈಲ್ ಅಥವಾ ಕಂಪ್ಯೂಟರ್‌ಗೆ ಪಾಸ್‌ವರ್ಡ್ ಕದಿಯುವ ಮಾಲ್‌ವೇರ್ ಆಪ್‌ಗಳನ್ನು ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿಸುತ್ತಾರೆ.',
    howToIdentify: [
      'ಯೂಟ್ಯೂಬ್ ಅಥವಾ ವೆಬ್‌ಸೈಟ್‌ಗಳಲ್ಲಿ ಅನಿಯಮಿತ ಉಚಿತ ಕರೆನ್ಸಿ ಜನರೇಟರ್ ಲಿಂಕ್‌ಗಳು.',
      'ಅಪರಿಚಿತರಿಂದ ಬರುವ ಉಚಿತ ಡಿಸ್ಕಾರ್ಡ್ ನೈಟ್ರೋ (Discord Nitro) ಲಿಂಕ್‌ಗಳು.'
    ],
    realStory: 'ಗೇಮರ್ ಒಬ್ಬರು ನಕಲಿ ಲಿಂಕ್ ಕ್ಲಿಕ್ ಮಾಡಿದ 15 ನಿಮಿಷಗಳಲ್ಲಿ ಅವರ ₹65,000 ಮೌಲ್ಯದ ಸ್ಟೀಮ್ ಗೇಮಿಂಗ್ ಖಾತೆ ಹ್ಯಾಕ್ ಆಯಿತು.',
    quickDefense: 'ಉಚಿತ ಗೇಮ್ ಕರೆನ್ಸಿ ನೀಡುವ ಯಾವುದೇ ಸಾಫ್ಟ್‌ವೇರ್ ಇರುವುದಿಲ್ಲ. ಅಧಿಕೃತ ಗೇಮ್ ಲಾಂಚರ್ ಹೊರತುಪಡಿಸಿ ಬೇರೆಲ್ಲಿಯೂ ಲಾಗಿನ್ ಆಗಬೇಡಿ.'
  },
  {
    id: 'scholarship-scams',
    title: 'ನಕಲಿ ಸ್ಕಾಲರ್‌ಶಿಪ್ & ವಿದ್ಯಾರ್ಥಿ ವೇತನ ವಂಚನೆ',
    tag: 'ಶಿಕ್ಷಣ & ವಿದ್ಯಾರ್ಥಿವೇತನ',
    hook: '"ಅಭಿನಂದನೆಗಳು! ನಿಮಗೆ ₹1,00,000 ರಾಷ್ಟ್ರೀಯ ಮೆರಿಟ್ ಸ್ಕಾಲರ್‌ಶಿಪ್ ಮಂಜೂರಾಗಿದೆ. ಪ್ರೊಸೆಸಿಂಗ್ ಫೀಸ್ ₹1,499 ಪಾವತಿಸಿ ಹಣ ಪಡೆಯಿರಿ."',
    theTrap: 'ಪರೀಕ್ಷಾ ಸಮಯದಲ್ಲಿ ನಕಲಿ ಸರ್ಕಾರಿ ಲೋಗೋ ಬಳಸಿ ಸ್ಕಾಲರ್‌ಶಿಪ್ ಬಂದಿದೆ ಎಂದು ನಂಬಿಸಿ ಪ್ರೊಸೆಸಿಂಗ್ ಶುಲ್ಕದ ಹೆಸರಿನಲ್ಲಿ ಹಣ ವಂಚಿಸುತ್ತಾರೆ.',
    howToIdentify: [
      'ನೀವು ಅರ್ಜಿಯೇ ಸಲ್ಲಿಸದ ಸ್ಕಾಲರ್‌ಶಿಪ್ ಬಂದಿದೆ ಎಂದು ಸಂದೇಶ ಬರುವುದು.',
      'ವಿದ್ಯಾರ್ಥಿವೇತನ ಹಣ ಪಡೆಯಲು ಮುಂಗಡ ಶುಲ್ಕ ಅಥವಾ ಗ್ಯಾರಂಟಿ ಡೆಪಾಸಿಟ್ ಕೇಳುವುದು.'
    ],
    realStory: 'ವೈದ್ಯಕೀಯ ಪ್ರವೇಶ ಪರೀಕ್ಷೆ ಆಕಾಂಕ್ಷಿ ಒಬ್ಬರು ನಕಲಿ ಸ್ಕಾಲರ್‌ಶಿಪ್ ಪೋರ್ಟಲ್‌ಗೆ ₹3,500 ಕಟ್ಟಿ ಮೋಸ ಹೋದರು.',
    quickDefense: 'ಅಧಿಕೃತ ರಾಷ್ಟ್ರೀಯ ಸ್ಕಾಲರ್‌ಶಿಪ್ ಪೋರ್ಟಲ್ (scholarships.gov.in) ಅಥವಾ ನಿಮ್ಮ ಕಾಲೇಜು ಕಚೇರಿಯಲ್ಲಿ ಮಾತ್ರ ಪರಿಶೀಲಿಸಿ.'
  },
  {
    id: 'fake-giveaways',
    title: 'ನಕಲಿ ಐಫೋನ್ ಗಿವ್‌ಅವೇ & ಇನ್‌ಫ್ಲುಯೆನ್ಸರ್ ವಂಚನೆ',
    tag: 'ಉಚಿತ ಗಿಫ್ಟ್ & ಬಹುಮಾನಗಳು',
    hook: '"ಮಿ. ಬೀಸ್ಟ್ ಆಫರ್: ಮೊದಲ 1,000 ಜನರಿಗೆ ಉಚಿತ ಐಫೋನ್! ಡೆಲಿವರಿ ಇನ್ಶುರೆನ್ಸ್ ₹499 ಮಾತ್ರ ಪಾವತಿಸಿ."',
    theTrap: 'ಡೀಪ್‌ಫೇಕ್ ವಿಡಿಯೋಗಳನ್ನು ಪ್ರಾಯೋಜಿತ ಜಾಹೀರಾತುಗಳಾಗಿ ಹಾಕಿ ಡೆಲಿವರಿ ಶುಲ್ಕದ ನೆಪದಲ್ಲಿ ನಿಮ್ಮ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್‌ನಿಂದ ಪ್ರತಿ ತಿಂಗಳು ಹಣ ಕದಿಯುತ್ತಾರೆ.',
    howToIdentify: [
      'ಬ್ಲೂ ಟಿಕ್ ಇಲ್ಲದ ನಕಲಿ ಖಾತೆಗಳಿಂದ ಬರುವ ಬಹುಮಾನದ ಸಂದೇಶಗಳು.',
      '"ಉಚಿತ" ಬಹುಮಾನ ಪಡೆಯಲು ಶಿಪ್ಪಿಂಗ್ ಶುಲ್ಕ ಅಥವಾ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ವಿವರ ಕೇಳುವುದು.'
    ],
    realStory: 'ರೋಹನ್ ಎಂಬ ಯುವಕ ಗೇಮಿಂಗ್ ಮಾನಿಟರ್ ಗಿವ್‌ಅವೇಗಾಗಿ ₹800 ಶಿಪ್ಪಿಂಗ್ ಫೀ ಕಟ್ಟಿದ ನಂತರ ಆತನ ಕಾರ್ಡ್‌ನಿಂದ ಪ್ರತಿ ತಿಂಗಳು ₹4,999 ಕಡಿತವಾಯಿತು.',
    quickDefense: 'ನೈಜ ಕಂಪನಿಗಳು ವಿಜೇತರಿಂದ ಡೆಲಿವರಿ ಶುಲ್ಕ ಅಥವಾ ಇನ್ಶುರೆನ್ಸ್ ಹಣ ಕೇಳುವುದಿಲ್ಲ. ಹಣ ಕೇಳಿದರೆ ಅದು 100% ವಂಚನೆ.'
  }
];

