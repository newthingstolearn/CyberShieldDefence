import React from 'react';
import { X, PhoneCall, AlertTriangle, ShieldAlert, ArrowRight, Lock, Smartphone, Copy, Check } from 'lucide-react';
import { ActivePage } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: ActivePage) => void;
}

export const EmergencySOSModal: React.FC<Props> = ({ isOpen, onClose, onNavigate }) => {
  const [copiedText, setCopiedText] = React.useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div 
        className="bg-slate-900 border-2 border-red-500 rounded-2xl max-w-2xl w-full p-6 text-white shadow-2xl relative my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sos-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          aria-label="Close emergency modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 border-b border-red-900/60 pb-4 mb-5">
          <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500 flex items-center justify-center text-red-500 animate-pulse">
            <ShieldAlert className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-red-400">EMERGENCY SOS RESPONSE</span>
            <h2 id="sos-modal-title" className="text-xl sm:text-2xl font-black text-white">
              Stop Ongoing Fraud Right Now
            </h2>
          </div>
        </div>

        {/* Primary Call Action */}
        <div className="bg-red-950/60 border border-red-700 rounded-xl p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>CALL 24/7 CYBER FRAUD HOTLINE</span>
            </div>
            <div className="text-3xl font-black text-white tracking-wider mt-1">1930</div>
            <p className="text-xs text-red-200 mt-1">
              (India National Cyber Crime Helpline) — Freezes bank money if reported in Golden Hour!
            </p>
          </div>
          <a
            href="tel:1930"
            className="w-full sm:w-auto px-6 py-3.5 bg-red-600 hover:bg-red-500 text-white font-extrabold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-red-900/40 transition-all text-base"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Call 1930 Now</span>
          </a>
        </div>

        {/* Immediate 4-Step Action Checklist */}
        <div className="space-y-3 mb-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
            Immediate 4-Step Checklist (Act within 30 Minutes):
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/80 flex items-start gap-3">
              <Lock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-semibold">1. Freeze Your Bank Cards</strong>
                <p className="text-xs text-slate-300 mt-0.5">
                  Open your bank app & toggle "Block Card" or SMS your bank's emergency lock code.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/80 flex items-start gap-3">
              <Smartphone className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-semibold">2. Turn Off Wi-Fi & Data</strong>
                <p className="text-xs text-slate-300 mt-0.5">
                  If you installed AnyDesk, QuickSupport, or an APK file, turn on Airplane mode immediately!
                </p>
              </div>
            </div>

            <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/80 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-semibold">3. Note Down Transaction ID</strong>
                <p className="text-xs text-slate-300 mt-0.5">
                  Copy the 12-digit UTR or Reference number from your debit SMS to give to police.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/80 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-semibold">4. Register Official Complaint</strong>
                <p className="text-xs text-slate-300 mt-0.5">
                  Visit cybercrime.gov.in or report to your nearest local police Cyber Cell.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bank SMS Emergency Fast Locks */}
        <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-3.5 mb-6 text-xs text-slate-300">
          <span className="font-bold text-white block mb-1.5">Quick Card Block by SMS (India):</span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => copyToClipboard('BLOCK', 'SBI')}
              className="px-2.5 py-1 bg-slate-700 hover:bg-slate-600 rounded text-slate-200 flex items-center gap-1 border border-slate-600"
            >
              <span>SBI: SMS <strong>BLOCK &lt;last 4 digits&gt;</strong> to 567676</span>
              {copiedText === 'SBI' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-400" />}
            </button>
            <button
              onClick={() => copyToClipboard('IBLOCK', 'ICICI')}
              className="px-2.5 py-1 bg-slate-700 hover:bg-slate-600 rounded text-slate-200 flex items-center gap-1 border border-slate-600"
            >
              <span>ICICI: SMS <strong>IBLOCK</strong> to 9215676766</span>
              {copiedText === 'ICICI' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-400" />}
            </button>
          </div>
        </div>

        {/* Action Button to Complete Protocol */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={() => {
              onClose();
              onNavigate('emergency');
            }}
            className="flex-1 px-5 py-3 bg-[#5E17EB] hover:bg-[#4D0FD4] text-white font-extrabold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#5E17EB]/30"
          >
            <span>Open Complete "What To Do If Scammed" Protocol</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
