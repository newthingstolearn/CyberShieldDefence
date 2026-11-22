import React from 'react';
import { Shield, PhoneCall, Heart, ArrowUp, ExternalLink } from 'lucide-react';
import { ActivePage } from '../types';

interface Props {
  onNavigate: (page: ActivePage) => void;
  onOpenSOS: () => void;
}

export const Footer: React.FC<Props> = ({ onNavigate, onOpenSOS }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141413] text-[#D9D3C4] border-t border-[#E3DACB] text-sm mt-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#5E17EB] flex items-center justify-center text-white shadow-sm ring-2 ring-[#8D65EC]/30">
                <Shield className="w-5 h-5 font-bold" />
              </div>
              <span className="font-extrabold text-[#1D1B28] dark:text-white text-lg tracking-tight">Cyber<span className="text-[#5E17EB] dark:text-[#8D65EC]">Shield</span></span>
            </div>
            <p className="text-xs text-[#6E6B7B] dark:text-slate-400 leading-relaxed">
              CyberShield is a public interest, accessible cyber defense awareness platform dedicated to protecting citizens, students, and senior citizens against sophisticated financial and digital fraud.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#6E6B7B]">
              <Shield className="w-4 h-4 text-[#8D65EC]" />
              <span>100% Client-Side Privacy: No data is saved or transmitted.</span>
            </div>
          </div>

          {/* Quick Pages Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D1B28] dark:text-white mb-4">Awareness & Modules</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('scams')} className="text-[#6E6B7B] dark:text-slate-400 hover:text-[#5E17EB] transition-colors cursor-pointer">
                  All 11+ Scam Threat Vectors
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('quiz')} className="text-[#6E6B7B] dark:text-slate-400 hover:text-[#5E17EB] transition-colors cursor-pointer">
                  Scam Buster Quiz & Simulator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('emergency')} className="text-[#6E6B7B] dark:text-slate-400 hover:text-[#5E17EB] transition-colors cursor-pointer">
                  What To Do If Scammed? (Golden Hour)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tools')} className="text-[#6E6B7B] dark:text-slate-400 hover:text-[#5E17EB] transition-colors cursor-pointer">
                  Password, URL & QR Analyzers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('senior')} className="text-[#6E6B7B] dark:text-slate-400 hover:text-[#5E17EB] transition-colors font-semibold cursor-pointer">
                  Senior Citizen Accessible Mode
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('student')} className="text-[#6E6B7B] dark:text-slate-400 hover:text-[#5E17EB] transition-colors font-semibold cursor-pointer">
                  Student & Youth Safety Mode
                </button>
              </li>
            </ul>
          </div>

          {/* Emergency Hotlines */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D1B28] dark:text-white mb-4">Emergency Hotlines</h4>
            <div className="space-y-2.5 text-xs">
              <div className="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="text-[#1D1B28] dark:text-white font-bold flex items-center justify-between">
                  <span>India National Helpline:</span>
                  <span className="text-red-600 dark:text-red-400 font-black text-sm">1930</span>
                </div>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">citizen financial fraud reporting</span>
              </div>
              <div className="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="text-[#1D1B28] dark:text-white font-bold flex items-center justify-between">
                  <span>UK Bank Fraud Line:</span>
                  <span className="text-amber-600 dark:text-amber-400 font-black text-sm">159</span>
                </div>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Stop Scams UK universal number</span>
              </div>
              <div className="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="text-slate-900 dark:text-white font-bold flex items-center justify-between">
                  <span>USA FTC Fraud Report:</span>
                  <span className="text-[#D9D3C4] font-black text-sm">1-877-382-4357</span>
                </div>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Federal Trade Commission</span>
              </div>
            </div>
          </div>

          {/* Golden Hour Fast Action */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D1B28] dark:text-white mb-4">Victim SOS</h4>
            <p className="text-xs text-[#6E6B7B] dark:text-slate-400 mb-3 leading-relaxed">
              If money was debited without your permission within the last 2 hours, do not delay.
            </p>
            <button
              onClick={onOpenSOS}
              className="w-full py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md shadow-red-950/20 transition-all cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Launch SOS Freeze Protocol</span>
            </button>
            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs">
              <a
                href="https://cybercrime.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-[#5E17EB] dark:hover:text-[#C4B5FD] flex items-center gap-1 font-medium"
              >
                <span>cybercrime.gov.in</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1 text-slate-500 dark:text-slate-400 hover:text-[#5E17EB] dark:hover:text-[#C4B5FD] transition-colors cursor-pointer font-medium"
              >
                <span>Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Legal & Educational Disclaimer */}
        <div className="border-t border-slate-200 dark:border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} CyberShield. Built for public cyber defense awareness and education.
          </p>
          <p className="flex items-center gap-1">
            <span>Designed with safety & care for every digital citizen</span>
            <Heart className="w-3.5 h-3.5 text-red-500 inline fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};
