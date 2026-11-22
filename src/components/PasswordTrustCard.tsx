import React, { useState } from 'react';
import { ShieldCheck, ShieldAlert, KeyRound, CheckCircle2, XCircle, ArrowRight, RefreshCw, Zap, Sparkles, HelpCircle } from 'lucide-react';
import { ActivePage, LanguageCode } from '../types';

interface Props {
  onNavigate: (page: ActivePage) => void;
  language: LanguageCode;
}

interface PasswordOption {
  id: string;
  passwordText: string;
  label: string;
  type: string;
  trustScore: 'untrusted' | 'risky' | 'trusted';
  trustBadge: string;
  crackTime: string;
  entropyBits: number;
  verdict: string;
  reason: string;
}

const PASSWORD_OPTIONS: PasswordOption[] = [
  {
    id: 'pass-1',
    passwordText: 'P@ssw0rd2024!',
    label: 'Password A',
    type: 'Character Substitution ("Leetspeak")',
    trustScore: 'untrusted',
    trustBadge: '❌ Untrusted (Deceptive)',
    crackTime: '12 seconds',
    entropyBits: 38,
    verdict: 'Instantly cracked by consumer GPU hashcat rigs.',
    reason: 'Humans think replacing "a" with "@" and "o" with "0" makes passwords invincible. However, automated cracking tools run permutation rules that check these exact replacements in milliseconds.'
  },
  {
    id: 'pass-2',
    passwordText: 'Tr0ub4dor&3',
    label: 'Password B',
    type: 'Short Complex Pattern (11 chars)',
    trustScore: 'risky',
    trustBadge: '⚠️ Risky (Insufficient Length)',
    crackTime: '3.5 days',
    entropyBits: 54,
    verdict: 'Vulnerable to distributed botnet brute-force clusters.',
    reason: 'While harder to guess manually, 11 characters lack enough mathematical space. Cloud cracking clusters can test over 100 billion combinations per second and exhaust this space in days.'
  },
  {
    id: 'pass-3',
    passwordText: 'purple-kangaroo-bicycle-sunset-92',
    label: 'Password C',
    type: 'Long Diceware Passphrase (33 chars)',
    trustScore: 'trusted',
    trustBadge: '🛡️ 100% Trusted (Astronomical Defense)',
    crackTime: '420 Trillion Centuries',
    entropyBits: 114,
    verdict: 'Physically impossible to crack with known computing power.',
    reason: 'Length beats complexity! Combining 4 random dictionary words with hyphens and a number creates over 114 bits of entropy. It is trivial for human memory to retain, yet indestructible against supercomputers.'
  }
];

export const PasswordTrustCard: React.FC<Props> = ({ onNavigate, language }) => {
  const [selectedId, setSelectedId] = useState<string>('pass-3');
  const [customPassword, setCustomPassword] = useState<string>('');
  const [customFeedback, setCustomFeedback] = useState<{
    crackTime: string;
    isTrusted: boolean;
    reason: string;
  } | null>(null);

  const selected = PASSWORD_OPTIONS.find((p) => p.id === selectedId) || PASSWORD_OPTIONS[2];

  const handleTestCustom = (val: string) => {
    setCustomPassword(val);
    if (!val) {
      setCustomFeedback(null);
      return;
    }

    if (val.length < 8) {
      setCustomFeedback({
        crackTime: 'Under 1 second',
        isTrusted: false,
        reason: 'Too short! Passwords under 8 characters are cracked in seconds by standard tools.'
      });
    } else if (val.length < 12) {
      setCustomFeedback({
        crackTime: 'A few hours to several days',
        isTrusted: false,
        reason: 'Borderline. Vulnerable to fast dictionary attacks if common words are present.'
      });
    } else if (val.length >= 16) {
      setCustomFeedback({
        crackTime: 'Centuries to Billions of Years',
        isTrusted: true,
        reason: 'Excellent length! 16+ characters creates exponentially harder brute-force resistance.'
      });
    } else {
      setCustomFeedback({
        crackTime: 'Several weeks to months',
        isTrusted: true,
        reason: 'Good baseline. Consider using a 4-word passphrase for even greater security.'
      });
    }
  };

  const handleGeneratePassphrase = () => {
    const adjectives = ['purple', 'silent', 'golden', 'clever', 'brave', 'swift', 'cosmic', 'gentle'];
    const nouns = ['tiger', 'kangaroo', 'compass', 'lantern', 'meadow', 'harbor', 'voyager', 'falcon'];
    const verbs = ['dances', 'soars', 'whispers', 'glows', 'echoes', 'travels', 'protects'];
    const ends = ['77', '92', '45', '88', '2025'];
    
    const w1 = adjectives[Math.floor(Math.random() * adjectives.length)];
    const w2 = nouns[Math.floor(Math.random() * nouns.length)];
    const w3 = verbs[Math.floor(Math.random() * verbs.length)];
    const w4 = nouns[Math.floor(Math.random() * nouns.length)];
    const num = ends[Math.floor(Math.random() * ends.length)];
    
    const generated = `${w1}-${w2}-${w3}-${w4}-${num}`;
    handleTestCustom(generated);
  };

  return (
    <section 
      className="card-soft-lavender rounded-3xl p-6 sm:p-10 shadow-xl transition-all duration-300 relative overflow-hidden"
      style={{
        backgroundColor: 'var(--color-brand-lavender, #F2EEFC)',
      }}
    >
      {/* Decorative Brand Violet Accent Bar */}
      <div 
        className="absolute top-0 left-0 right-0 h-1.5"
        style={{
          backgroundColor: 'var(--color-brand-primary)'
        }}
      />

      <div className="space-y-6 relative z-10">
        {/* Header with Title and Secondary Text Highlight */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#8D65EC]/25 pb-5">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-white/80 dark:bg-slate-900/80 border border-[#8D65EC]/30 text-[#8D65EC]">
              <Sparkles className="w-3.5 h-3.5 text-[#5E17EB]" />
              <span>Interactive Password Trust Lab</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1D1B28] dark:text-white tracking-tight">
              Which password would you trust?
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6B7B] dark:text-slate-300 max-w-2xl leading-relaxed">
              Compare 3 real-world passwords below. Tap each card to see how modern GPU cluster rigs exploit human patterns, and why <span className="font-bold text-[#5E17EB] dark:text-[#C4B5FD]">length always triumphs over trickery</span>.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Primary Action Button */}
            <button
              onClick={() => onNavigate('quiz')}
              className="btn-primary-purple px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-md shadow-[#5E17EB]/25"
              style={{ backgroundColor: '#C6613F', borderColor: '#C6613F' }}
            >
              <Zap className="w-4 h-4 text-amber-300" />
              <span>Start a lesson</span>
            </button>

            {/* Secondary Action Outline Button */}
            <button
              onClick={() => onNavigate('scams')}
              className="btn-secondary-purple-outline px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer"
              style={{ borderColor: '#B5472A', color: '#B5472A' }}
            >
              <span>See common threats</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3 Interactive Password Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {PASSWORD_OPTIONS.map((opt) => {
            const isSelected = opt.id === selectedId;
            return (
              <div
                key={opt.id}
                onClick={() => {
                  setSelectedId(opt.id);
                  setCustomFeedback(null);
                }}
                className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-200 border-2 flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? 'bg-white dark:bg-slate-900 shadow-lg scale-[1.02]'
                    : 'bg-white/70 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-900 border-slate-200/80 dark:border-slate-800'
                }`}
                style={{
                  borderColor: isSelected ? '#5E17EB' : undefined
                }}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span 
                      className="text-xs font-black uppercase tracking-wider"
                      style={{ color: '#B5472A' }}
                    >
                      {opt.label}
                    </span>
                    <span
                      className={`text-[10px] font-black px-2 py-0.5 rounded-full uppercase border ${
                        opt.trustScore === 'trusted'
                          ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800'
                          : opt.trustScore === 'risky'
                          ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-800'
                          : 'bg-red-100 dark:bg-red-950/80 text-red-800 dark:text-red-300 border-red-300 dark:border-red-800'
                      }`}
                    >
                      {opt.trustScore === 'trusted' ? '100% Trusted' : opt.trustScore === 'risky' ? 'Risky' : 'Untrusted'}
                    </span>
                  </div>

                  {/* Password Monospace Code */}
                  <div className="p-2.5 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs sm:text-sm font-bold break-all select-all border border-slate-800 shadow-inner">
                    {opt.passwordText}
                  </div>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    {opt.type}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Crack Time:</span>
                  <span className={`font-black ${
                    opt.trustScore === 'trusted' ? 'text-emerald-600 dark:text-emerald-400' : opt.trustScore === 'risky' ? 'text-amber-600 dark:text-amber-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    {opt.crackTime}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Password Breakdown & Forensic Verdict */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-[#8D65EC]/30 shadow-md space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-md"
                style={{ backgroundColor: '#C6613F' }}
              >
                <KeyRound className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-extrabold text-base sm:text-lg text-[#1D1B28] dark:text-white">
                    Audit Result for: <span className="font-mono text-sm">{selected.passwordText}</span>
                  </h3>
                </div>
                <p 
                  className="text-xs font-bold"
                  style={{ color: '#B5472A' }}
                >
                  {selected.trustBadge}
                </p>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">
                Brute Force Resistance
              </span>
              <span className={`text-base sm:text-lg font-black ${
                selected.trustScore === 'trusted' ? 'text-emerald-600 dark:text-emerald-400' : selected.trustScore === 'risky' ? 'text-amber-600 dark:text-amber-400' : 'text-red-600 dark:text-red-400'
              }`}>
                {selected.crackTime}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold text-[#6E6B7B] dark:text-slate-300">
              Why this happens:
            </div>
            <p className="text-xs sm:text-sm text-[#6E6B7B] dark:text-slate-300 leading-relaxed bg-[#F2EEFC] dark:bg-slate-800/40 p-3.5 rounded-xl border border-[#8D65EC]/20">
              {selected.reason}
            </p>
          </div>

          {/* Golden Rule Callout */}
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-[#8D65EC]/30 text-xs text-purple-950 dark:text-purple-200">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-[#5E17EB] mt-0.5" />
            <div className="leading-snug">
              <strong className="text-[#5E17EB] dark:text-[#C4B5FD]">Golden Defense Rule:</strong> A 4-word passphrase with spaces or hyphens (like <code className="font-bold">purple-kangaroo-bicycle-sunset</code>) is virtually unbreakable, yet 10x easier for humans to type accurately on smartphones.
            </div>
          </div>
        </div>

        {/* Live Mini-Sandbox: Test Any Password */}
        <div className="bg-white/80 dark:bg-slate-900/80 rounded-2xl p-4 sm:p-5 border border-[#8D65EC]/30 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <label 
              htmlFor="custom-test-pwd"
              className="text-xs font-black uppercase tracking-wider flex items-center gap-1.5"
              style={{ color: '#B5472A' }}
            >
              <span>Test Your Own Password In Real Time</span>
              <span className="text-[10px] text-slate-500 font-normal lowercase">(100% private, never stored)</span>
            </label>

            <button
              type="button"
              onClick={handleGeneratePassphrase}
              className="text-xs font-bold text-[#5E17EB] dark:text-[#C4B5FD] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <RefreshCw className="w-3 h-3 text-[#5E17EB]" />
              <span>Generate Sample Passphrase</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <input
              id="custom-test-pwd"
              type="text"
              value={customPassword}
              onChange={(e) => handleTestCustom(e.target.value)}
              placeholder="Type any test password (e.g. correct-horse-battery-staple)..."
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#FFFFFF] dark:bg-slate-950 border border-[#DCD8E8] dark:border-slate-700 text-xs sm:text-sm font-mono text-[#1D1B28] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#5E17EB] shadow-xs"
            />
            <button
              onClick={() => onNavigate('tools')}
              className="btn-secondary-purple-outline px-4 py-2.5 rounded-xl font-bold text-xs shrink-0 cursor-pointer flex items-center justify-center gap-1.5"
              style={{ borderColor: '#B5472A', color: '#B5472A' }}
            >
              <span>Open Full Password Auditor</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {customFeedback && (
            <div className={`p-3 rounded-xl text-xs flex items-center justify-between border ${
              customFeedback.isTrusted 
                ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 text-emerald-800 dark:text-emerald-200' 
                : 'bg-red-50 dark:bg-red-950/40 border-red-300 text-red-800 dark:text-red-200'
            }`}>
              <div className="flex items-center gap-2">
                {customFeedback.isTrusted ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <XCircle className="w-4 h-4 text-red-600" />}
                <span>{customFeedback.reason}</span>
              </div>
              <span className="font-black shrink-0 ml-2">Crack Time: {customFeedback.crackTime}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
