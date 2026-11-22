import React from 'react';
import { 
  GraduationCap, 
  Instagram, 
  Gamepad2, 
  Briefcase, 
  Gift, 
  Award, 
  ShieldCheck, 
  AlertTriangle, 
  Sparkles,
  CheckCircle2,
  Lock,
  ArrowRight
} from 'lucide-react';
import { STUDENT_TOPICS, STUDENT_TOPICS_KN, STUDENT_CHECKLIST } from '../data/studentModeData';
import { StudentScamTopic, LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface Props {
  language?: LanguageCode;
}

export const StudentModePage: React.FC<Props> = ({ language = 'en' }) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;
  const isKn = language === 'kn';
  const topics = isKn ? STUDENT_TOPICS_KN : STUDENT_TOPICS;

  const [selectedTopicId, setSelectedTopicId] = React.useState<string>(topics[0].id);

  const currentTopic: StudentScamTopic = topics.find(t => t.id === selectedTopicId) || topics[0];

  const getTopicIcon = (id: string) => {
    switch (id) {
      case 'instagram-social': return <Instagram className="w-5 h-5 text-pink-500" />;
      case 'fake-jobs-internships': return <Briefcase className="w-5 h-5 text-cyan-500" />;
      case 'gaming-scams': return <Gamepad2 className="w-5 h-5 text-purple-500" />;
      case 'scholarship-scams': return <Award className="w-5 h-5 text-amber-500" />;
      case 'fake-giveaways': return <Gift className="w-5 h-5 text-emerald-500" />;
      default: return <GraduationCap className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-10 py-6 sm:py-8">
      {/* Student Mode Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-[#19102c] to-slate-900 p-6 sm:p-10 rounded-3xl text-white border border-[#8D65EC]/30 shadow-xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5E17EB]/20 text-[#8D65EC] text-xs font-bold border border-[#8D65EC]/40">
          <GraduationCap className="w-4 h-4 text-[#8D65EC]" />
          <span>COLLEGE & YOUTH CYBER DEFENSE</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
          {t.navStudent}: Youth Cyber Safety
        </h1>

        <p className="text-slate-300 text-xs sm:text-base max-w-3xl leading-relaxed">
          {t.studentSubtitle}
        </p>
      </div>

      {/* Topics Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {topics.map((topic) => {
          const isSelected = topic.id === currentTopic.id;
          return (
            <button
              key={topic.id}
              onClick={() => setSelectedTopicId(topic.id)}
              className={`p-4 rounded-2xl text-left border transition-all flex flex-col justify-between gap-3 cursor-pointer ${
                isSelected
                  ? 'bg-[#5E17EB] text-white font-bold border-[#5E17EB] shadow-md shadow-[#5E17EB]/30 scale-[1.02]'
                  : 'bg-white dark:bg-slate-900 text-[#1D1B28] dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-[#8D65EC]/60 hover:bg-[#F2EEFC]/40 dark:hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-xl ${isSelected ? 'bg-white/20 text-white' : 'bg-[#F2EEFC] dark:bg-slate-800'}`}>
                  {getTopicIcon(topic.id)}
                </div>
                <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                  isSelected ? 'bg-black/30 text-white' : 'bg-[#F2EEFC] dark:bg-slate-800 text-[#5E17EB] dark:text-[#8D65EC]'
                }`}>
                  {topic.tag.split('&')[0]}
                </span>
              </div>
              <span className="text-xs sm:text-sm font-extrabold line-clamp-2">
                {topic.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Topic Deep Dive */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase bg-[#F2EEFC] dark:bg-[#1a1230] text-[#5E17EB] dark:text-[#8D65EC] border border-[#8D65EC]/30">
              {currentTopic.tag}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1D1B28] dark:text-white">
            {currentTopic.title}
          </h2>
        </div>

        {/* The Bait Hook */}
        <div className="bg-[#F2EEFC] dark:bg-[#1a1230]/70 p-4 sm:p-5 rounded-2xl border border-[#8D65EC]/40 text-xs sm:text-sm">
          <span className="font-bold text-[#5E17EB] dark:text-[#8D65EC] block mb-1">
            THE HOOK / HOW THEY REACH YOU:
          </span>
          <p className="text-[#1D1B28] dark:text-slate-200 font-mono italic leading-relaxed">
            {currentTopic.hook}
          </p>
        </div>

        {/* The Trap */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#6E6B7B] dark:text-slate-400 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span>How The Trap Snaps:</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#1D1B28] dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
            {currentTopic.theTrap}
          </p>
        </div>

        {/* How to Spot It */}
        <div className="space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#6E6B7B] dark:text-slate-400">
            How to Spot the Scam (Tell-Tale Signs):
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#1D1B28] dark:text-slate-300">
            {currentTopic.howToIdentify.map((sign, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-slate-50 dark:bg-slate-800/20 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                <span className="text-red-500 font-bold shrink-0">⚠️</span>
                <span>{sign}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Real Story */}
        <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 space-y-2 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Real Student Incident:</span>
          </div>
          <p className="text-slate-300 italic leading-relaxed">
            "{currentTopic.realStory}"
          </p>
        </div>

        {/* Quick Defense Tip */}
        <div className="bg-emerald-50 dark:bg-emerald-950/30 p-4 rounded-2xl border border-emerald-300 dark:border-emerald-800 text-xs sm:text-sm space-y-1">
          <span className="font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider block">
            Armor Up (Quick Defense):
          </span>
          <p className="text-slate-800 dark:text-slate-200 font-semibold leading-relaxed">
            {currentTopic.quickDefense}
          </p>
        </div>
      </div>

      {/* Student Cyber Hygiene Checklist */}
      <section className="bg-gradient-to-r from-slate-900 to-indigo-950 p-6 sm:p-8 rounded-3xl text-white border border-slate-800 space-y-4">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Lock className="w-5 h-5 text-cyan-400" />
          <span>The College Student Cyber Survival Checklist</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          {STUDENT_CHECKLIST.map((item, idx) => (
            <div key={idx} className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-slate-200">{item}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
