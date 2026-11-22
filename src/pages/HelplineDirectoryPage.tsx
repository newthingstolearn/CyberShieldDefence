import React from 'react';
import { 
  PhoneCall, 
  Search, 
  Copy, 
  Check, 
  ExternalLink, 
  ShieldAlert, 
  Phone, 
  Building2, 
  Smartphone, 
  Globe2, 
  Clock, 
  CheckCircle2 
} from 'lucide-react';
import { HELPLINE_DIRECTORY } from '../data/helplineData';
import { HelplineItem, LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface Props {
  language?: LanguageCode;
}

export const HelplineDirectoryPage: React.FC<Props> = ({ language = 'en' }) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;
  const [search, setSearch] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');
  const [selectedCountry, setSelectedCountry] = React.useState<string>('All');
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const categories = ['All', 'Police & Cybercrime', 'Banking & UPI', 'Telecom & SIM', 'International'];
  const countries = ['All', 'India', 'United States', 'United Kingdom', 'Australia', 'Canada'];

  const filteredHelplines = HELPLINE_DIRECTORY.filter((item) => {
    const matchesSearch = 
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.number.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      item.country.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesCountry = selectedCountry === 'All' || item.country === selectedCountry;

    return matchesSearch && matchesCategory && matchesCountry;
  });

  const handleCopyNumber = (id: string, num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-8 py-6 sm:py-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-[#19102c] to-slate-900 p-6 sm:p-10 rounded-3xl text-white border border-[#8D65EC]/30 shadow-xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5E17EB]/20 text-[#8D65EC] text-xs font-bold border border-[#8D65EC]/40">
          <PhoneCall className="w-3.5 h-3.5 text-[#8D65EC]" />
          <span>Official Anti-Fraud Directory</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
          {t.navHelpline}: National & Global Emergency Directory
        </h1>

        <p className="text-slate-300 text-xs sm:text-base max-w-3xl leading-relaxed">
          Verified contact numbers for police cybercrime desks, national fraud reporting portals, bank emergency fraud hotlines, and telecom blocking facilities.
        </p>

        {/* Quick Search */}
        <div className="relative max-w-xl pt-2">
          <Search className="absolute left-3.5 top-5 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by bank name, helpline number, or service (e.g. 1930, SBI, HDFC, IMEI)..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-800/90 border border-slate-700 rounded-xl text-white text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#5E17EB] focus:ring-2 focus:ring-[#5E17EB]/20 transition-all"
          />
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#5E17EB] text-white shadow-md shadow-[#5E17EB]/30'
                  : 'bg-white dark:bg-slate-900 text-[#1D1B28] dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-[#8D65EC]/60 hover:bg-[#F2EEFC]/30 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Country Filter */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-[#6E6B7B] dark:text-slate-400 font-semibold">Country:</span>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="p-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-[#1D1B28] dark:text-slate-200 font-medium focus:outline-none focus:border-[#5E17EB] focus:ring-2 focus:ring-[#5E17EB]/20 transition-all"
          >
            {countries.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredHelplines.map((item) => (
          <div
            key={item.id}
            className={`p-5 rounded-3xl border transition-all flex flex-col justify-between gap-4 ${
              item.urgent
                ? 'bg-white dark:bg-slate-900 border-red-300 dark:border-red-900/60 shadow-sm'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-[#8D65EC]/50 shadow-sm'
            }`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full ${
                  item.urgent 
                    ? 'bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 border border-red-300 dark:border-red-900' 
                    : 'bg-[#F2EEFC] dark:bg-[#1a1230] text-[#5E17EB] dark:text-[#8D65EC] border border-[#8D65EC]/30'
                }`}>
                  {item.category}
                </span>
                <span className="text-[11px] font-bold text-[#6E6B7B] dark:text-slate-400">
                  {item.country}
                </span>
              </div>

              <h3 className="font-extrabold text-[#1D1B28] dark:text-white text-base">
                {item.name}
              </h3>

              <div className="flex items-center gap-1.5 text-xs text-[#6E6B7B] dark:text-slate-400">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{item.availability}</span>
              </div>

              <p className="text-xs text-[#6E6B7B] dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Action Bar */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <div className="flex items-center justify-between bg-[#F2EEFC]/60 dark:bg-slate-800/60 p-2.5 rounded-xl border border-[#8D65EC]/20">
                <span className="font-mono font-black text-sm text-[#5E17EB] dark:text-[#8D65EC]">
                  {item.number}
                </span>
                <button
                  onClick={() => handleCopyNumber(item.id, item.number)}
                  className="p-1.5 hover:bg-white dark:hover:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-400 transition-colors"
                  title="Copy number"
                >
                  {copiedId === item.id ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center gap-2">
                {!item.number.includes('.gov') && (
                  <a
                    href={`tel:${item.number.replace(/[^0-9+]/g, '')}`}
                    className="flex-1 py-2 bg-[#5E17EB] hover:bg-[#4D0FD4] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-md shadow-[#5E17EB]/30"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>
                )}
                {item.website && (
                  <a
                    href={item.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-[#F2EEFC] dark:bg-slate-800 hover:bg-[#e4ddf8] dark:hover:bg-slate-700 text-[#5E17EB] dark:text-[#8D65EC] border border-[#8D65EC]/30 rounded-xl text-xs font-semibold flex items-center gap-1 transition-colors"
                  >
                    <span>Website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
