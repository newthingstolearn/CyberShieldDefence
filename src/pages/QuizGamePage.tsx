import React from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ShieldCheck, 
  AlertTriangle, 
  Award, 
  Smartphone, 
  MessageSquare, 
  PhoneCall, 
  Mail,
  ChevronRight,
  Sparkles,
  LayoutDashboard,
  Play,
  Flame,
  Check
} from 'lucide-react';
import { QUIZ_SCENARIOS, QUIZ_SCENARIOS_KN } from '../data/quizData';
import { QuizScenario, LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { 
  QuizOverallProgress, 
  Achievement, 
  loadQuizProgress, 
  saveQuizProgress, 
  evaluateAchievements,
  INITIAL_PROGRESS
} from '../data/quizProgressData';
import { QuizProgressDashboard } from '../components/QuizProgressDashboard';

interface Props {
  language?: LanguageCode;
}

export const QuizGamePage: React.FC<Props> = ({ language = 'en' }) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;
  const isKn = language === 'kn';
  const scenarios = isKn ? QUIZ_SCENARIOS_KN : QUIZ_SCENARIOS;

  // View mode: 'simulator' or 'dashboard'
  const [activeTab, setActiveTab] = React.useState<'simulator' | 'dashboard'>('simulator');

  // Quiz state
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [selectedOptionId, setSelectedOptionId] = React.useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [userAnswers, setUserAnswers] = React.useState<Record<string, { optionId: string; isCorrect: boolean }>>({});
  const [quizCompleted, setQuizCompleted] = React.useState(false);

  // Persistent progress & achievements from localStorage
  const [progress, setProgress] = React.useState<QuizOverallProgress>(() => loadQuizProgress());
  const [newlyUnlocked, setNewlyUnlocked] = React.useState<Achievement[]>([]);

  // Safeguard against index overflow when switching language
  const safeIndex = currentIndex < scenarios.length ? currentIndex : 0;
  const scenario: QuizScenario = scenarios[safeIndex];

  // Save progress changes to localStorage
  const updateProgressState = (newProg: QuizOverallProgress) => {
    setProgress(newProg);
    saveQuizProgress(newProg);
  };

  const handleSelectOption = (optionId: string) => {
    if (hasAnswered) return;
    setSelectedOptionId(optionId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOptionId || hasAnswered) return;

    const chosenOption = scenario.options.find(o => o.id === selectedOptionId);
    const isCorrect = !!chosenOption?.isCorrect;

    if (isCorrect) {
      setScore(prev => prev + 20);
    }

    setUserAnswers(prev => ({
      ...prev,
      [scenario.id]: { optionId: selectedOptionId, isCorrect }
    }));

    setHasAnswered(true);

    // Update persistent progress
    const prevMod = progress.modules[scenario.id] || {
      moduleId: scenario.id,
      completed: false,
      passed: false,
      score: 0,
      attempts: 0,
      bestScore: 0,
      lastAttemptDate: new Date().toISOString()
    };

    const updatedModule = {
      ...prevMod,
      completed: true,
      passed: prevMod.passed || isCorrect,
      attempts: prevMod.attempts + 1,
      score: isCorrect ? 20 : 0,
      bestScore: Math.max(prevMod.bestScore, isCorrect ? 20 : 0),
      lastAttemptDate: new Date().toISOString()
    };

    const nextProgress: QuizOverallProgress = {
      ...progress,
      modules: {
        ...progress.modules,
        [scenario.id]: updatedModule
      },
      totalQuestionsAnswered: progress.totalQuestionsAnswered + 1,
      totalCorrectAnswers: isCorrect ? progress.totalCorrectAnswers + 1 : progress.totalCorrectAnswers,
      totalScore: isCorrect ? progress.totalScore + 20 : progress.totalScore,
      lastPlayedDate: new Date().toISOString()
    };

    const { updatedProgress, newlyUnlocked: unlocked } = evaluateAchievements(nextProgress, scenarios.length);
    updateProgressState(updatedProgress);

    if (unlocked.length > 0) {
      setNewlyUnlocked(unlocked);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch {}
    }
  };

  const handleNext = () => {
    if (safeIndex < scenarios.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOptionId(null);
      setHasAnswered(false);
    } else {
      setQuizCompleted(true);
      const finalScore = score + (scenario.options.find(o => o.id === selectedOptionId)?.isCorrect ? 20 : 0);
      
      // Update full quiz run in progress
      const completedProg: QuizOverallProgress = {
        ...progress,
        totalQuizzesCompleted: progress.totalQuizzesCompleted + 1,
        highestFullQuizScore: Math.max(progress.highestFullQuizScore, finalScore),
        lastPlayedDate: new Date().toISOString()
      };
      const { updatedProgress, newlyUnlocked: unlocked } = evaluateAchievements(completedProg, scenarios.length);
      updateProgressState(updatedProgress);
      if (unlocked.length > 0) {
        setNewlyUnlocked(prev => [...prev, ...unlocked]);
      }

      if (finalScore >= 60) {
        try {
          confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 }
          });
        } catch {
          // ignore
        }
      }
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setHasAnswered(false);
    setScore(0);
    setUserAnswers({});
    setQuizCompleted(false);
    setNewlyUnlocked([]);
  };

  const handleSelectScenarioFromDashboard = (index: number) => {
    setCurrentIndex(index);
    setSelectedOptionId(null);
    setHasAnswered(false);
    setQuizCompleted(false);
    setActiveTab('simulator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetProgress = () => {
    updateProgressState(INITIAL_PROGRESS);
    setNewlyUnlocked([]);
    handleRestart();
  };

  const getRank = (finalScore: number) => {
    const totalMax = scenarios.length * 20;
    const percentage = (finalScore / totalMax) * 100;
    if (percentage === 100) {
      return { 
        title: isKn ? 'ಸೈಬರ್ ಶೀಲ್ಡ್ ಗ್ರ್ಯಾಂಡ್‌ಮಾಸ್ಟರ್' : 'Cyber Shield Grandmaster', 
        badge: '🛡️ Ultimate Defender', 
        color: 'text-amber-500 dark:text-amber-400' 
      };
    }
    if (percentage >= 80) {
      return { 
        title: isKn ? 'ಹಿರಿಯ ಸೈಬರ್ ರಕ್ಷಕ' : 'Senior Cyber Sentinel', 
        badge: '⭐ High Vigilance', 
        color: 'text-cyan-600 dark:text-cyan-400' 
      };
    }
    if (percentage >= 60) {
      return { 
        title: isKn ? 'ಜಾಗರೂಕ ರಕ್ಷಕ' : 'Vigilant Defender', 
        badge: '🔰 Capable Protector', 
        color: 'text-emerald-600 dark:text-emerald-400' 
      };
    }
    return { 
      title: isKn ? 'ಸೈಬರ್ ಪ್ರಶಿಕ್ಷಣಾರ್ಥಿ' : 'Cyber Apprentice', 
      badge: '📚 Practice Needed', 
      color: 'text-slate-500 dark:text-slate-400' 
    };
  };

  const getMessageIcon = (type: QuizScenario['messageType']) => {
    switch (type) {
      case 'sms': return <Smartphone className="w-4 h-4" />;
      case 'whatsapp': return <MessageSquare className="w-4 h-4 text-emerald-500" />;
      case 'call': return <PhoneCall className="w-4 h-4 text-red-500" />;
      case 'dm': return <Mail className="w-4 h-4 text-purple-500" />;
      default: return <HelpCircle className="w-4 h-4" />;
    }
  };

  const completedModulesCount = scenarios.filter(s => progress.modules[s.id]?.passed).length;

  return (
    <div className="max-w-5xl mx-auto space-y-6 py-6 sm:py-8">
      {/* Navigation Tabs Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-slate-900 p-2 sm:p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'simulator'
                ? 'bg-[#5E17EB] text-white shadow-md shadow-[#5E17EB]/30'
                : 'text-[#6E6B7B] dark:text-slate-400 hover:bg-[#F2EEFC]/50 dark:hover:bg-slate-800'
            }`}
          >
            <Play className="w-4 h-4 fill-current" />
            <span>{isKn ? 'ಸಂವಾದಾತ್ಮಕ ಸಿಮ್ಯುಲೇಟರ್' : 'Interactive Simulation'}</span>
          </button>

          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'dashboard'
                ? 'bg-[#5E17EB] text-white shadow-md shadow-[#5E17EB]/30'
                : 'text-[#6E6B7B] dark:text-slate-400 hover:bg-[#F2EEFC]/50 dark:hover:bg-slate-800'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>{isKn ? 'ಮಾಡ್ಯೂಲ್ ಪ್ರಗತಿ & ಡ್ಯಾಶ್‌ಬೋರ್ಡ್' : 'Modules & Progress Dashboard'}</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
              {completedModulesCount}/{scenarios.length}
            </span>
          </button>
        </div>

        {/* Quick Stats Pill */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F2EEFC] dark:bg-slate-800/80 border border-[#8D65EC]/20 rounded-xl text-xs text-[#1D1B28] dark:text-slate-300 font-bold shrink-0">
          <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
            <Flame className="w-3.5 h-3.5" />
            <span>{progress.totalScore} XP</span>
          </span>
          <span className="text-[#8D65EC]">•</span>
          <span className="flex items-center gap-1 text-[#5E17EB] dark:text-[#8D65EC]">
            <Award className="w-3.5 h-3.5" />
            <span>{progress.unlockedAchievements.length} {isKn ? 'ಬ್ಯಾಡ್ಜ್‌ಗಳು' : 'Badges'}</span>
          </span>
        </div>
      </div>

      {/* Main Content: Either Dashboard or Simulator */}
      {activeTab === 'dashboard' ? (
        <QuizProgressDashboard
          progress={progress}
          scenarios={scenarios}
          language={language}
          onSelectScenario={handleSelectScenarioFromDashboard}
          onStartFullQuiz={() => {
            handleRestart();
            setActiveTab('simulator');
          }}
          onResetProgress={handleResetProgress}
          newlyUnlockedAchievements={newlyUnlocked}
        />
      ) : (
        <div className="space-y-6">
          {/* Quiz Header */}
          <div className="bg-gradient-to-r from-slate-900 via-[#19102c] to-slate-900 p-6 sm:p-8 rounded-3xl text-white border border-[#8D65EC]/30 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5E17EB]/20 text-[#8D65EC] text-xs font-bold border border-[#8D65EC]/40 mb-2">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>{isKn ? 'ನೈಜ ಸೈಬರ್ ವಂಚನೆ ಗುರುತಿಸುವ ಪರೀಕ್ಷೆ' : 'Interactive Scam Simulator Game'}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white">
                {t.navQuiz}: {isKn ? 'ವಂಚನೆ ಪತ್ತೆ ಸವಾಲು' : 'Spot The Scam Challenge'}
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {isKn 
                  ? 'ಎಸ್ಎಂಎಸ್, ವಾಟ್ಸಾಪ್ ಮತ್ತು ಫೋನ್ ಕರೆ ವಂಚನೆಗಳ ವಿರುದ್ಧ ನಿಮ್ಮ ರಕ್ಷಣಾ ಪ್ರತಿವರ್ತನಗಳನ್ನು ಪರೀಕ್ಷಿಸಿ.'
                  : 'Test your real-time fraud detection reflexes against real-world SMS, WhatsApp, and call attacks.'}
              </p>
            </div>

            {/* Current Score Badge */}
            <div className="bg-slate-800/90 border border-[#8D65EC]/30 p-3 sm:p-4 rounded-2xl text-center shrink-0 w-full sm:w-auto">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">
                {isKn ? 'ಪ್ರಸ್ತುತ ಅಂಕಗಳು' : 'Session Score'}
              </span>
              <span className="text-2xl sm:text-3xl font-black text-[#8D65EC]">{score} XP</span>
            </div>
          </div>

          {/* Main Quiz Flow */}
          {!quizCompleted ? (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
              {/* Progress Bar & Meta */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-[#6E6B7B] dark:text-slate-400">
                  <span>{isKn ? 'ಸನ್ನಿವೇಶ' : 'Scenario'} {safeIndex + 1} of {scenarios.length}</span>
                  <span className="px-2 py-0.5 rounded bg-[#F2EEFC] dark:bg-slate-800 text-[#5E17EB] dark:text-[#8D65EC] border border-[#8D65EC]/30">
                    {scenario.category} • {scenario.difficulty}
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#5E17EB] to-[#8D65EC] transition-all duration-300"
                    style={{ width: `${((safeIndex + 1) / scenarios.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Scenario Context */}
              <div className="space-y-1">
                <h2 className="text-xl sm:text-2xl font-black text-[#1D1B28] dark:text-white">
                  {scenario.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#6E6B7B] dark:text-slate-400 italic">
                  {isKn ? 'ಹಿನ್ನೆಲೆ:' : 'Context:'} {scenario.context}
                </p>
              </div>

              {/* Simulated Mobile Device Message Box */}
              <div className="bg-slate-950 rounded-2xl p-5 border border-slate-800 text-white font-mono text-xs sm:text-sm space-y-3 shadow-inner">
                <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-2">
                    {getMessageIcon(scenario.messageType)}
                    <span className="font-semibold text-slate-300">{scenario.sender}</span>
                  </div>
                  <span className="text-[11px] uppercase text-slate-500">
                    {isKn ? 'ಒಳಬರುವ ಸಂದೇಶ' : 'Incoming Message'}
                  </span>
                </div>

                <div className="text-slate-100 leading-relaxed py-1">
                  {scenario.content}
                </div>

                {scenario.attachmentOrLink && (
                  <div className="bg-slate-900 p-2.5 rounded-lg border border-[#8D65EC]/30 text-xs text-[#8D65EC] break-all font-mono">
                    {isKn ? 'ಲಗತ್ತು / ಲಿಂಕ್:' : 'Attachment / Link:'} {scenario.attachmentOrLink}
                  </div>
                )}
              </div>

              {/* Decision Question */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#6E6B7B] dark:text-slate-400 block">
                  {isKn ? 'ನಿಮ್ಮ ತಕ್ಷಣದ ಪ್ರತಿಕ್ರಿಯೆ ಏನು?' : 'What is your immediate response?'}
                </label>

                <div className="space-y-2.5">
                  {scenario.options.map((option) => {
                    const isSelected = selectedOptionId === option.id;
                    let optionStyle = 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-[#1D1B28] dark:text-slate-200 hover:border-[#8D65EC]';

                    if (hasAnswered) {
                      if (option.isCorrect) {
                        optionStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-2 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
                      } else if (isSelected && !option.isCorrect) {
                        optionStyle = 'bg-red-50 dark:bg-red-950/60 border-2 border-red-500 text-red-900 dark:text-red-200';
                      } else {
                        optionStyle = 'opacity-40 border-slate-200 dark:border-slate-800';
                      }
                    } else if (isSelected) {
                      optionStyle = 'bg-[#F2EEFC] dark:bg-[#1f1633] border-2 border-[#5E17EB] text-[#1D1B28] dark:text-white font-semibold ring-2 ring-[#5E17EB]/20';
                    }

                    return (
                      <button
                        key={option.id}
                        onClick={() => handleSelectOption(option.id)}
                        disabled={hasAnswered}
                        className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all flex items-start justify-between gap-3 cursor-pointer ${optionStyle}`}
                      >
                        <div className="leading-relaxed">{option.text}</div>
                        {hasAnswered && option.isCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                        )}
                        {hasAnswered && isSelected && !option.isCorrect && (
                          <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Explanation Box (Revealed after answering) */}
              {hasAnswered && (
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
                  <div className="flex items-center gap-2">
                    {scenario.options.find(o => o.id === selectedOptionId)?.isCorrect ? (
                      <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                        <CheckCircle2 className="w-5 h-5" />
                        <span>{isKn ? 'ಸರಿಯಾದ ರಕ್ಷಣೆ! (+20 XP)' : 'Correct Defense! (+20 XP)'}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-sm">
                        <AlertTriangle className="w-5 h-5" />
                        <span>{isKn ? 'ಎಚ್ಚರ! ಅದು ವಂಚನೆಯ ಬಲೆಯಾಗಿತ್ತು.' : 'Watch Out! That was a trap.'}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[#1D1B28] dark:text-slate-300 leading-relaxed">
                    {scenario.options.find(o => o.id === selectedOptionId)?.explanation}
                  </p>

                  {/* Red Flags Spotlight */}
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-700/60">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#6E6B7B] dark:text-slate-400 block mb-1">
                      {isKn ? 'ಈ ಸಂದೇಶದಲ್ಲಿರುವ ರೆಡ್ ಫ್ಲ್ಯಾಗ್‌ಗಳು (ಎಚ್ಚರಿಕೆ ಗುರುತುಗಳು):' : 'Red Flags in this message:'}
                    </span>
                    <ul className="space-y-1 text-xs text-[#6E6B7B] dark:text-slate-300">
                      {scenario.redFlagsHighlighted.map((rf, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-red-500 font-bold">•</span>
                          <span>{rf}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-xs font-semibold text-[#5E17EB] dark:text-[#8D65EC] bg-[#F2EEFC] dark:bg-[#1a1230] p-2.5 rounded-lg border border-[#8D65EC]/30">
                    💡 <strong>{isKn ? 'ಸುವರ್ಣ ನಿಯಮ: ' : 'Key Takeaway: '}</strong> {scenario.learningTakeaway}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 pt-2">
                {!hasAnswered ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={!selectedOptionId}
                    className="px-6 py-3 bg-[#5E17EB] hover:bg-[#4D0FD4] text-white font-bold text-sm rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md shadow-[#5E17EB]/30 cursor-pointer"
                  >
                    {isKn ? 'ನಿರ್ಧಾರವನ್ನು ಸಲ್ಲಿಸಿ' : 'Submit Decision'}
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="px-6 py-3 bg-[#5E17EB] hover:bg-[#4D0FD4] text-white font-bold text-sm rounded-xl transition-all flex items-center gap-2 shadow-md shadow-[#5E17EB]/30 cursor-pointer"
                  >
                    <span>
                      {safeIndex < scenarios.length - 1 
                        ? (isKn ? 'ಮುಂದಿನ ಸನ್ನಿವೇಶ' : 'Next Scenario') 
                        : (isKn ? 'ಅಂತಿಮ ಫಲಿತಾಂಶ ವೀಕ್ಷಿಸಿ' : 'View Final Results')}
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Quiz Finished Screen */
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-xl text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-[#F2EEFC] dark:bg-[#1a1230] text-[#5E17EB] dark:text-[#8D65EC] mx-auto flex items-center justify-center shadow-lg border-2 border-[#8D65EC]/40">
                <Award className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest font-black text-slate-400">
                  {isKn ? 'ಪರೀಕ್ಷೆ ಮುಕ್ತಾಯಗೊಂಡಿದೆ' : 'SIMULATION COMPLETED'}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#1D1B28] dark:text-white">
                  {isKn ? 'ಅಂತಿಮ ಅಂಕಗಳು:' : 'Final Score:'} {score} / {scenarios.length * 20} XP
                </h2>
                <div className={`text-lg font-black ${getRank(score).color}`}>
                  {isKn ? 'ಪದವಿ:' : 'Rank:'} {getRank(score).title} ({getRank(score).badge})
                </div>
              </div>

              <p className="text-sm text-[#6E6B7B] dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                {score >= 80 
                  ? (isKn 
                      ? 'ಅದ್ಭುತ ಪ್ರದರ್ಶನ! ನಿಮ್ಮ ಸೈಬರ್ ಪ್ರತಿವರ್ತನಗಳು ಅತ್ಯುತ್ತಮವಾಗಿವೆ ಮತ್ತು ಸಾಮಾಜಿಕ ಇಂಜಿನಿಯರಿಂಗ್ ತಂತ್ರಗಳನ್ನು ನೀವು ಸುಲಭವಾಗಿ ಗುರುತಿಸುತ್ತೀರಿ.' 
                      : 'Outstanding performance! You have sharp cyber-reflexes and can spot advanced social engineering tactics easily.')
                  : (isKn 
                      ? 'ಉತ್ತಮ ಪ್ರಯತ್ನ! ವಂಚಕರು ಮಾನಸಿಕ ಒತ್ತಡ ಹೇರುತ್ತಾರೆ. ನಿಮ್ಮ ಜಾಗರೂಕತೆಯನ್ನು ಮತ್ತಷ್ಟು ಹೆಚ್ಚಿಸಲು ಮಾಡ್ಯೂಲ್‌ಗಳನ್ನು ಮರುಪರಿಶೀಲಿಸಿ.' 
                      : 'Good effort! Scammers use subtle psychological pressure. Review the completed modules dashboard to strengthen your vigilance.')}
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={handleRestart}
                  className="px-6 py-3 bg-[#5E17EB] hover:bg-[#4D0FD4] text-white font-bold text-sm rounded-xl flex items-center gap-2 transition-all shadow-md shadow-[#5E17EB]/30 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{isKn ? 'ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ' : 'Retry Simulator'}</span>
                </button>

                <button
                  onClick={() => setActiveTab('dashboard')}
                  className="px-6 py-3 bg-transparent hover:bg-[#F2EEFC]/60 dark:hover:bg-slate-800 text-[#5E17EB] dark:text-[#8D65EC] font-bold text-sm rounded-xl flex items-center gap-2 transition-all shadow-sm cursor-pointer border-2 border-[#8D65EC]"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span>{isKn ? 'ಮಾಡ್ಯೂಲ್‌ಗಳ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ವೀಕ್ಷಿಸಿ' : 'View Modules Dashboard'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

