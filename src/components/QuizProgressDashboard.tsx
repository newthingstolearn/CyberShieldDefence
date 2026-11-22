import React from 'react';
import { 
  Trophy, 
  Award, 
  CheckCircle2, 
  Clock, 
  RotateCcw, 
  ShieldCheck, 
  Play, 
  Lock, 
  Flame, 
  Sparkles, 
  Target, 
  Check, 
  AlertCircle,
  Smartphone,
  MessageSquare,
  PhoneCall,
  Mail,
  ChevronRight,
  TrendingUp,
  BrainCircuit
} from 'lucide-react';
import { LanguageCode, QuizScenario } from '../types';
import { 
  QuizOverallProgress, 
  ACHIEVEMENTS_LIST, 
  Achievement 
} from '../data/quizProgressData';

interface Props {
  progress: QuizOverallProgress;
  scenarios: QuizScenario[];
  language?: LanguageCode;
  onSelectScenario: (index: number) => void;
  onStartFullQuiz: () => void;
  onResetProgress: () => void;
  newlyUnlockedAchievements?: Achievement[];
}

export const QuizProgressDashboard: React.FC<Props> = ({
  progress,
  scenarios,
  language = 'en',
  onSelectScenario,
  onStartFullQuiz,
  onResetProgress,
  newlyUnlockedAchievements = [],
}) => {
  const isKn = language === 'kn';
  const [showResetConfirm, setShowResetConfirm] = React.useState(false);

  const totalModules = scenarios.length;
  const completedCount = scenarios.filter(s => progress.modules[s.id]?.completed).length;
  const masteredCount = scenarios.filter(s => progress.modules[s.id]?.passed).length;
  const completionPercentage = totalModules > 0 ? Math.round((masteredCount / totalModules) * 100) : 0;

  const totalAnswered = progress.totalQuestionsAnswered || 0;
  const totalCorrect = progress.totalCorrectAnswers || 0;
  const accuracyPercentage = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  const getRankBadge = () => {
    if (completionPercentage === 100 && accuracyPercentage >= 90) {
      return {
        title: isKn ? 'ಸೈಬರ್ ಶೀಲ್ಡ್ ಗ್ರ್ಯಾಂಡ್‌ಮಾಸ್ಟರ್' : 'Cyber Shield Grandmaster',
        badge: '🛡️ Grandmaster',
        color: 'from-amber-500 to-yellow-600',
        textColor: 'text-amber-500 dark:text-amber-400',
        bg: 'bg-amber-100 dark:bg-amber-950/60 border-amber-300 dark:border-amber-700'
      };
    }
    if (completionPercentage >= 60) {
      return {
        title: isKn ? 'ಹಿರಿಯ ಸೈಬರ್ ರಕ್ಷಕ' : 'Senior Cyber Sentinel',
        badge: '⭐ Senior Sentinel',
        color: 'from-cyan-500 to-blue-600',
        textColor: 'text-cyan-600 dark:text-cyan-400',
        bg: 'bg-cyan-100 dark:bg-cyan-950/60 border-cyan-300 dark:border-cyan-700'
      };
    }
    if (masteredCount >= 1) {
      return {
        title: isKn ? 'ಜಾಗರೂಕ ರಕ್ಷಕ' : 'Vigilant Defender',
        badge: '🔰 Defender',
        color: 'from-emerald-500 to-teal-600',
        textColor: 'text-emerald-600 dark:text-emerald-400',
        bg: 'bg-emerald-100 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-700'
      };
    }
    return {
      title: isKn ? 'ಸೈಬರ್ ತರಬೇತಿ ಅಪ್ರೆಂಟಿಸ್' : 'Cyber Defense Recruit',
      badge: '🌱 Recruit',
      color: 'from-slate-500 to-slate-700',
      textColor: 'text-slate-600 dark:text-slate-400',
      bg: 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700'
    };
  };

  const rank = getRankBadge();

  const getModuleIcon = (messageType: string) => {
    switch (messageType) {
      case 'sms': return <Smartphone className="w-5 h-5 text-cyan-500" />;
      case 'whatsapp': return <MessageSquare className="w-5 h-5 text-emerald-500" />;
      case 'call': return <PhoneCall className="w-5 h-5 text-red-500" />;
      case 'dm': return <Mail className="w-5 h-5 text-pink-500" />;
      default: return <BrainCircuit className="w-5 h-5 text-purple-500" />;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Toast Banner for Newly Unlocked Achievements */}
      {newlyUnlockedAchievements.length > 0 && (
        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-amber-500/20 border-2 border-amber-400 shadow-lg flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl animate-bounce">🏆</span>
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-amber-700 dark:text-amber-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isKn ? 'ಹೊಸ ಸಾಧನೆ ಅನ್‌ಲಾಕ್ ಆಗಿದೆ!' : 'New Achievement Unlocked!'}</span>
              </div>
              <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
                {newlyUnlockedAchievements.map(a => isKn ? a.titleKn : a.title).join(', ')}
              </h4>
            </div>
          </div>
          <span className="px-3 py-1 bg-amber-500 text-slate-950 font-black rounded-lg text-xs">
            +50 XP
          </span>
        </div>
      )}

      {/* Main Progress Hero Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${rank.bg} ${rank.textColor}`}>
                {rank.badge}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {isKn ? 'ಲೈವ್ ಪ್ರಗತಿ ಟ್ರ್ಯಾಕರ್' : 'Live Progress Tracker'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {rank.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              {isKn 
                ? 'ನಿಮ್ಮ ನೈಜ ಸೈಬರ್ ವಂಚನೆ ತಡೆಗಟ್ಟುವ ಸಾಮರ್ಥ್ಯವನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ. ಎಲ್ಲಾ ಸನ್ನಿವೇಶಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ ಗ್ರ್ಯಾಂಡ್‌ಮಾಸ್ಟರ್ ಪದವಿ ಗಳಿಸಿ.'
                : 'Track your anti-fraud mastery across all simulation modules. Complete all scenarios to achieve Grandmaster certification.'}
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap gap-3 shrink-0">
            <button
              onClick={onStartFullQuiz}
              className="px-5 py-3 bg-[#5E17EB] hover:bg-[#4D0FD4] text-white font-extrabold rounded-2xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-[#5E17EB]/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{isKn ? 'ಸಂಪೂರ್ಣ ಪರೀಕ್ಷೆ ಆರಂಭಿಸಿ' : 'Take Full Assessment'}</span>
            </button>

            <button
              onClick={() => setShowResetConfirm(true)}
              className="px-3.5 py-3 bg-[#F2EEFC] dark:bg-slate-800 hover:bg-[#e4ddf8] dark:hover:bg-slate-700 text-[#5E17EB] dark:text-[#8D65EC] rounded-2xl text-xs font-bold transition-colors cursor-pointer border border-[#8D65EC]/30"
              title="Reset progress stored in localStorage"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-1">
            <div className="flex items-center justify-between text-xs text-[#6E6B7B] dark:text-slate-400 font-bold uppercase">
              <span>{isKn ? 'ಪೂರ್ಣಗೊಂಡ ಮಾಡ್ಯೂಲ್‌ಗಳು' : 'Modules Mastered'}</span>
              <Target className="w-4 h-4 text-[#5E17EB]" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-[#1D1B28] dark:text-white">
              {masteredCount} <span className="text-sm font-semibold text-slate-400">/ {totalModules}</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden mt-2">
              <div 
                className="bg-gradient-to-r from-[#5E17EB] to-[#8D65EC] h-full rounded-full transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-1">
            <div className="flex items-center justify-between text-xs text-[#6E6B7B] dark:text-slate-400 font-bold uppercase">
              <span>{isKn ? 'ಒಟ್ಟು ಅಂಕಗಳು' : 'Total Points'}</span>
              <Flame className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-[#1D1B28] dark:text-white">
              {progress.totalScore} <span className="text-xs font-semibold text-amber-500">XP</span>
            </div>
            <div className="text-[11px] text-[#6E6B7B] dark:text-slate-400">
              {isKn ? 'ಗರಿಷ್ಠ ಸ್ಕೋರ್:' : 'Best Assessment:'} {progress.highestFullQuizScore} pts
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-1">
            <div className="flex items-center justify-between text-xs text-[#6E6B7B] dark:text-slate-400 font-bold uppercase">
              <span>{isKn ? 'ನಿಖರತೆ' : 'Accuracy Rate'}</span>
              <TrendingUp className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-[#1D1B28] dark:text-white">
              {accuracyPercentage}%
            </div>
            <div className="text-[11px] text-[#6E6B7B] dark:text-slate-400">
              {totalCorrect} / {totalAnswered} {isKn ? 'ಸರಿ ಉತ್ತರಗಳು' : 'correct responses'}
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-1">
            <div className="flex items-center justify-between text-xs text-[#6E6B7B] dark:text-slate-400 font-bold uppercase">
              <span>{isKn ? 'ಅನ್‌ಲಾಕ್ ಸಾಧನೆಗಳು' : 'Badges Earned'}</span>
              <Award className="w-4 h-4 text-[#5E17EB]" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-[#1D1B28] dark:text-white">
              {progress.unlockedAchievements.length} <span className="text-sm font-semibold text-slate-400">/ {ACHIEVEMENTS_LIST.length}</span>
            </div>
            <div className="text-[11px] text-[#6E6B7B] dark:text-slate-400">
              {progress.totalQuizzesCompleted} {isKn ? 'ಪರೀಕ್ಷೆಗಳು ಮುಗಿದಿವೆ' : 'sessions completed'}
            </div>
          </div>
        </div>
      </div>

      {/* Modules Dashboard Grid */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div>
            <div className="flex items-center gap-2 text-[#5E17EB] dark:text-[#8D65EC] text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>{isKn ? 'ಪಠ್ಯಕ್ರಮ ಪ್ರಗತಿ' : 'Curriculum Modules'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#1D1B28] dark:text-white mt-1">
              {isKn ? 'ವಂಚನೆ ತಡೆಗಟ್ಟುವ ಮಾಡ್ಯೂಲ್‌ಗಳ ಸ್ಥಿತಿ' : 'Completed Modules Dashboard'}
            </h3>
          </div>
          <span className="text-xs text-[#6E6B7B] dark:text-slate-400">
            {isKn ? 'ಯಾವುದೇ ಕಾರ್ಡ್ ಕ್ಲಿಕ್ ಮಾಡಿ ಆ ಮಾಡ್ಯೂಲ್ ಅಭ್ಯಾಸ ನಡೆಸಿ' : 'Click any module to practice specifically'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {scenarios.map((scen, index) => {
            const modProgress = progress.modules[scen.id];
            const isMastered = modProgress?.passed;
            const isAttempted = modProgress?.completed;

            return (
              <div
                key={scen.id}
                onClick={() => onSelectScenario(index)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer group flex flex-col justify-between space-y-4 ${
                  isMastered
                    ? 'bg-white dark:bg-slate-900 border-emerald-300 dark:border-emerald-900/60 shadow-sm hover:border-emerald-500 hover:shadow-md'
                    : isAttempted
                    ? 'bg-white dark:bg-slate-900 border-amber-300 dark:border-amber-900/60 shadow-sm hover:border-amber-500'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-[#5E17EB] hover:shadow-md'
                }`}
              >
                <div className="space-y-3">
                  {/* Top Bar with Icon & Status Tag */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="p-2.5 rounded-xl bg-[#F2EEFC] dark:bg-slate-800 border border-[#8D65EC]/20 text-[#5E17EB] dark:text-[#8D65EC]">
                      {getModuleIcon(scen.messageType)}
                    </div>

                    {isMastered ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                        <Check className="w-3 h-3 stroke-[3]" />
                        <span>{isKn ? 'ಮಾಸ್ಟರ್ ಆಗಿದೆ' : 'Mastered'}</span>
                      </span>
                    ) : isAttempted ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                        <AlertCircle className="w-3 h-3" />
                        <span>{isKn ? 'ಮರುಪರಿಶೀಲನೆ ಅಗತ್ಯ' : 'Review Needed'}</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-700">
                        <Lock className="w-3 h-3" />
                        <span>{isKn ? 'ಪ್ರಾರಂಭಿಸಿಲ್ಲ' : 'Not Started'}</span>
                      </span>
                    )}
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#5E17EB] dark:text-[#8D65EC]">
                      {scen.category} • {scen.difficulty}
                    </span>
                    <h4 className="text-base font-extrabold text-[#1D1B28] dark:text-white mt-1 group-hover:text-[#5E17EB] dark:group-hover:text-[#8D65EC] transition-colors line-clamp-1">
                      {scen.title}
                    </h4>
                    <p className="text-xs text-[#6E6B7B] dark:text-slate-400 line-clamp-2 mt-1">
                      {scen.context}
                    </p>
                  </div>
                </div>

                {/* Footer Stats and Action Button */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <span className="text-[11px] text-[#6E6B7B] dark:text-slate-400 block">
                      {isKn ? 'ಪ್ರಯತ್ನಗಳು:' : 'Attempts:'} <strong>{modProgress?.attempts || 0}</strong>
                    </span>
                    <span className="text-[11px] text-[#6E6B7B] dark:text-slate-400 block">
                      {isKn ? 'ಅಂಕ:' : 'Score:'} <strong className="text-[#5E17EB] dark:text-[#8D65EC]">{modProgress?.bestScore || 0} / 20 pts</strong>
                    </span>
                  </div>

                  <span className="font-bold text-xs text-[#5E17EB] dark:text-[#8D65EC] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>{isKn ? 'ಅಭ್ಯಾಸ' : 'Practice'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Achievements Badges Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
          <div>
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider">
              <Trophy className="w-4 h-4" />
              <span>{isKn ? 'ಸಾಧನೆಗಳ ಸಂಗ್ರಹ' : 'Achievements & Badges'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
              {isKn ? 'ಗಳಿಸಿದ ಸೈಬರ್ ಬ್ಯಾಡ್ಜ್‌ಗಳು' : 'Earned Cyber Defense Badges'}
            </h3>
          </div>
          <span className="text-xs font-bold text-purple-600 dark:text-purple-400">
            {progress.unlockedAchievements.length} / {ACHIEVEMENTS_LIST.length} {isKn ? 'ಅನ್‌ಲಾಕ್' : 'Unlocked'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ACHIEVEMENTS_LIST.map((ach) => {
            const isUnlocked = progress.unlockedAchievements.includes(ach.id);
            const unlockDate = progress.achievementUnlockDates?.[ach.id];

            return (
              <div
                key={ach.id}
                className={`p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                  isUnlocked
                    ? 'bg-white dark:bg-slate-900 border-purple-200 dark:border-purple-900/60 shadow-sm'
                    : 'bg-slate-50/70 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 opacity-60'
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 border ${
                  isUnlocked ? ach.badgeColor : 'border-slate-300 dark:border-slate-700 bg-slate-200 dark:bg-slate-800'
                }`}>
                  {isUnlocked ? ach.icon : '🔒'}
                </div>

                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <h5 className={`font-black text-sm leading-tight ${isUnlocked ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>
                      {isKn ? ach.titleKn : ach.title}
                    </h5>
                    {isUnlocked && (
                      <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                        ✓
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-snug">
                    {isKn ? ach.descriptionKn : ach.description}
                  </p>
                  {isUnlocked && unlockDate && (
                    <span className="text-[10px] text-slate-400 block pt-0.5">
                      {isKn ? 'ಅನ್‌ಲಾಕ್ ದಿನಾಂಕ:' : 'Earned:'} {new Date(unlockDate).toLocaleDateString()}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-md w-full border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 flex items-center justify-center mx-auto text-xl">
              ⚠️
            </div>
            <div className="text-center space-y-1">
              <h3 className="text-xl font-black text-slate-900 dark:text-white">
                {isKn ? 'ಪ್ರಗತಿ ಮರುಹೊಂದಿಸಬೇಕೆ?' : 'Reset All Quiz Progress?'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                {isKn
                  ? 'ಇದು ನಿಮ್ಮ localStorage ನಲ್ಲಿರುವ ಎಲ್ಲಾ ಅಂಕಗಳು, ಮಾಡ್ಯೂಲ್ ಇತಿಹಾಸ ಮತ್ತು ಗಳಿಸಿದ ಬ್ಯಾಡ್ಜ್‌ಗಳನ್ನು ತೆರವುಗೊಳಿಸುತ್ತದೆ.'
                  : 'This will clear all saved scores, completed modules, and unlocked achievements from your browser.'}
              </p>
            </div>
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="flex-1 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 font-bold text-xs sm:text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                {isKn ? 'ರದ್ದುಮಾಡಿ' : 'Cancel'}
              </button>
              <button
                onClick={() => {
                  onResetProgress();
                  setShowResetConfirm(false);
                }}
                className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 font-bold text-xs sm:text-sm text-white shadow-md transition-colors cursor-pointer"
              >
                {isKn ? 'ಹೌದು, ಮರುಹೊಂದಿಸಿ' : 'Yes, Reset Progress'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
