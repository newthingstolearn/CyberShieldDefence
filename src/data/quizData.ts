import { QuizScenario } from '../types';

export const QUIZ_SCENARIOS: QuizScenario[] = [
  {
    id: 'quiz-1',
    title: 'The Urgent Bank Account Suspension Alert',
    category: 'KYC & Banking',
    difficulty: 'Beginner',
    context: 'You receive an SMS at 11:30 PM on a Friday night.',
    messageType: 'sms',
    sender: '+91 99123 45678',
    content: 'DEAR CUSTOMER, YOUR SBI REWARD POINTS OF RS. 9,850 ARE EXPIRING TONIGHT. REDEEM IMMEDIATELY TO YOUR SAVINGS ACCOUNT: https://sbi-rewards-gift.xyz/redeem OR CALL 9912345678.',
    attachmentOrLink: 'https://sbi-rewards-gift.xyz/redeem',
    isScam: true,
    options: [
      {
        id: 'opt-1',
        text: 'Click the link immediately to claim the ₹9,850 before it expires.',
        isCorrect: false,
        explanation: 'Incorrect! The urgency ("expiring tonight") is a psychological trick. Real banks do not send links asking you to claim rewards on unofficial `.xyz` domains.'
      },
      {
        id: 'opt-2',
        text: 'Ignore the message, do not click the link, and report the number as spam.',
        isCorrect: true,
        explanation: 'Correct! The SMS comes from a regular 10-digit number, links to a suspicious `.xyz` domain, and manufactures false urgency to steal your banking credentials.'
      },
      {
        id: 'opt-3',
        text: 'Call the mobile number 9912345678 to ask the bank agent to transfer the money for you.',
        isCorrect: false,
        explanation: 'Incorrect! That number belongs directly to the cybercriminal, who will instruct you to share an OTP or install a remote access app.'
      }
    ],
    redFlagsHighlighted: [
      'Originates from a personal 10-digit phone number (+91 99123 45678), not an official bank alphabetic header like `SBIINB`.',
      'Suspicious web address `sbi-rewards-gift.xyz` instead of official bank portal `sbi.co.in`.',
      'Artificial deadline ("expiring tonight") forcing hasty decisions.'
    ],
    learningTakeaway: 'Banks never send redemption links pointing to third-party domains. Any message offering unexpected money expiring in hours is phishing.'
  },
  {
    id: 'quiz-2',
    title: 'The Marketplace Buyer Asking to Scan QR Code',
    category: 'OTP & UPI',
    difficulty: 'Beginner',
    context: 'You put your sofa for sale on an online classifieds site for ₹8,000. Within 5 minutes, a buyer messages you.',
    messageType: 'whatsapp',
    sender: 'Capt. Rakesh Verma (Army uniform DP)',
    content: 'Hello, I will buy the sofa right away. I am sending you a QR code of ₹8,000 from my defense account. Please scan this barcode on Google Pay / PhonePe and enter your UPI PIN to approve the receipt of ₹8,000.',
    attachmentOrLink: 'QR Code image: upi://pay?pa=rakesh_army@okaxis&am=8000',
    isScam: true,
    options: [
      {
        id: 'opt-1',
        text: 'Scan the QR code and enter your UPI PIN because it is an official defense voucher.',
        isCorrect: false,
        explanation: 'Fatal Mistake! Entering your PIN will instantly deduct ₹8,000 from your account! You never enter a PIN to receive money.'
      },
      {
        id: 'opt-2',
        text: 'Refuse to scan, explain that receiving money requires no QR or PIN, and block the user.',
        isCorrect: true,
        explanation: 'Spot on! The golden rule of UPI: You only enter a PIN to SEND money. Receiving money is completely automatic without entering any PIN.'
      },
      {
        id: 'opt-3',
        text: 'Ask the buyer to send ₹1 first as a test scan with your PIN.',
        isCorrect: false,
        explanation: 'Dangerous! Even entering a PIN for ₹1 proves to the scammer you can be manipulated, and opens the door to draining your account.'
      }
    ],
    redFlagsHighlighted: [
      'Buyer is uncharacteristically eager to pay full price without asking any questions about item condition.',
      'Claim that you need to scan a QR code or enter a PIN to "accept" money.',
      'Impersonation of armed forces or police to create artificial authority and trust.'
    ],
    learningTakeaway: 'Repeat this everywhere: To receive money on UPI, you only need to provide your phone number or UPI ID. Entering a PIN ALWAYS sends money.'
  },
  {
    id: 'quiz-3',
    title: 'The College WhatsApp "Part-Time Review Job"',
    category: 'Fake Jobs & Youth',
    difficulty: 'Intermediate',
    context: 'You are added to a WhatsApp group called "Google Media Part-Time Associates".',
    messageType: 'whatsapp',
    sender: 'Coordinator Sarah (+62 812 3456 7890)',
    content: 'Earn ₹3,000 - ₹5,000 daily from home! Task 1: Like this YouTube channel and reply with screenshot. We will credit ₹150 instantly to your UPI. Then pay ₹2,000 to unlock VIP Tier 2 tasks and earn ₹4,000.',
    isScam: true,
    options: [
      {
        id: 'opt-1',
        text: 'Complete the first task, take the ₹150, and invest the ₹2,000 to double your earnings.',
        isCorrect: false,
        explanation: 'Trap! The initial ₹150 is "bait money" paid intentionally by scammers to build trust before stealing your ₹2,000 deposit.'
      },
      {
        id: 'opt-2',
        text: 'Recognize this as a task-based advance-fee scam, exit the group, and report it.',
        isCorrect: true,
        explanation: 'Excellent! Legitimate companies never pay employees to click YouTube likes, and NO genuine employer ever asks you to pay money to unlock work.'
      },
      {
        id: 'opt-3',
        text: 'Share the opportunity with college friends so everyone can make money together.',
        isCorrect: false,
        explanation: 'Never forward or share scam groups. You would be exposing your friends to financial loss.'
      }
    ],
    redFlagsHighlighted: [
      'International sender (+62 country code) managing Indian currency tasks.',
      'Requirement to pay money ("VIP Tier 2") to unlock future earnings.',
      'Unrealistically high payment rate for trivial work like clicking thumbs-up.'
    ],
    learningTakeaway: 'Whenever a job requires you to deposit or pay money to work, it is 100% a fraudulent advance-fee scam.'
  },
  {
    id: 'quiz-4',
    title: 'The "Digital Arrest" & Police Video Call',
    category: 'Impersonation & Fear',
    difficulty: 'Advanced',
    context: 'You receive an urgent phone call while working at home.',
    messageType: 'call',
    sender: 'Federal Police Department (Display Name)',
    content: 'Officer from Mumbai Cyber Crime: A DHL parcel containing 140 synthetic narcotics pills and fake passports registered under your Aadhaar number was seized at the international airport. A Supreme Court warrant is issued for your arrest. Join this Skype video call immediately for clearance.',
    isScam: true,
    options: [
      {
        id: 'opt-1',
        text: 'Join the video call and transfer money to their "RBI government verification account" to clear your name.',
        isCorrect: false,
        explanation: 'Extreme danger! This is the "Digital Arrest" extortion scam. Victims have lost life savings under psychological coercion.'
      },
      {
        id: 'opt-2',
        text: 'Disconnect immediately. No law enforcement agency has the legal concept of "Digital Arrest" or arrest over video call. Call 1930.',
        isCorrect: true,
        explanation: 'Perfect! Real police officers never arrest citizens over Skype, WhatsApp, or phone, and NEVER ask for money transfers to "verify innocence".'
      },
      {
        id: 'opt-3',
        text: 'Beg the caller for mercy and offer to pay them a settlement fee over Google Pay.',
        isCorrect: false,
        explanation: 'Never bribe or pay scammers. Once you show fear, they will escalate threats and demand millions.'
      }
    ],
    redFlagsHighlighted: [
      'Threat of immediate arrest over phone or video chat.',
      'Claim of "Digital Arrest"—there is NO such legal concept in criminal jurisprudence.',
      'Demand to keep camera on and stay isolated from family members.'
    ],
    learningTakeaway: 'Real police agencies serve physical summons or visit in person with official documentation. They never demand money transfers or hold Skype court sessions.'
  },
  {
    id: 'quiz-5',
    title: 'The Instagram Free iPhone Giveaway DM',
    category: 'Social Media & Student',
    difficulty: 'Beginner',
    context: 'You receive a direct message from a user with 50,000 followers.',
    messageType: 'dm',
    sender: '@official_giveaway_deals',
    content: 'CONGRATULATIONS! You have been randomly selected as the 1st prize winner of a brand new Apple iPhone 16 Pro Max! Please claim your prize here: https://free-gift-apple.claim-win.xyz and pay ₹499 shipping insurance fee.',
    attachmentOrLink: 'https://free-gift-apple.claim-win.xyz',
    isScam: true,
    options: [
      {
        id: 'opt-1',
        text: 'Pay the small ₹499 shipping fee since an iPhone 16 is worth ₹1,40,000.',
        isCorrect: false,
        explanation: 'False economy! There is no iPhone. They take your ₹499 and steal your payment card details.'
      },
      {
        id: 'opt-2',
        text: 'Recognize this as a classic advance-fee fake giveaway, report the account to Instagram, and delete the DM.',
        isCorrect: true,
        explanation: 'Spot on! You cannot win a contest or giveaway you never entered, and real giveaways never require prize winners to pay "delivery insurance".'
      }
    ],
    redFlagsHighlighted: [
      'Winning a contest you never participated in.',
      'Requirement to pay money ("shipping fee") to receive a "free" prize.',
      'Shady link with non-standard domain `claim-win.xyz`.'
    ],
    learningTakeaway: 'Free gift DMs asking for shipping or processing fees are always credential and credit card harvesting schemes.'
  }
];

export const QUIZ_SCENARIOS_KN: QuizScenario[] = [
  {
    id: 'quiz-1',
    title: 'ತುರ್ತು ಬ್ಯಾಂಕ್ ರಿವಾರ್ಡ್ ಪಾಯಿಂಟ್ಸ್ ಸಂದೇಶ',
    category: 'ಕೆವೈಸಿ & ಬ್ಯಾಂಕಿಂಗ್',
    difficulty: 'Beginner',
    context: 'ಶುಕ್ರವಾರ ರಾತ್ರಿ 11:30 ಕ್ಕೆ ನಿಮಗೆ ಎಸ್ಎಂಎಸ್ ಬರುತ್ತದೆ.',
    messageType: 'sms',
    sender: '+91 99123 45678',
    content: 'ಗ್ರಾಹಕರೇ, ನಿಮ್ಮ ಎಸ್‌ಬಿಐ ರಿವಾರ್ಡ್ ಪಾಯಿಂಟ್ಸ್ ರೂ 9,850 ಇಂದು ರಾತ್ರಿ ಮುಕ್ತಾಯವಾಗಲಿದೆ. ತಕ್ಷಣ ನಿಮ್ಮ ಖಾತೆಗೆ ಜಮೆ ಮಾಡಿಕೊಳ್ಳಲು ಕ್ಲಿಕ್ ಮಾಡಿ: https://sbi-rewards-gift.xyz/redeem ಅಥವಾ 9912345678 ಗೆ ಕರೆ ಮಾಡಿ.',
    attachmentOrLink: 'https://sbi-rewards-gift.xyz/redeem',
    isScam: true,
    options: [
      {
        id: 'opt-1',
        text: 'ಹಣ ಕಳೆದುಕೊಳ್ಳುವ ಮುನ್ನ ತಕ್ಷಣ ಆ ಲಿಂಕ್ ಕ್ಲಿಕ್ ಮಾಡಿ ₹9,850 ಕ್ಲೈಮ್ ಮಾಡುವುದು.',
        isCorrect: false,
        explanation: 'ತಪ್ಪು ನಿರ್ಧಾರ! ಇಂದು ರಾತ್ರಿ ಮುಕ್ತಾಯವಾಗುತ್ತದೆ ಎಂಬ ಆತುರ ವಂಚಕರ ಮಾನಸಿಕ ಕುತಂತ್ರ. ನೈಜ ಬ್ಯಾಂಕುಗಳು ಇಂತಹ ಅನಧಿಕೃತ .xyz ಲಿಂಕ್‌ಗಳನ್ನು ಕಳುಹಿಸುವುದಿಲ್ಲ.'
      },
      {
        id: 'opt-2',
        text: 'ಸಂದೇಶವನ್ನು ನಿರ್ಲಕ್ಷಿಸಿ, ಯಾವುದೇ ಲಿಂಕ್ ಕ್ಲಿಕ್ ಮಾಡದೆ, ನಂಬರ್ ಅನ್ನು ಸ್ಪ್ಯಾಮ್ ಎಂದು ವರದಿ ಮಾಡುವುದು.',
        isCorrect: true,
        explanation: 'ಸರಿಯಾದ ನಿರ್ಧಾರ! ಎಸ್ಎಂಎಸ್ ಸಾಮಾನ್ಯ 10-ಅಂಕಿಯ ನಂಬರ್‌ನಿಂದ ಬಂದಿದೆ ಮತ್ತು ನಕಲಿ .xyz ವೆಬ್‌ಸೈಟ್‌ಗೆ ಲಿಂಕ್ ಹೊಂದಿದೆ. ಇದು ಪಾಸ್‌ವರ್ಡ್ ಕದಿಯುವ ಫಿಶಿಂಗ್ ಜಾಲ.'
      },
      {
        id: 'opt-3',
        text: 'ಅಲ್ಲಿರುವ ಮೊಬೈಲ್ ನಂಬರ್‌ಗೆ ಕರೆ ಮಾಡಿ ಹಣ ಕಳುಹಿಸಲು ವಿನಂತಿಸುವುದು.',
        isCorrect: false,
        explanation: 'ತಪ್ಪು! ಆ ನಂಬರ್ ಸೈಬರ್ ವಂಚಕನದ್ದಾಗಿದ್ದು, ಆತ ನಿಮ್ಮಿಂದ ಒಟಿಪಿ ಪಡೆದು ಅಥವಾ ಆಪ್ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿಸಿ ನಿಮ್ಮ ಖಾತೆ ಖಾಲಿ ಮಾಡುತ್ತಾನೆ.'
      }
    ],
    redFlagsHighlighted: [
      'ಅಧಿಕೃತ ಬ್ಯಾಂಕ್ ಹೆಡರ್ ಬದಲು ಸಾಮಾನ್ಯ 10-ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯಿಂದ ಸಂದೇಶ ಬಂದಿದೆ.',
      'ಅಧಿಕೃತ ಬ್ಯಾಂಕ್ ಡೊಮೇನ್ ಬದಲು sbi-rewards-gift.xyz ಎಂಬ ನಕಲಿ ಲಿಂಕ್ ಇದೆ.',
      '"ಇಂದು ರಾತ್ರಿ ಮುಕ್ತಾಯ" ಎಂಬ ಕೃತಕ ಆತುರ ಸೃಷ್ಟಿಸಲಾಗಿದೆ.'
    ],
    learningTakeaway: 'ಯಾವುದೇ ಬ್ಯಾಂಕ್ ಮೂರನೇ ವ್ಯಕ್ತಿಯ ವೆಬ್‌ಸೈಟ್‌ಗಳ ಮೂಲಕ ರಿವಾರ್ಡ್ ಹಣ ನೀಡುವುದಿಲ್ಲ. ಆತುರ ಸೃಷ್ಟಿಸುವ ಇಂತಹ ಸಂದೇಶಗಳು 100% ಫಿಶಿಂಗ್ ವಂಚನೆ.'
  },
  {
    id: 'quiz-2',
    title: 'ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಕ್ಯೂಆರ್ ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಲು ಹೇಳುವ ಖರೀದಿದಾರ',
    category: 'ಒಟಿಪಿ & ಯುಪಿಐ',
    difficulty: 'Beginner',
    context: 'ನೀವು ಹಳೆಯ ಸೋಫಾವನ್ನು ಮಾರಾಟಕ್ಕೆ ಹಾಕಿದ್ದೀರಿ. ಕೆಲವೇ ನಿಮಿಷಗಳಲ್ಲಿ ಖರೀದಿದಾರ ಸಂದೇಶ ಕಳುಹಿಸುತ್ತಾನೆ.',
    messageType: 'whatsapp',
    sender: 'ಕ್ಯಾಪ್ಟನ್ ರಾಕೇಶ್ ವರ್ಮಾ (ಮಿಲಿಟರಿ ಸಮವಸ್ತ್ರ ಡಿಪಿ)',
    content: 'ನಮಸ್ಕಾರ, ನಾನು ತಕ್ಷಣ ಸೋಫಾ ಖರೀದಿಸುತ್ತೇನೆ. ನನ್ನ ಡಿಫೆನ್ಸ್ ಖಾತೆಯಿಂದ ₹8,000 ಹಣ ಕಳುಹಿಸಲು ಕ್ಯೂಆರ್ ಕೋಡ್ ಕಳುಹಿಸುತ್ತಿದ್ದೇನೆ. ಗೂಗಲ್ ಪೇ ಅಥವಾ ಫೋನ್‌ಪೇನಲ್ಲಿ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ನಿಮ್ಮ ಯುಪಿಐ ಪಿನ್ ಹಾಕಿ ಹಣ ಸ್ವೀಕರಿಸಿ.',
    attachmentOrLink: 'QR Code image: upi://pay?pa=rakesh_army@okaxis&am=8000',
    isScam: true,
    options: [
      {
        id: 'opt-1',
        text: 'ಮಿಲಿಟರಿ ಅಧಿಕೃತ ವೋಚರ್ ಎಂದು ನಂಬಿ ಕ್ಯೂಆರ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಯುಪಿಐ ಪಿನ್ ಹಾಕುವುದು.',
        isCorrect: false,
        explanation: 'ದೊಡ್ಡ ತಪ್ಪು! ಯುಪಿಐ ಪಿನ್ ಹಾಕಿದ ತಕ್ಷಣ ನಿಮ್ಮ ಖಾತೆಯಿಂದ ₹8,000 ಕಡಿತಗೊಳ್ಳುತ್ತದೆ! ಹಣ ಪಡೆಯಲು ಎಂದಿಗೂ ಪಿನ್ ಹಾಕಬೇಕಾಗಿಲ್ಲ.'
      },
      {
        id: 'opt-2',
        text: 'ಸ್ಕ್ಯಾನ್ ಮಾಡಲು ನಿರಾಕರಿಸಿ, ಹಣ ಪಡೆಯಲು ಕ್ಯೂಆರ್ ಅಥವಾ ಪಿನ್ ಬೇಕಿಲ್ಲ ಎಂದು ತಿಳಿಸಿ ಆತನನ್ನು ಬ್ಲಾಕ್ ಮಾಡುವುದು.',
        isCorrect: true,
        explanation: 'ಸರಿಯಾಗಿದೆ! ಯುಪಿಐ ಸುವರ್ಣ ನಿಯಮ: ಕೇವಲ ಹಣ ಕಳುಹಿಸುವಾಗ ಮಾತ್ರ ಪಿನ್ ಹಾಕಬೇಕು. ಹಣ ಸ್ವೀಕರಿಸುವಾಗ ಯಾವುದೇ ಪಿನ್ ಅಗತ್ಯವಿಲ್ಲ.'
      }
    ],
    redFlagsHighlighted: [
      'ವಸ್ತುವಿನ ಸ್ಥಿತಿಯ ಬಗ್ಗೆ ಯಾವುದೇ ಪ್ರಶ್ನೆ ಕೇಳದೆ ಪೂರ್ಣ ಹಣ ಕೊಡಲು ಆತುರ ತೋರುವುದು.',
      'ಹಣ "ಪಡೆಯಲು" ಕ್ಯೂಆರ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಪಿನ್ ಹಾಕಲು ಹೇಳುವುದು.',
      'ವಿಶ್ವಾಸ ಹುಟ್ಟಿಸಲು ಸೇನಾಧಿಕಾರಿ ಅಥವಾ ಪೊಲೀಸ್ ಫೋಟೋ ದುರುಪಯೋಗ.'
    ],
    learningTakeaway: 'ನೆನಪಿಡಿ: ಯುಪಿಐನಲ್ಲಿ ಹಣ ಪಡೆಯಲು ಕೇವಲ ನಿಮ್ಮ ಮೊಬೈಲ್ ನಂಬರ್ ಸಾಕು. ಪಿನ್ ಹಾಕಿದರೆ ನಿಮ್ಮ ಖಾತೆಯಿಂದ ಹಣ ಹೋಗುತ್ತದೆ!'
  },
  {
    id: 'quiz-3',
    title: 'ವಾಟ್ಸಾಪ್ "ಪಾರ್ಟ್‌ಟೈಮ್ ಯೂಟ್ಯೂಬ್ ರಿವ್ಯೂ ಕೆಲಸ"',
    category: 'ನಕಲಿ ಉದ್ಯೋಗ',
    difficulty: 'Intermediate',
    context: 'ನಿಮ್ಮನ್ನು "Google Media Part-Time Associates" ಎಂಬ ವಾಟ್ಸಾಪ್ ಗುಂಪಿಗೆ ಸೇರಿಸಲಾಗಿದೆ.',
    messageType: 'whatsapp',
    sender: 'ಸಾರಾ (+62 812 3456 7890)',
    content: 'ಮನೆಯಲ್ಲೇ ಕುಳಿತು ದಿನಕ್ಕೆ ₹3,000 - ₹5,000 ಸಂಪಾದಿಸಿ! ಟಾಸ್ಕ್ 1: ಈ ಯೂಟ್ಯೂಬ್ ಚಾನೆಲ್ ಲೈಕ್ ಮಾಡಿ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಕಳುಹಿಸಿ, ತಕ್ಷಣ ₹150 ಪಡೆಯಿರಿ. ನಂತರ ವಿಐಪಿ ಟಾಸ್ಕ್ ಅನ್‌ಲಾಕ್ ಮಾಡಲು ₹2,000 ಡೆಪಾಸಿಟ್ ಮಾಡಿ ₹4,000 ಪಡೆಯಿರಿ.',
    isScam: true,
    options: [
      {
        id: 'opt-1',
        text: 'ಮೊದಲ ಟಾಸ್ಕ್ ಮಾಡಿ ₹150 ಪಡೆದು, ನಂತರ ₹2,000 ತೊಡಗಿಸಿ ಹಣ ದ್ವಿಗುಣಗೊಳಿಸುವುದು.',
        isCorrect: false,
        explanation: 'ಬಲೆ! ಮೊದಲ ₹150 ಕೇವಲ ನಿಮ್ಮ ವಿಶ್ವಾಸ ಗಳಿಸಲು ಹಾಕಿದ ಆಮಿಷ. ನಂತರ ನಿಮ್ಮ ₹2,000 ಮತ್ತು ಮುಂದಿನ ಡೆಪಾಸಿಟ್‌ಗಳನ್ನು ಕದಿಯುತ್ತಾರೆ.'
      },
      {
        id: 'opt-2',
        text: 'ಇದು ಟೆಲಿಗ್ರಾಂ ಪ್ರಿಪೇಯ್ಡ್ ಟಾಸ್ಕ್ ವಂಚನೆ ಎಂದು ಗುರುತಿಸಿ, ಗ್ರೂಪ್‌ನಿಂದ ಹೊರಬಂದು ವರದಿ ಮಾಡುವುದು.',
        isCorrect: true,
        explanation: 'ಉತ್ತಮ ನಿರ್ಧಾರ! ಯಾವುದೇ ನಿಜವಾದ ಕಂಪನಿಯು ವೀಡಿಯೋ ಲೈಕ್ ಮಾಡಲು ಹಣ ನೀಡುವುದಿಲ್ಲ ಮತ್ತು ಕೆಲಸ ಮಾಡಲು ಹಣ ಕೇಳುವುದಿಲ್ಲ.'
      }
    ],
    redFlagsHighlighted: [
      'ಅಂತರಾಷ್ಟ್ರೀಯ ಸಂಖ್ಯೆಯಿಂದ (+62) ಭಾರತೀಯ ಕೆಲಸದ ಆಫರ್ ಬರುವುದು.',
      'ಹೆಚ್ಚಿನ ಕಮಿಷನ್ ಪಡೆಯಲು ಹಣ ಡೆಪಾಸಿಟ್ ಮಾಡುವಂತೆ ಕೇಳುವುದು.'
    ],
    learningTakeaway: 'ಕೆಲಸ ಮಾಡಲು ನಿಮ್ಮಿಂದಲೇ ಹಣ ಅಥವಾ ಡೆಪಾಸಿಟ್ ಕೇಳಿದರೆ ಅದು 100% ವಂಚನೆ.'
  },
  {
    id: 'quiz-4',
    title: 'ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್ ಮತ್ತು ನಕಲಿ ಪೊಲೀಸ್ ವಿಡಿಯೋ ಕಾಲ್',
    category: 'ಭಯ & ಸುಲಿಗೆ',
    difficulty: 'Advanced',
    context: 'ಮನೆಯಲ್ಲಿ ಕೆಲಸ ಮಾಡುತ್ತಿರುವಾಗ ನಿಮಗೆ ತುರ್ತು ಫೋನ್ ಕರೆ ಬರುತ್ತದೆ.',
    messageType: 'call',
    sender: 'ಫೆಡರಲ್ ಸೈಬರ್ ಪೊಲೀಸ್ (ಹೆಸರು)',
    content: 'ಮುಂಬೈ ಸೈಬರ್ ಕ್ರೈಮ್ ಅಧಿಕಾರಿ: ನಿಮ್ಮ ಆಧಾರ್ ಸಂಖ್ಯೆಯ ಪಾರ್ಸೆಲ್‌ನಲ್ಲಿ ನಿಷೇಧಿತ ಡ್ರಗ್ಸ್ ಮಾತ್ರೆಗಳು ಸಿಕ್ಕಿವೆ. ನಿಮ್ಮ ವಿರುದ್ಧ ಸುಪ್ರೀಂ ಕೋರ್ಟ್ ಅರೆಸ್ಟ್ ವಾರಂಟ್ ಜಾರಿಯಾಗಿದೆ. ತಕ್ಷಣ ಸ್ಕೈಪ್ ವಿಡಿಯೋ ಕಾಲ್ ಮೂಲಕ ವಿಚಾರಣೆಗೆ ಹಾಜರಾಗಿ.',
    isScam: true,
    options: [
      {
        id: 'opt-1',
        text: 'ವಿಡಿಯೋ ಕಾಲ್‌ಗೆ ಸೇರಿ, ನಿಮ್ಮ ಹೆಸರನ್ನು ಕ್ಲಿಯರ್ ಮಾಡಲು ಆರ್‌ಬಿಐ ಪರಿಶೀಲನಾ ಖಾತೆಗೆ ಹಣ ವರ್ಗಾಯಿಸುವುದು.',
        isCorrect: false,
        explanation: 'ಅತ್ಯಂತ ಅಪಾಯಕಾರಿ! ಇದು ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್ ಸುಲಿಗೆ ವಂಚನೆ. ಹೆದರಿಕೆಯಿಂದ ಜನರು ಲಕ್ಷಾಂತರ ರೂಪಾಯಿ ಕಳೆದುಕೊಂಡಿದ್ದಾರೆ.'
      },
      {
        id: 'opt-2',
        text: 'ತಕ್ಷಣ ಕಾಲ್ ಕಟ್ ಮಾಡಿ. ಯಾವುದೇ ಕಾನೂನು ಜಾರಿ ಸಂಸ್ಥೆ ವಿಡಿಯೋ ಕಾಲ್‌ನಲ್ಲಿ ಬಂಧನ ಮಾಡುವುದಿಲ್ಲ. 1930 ಗೆ ಕರೆ ಮಾಡಿ.',
        isCorrect: true,
        explanation: 'ಪರಿಪೂರ್ಣ! ಭಾರತೀಯ ಪೊಲೀಸರು ಅಥವಾ ತನಿಖಾ ಸಂಸ್ಥೆಗಳು ಸ್ಕೈಪ್/ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಜನರನ್ನು ಬಂಧಿಸುವುದಿಲ್ಲ ಮತ್ತು ಹಣ ವರ್ಗಾಯಿಸಲು ಕೇಳುವುದಿಲ್ಲ.'
      }
    ],
    redFlagsHighlighted: [
      'ಫೋನ್ ಅಥವಾ ವಿಡಿಯೋ ಕಾಲ್‌ನಲ್ಲಿ ತಕ್ಷಣದ ಬಂಧನದ ಬೆದರಿಕೆ.',
      '"ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್" ಎಂಬ ಕಾನೂನು ಪರಿಕಲ್ಪನೆಯೇ ಭಾರತದಲ್ಲಿ ಇಲ್ಲದಿರುವುದು.',
      'ಕ್ಯಾಮೆರಾ ಆನ್ ಇಟ್ಟು ಕುಟುಂಬದವರಿಂದ ಪ್ರತ್ಯೇಕವಾಗಿರಲು ಒತ್ತಾಯಿಸುವುದು.'
    ],
    learningTakeaway: 'ನಿಜವಾದ ಪೊಲೀಸರು ನೇರವಾಗಿ ಮನೆಗೆ ಭೇಟಿ ನೀಡುತ್ತಾರೆ ಅಥವಾ ಅಧಿಕೃತ ನೋಟಿಸ್ ನೀಡುತ್ತಾರೆ. ಹಣ ಕೇಳುವ ಯಾವುದೇ ವಿಡಿಯೋ ಕಾಲ್ 100% ಸುಲಿಗೆ.'
  },
  {
    id: 'quiz-5',
    title: 'ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್ ಉಚಿತ ಐಫೋನ್ ಬಹುಮಾನ ಡಿಎಂ ಸಂದೇಶ',
    category: 'ಸಾಮಾಜಿಕ ಜಾಲತಾಣ',
    difficulty: 'Beginner',
    context: '50,000 ಫಾಲೋವರ್ಸ್ ಹೊಂದಿರುವ ಪ್ರೊಫೈಲ್‌ನಿಂದ ನಿಮಗೆ ನೇರ ಸಂದೇಶ ಬರುತ್ತದೆ.',
    messageType: 'dm',
    sender: '@official_giveaway_deals',
    content: 'ಅಭಿನಂದನೆಗಳು! ಹೊಚ್ಚ ಹೊಸ ಆಪಲ್ ಐಫೋನ್ 16 ಪ್ರೊ ಮ್ಯಾಕ್ಸ್ ವಿಜೇತರಾಗಿ ನೀವು ಆಯ್ಕೆಯಾಗಿದ್ದೀರಿ! ನಿಮ್ಮ ಬಹುಮಾನ ಕ್ಲೈಮ್ ಮಾಡಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ: https://free-gift-apple.claim-win.xyz ಮತ್ತು ₹499 ಡೆಲಿವರಿ ಶುಲ್ಕ ಪಾವತಿಸಿ.',
    attachmentOrLink: 'https://free-gift-apple.claim-win.xyz',
    isScam: true,
    options: [
      {
        id: 'opt-1',
        text: '₹1.4 ಲಕ್ಷದ ಐಫೋನ್‌ಗಾಗಿ ಕೇವಲ ₹499 ಡೆಲಿವರಿ ಶುಲ್ಕವನ್ನು ಪಾವತಿಸುವುದು.',
        isCorrect: false,
        explanation: 'ತಪ್ಪು! ಯಾವುದೇ ಐಫೋನ್ ಸಿಗುವುದಿಲ್ಲ. ಆ ₹499 ಕಳೆದುಕೊಳ್ಳುವುದಲ್ಲದೆ ನಿಮ್ಮ ಕ್ರೆಡಿಟ್/ಡೆಬಿಟ್ ಕಾರ್ಡ್ ಮಾಹಿತಿ ಕದಿಯಲಾಗುತ್ತದೆ.'
      },
      {
        id: 'opt-2',
        text: 'ಇದು ನಕಲಿ ಗಿವ್‌ಅವೇ ಎಂದು ಗುರುತಿಸಿ, ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್‌ಗೆ ವರದಿ ಮಾಡಿ ಸಂದೇಶವನ್ನು ಡಿಲೀಟ್ ಮಾಡುವುದು.',
        isCorrect: true,
        explanation: 'ಸರಿಯಾದ ನಿರ್ಧಾರ! ನೀವು ಭಾಗವಹಿಸದ ಯಾವುದೇ ಸ್ಪರ್ಧೆಯಲ್ಲಿ ಗೆಲ್ಲಲು ಸಾಧ್ಯವಿಲ್ಲ. ನೈಜ ಬಹುಮಾನಗಳಿಗೆ ಮುಂಗಡ ಹಣ ಕೇಳುವುದಿಲ್ಲ.'
      }
    ],
    redFlagsHighlighted: [
      'ನೀವು ಭಾಗವಹಿಸದ ಸ್ಪರ್ಧೆಯಲ್ಲಿ ವಿಜೇತರಾಗಿ ಆಯ್ಕೆಯಾಗುವುದು.',
      '"ಉಚಿತ" ಬಹುಮಾನ ಪಡೆಯಲು ಡೆಲಿವರಿ ಹಣ ಪಾವತಿಸಲು ಕೇಳುವುದು.',
      'ಅಪಾಯಕಾರಿ ವೆಬ್‌ಸೈಟ್ ಡೊಮೇನ್ `claim-win.xyz`.'
    ],
    learningTakeaway: 'ಉಚಿತ ಉಡುಗೊರೆಗಳ ಹೆಸರಿನಲ್ಲಿ ಮುಂಗಡ ಶುಲ್ಕ ಕೇಳುವ ಡಿಎಂ ಸಂದೇಶಗಳು ಯಾವಾಗಲೂ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ಕದಿಯುವ ಜಾಲಗಳು.'
  }
];

