import React from 'react';
import { 
  ShieldAlert, 
  Clock, 
  FileText, 
  CheckSquare, 
  Square, 
  Copy, 
  Check, 
  PhoneCall, 
  Lock, 
  AlertTriangle, 
  Download, 
  ArrowRight,
  Printer,
  Scale,
  Building2,
  FileCheck2
} from 'lucide-react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface Props {
  language?: LanguageCode;
}

export const WhatToDoIfScammedPage: React.FC<Props> = ({ language = 'en' }) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  // Checklist State
  const [completedSteps, setCompletedSteps] = React.useState<Record<string, boolean>>({
    'step-1': false,
    'step-2': false,
    'step-3': false,
    'step-4': false,
    'step-5': false,
    'step-6': false,
  });

  // Complaint Generator Form State
  const [formData, setFormData] = React.useState({
    fullName: 'Rajesh Kumar',
    phone: '+91 98450 12345',
    email: 'rajesh.k@example.com',
    bankName: 'State Bank of India',
    last4Account: '4821',
    dateTime: new Date().toISOString().slice(0, 16),
    scamType: 'UPI / QR Code Fraud',
    amountLost: '45,000',
    transactionRef: '429384729102',
    scammerDetails: '+91 98765 43210 (UPI: army.merch@icici)',
    description: 'Received unsolicited call from classifieds buyer claiming to transfer money. Sent QR code to scan on Google Pay. Upon entering secret UPI PIN, Rs 45,000 was debited in 2 transactions.',
  });

  const [dossierId, setDossierId] = React.useState<string>(`CC-2026-${Math.floor(100000 + Math.random() * 900000)}`);
  const [generatedLetter, setGeneratedLetter] = React.useState<string | null>(null);
  const [copiedLetter, setCopiedLetter] = React.useState(false);

  // Auto-generate initial letter on mount
  React.useEffect(() => {
    generateDossierText(formData, dossierId);
  }, []);

  const generateDossierText = (data: typeof formData, id: string) => {
    const letter = `================================================================================
OFFICIAL CYBER FRAUD INCIDENT REPORT & STATUTORY COMPLAINT
Reference Dossier ID: ${id}
Date of Report: ${new Date().toLocaleDateString()} | Time: ${new Date().toLocaleTimeString()}
================================================================================

TO:
The Station House Officer (Cyber Crime Police Station) &
The Nodal Officer / Branch Manager, ${data.bankName || '[Name of Bank]'},
Citizen Financial Cyber Fraud Reporting System (National Helpline 1930)

SUBJECT: URGENT STATUTORY COMPLAINT UNDER SECTION 66D OF THE INFORMATION TECHNOLOGY ACT 2000 & SECTION 420 OF INDIAN PENAL CODE (CHEATING BY PERSONATION & FINANCIAL EXTORTION)

Respected Authority,

I am formally submitting this written incident report regarding an unauthorized electronic transaction / cyber fraud committed against my financial account. I request you to urgently trigger the inter-bank freeze mechanism to halt onward transfers across the recipient mule network.

--------------------------------------------------------------------------------
1. COMPLAINANT (VICTIM) IDENTIFICATION
--------------------------------------------------------------------------------
- Full Name: ${data.fullName || '[Your Full Name]'}
- Registered Mobile Number: ${data.phone || '[Your Phone]'}
- Registered Email Address: ${data.email || '[Your Email]'}
- Bank Name: ${data.bankName || '[Your Bank]'}
- Compromised Account / Card (Last 4 Digits): XXXX-XXXX-${data.last4Account || 'XXXX'}

--------------------------------------------------------------------------------
2. INCIDENT & TRANSACTION AUDIT TRAIL
--------------------------------------------------------------------------------
- Date & Time of Incident: ${data.dateTime}
- Fraud Category / Vector: ${data.scamType}
- Disputed / Fraudulent Amount: ${data.amountLost ? `₹${data.amountLost}` : '[AMOUNT]'}
- Bank Transaction Reference / UTR Number(s): ${data.transactionRef || 'N/A'}
- Suspect Contact / Identifier (Phone / UPI VPA / URL / APK): ${data.scammerDetails || 'N/A'}

--------------------------------------------------------------------------------
3. CHRONOLOGICAL STATEMENT OF FACTS
--------------------------------------------------------------------------------
${data.description || 'The suspect contacted me and deceived me into an unauthorized transaction / credential compromise as detailed above.'}

--------------------------------------------------------------------------------
4. STATUTORY RELIEF & ACTION SOUGHT
--------------------------------------------------------------------------------
i. Immediately mark the beneficiary accounts as FRAUDULENT and freeze the transaction trail as per RBI Circular RBI/2017-18/15 on Limited Customer Liability.
ii. Block all internet banking, UPI, and debit cards linked to my compromised account to prevent further unauthorized debits.
iii. Issue an official Acknowledgement / GD Number for liaison with National Cyber Crime Reporting Portal (1930).
iv. Initiate the inter-bank lien and chargeback process for reimbursement of the stolen sum.

--------------------------------------------------------------------------------
5. STATUTORY VERIFICATION & UNDERTAKING
--------------------------------------------------------------------------------
I hereby verify and declare on solemn oath that the statements made above are true and correct to the best of my knowledge, and no part of it is false. I have not willfully transferred or gifted this sum to the suspect. Digital screenshots, call records, and bank debit SMS are attached herewith.

Complainant Signature: _______________________
Name: ${data.fullName || '[Complainant Name]'}
Date: ${new Date().toLocaleDateString()}

================================================================================
FOR POLICE STATION / BANK RECEIVING DESK ACKNOWLEDGEMENT
================================================================================
Received by Officer: __________________________ Badge / ID: __________________
Police Station / Bank Branch: __________________ GD / Diary No: ________________
Date Received: _______________________________ Official Seal & Stamp:
================================================================================`;

    setGeneratedLetter(letter);
  };

  const handleLoadScenario = (scenarioKey: 'upi' | 'digitalArrest' | 'aeps' | 'telegramJob') => {
    let newForm = { ...formData };
    if (scenarioKey === 'upi') {
      newForm = {
        fullName: 'Rajesh Sharma',
        phone: '+91 98450 12345',
        email: 'rajesh.sharma@example.com',
        bankName: 'State Bank of India',
        last4Account: '7412',
        dateTime: new Date().toISOString().slice(0, 16),
        scamType: 'UPI / QR Code Fraud',
        amountLost: '35,000',
        transactionRef: '429384910284',
        scammerDetails: '+91 98765 43210 (UPI: army.merch@icici)',
        description: 'Posted a study table on OLX. Buyer claimed to be Army Officer and sent a QR code on WhatsApp stating scan to receive money. Upon scanning and entering UPI PIN, Rs 35,000 was debited in 2 unauthorized transactions.',
      };
    } else if (scenarioKey === 'digitalArrest') {
      newForm = {
        fullName: 'Dr. Anita Deshmukh',
        phone: '+91 94220 98765',
        email: 'dr.anita.d@example.com',
        bankName: 'HDFC Bank',
        last4Account: '9031',
        dateTime: new Date().toISOString().slice(0, 16),
        scamType: 'Digital Arrest / Police Extortion',
        amountLost: '18,50,000',
        transactionRef: 'HDFCR52026100501928',
        scammerDetails: 'Skype: cbi.cybercrime.mumbai / Phone: +91 91122 33445',
        description: 'Received IVR call claiming illegal narcotics parcel intercepted in Mumbai Customs in my name. Connected to fake police officer on Skype who showed Supreme Court arrest warrant. Under 36-hour digital arrest intimidation, coerced into liquidating fixed deposit of Rs 18,50,000 to an alleged RBI verification vault account.',
      };
    } else if (scenarioKey === 'aeps') {
      newForm = {
        fullName: 'Basavaraj Patil',
        phone: '+91 99001 54321',
        email: 'basavaraj.patil@example.com',
        bankName: 'Canara Bank',
        last4Account: '4390',
        dateTime: new Date().toISOString().slice(0, 16),
        scamType: 'Aadhaar AePS Biometric Cloning',
        amountLost: '20,000',
        transactionRef: 'AEPS20261005938102',
        scammerDetails: 'Micro-ATM POS Terminal ID: BC-MUMBAI-4920',
        description: 'Two unauthorized debits of Rs 10,000 each occurred at 2:15 AM via AePS cash withdrawal at a merchant micro-ATM in another state. No OTP or card was used. My thumbprint appears to have been harvested from public land registry deed records. Aadhaar biometrics now locked.',
      };
    } else if (scenarioKey === 'telegramJob') {
      newForm = {
        fullName: 'Sumantha Gowda',
        phone: '+91 97310 88990',
        email: 'sumanth.g@example.com',
        bankName: 'ICICI Bank',
        last4Account: '1158',
        dateTime: new Date().toISOString().slice(0, 16),
        scamType: 'Fake Part-Time Job / Telegram Task',
        amountLost: '1,45,000',
        transactionRef: 'ICICT2026100588291',
        scammerDetails: 'Telegram: @GlobalMedia_HR / UPI: taskpay.merchant@axis',
        description: 'Contacted via WhatsApp for remote YouTube video review job. Received initial payout of Rs 300 to gain trust. Subsequently coerced into VIP investment tasks on a fake merchant trading dashboard to unlock pending commissions of Rs 2,50,000, losing Rs 1,45,000 in total.',
      };
    }
    setFormData(newForm);
    generateDossierText(newForm, dossierId);
  };

  const toggleStep = (stepId: string) => {
    setCompletedSteps(prev => ({ ...prev, [stepId]: !prev[stepId] }));
  };

  const handleGenerateLetter = (e: React.FormEvent) => {
    e.preventDefault();
    const newDossier = `CC-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    setDossierId(newDossier);
    generateDossierText(formData, newDossier);
  };

  const handleCopyLetter = () => {
    if (!generatedLetter) return;
    navigator.clipboard.writeText(generatedLetter);
    setCopiedLetter(true);
    setTimeout(() => setCopiedLetter(false), 2500);
  };

  const handlePrintReport = () => {
    if (!generatedLetter) {
      handleGenerateLetter({ preventDefault: () => {} } as any);
    }
    setTimeout(() => {
      window.print();
    }, 150);
  };

  const handleDownloadTxt = () => {
    if (!generatedLetter) return;
    const blob = new Blob([generatedLetter], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CyberCrime_Complaint_${dossierId}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-12 py-6 sm:py-8">
      {/* Emergency Header */}
      <div className="bg-gradient-to-r from-red-950 via-slate-900 to-slate-900 p-6 sm:p-10 rounded-3xl text-white border-2 border-red-600/60 shadow-2xl space-y-4 no-print">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-black uppercase tracking-wider animate-pulse">
          <Clock className="w-4 h-4" />
          <span>{t.emergencyTitle}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
          {t.navEmergency}
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          <strong>{t.goldenHour}: </strong> When cybercriminals steal money, they transfer it across a network of "mule accounts" before cashing out at ATMs. If you notify your bank and dial <strong>1930</strong> within the first 2 hours, authorities can freeze the beneficiary accounts and recover your money!
        </p>

        {/* Immediate Call Helpline Card */}
        <div className="bg-red-900/40 border border-red-500/80 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase font-extrabold text-red-300 block">INDIA NATIONAL HELPLINE</span>
            <div className="text-3xl sm:text-4xl font-black text-white">Call 1930 Immediately</div>
            <p className="text-xs text-red-200 mt-1">24/7 Citizen Financial Cyber Fraud Reporting System</p>
          </div>
          <a
            href="tel:1930"
            className="w-full sm:w-auto px-6 py-3.5 bg-white text-red-950 font-black text-base rounded-xl hover:bg-red-100 transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            <PhoneCall className="w-5 h-5 text-red-600" />
            <span>{t.emergencyActionNow}</span>
          </a>
        </div>
      </div>

      {/* Timeline Steps: What to do at 0-30 mins, 2 hours, 24 hours */}
      <section className="space-y-4 no-print">
        <h2 className="text-xl sm:text-2xl font-black text-[#1D1B28] dark:text-white flex items-center gap-2">
          <Clock className="w-5 h-5 text-[#5E17EB]" />
          <span>
            {language === 'kn' ? 'ಸುವರ್ಣ ಗಂಟೆ ವೇಳಾಪಟ್ಟಿ (ಹಂತ-ಹಂತವಾಗಿ)' : 'The Critical Incident Timeline'}
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border-2 border-red-500/60 shadow-sm space-y-2">
            <span className="text-xs font-black uppercase text-red-500 bg-red-100 dark:bg-red-950 px-2 py-0.5 rounded">
              0 - 30 {language === 'kn' ? 'ನಿಮಿಷಗಳು (ತಕ್ಷಣ)' : 'Minutes (Immediate)'}
            </span>
            <h3 className="font-extrabold text-[#1D1B28] dark:text-white text-base">
              {language === 'kn' ? 'ಕಾರ್ಡ್ & ಬ್ಯಾಂಕ್ ಸ್ಥಗಿತಗೊಳಿಸಿ' : 'Block Cards & Access'}
            </h3>
            <p className="text-xs text-[#6E6B7B] dark:text-slate-300 leading-relaxed">
              {language === 'kn'
                ? 'ಬ್ಯಾಂಕ್ ಆಪ್ ತೆರೆದು "ಕಾರ್ಡ್ ಬ್ಲಾಕ್" ಮಾಡಿ. AnyDesk ಅಥವಾ APK ಇನ್‌ಸ್ಟಾಲ್ ಆಗಿದ್ದರೆ ತಕ್ಷಣ ಮೊಬೈಲ್ ಡೇಟಾ ಆಫ್ ಮಾಡಿ.'
                : 'Open your bank app and toggle "Freeze Card". Turn off mobile data / Wi-Fi if any APK or AnyDesk app was installed to terminate the scammer’s remote screen control.'}
            </p>
          </div>

          <div className="bg-[#F2EEFC] dark:bg-[#1a1230] p-5 rounded-2xl border-2 border-[#5E17EB] shadow-md space-y-2">
            <span className="text-xs font-black uppercase text-white bg-[#5E17EB] px-2 py-0.5 rounded shadow-xs">
              30 {language === 'kn' ? 'ನಿಮಿಷ - 2 ಗಂಟೆ (ಸುವರ್ಣ ಸಮಯ)' : 'Mins - 2 Hours (Golden Window)'}
            </span>
            <h3 className="font-extrabold text-[#1D1B28] dark:text-white text-base">
              {language === 'kn' ? '1930 ಗೆ ಕರೆ ಮಾಡಿ UTR ನೀಡಿ' : 'Call 1930 & Register Ticket'}
            </h3>
            <p className="text-xs text-[#6E6B7B] dark:text-slate-300 leading-relaxed">
              {language === 'kn'
                ? 'ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಖಾತೆ ಸಂಖ್ಯೆ, ವಂಚಕನ ಯುಪಿಐ ಐಡಿ ಮತ್ತು 12-ಅಂಕಿಯ UTR ಸಂಖ್ಯೆಯನ್ನು 1930 ಸಿಬ್ಬಂದಿಗೆ ನೀಡಿ. ಇದು ಬ್ಯಾಂಕ್ ಹಣವನ್ನು ಸ್ಥಗಿತಗೊಳಿಸುತ್ತದೆ.'
                : 'Provide your bank account number, suspect’s UPI ID/number, and transaction UTR code to the 1930 operator. This triggers an automated lien request to the receiving bank.'}
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border-2 border-[#8D65EC] shadow-sm space-y-2">
            <span className="text-xs font-black uppercase text-[#5E17EB] dark:text-[#8D65EC] bg-[#F2EEFC] dark:bg-[#20183b] px-2 py-0.5 rounded border border-[#8D65EC]/30">
              {language === 'kn' ? '24 ಗಂಟೆಗಳ ಒಳಗೆ' : 'Within 24 Hours'}
            </span>
            <h3 className="font-extrabold text-[#1D1B28] dark:text-white text-base">
              {language === 'kn' ? 'ಅಧಿಕೃತ ಪೊಲೀಸ್ ದೂರು ದಾಖಲಿಸಿ' : 'Formal Cybercrime Portal Filing'}
            </h3>
            <p className="text-xs text-[#6E6B7B] dark:text-slate-300 leading-relaxed">
              {language === 'kn'
                ? 'cybercrime.gov.in ನಲ್ಲಿ ಅಧಿಕೃತ ದೂರು ದಾಖಲಿಸಿ ಮತ್ತು ಕೆಳಗೆ ರಚಿಸಲಾದ ವರದಿಯನ್ನು ಮುದ್ರಿಸಿ ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ಶಾಖೆಗೆ ನೀಡಿ.'
                : 'Complete the detailed complaint on cybercrime.gov.in and submit the printed official report generated below to your bank manager.'}
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Action Checklist */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 no-print">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <h2 className="text-lg sm:text-xl font-bold text-[#1D1B28] dark:text-white flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-emerald-500" />
            <span>
              {language === 'kn' ? 'ತಕ್ಷಣದ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ (ಮುಗಿಸಿದ ಹಂತಗಳನ್ನು ಗುರುತಿಸಿ)' : 'Interactive Victim Action Checklist (Mark completed steps)'}
            </span>
          </h2>
          <span className="text-xs text-[#6E6B7B] dark:text-slate-400">
            {Object.values(completedSteps).filter(Boolean).length} / 6 {language === 'kn' ? 'ಪೂರ್ಣಗೊಂಡಿದೆ' : 'Completed'}
          </span>
        </div>

        <div className="space-y-2.5">
          {[
            { id: 'step-1', text: language === 'kn' ? 'ಮೊಬೈಲ್ ಆಪ್ ಮೂಲಕ ಡೆಬಿಟ್/ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ಮತ್ತು ನೆಟ್‌ಬ್ಯಾಂಕಿಂಗ್ ತಕ್ಷಣ ಲಾಕ್ ಮಾಡಿ.' : 'Temporarily lock debit/credit card and internet banking credentials via mobile app.' },
            { id: 'step-2', text: language === 'kn' ? '1930 ಸೈಬರ್ ಕ್ರೈಮ್ ಸಹಾಯವಾಣಿಗೆ ಕರೆ ಮಾಡಿ 12-ಅಂಕಿಯ UTR ಸಂಖ್ಯೆಯನ್ನು ತಿಳಿಸಿ.' : 'Call 1930 (Cyber Crime Helpline) and report transaction reference UTR code.' },
            { id: 'step-3', text: language === 'kn' ? 'AnyDesk, RustDesk ಅಥವಾ ಇತ್ತೀಚೆಗೆ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿದ APK ಆಪ್‌ಗಳನ್ನು ಅನ್‌ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿ.' : 'Uninstall any suspicious remote desktop apps (AnyDesk, RustDesk, QuickSupport) or recently downloaded APKs.' },
            { id: 'step-4', text: language === 'kn' ? 'ವಂಚಕನ ವಾಟ್ಸಾಪ್ ಚಾಟ್, ಫೋನ್ ನಂಬರ್ ಮತ್ತು ಹಣ ಕಡಿತಗೊಂಡ ಎಸ್ಎಂಎಸ್ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಇಟ್ಟುಕೊಳ್ಳಿ.' : 'Take high-resolution screenshots of the scammer chat, phone number, and debit SMS with full timestamp.' },
            { id: 'step-5', text: language === 'kn' ? 'ಕೆಳಗಿರುವ ಅಧಿಕೃತ ದೂರು ಪತ್ರವನ್ನು ರಚಿಸಿ ಮುದ್ರಿಸಿ (PDF) ಬ್ಯಾಂಕ್ ಮ್ಯಾನೇಜರ್‌ಗೆ ನೀಡಿ.' : 'Generate formal complaint letter using the tool below and export printable PDF for authorities.' },
            { id: 'step-6', text: language === 'kn' ? 'ಸುರಕ್ಷಿತ ಸಾಧನದಿಂದ ನಿಮ್ಮ ಪ್ರಾಥಮಿಕ ಇಮೇಲ್ ಮತ್ತು ಗೂಗಲ್ ಖಾತೆಯ ಪಾಸ್‌ವರ್ಡ್ ಬದಲಾಯಿಸಿ.' : 'Change passwords for primary email, Google account, and banking handles from a safe, clean device.' }
          ].map((item) => {
            const isDone = completedSteps[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleStep(item.id)}
                className={`p-3.5 rounded-xl border text-xs sm:text-sm flex items-center gap-3 cursor-pointer transition-all ${
                  isDone 
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 text-slate-800 dark:text-slate-200 line-through opacity-80'
                    : 'bg-white dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-[#1D1B28] dark:text-slate-300 hover:border-[#8D65EC]/60 hover:bg-[#F2EEFC]/30 dark:hover:bg-slate-800'
                }`}
              >
                {isDone ? (
                  <CheckSquare className="w-5 h-5 text-emerald-500 shrink-0" />
                ) : (
                  <Square className="w-5 h-5 text-slate-400 shrink-0" />
                )}
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Formal Incident Complaint Letter & Printable PDF Generator */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 no-print">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5E17EB] dark:text-[#8D65EC] uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              <span>Official Legal Utility</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#1D1B28] dark:text-white mt-1">
              {language === 'kn'
                ? 'ಪೊಲೀಸ್ & ಬ್ಯಾಂಕ್ ಅಧಿಕೃತ ದೂರು ಪತ್ರ ಜನರೇಟರ್ (PDF ರಫ್ತು)'
                : 'Formal Authority Complaint Report & Printable PDF'}
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6B7B] dark:text-slate-400">
              {language === 'kn'
                ? 'ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ ಮತ್ತು ಸ್ಥಳೀಯ ಪೊಲೀಸ್ ಅಥವಾ ಬ್ಯಾಂಕಿಗೆ ಸಲ್ಲಿಸಲು ಮುದ್ರಿಸಬಹುದಾದ ಅಧಿಕೃತ PDF ರಫ್ತು ಮಾಡಿ.'
                : 'Fill in the incident details below to export an official legal docket printable for Police Cyber Cells and Bank Managers.'}
            </p>
          </div>

          <button
            onClick={handlePrintReport}
            className="px-5 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer shrink-0"
          >
            <Printer className="w-4 h-4" />
            <span>Export Printable PDF Report</span>
          </button>
        </div>

        {/* Quick Scenario Fillers */}
        <div className="bg-[#F2EEFC]/50 dark:bg-slate-800/60 p-4 rounded-2xl border border-[#8D65EC]/20 space-y-2 no-print">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1D1B28] dark:text-slate-300 flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-[#5E17EB] dark:text-[#8D65EC]" />
              <span>{language === 'kn' ? 'ತ್ವರಿತ ಪ್ರಕರಣ ಮಾದರಿಗಳು (1-ಕ್ಲಿಕ್‌ನಲ್ಲಿ ಭರ್ತಿ ಮಾಡಿ)' : 'Instant Case Pre-fill Scenarios (Click to test or load template)'}:</span>
            </span>
            <span className="text-[11px] text-[#6E6B7B] dark:text-slate-400 hidden sm:inline">
              {language === 'kn' ? 'ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಅಧಿಕೃತ ಪತ್ರ ರಚಿಸುತ್ತದೆ' : 'Auto-populates official legal docket'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <button
              type="button"
              onClick={() => handleLoadScenario('upi')}
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-[#5E17EB] font-semibold text-left transition-all cursor-pointer shadow-xs hover:bg-[#F2EEFC]/40"
            >
              <div className="text-[#5E17EB] dark:text-[#8D65EC] font-bold">1. UPI / QR Scam</div>
              <div className="text-[10px] text-[#6E6B7B]">₹35,000 lost on marketplace</div>
            </button>
            <button
              type="button"
              onClick={() => handleLoadScenario('digitalArrest')}
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-red-500 font-semibold text-left transition-all cursor-pointer shadow-xs"
            >
              <div className="text-red-600 dark:text-red-400 font-bold">2. Digital Arrest</div>
              <div className="text-[10px] text-[#6E6B7B]">₹18.5L FD liquidation extortion</div>
            </button>
            <button
              type="button"
              onClick={() => handleLoadScenario('aeps')}
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-amber-500 font-semibold text-left transition-all cursor-pointer shadow-xs"
            >
              <div className="text-amber-600 dark:text-amber-400 font-bold">3. AePS Biometric</div>
              <div className="text-[10px] text-[#6E6B7B]">₹20,000 silent micro-ATM debit</div>
            </button>
            <button
              type="button"
              onClick={() => handleLoadScenario('telegramJob')}
              className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-[#8D65EC] font-semibold text-left transition-all cursor-pointer shadow-xs hover:bg-[#F2EEFC]/40"
            >
              <div className="text-[#8D65EC] font-bold">4. Telegram Job</div>
              <div className="text-[10px] text-[#6E6B7B]">₹1.45L prepaid task freeze</div>
            </button>
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleGenerateLetter} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs no-print">
          <div>
            <label className="font-bold text-[#1D1B28] dark:text-slate-300 block mb-1">
              {language === 'kn' ? 'ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು *' : 'Your Full Name *'}
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Rajesh Kumar"
              className="w-full p-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-[#1D1B28] dark:text-white focus:outline-none focus:border-[#5E17EB] focus:ring-2 focus:ring-[#5E17EB]/20 transition-all"
            />
          </div>

          <div>
            <label className="font-bold text-[#1D1B28] dark:text-slate-300 block mb-1">
              {language === 'kn' ? 'ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ *' : 'Your Phone Number *'}
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g. +91 98765 43210"
              className="w-full p-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-[#1D1B28] dark:text-white focus:outline-none focus:border-[#5E17EB] focus:ring-2 focus:ring-[#5E17EB]/20 transition-all"
            />
          </div>

          <div>
            <label className="font-bold text-[#1D1B28] dark:text-slate-300 block mb-1">
              {language === 'kn' ? 'ಇಮೇಲ್ ವಿಳಾಸ' : 'Your Email Address'}
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. name@example.com"
              className="w-full p-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-[#1D1B28] dark:text-white focus:outline-none focus:border-[#5E17EB] focus:ring-2 focus:ring-[#5E17EB]/20 transition-all"
            />
          </div>

          <div>
            <label className="font-bold text-[#1D1B28] dark:text-slate-300 block mb-1">
              {language === 'kn' ? 'ಬ್ಯಾಂಕ್ ಹೆಸರು *' : 'Your Bank Name *'}
            </label>
            <input
              type="text"
              required
              value={formData.bankName}
              onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
              placeholder="e.g. State Bank of India, Canara Bank, HDFC"
              className="w-full p-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-[#1D1B28] dark:text-white focus:outline-none focus:border-[#5E17EB] focus:ring-2 focus:ring-[#5E17EB]/20 transition-all"
            />
          </div>

          <div>
            <label className="font-bold text-[#1D1B28] dark:text-slate-300 block mb-1">
              {language === 'kn' ? 'ಖಾತೆಯ ಕೊನೆಯ 4 ಅಂಕಿಗಳು' : 'Last 4 Digits of Account / Card'}
            </label>
            <input
              type="text"
              maxLength={4}
              value={formData.last4Account}
              onChange={(e) => setFormData({ ...formData, last4Account: e.target.value })}
              placeholder="e.g. 4821"
              className="w-full p-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-[#1D1B28] dark:text-white focus:outline-none focus:border-[#5E17EB] focus:ring-2 focus:ring-[#5E17EB]/20 transition-all"
            />
          </div>

          <div>
            <label className="font-bold text-[#1D1B28] dark:text-slate-300 block mb-1">
              {language === 'kn' ? 'ವಂಚನೆ ಪ್ರಕಾರ *' : 'Scam Type *'}
            </label>
            <select
              value={formData.scamType}
              onChange={(e) => setFormData({ ...formData, scamType: e.target.value })}
              className="w-full p-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-[#1D1B28] dark:text-white focus:outline-none focus:border-[#5E17EB] focus:ring-2 focus:ring-[#5E17EB]/20 transition-all"
            >
              <option value="Digital Arrest / Police Extortion">Digital Arrest / Police Video Extortion</option>
              <option value="UPI / QR Code Fraud">UPI / QR Code Payment Fraud</option>
              <option value="AI Voice Cloning Kidnapping Ransom">AI Voice Cloning / Deepfake Emergency</option>
              <option value="Aadhaar AePS Biometric Cloning">Aadhaar AePS Biometric Thumbprint Theft</option>
              <option value="AnyDesk / Screen Sharing Hijack">AnyDesk / Remote App Screen Hijack</option>
              <option value="Phishing & Fake Website">Phishing & Fake Netbanking Website</option>
              <option value="Fake KYC / Electricity Bill Disconnection APK">Electricity / Bank KYC APK Trojan</option>
              <option value="Fake Part-Time Job / Telegram Task">Fake Part-Time Job / Telegram Task</option>
              <option value="Fake Investment / Crypto Pig-Butchering">Fake Investment / Crypto Pig-Butchering</option>
            </select>
          </div>

          <div>
            <label className="font-bold text-[#1D1B28] dark:text-slate-300 block mb-1">
              {language === 'kn' ? 'ಕಳೆದುಹೋದ ಹಣ (₹) *' : 'Amount Lost (₹ / $) *'}
            </label>
            <input
              type="text"
              required
              value={formData.amountLost}
              onChange={(e) => setFormData({ ...formData, amountLost: e.target.value })}
              placeholder="e.g. 50,000"
              className="w-full p-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-[#1D1B28] dark:text-white focus:outline-none focus:border-[#5E17EB] focus:ring-2 focus:ring-[#5E17EB]/20 transition-all"
            />
          </div>

          <div>
            <label className="font-bold text-[#1D1B28] dark:text-slate-300 block mb-1">
              {language === 'kn' ? 'ಬ್ಯಾಂಕ್ UTR / ರೆಫರೆನ್ಸ್ ಸಂಖ್ಯೆ *' : 'Bank UTR / Reference ID *'}
            </label>
            <input
              type="text"
              required
              value={formData.transactionRef}
              onChange={(e) => setFormData({ ...formData, transactionRef: e.target.value })}
              placeholder="e.g. 12-digit UTR from SMS: 429384729102"
              className="w-full p-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-[#1D1B28] dark:text-white focus:outline-none focus:border-[#5E17EB] focus:ring-2 focus:ring-[#5E17EB]/20 transition-all"
            />
          </div>

          <div>
            <label className="font-bold text-[#1D1B28] dark:text-slate-300 block mb-1">
              {language === 'kn' ? 'ವಂಚಕನ ಫೋನ್ / ಯುಪಿಐ / ಲಿಂಕ್' : 'Scammer Phone / UPI ID / Link'}
            </label>
            <input
              type="text"
              value={formData.scammerDetails}
              onChange={(e) => setFormData({ ...formData, scammerDetails: e.target.value })}
              placeholder="e.g. +91 99999 88888, fake@okaxis, scam-url.xyz"
              className="w-full p-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-[#1D1B28] dark:text-white focus:outline-none focus:border-[#5E17EB] focus:ring-2 focus:ring-[#5E17EB]/20 transition-all"
            />
          </div>

          <div className="sm:col-span-2 lg:col-span-3">
            <label className="font-bold text-[#1D1B28] dark:text-slate-300 block mb-1">
              {language === 'kn' ? 'ಘಟನೆಯ ವಿವರವಾದ ವಿವರಣೆ *' : 'Brief Narrative of the Fraud *'}
            </label>
            <textarea
              rows={3}
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe chronologically: e.g. Received call claiming electricity would be cut tonight, was asked to download an APK to pay Rs 10 bill, after which unauthorized transactions debited my account..."
              className="w-full p-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-[#1D1B28] dark:text-white focus:outline-none focus:border-[#5E17EB] focus:ring-2 focus:ring-[#5E17EB]/20 transition-all"
            />
          </div>

          <div className="sm:col-span-2 lg:col-span-3 pt-2 flex flex-wrap gap-3">
            <button
              type="submit"
              className="px-6 py-3 bg-[#5E17EB] hover:bg-[#4D0FD4] text-white font-bold rounded-xl text-sm transition-all shadow-md shadow-[#5E17EB]/30 cursor-pointer flex items-center gap-2"
            >
              <FileCheck2 className="w-4 h-4" />
              <span>{t.generateLetterBtn}</span>
            </button>

            <button
              type="button"
              onClick={handlePrintReport}
              className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl text-sm transition-all shadow-md cursor-pointer flex items-center gap-2"
            >
              <Printer className="w-4 h-4" />
              <span>Export Printable PDF Report</span>
            </button>
          </div>
        </form>

        {/* Printable Official Document Container */}
        {generatedLetter && (
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 no-print">
              <span className="font-bold text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <Check className="w-4 h-4" />
                <span>Statutory Authority Dossier Generated (Dossier ID: {dossierId})</span>
              </span>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={handlePrintReport}
                  className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-md"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print / Save as PDF</span>
                </button>
                <button
                  onClick={handleDownloadTxt}
                  className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download .TXT</span>
                </button>
                <button
                  onClick={handleCopyLetter}
                  className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedLetter ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedLetter ? 'Copied!' : 'Copy Text'}</span>
                </button>
              </div>
            </div>

            {/* Official Legal Document Layout (Prints cleanly on A4 paper) */}
            <div className="print-card bg-white text-slate-900 p-8 sm:p-12 rounded-2xl border-2 border-slate-300 shadow-xl space-y-6 font-serif">
              {/* Header with National Emblem styling */}
              <div className="text-center border-b-2 border-slate-900 pb-4 space-y-1">
                <div className="inline-block p-2 rounded-full border-2 border-slate-900 mb-1">
                  <Scale className="w-8 h-8 text-slate-900 mx-auto" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-slate-900">
                  OFFICIAL CYBER FRAUD INCIDENT REPORT & STATUTORY COMPLAINT
                </h2>
                <p className="text-xs uppercase tracking-widest text-slate-600 font-sans font-bold">
                  FOR POLICE CYBER CRIME CELL (1930) & BANK FRAUD INVESTIGATION UNIT
                </p>
                <div className="text-xs font-mono text-slate-700 pt-1">
                  Dossier Ref: <strong>{dossierId}</strong> • Date of Filing: <strong>{new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</strong>
                </div>
              </div>

              {/* Addressee */}
              <div className="text-xs space-y-1">
                <p className="font-bold">TO:</p>
                <p>The Station House Officer (Cyber Crime Police Station) &</p>
                <p>The Nodal Officer / Branch Manager, <strong>{formData.bankName || '[Bank Name]'}</strong>,</p>
                <p>National Cyber Crime Reporting Portal (1930 / cybercrime.gov.in)</p>
              </div>

              {/* Subject */}
              <div className="bg-slate-100 p-3 rounded-lg border border-slate-300 text-xs font-bold leading-relaxed">
                SUBJECT: URGENT COMPLAINT UNDER SECTION 66D OF THE INFORMATION TECHNOLOGY ACT 2000 & IPC SECTION 420 (CHEATING BY PERSONATION & FINANCIAL LOSS OF {formData.amountLost ? `₹${formData.amountLost}` : 'DISPUTED SUM'})
              </div>

              {/* Section 1: Complainant Details Table */}
              <div className="space-y-1.5 text-xs">
                <span className="font-bold uppercase tracking-wide text-slate-800 font-sans">
                  1. COMPLAINANT (VICTIM) IDENTIFICATION
                </span>
                <table className="w-full border border-slate-300 text-left text-xs">
                  <tbody>
                    <tr className="border-b border-slate-300">
                      <td className="p-2 font-bold bg-slate-50 w-1/3">Full Name:</td>
                      <td className="p-2">{formData.fullName || 'Not provided'}</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="p-2 font-bold bg-slate-50">Mobile Number:</td>
                      <td className="p-2">{formData.phone || 'Not provided'}</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="p-2 font-bold bg-slate-50">Email Address:</td>
                      <td className="p-2">{formData.email || 'Not provided'}</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold bg-slate-50">Bank & Account (Last 4):</td>
                      <td className="p-2">{formData.bankName || 'N/A'} (A/C: XXXX-XXXX-{formData.last4Account || 'XXXX'})</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Section 2: Transaction Audit Trail */}
              <div className="space-y-1.5 text-xs">
                <span className="font-bold uppercase tracking-wide text-slate-800 font-sans">
                  2. INCIDENT & TRANSACTION AUDIT TRAIL
                </span>
                <table className="w-full border border-slate-300 text-left text-xs">
                  <tbody>
                    <tr className="border-b border-slate-300">
                      <td className="p-2 font-bold bg-slate-50 w-1/3">Incident Date & Time:</td>
                      <td className="p-2">{formData.dateTime}</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="p-2 font-bold bg-slate-50">Fraud Category:</td>
                      <td className="p-2 font-bold text-red-700">{formData.scamType}</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="p-2 font-bold bg-slate-50">Total Amount Stolen:</td>
                      <td className="p-2 font-black text-red-600 text-sm">₹{formData.amountLost || '0.00'}</td>
                    </tr>
                    <tr className="border-b border-slate-300">
                      <td className="p-2 font-bold bg-slate-50">Bank UTR / Ref Number:</td>
                      <td className="p-2 font-mono font-bold">{formData.transactionRef || 'N/A'}</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold bg-slate-50">Suspect Phone / UPI ID / Link:</td>
                      <td className="p-2 font-mono">{formData.scammerDetails || 'N/A'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Section 3: Narrative Statement of Facts */}
              <div className="space-y-1.5 text-xs">
                <span className="font-bold uppercase tracking-wide text-slate-800 font-sans">
                  3. CHRONOLOGICAL STATEMENT OF FACTS
                </span>
                <div className="p-3 bg-slate-50 border border-slate-300 rounded leading-relaxed whitespace-pre-wrap">
                  {formData.description || 'The complainant was contacted by the suspect through digital communication and coerced/deceived into an unauthorized financial transaction as described.'}
                </div>
              </div>

              {/* Section 4: Legal Relief Requested */}
              <div className="space-y-1 text-xs">
                <span className="font-bold uppercase tracking-wide text-slate-800 font-sans">
                  4. STATUTORY RELIEF SOUGHT (RBI SOP & IT ACT 2000)
                </span>
                <ol className="list-decimal pl-5 space-y-1 text-slate-700">
                  <li>Direct the beneficiary bank to immediately place an administrative lien on the beneficiary account under the Citizen Financial Cyber Fraud Reporting System.</li>
                  <li>Issue an official GD (General Diary) / Complaint Acknowledgement reference number.</li>
                  <li>Initiate the chargeback / interbank reversal procedure under RBI's Limited Customer Liability Circular.</li>
                </ol>
              </div>

              {/* Section 5: Signature & Verification */}
              <div className="pt-4 border-t border-slate-400 grid grid-cols-2 gap-8 text-xs">
                <div className="space-y-6">
                  <p className="italic text-[11px] text-slate-600">
                    "I verify that the statements made above are true to the best of my knowledge and belief."
                  </p>
                  <div>
                    <div className="border-b border-slate-900 w-48 mb-1"></div>
                    <span className="font-bold block">Complainant Signature</span>
                    <span className="text-[11px] text-slate-600">Name: {formData.fullName || '[Name]'}</span>
                  </div>
                </div>

                <div className="border-2 border-dashed border-slate-400 p-4 rounded text-center flex flex-col justify-between h-32">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-slate-500">
                    Police Station / Bank Receiving Seal
                  </span>
                  <span className="text-[10px] text-slate-400">
                    (Official Stamp, Date, GD Number & Signature of Receiving Officer)
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
