import { SeniorDoDont } from '../types';

export const SENIOR_SCENARIOS: SeniorDoDont[] = [
  {
    id: 'senior-bank-call',
    scenarioTitle: 'Scenario 1: Someone Calls Saying Your Bank Account or Pension Is Blocked',
    audioText: 'Important warning for bank calls. If anyone calls your phone and says your bank account, ATM card, or pension is blocked or needs KYC update, please stay calm. Do not give them your card number, OTP, or password. Real bank managers never ask for your secret details over the phone. Hang up the phone immediately. If you are worried, visit your bank branch in person or speak with your family member.',
    callerClaim: '"Hello sir/madam, I am calling from your State Bank branch. Your account and pension will be frozen within 2 hours because your KYC is not completed. Give me your card number and the 6-digit SMS code to verify it right now."',
    whatScammerWants: 'They want your 16-digit debit card number, expiry date, CVV on the back, and the 6-digit OTP code sent to your phone so they can steal all your savings.',
    doAction: 'DO: Hang up the call immediately. Take a deep breath. Walk into your local bank branch tomorrow with your passbook, or call your son, daughter, or trusted family member to check for you.',
    dontAction: 'DON\'T: Never tell anyone the 6-digit code (OTP) that comes on your phone. Never read out the numbers on your ATM card. Real bank staff will NEVER ask for this.',
    dangerLevel: 'Emergency'
  },
  {
    id: 'senior-app-download',
    scenarioTitle: 'Scenario 2: Someone Asks You to Install an App Like AnyDesk or QuickSupport',
    audioText: 'Warning about mobile app downloads. Never install any app on your phone because a caller told you to. If they ask you to install AnyDesk, TeamViewer, or QuickSupport, they want to see your phone screen from their computer. When you install these apps, the scammer can see your private messages and bank passwords. Hang up and do not touch the screen.',
    callerClaim: '"Sir, you have a software virus on your mobile phone or your payment app is malfunctioning. Go to Play Store and type AnyDesk or QuickSupport so our bank engineer can fix it for you remotely."',
    whatScammerWants: 'Once you install AnyDesk or TeamViewer, the scammer sees your entire phone screen from their computer. When your bank sends you an OTP, the scammer reads it from your screen without you even telling them!',
    doAction: 'DO: Refuse and disconnect the call. If you accidentally installed it, ask a family member or neighbor immediately to uninstall the app and switch off your phone internet.',
    dontAction: 'DON\'T: Never install any application recommended by someone over a phone call, SMS, or WhatsApp message.',
    dangerLevel: 'Emergency'
  },
  {
    id: 'senior-electricity-bill',
    scenarioTitle: 'Scenario 3: SMS Saying "Your Electricity Will Be Cut Off at 9:30 PM Tonight"',
    audioText: 'Warning about electricity and gas bills. You might get a message saying your electricity will be disconnected tonight because of an unpaid bill. This is a common fraud message sent to thousands of elderly citizens. Electricity companies do not send sudden night cut off messages with mobile phone numbers. Do not call the number in the SMS.',
    callerClaim: '"Dear consumer, your electricity power will be disconnected at 9:30 PM tonight by power office. Immediately call Officer Sharma on 9876543210 to update your bill."',
    whatScammerWants: 'They want you to panic about sitting in the dark tonight. When you call their number, they ask you to pay a small ₹10 fee through a fake link or install an APK file that drains your bank account.',
    doAction: 'DO: Ignore the SMS message completely. Check your physical paper bill or ask your family member to verify bill payment on the official electricity company portal.',
    dontAction: 'DON\'T: Never call the phone number written inside that SMS. Never pay any fee through links sent on SMS.',
    dangerLevel: 'High Alert'
  },
  {
    id: 'senior-grandchild-distress',
    scenarioTitle: 'Scenario 4: A Caller Crying Saying "Grandpa/Grandma, I Need Urgent Money!"',
    audioText: 'Warning about family emergency calls. Scammers use artificial intelligence to copy voices of grandchildren. If someone calls crying, saying they had an accident or were arrested by police and need money right now, do not panic. Hang up and call your grandchild or their parents directly on their usual number.',
    callerClaim: '"Grandma, it\'s me! I was in a car with a friend and police arrested us! Don\'t tell Mom and Dad, please wire $500 right now to this account so the lawyer can bail me out!"',
    whatScammerWants: 'They exploit your deep love and concern for your family members. They create heavy panic so you do not think clearly or check with other family members.',
    doAction: 'DO: Take a deep breath. Hang up the call. Immediately dial your grandchild\'s known phone number, or call their parents directly to ask if everything is okay.',
    dontAction: 'DON\'T: Never wire money, transfer UPI, or purchase gift cards in a panic without speaking directly to your family members first.',
    dangerLevel: 'Emergency'
  },
  {
    id: 'senior-qr-receive',
    scenarioTitle: 'Scenario 5: Someone Sends a QR Code Saying "Scan This to Receive Your Pension or Cashback"',
    audioText: 'Golden rule of QR codes. A QR code is only for paying money out of your pocket. You never scan a QR code to receive money. If someone tells you to scan a code and enter your secret PIN to get a government bonus or gift, it will take money away from your bank.',
    callerClaim: '"Congratulations sir! You have been granted a ₹5,000 senior citizen pension bonus. I am sending you a QR code on WhatsApp. Scan it on PhonePe and enter your PIN to claim the ₹5,000."',
    whatScammerWants: 'When you scan the QR code and type your secret PIN, you are actually giving permission for ₹5,000 to be DEDUCTED from your bank account!',
    doAction: 'DO: Remember the golden rule: To receive money into your account, you never scan a QR code and you NEVER enter your secret PIN.',
    dontAction: 'DON\'T: Never scan any picture or barcode sent to you on WhatsApp by a stranger, no matter how polite they sound.',
    dangerLevel: 'High Alert'
  }
];

export const SENIOR_SCENARIOS_KN: SeniorDoDont[] = [
  {
    id: 'senior-bank-call',
    scenarioTitle: 'ಸನ್ನಿವೇಶ 1: ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆ ಅಥವಾ ಪಿಂಚಣಿ ರದ್ದಾಗಿದೆ ಎಂದು ಯಾರಾದರೂ ಕರೆ ಮಾಡಿದರೆ',
    audioText: 'ಬ್ಯಾಂಕ್ ಕರೆಗಳ ಬಗ್ಗೆ ಮುಖ್ಯ ಎಚ್ಚರಿಕೆ. ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆ ಅಥವಾ ಪಿಂಚಣಿ ಸ್ಥಗಿತಗೊಂಡಿದೆ ಎಂದು ಯಾರಾದರೂ ಕರೆ ಮಾಡಿದರೆ ದಯವಿಟ್ಟು ಗಾಬರಿಯಾಗಬೇಡಿ. ನಿಮ್ಮ ಎಟಿಎಂ ಕಾರ್ಡ್ ಸಂಖ್ಯೆ, ಒಟಿಪಿ ಅಥವಾ ರಹಸ್ಯ ಪಿನ್ ಅನ್ನು ಯಾರಿಗೂ ಹೇಳಬೇಡಿ. ನೈಜ ಬ್ಯಾಂಕ್ ಅಧಿಕಾರಿಗಳು ಫೋನಿನಲ್ಲಿ ಇಂತಹ ವಿವರ ಕೇಳುವುದಿಲ್ಲ. ತಕ್ಷಣ ಫೋನ್ ಕಟ್ ಮಾಡಿ. ನಾಳೆ ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಶಾಖೆಗೆ ನೇರವಾಗಿ ಹೋಗಿ ಅಥವಾ ನಿಮ್ಮ ಮಕ್ಕಳಿಗೆ ತಿಳಿಸಿ.',
    callerClaim: '"ನಮಸ್ಕಾರ, ನಾನು ಸ್ಟೇಟ್ ಬ್ಯಾಂಕ್ ಶಾಖೆಯಿಂದ ಕರೆ ಮಾಡುತ್ತಿದ್ದೇನೆ. ನಿಮ್ಮ ಕೆವೈಸಿ ಮುಗಿದಿಲ್ಲ, 2 ಗಂಟೆಯಲ್ಲಿ ನಿಮ್ಮ ಪಿಂಚಣಿ ಖಾತೆ ಬ್ಲಾಕ್ ಆಗುತ್ತದೆ. ತಕ್ಷಣ ನಿಮ್ಮ ಕಾರ್ಡ್ ನಂಬರ್ ಮತ್ತು ಫೋನಿಗೆ ಬಂದ 6 ಅಂಕಿಯ ಒಟಿಪಿ ಕೊಡಿ."',
    whatScammerWants: 'ಅವರು ನಿಮ್ಮ ಎಟಿಎಂ ಕಾರ್ಡ್ ಸಂಖ್ಯೆ ಮತ್ತು ಮೊಬೈಲ್ ಒಟಿಪಿ ಪಡೆದು ನಿಮ್ಮ ಖಾತೆಯಲ್ಲಿರುವ ಪಿಂಚಣಿ ಹಣವನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಕದಿಯಲು ಬಯಸುತ್ತಾರೆ.',
    doAction: 'ಮಾಡಬೇಕಾದದ್ದು (DO): ತಕ್ಷಣ ಫೋನ್ ಕರೆ ಕಡಿತಗೊಳಿಸಿ. ಗಾಬರಿಯಾಗಬೇಡಿ. ನಿಮ್ಮ ಪಾಸ್‌ಬುಕ್ ತೆಗೆದುಕೊಂಡು ನಾಳೆ ನಿಮ್ಮ ಸ್ಥಳೀಯ ಬ್ಯಾಂಕ್ ಶಾಖೆಗೆ ಹೋಗಿ, ಅಥವಾ ನಿಮ್ಮ ಕುಟುಂಬದವರಿಗೆ ತಿಳಿಸಿ.',
    dontAction: 'ಮಾಡಬಾರದ್ದು (DON\'T): ನಿಮ್ಮ ಮೊಬೈಲಿಗೆ ಬರುವ 6-ಅಂಕಿಯ ಒಟಿಪಿಯನ್ನು ಯಾರಿಗೂ ಹೇಳಬೇಡಿ. ಎಟಿಎಂ ಕಾರ್ಡ್ ಸಂಖ್ಯೆಗಳನ್ನು ಫೋನಿನಲ್ಲಿ ಓದಬೇಡಿ. ನಿಜವಾದ ಬ್ಯಾಂಕ್ ಸಿಬ್ಬಂದಿ ಇದನ್ನು ಎಂದಿಗೂ ಕೇಳುವುದಿಲ್ಲ.',
    dangerLevel: 'Emergency'
  },
  {
    id: 'senior-app-download',
    scenarioTitle: 'ಸನ್ನಿವೇಶ 2: AnyDesk ಅಥವಾ QuickSupport ಆಪ್ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಲು ಯಾರಾದರೂ ಹೇಳಿದರೆ',
    audioText: 'ಆಪ್ ಡೌನ್‌ಲೋಡ್ ಎಚ್ಚರಿಕೆ. ಫೋನ್ ಕರೆಯಲ್ಲಿ ಯಾರಾದರೂ ಹೇಳಿದರೆ ಯಾವುದೇ ಆಪ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಬೇಡಿ. AnyDesk ಅಥವಾ TeamViewer ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿದರೆ, ವಂಚಕರು ನಿಮ್ಮ ಮೊಬೈಲ್ ಸ್ಕ್ರೀನ್ ಅನ್ನು ತಮ್ಮ ಕಂಪ್ಯೂಟರಿನಲ್ಲಿ ನೋಡಬಹುದು. ತಕ್ಷಣ ಕರೆ ಕಟ್ ಮಾಡಿ.',
    callerClaim: '"ಸರ್, ನಿಮ್ಮ ಮೊಬೈಲ್‌ನಲ್ಲಿ ವೈರಸ್ ಇದೆ ಅಥವಾ ಬ್ಯಾಂಕಿಂಗ್ ಆಪ್ ತೊಂದರೆಯಲ್ಲಿದೆ. ಪ್ಲೇ ಸ್ಟೋರ್‌ನಲ್ಲಿ AnyDesk ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ, ನಮ್ಮ ಬ್ಯಾಂಕ್ ಎಂಜಿನಿಯರ್ ಸರಿಪಡಿಸುತ್ತಾರೆ."',
    whatScammerWants: 'ಈ ಆಪ್ ಹಾಕಿದ ತಕ್ಷಣ ಅವರು ನಿಮ್ಮ ಫೋನಿನ ಎಲ್ಲಾ ಮೆಸೇಜ್ ಮತ್ತು ಬ್ಯಾಂಕ್ ಪಾಸ್‌ವರ್ಡ್‌ಗಳನ್ನು ನೇರವಾಗಿ ನೋಡಲು ಸಾಧ್ಯವಾಗುತ್ತದೆ.',
    doAction: 'ಮಾಡಬೇಕಾದದ್ದು (DO): ನಿರಾಕರಿಸಿ ಮತ್ತು ಫೋನ್ ಕಟ್ ಮಾಡಿ. ಒಂದು ವೇಳೆ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿದ್ದರೆ, ತಕ್ಷಣ ಮೊಬೈಲ್ ಇಂಟರ್ನೆಟ್ ಆಫ್ ಮಾಡಿ ಆಪ್ ಅನ್ನು ಅನ್‌ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿ.',
    dontAction: 'ಮಾಡಬಾರದ್ದು (DON\'T): ಅಪರಿಚಿತರು ಫೋನಿನಲ್ಲಿ ಅಥವಾ ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಹೇಳಿದ ಯಾವುದೇ ಆಪ್ ಅನ್ನು ಎಂದಿಗೂ ಡೌನ್‌ಲೋಡ್ ಮಾಡಬೇಡಿ.',
    dangerLevel: 'Emergency'
  },
  {
    id: 'senior-electricity-bill',
    scenarioTitle: 'ಸನ್ನಿವೇಶ 3: "ಇಂದು ರಾತ್ರಿ 9:30 ಕ್ಕೆ ವಿದ್ಯುತ್ ಕಡಿತಗೊಳ್ಳುತ್ತದೆ" ಎಂಬ ಮೆಸೇಜ್ ಬಂದರೆ',
    audioText: 'ವಿದ್ಯುತ್ ಬಿಲ್ ವಂಚನೆ ಎಚ್ಚರಿಕೆ. ಬಿಲ್ ಬಾಕಿ ಇದೆ ಎಂದು ಇಂದು ರಾತ್ರಿ ವಿದ್ಯುತ್ ಕಟ್ ಆಗುತ್ತದೆ ಎಂಬ ಸುಳ್ಳು ಮೆಸೇಜ್ ಸಾವಿರಾರು ಜನರಿಗೆ ಬರುತ್ತಿದೆ. ಆ ಮೆಸೇಜ್‌ನಲ್ಲಿರುವ ನಂಬರ್‌ಗೆ ಕರೆ ಮಾಡಬೇಡಿ.',
    callerClaim: '"ಗ್ರಾಹಕರೇ, ನಿಮ್ಮ ವಿದ್ಯುತ್ ಬಿಲ್ ಅಪ್‌ಡೇಟ್ ಆಗಿಲ್ಲ, ಇಂದು ರಾತ್ರಿ 9:30 ಕ್ಕೆ ಕರೆಂಟ್ ಕಟ್ ಆಗುತ್ತದೆ. ತಕ್ಷಣ ಈ ನಂಬರ್‌ಗೆ ಕರೆ ಮಾಡಿ."',
    whatScammerWants: 'ನೀವು ಕತ್ತಲೆಯಲ್ಲಿ ಇರಬೇಕಾಗುತ್ತದೆ ಎಂದು ಹೆದರಿಸಿ, ಸುಳ್ಳು ಆಪ್ ಮೂಲಕ ನಿಮ್ಮ ಹಣ ಕದಿಯುವುದು ಅವರ ಉದ್ದೇಶ.',
    doAction: 'ಮಾಡಬೇಕಾದದ್ದು (DO): ಈ ಮೆಸೇಜ್ ಅನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ನಿರ್ಲಕ್ಷಿಸಿ. ನಿಮ್ಮ ಕಾಗದದ ಬಿಲ್ ಅಥವಾ ಅಧಿಕೃತ ಬೆಸ್ಕಾಂ/ಹೆಸ್ಕಾಂ ಕೌಂಟರ್‌ನಲ್ಲಿ ಪರೀಕ್ಷಿಸಿ.',
    dontAction: 'ಮಾಡಬಾರದ್ದು (DON\'T): ಮೆಸೇಜ್‌ನಲ್ಲಿರುವ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಗೆ ಎಂದಿಗೂ ಕರೆ ಮಾಡಬೇಡಿ.',
    dangerLevel: 'High Alert'
  },
  {
    id: 'senior-qr-receive',
    scenarioTitle: 'ಸನ್ನಿವೇಶ 4: ಯಾರಾದರೂ "ಹಣ ಪಡೆಯಲು ಈ QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ" ಎಂದು ಹೇಳಿದರೆ',
    audioText: 'ಕ್ಯೂಆರ್ ಕೋಡ್ ಸುವರ್ಣ ನಿಯಮ. ಕ್ಯೂಆರ್ ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡುವುದು ಮತ್ತು ಪಿನ್ ಹಾಕುವುದು ಹಣ ಕಳುಹಿಸಲು ಮಾತ್ರ. ಹಣ ಸ್ವೀಕರಿಸಲು ಎಂದಿಗೂ ಪಿನ್ ಹಾಕಬೇಕಾಗಿಲ್ಲ.',
    callerClaim: '"ಸರ್, ನಿಮಗೆ ಹಿರಿಯ ನಾಗರಿಕರ 5,000 ರೂ ಪಿಂಚಣಿ ಬೋನಸ್ ಬಂದಿದೆ. ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಕ್ಯೂಆರ್ ಕಳುಹಿಸಿದ್ದೇನೆ, ಫೋನ್‌ಪೇನಲ್ಲಿ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಪಿನ್ ಹಾಕಿ."',
    whatScammerWants: 'ನೀವು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಪಿನ್ ಹಾಕಿದರೆ, ನಿಮ್ಮ ಖಾತೆಯಿಂದ 5,000 ರೂಪಾಯಿ ಕಡಿತಗೊಳ್ಳುತ್ತದೆ!',
    doAction: 'ಮಾಡಬೇಕಾದದ್ದು (DO): ನೆನಪಿಡಿ: ನಿಮ್ಮ ಖಾತೆಗೆ ಹಣ ಬರಲು ನೀವು ಯಾವುದೇ ಕ್ಯೂಆರ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಬೇಕಾಗಿಲ್ಲ ಮತ್ತು ರಹಸ್ಯ ಪಿನ್ ಹಾಕಬೇಕಾಗಿಲ್ಲ.',
    dontAction: 'ಮಾಡಬಾರದ್ದು (DON\'T): ಅಪರಿಚಿತರು ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಕಳುಹಿಸಿದ ಯಾವುದೇ ಬಾರ್‌ಕೋಡ್ ಅಥವಾ ಚಿತ್ರವನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಬೇಡಿ.',
    dangerLevel: 'High Alert'
  }
];

export const SENIOR_SIMPLE_TIPS = [
  {
    title: 'Rule 1: The 6-Digit OTP is Secret',
    text: 'Think of the SMS code (OTP) as the key to your house locker. Would you give your house keys to a stranger on the phone? Never speak or share your OTP with anyone.'
  },
  {
    title: 'Rule 2: Entering a PIN Always Sends Money',
    text: 'You only type your 4-digit or 6-digit PIN when you want to BUY or SEND money. You never need a PIN to RECEIVE your pension or gifts.'
  },
  {
    title: 'Rule 3: Pause and Ask Family',
    text: 'Whenever any caller sounds urgent, angry, or asks for money, tell them: "I am hanging up now and will speak with my family." A real official will never object.'
  },
  {
    title: 'Rule 4: When in Doubt, Call 1930',
    text: '1930 is the free national cyber safety helpline. If you think you made a mistake or gave details to a caller, call 1930 immediately to freeze your money.'
  }
];

export const SENIOR_SIMPLE_TIPS_KN = [
  {
    title: 'ನಿಯಮ 1: 6-ಅಂಕಿಯ ಒಟಿಪಿ ಅತ್ಯಂತ ರಹಸ್ಯ',
    text: 'ಮೊಬೈಲಿಗೆ ಬರುವ ಒಟಿಪಿ ನಿಮ್ಮ ಮನೆಯ ಬೀಗದ ಕೈ ಇದ್ದಂತೆ. ಅಪರಿಚಿತರಿಗೆ ಬೀಗದ ಕೈ ಕೊಡುತ್ತೀರಾ? ಹಾಗೆಯೇ ಒಟಿಪಿಯನ್ನು ಯಾರಿಗೂ ಹೇಳಬೇಡಿ.'
  },
  {
    title: 'ನಿಯಮ 2: ಪಿನ್ ಹಾಕಿದರೆ ಹಣ ಕಡಿತವಾಗುತ್ತದೆ',
    text: 'ನೀವು ಹಣ ಕಳುಹಿಸುವಾಗ ಮಾತ್ರ 4 ಅಥವಾ 6 ಅಂಕಿಯ ಪಿನ್ ಹಾಕಬೇಕು. ನಿಮ್ಮ ಪಿಂಚಣಿ ಅಥವಾ ಹಣ ಬರಲು ಪಿನ್ ಹಾಕುವ ಅಗತ್ಯವೇ ಇಲ್ಲ.'
  },
  {
    title: 'ನಿಯಮ 3: ಫೋನ್ ಕಟ್ ಮಾಡಿ ಕುಟುಂಬದವರಿಗೆ ತಿಳಿಸಿ',
    text: 'ಯಾರಾದರೂ ತುರ್ತಾಗಿ ಹಣ ಅಥವಾ ಮಾಹಿತಿ ಕೇಳಿದರೆ, "ನಾನು ಫೋನ್ ಇಡುತ್ತಿದ್ದೇನೆ, ನನ್ನ ಮಕ್ಕಳ ಬಳಿ ಮಾತನಾಡುತ್ತೇನೆ" ಎಂದು ಹೇಳಿ ಕಟ್ ಮಾಡಿ.'
  },
  {
    title: 'ನಿಯಮ 4: ತಕ್ಷಣ 1930 ಗೆ ಕರೆ ಮಾಡಿ',
    text: '1930 ಉಚಿತ ಸೈಬರ್ ಸಹಾಯವಾಣಿ ಸಂಖ್ಯೆ. ಏನಾದರೂ ತಪ್ಪು ನಡೆದಿದೆ ಅನಿಸಿದರೆ ತಕ್ಷಣ 1930 ಗೆ ಕರೆ ಮಾಡಿ ಹಣವನ್ನು ರಕ್ಷಿಸಿಕೊಳ್ಳಿ.'
  }
];
