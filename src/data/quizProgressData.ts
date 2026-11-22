export interface Achievement {
  id: string;
  title: string;
  titleKn: string;
  description: string;
  descriptionKn: string;
  icon: string;
  badgeColor: string;
}

export interface ModuleProgress {
  moduleId: string;
  completed: boolean;
  passed: boolean;
  score: number;
  attempts: number;
  bestScore: number;
  lastAttemptDate: string;
}

export interface QuizOverallProgress {
  modules: Record<string, ModuleProgress>;
  unlockedAchievements: string[]; // list of achievement ids
  achievementUnlockDates: Record<string, string>; // id -> ISO date
  totalScore: number;
  highestFullQuizScore: number;
  totalQuizzesCompleted: number;
  totalQuestionsAnswered: number;
  totalCorrectAnswers: number;
  lastPlayedDate?: string;
}

export const ACHIEVEMENTS_LIST: Achievement[] = [
  {
    id: 'first-step',
    title: 'First Line of Defense',
    titleKn: 'ಪ್ರಥಮ ಸೈಬರ್ ರಕ್ಷಕ',
    description: 'Complete your first scam scenario question.',
    descriptionKn: 'ನಿಮ್ಮ ಮೊದಲ ವಂಚನೆ ಸನ್ನಿವೇಶ ಪ್ರಶ್ನೆಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ.',
    icon: '🛡️',
    badgeColor: 'border-blue-500 bg-blue-500/10 text-blue-600 dark:text-blue-400'
  },
  {
    id: 'upi-sentinel',
    title: 'UPI & QR Sentinel',
    titleKn: 'ಯುಪಿಐ ಕ್ಯೂಆರ್ ಕಾವಲುಗಾರ',
    description: 'Correctly identify the QR code PIN extortion attempt.',
    descriptionKn: 'ಕ್ಯೂಆರ್ ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಪಿನ್ ಹಾಕುವ ವಂಚನೆಯನ್ನು ಸರಿಯಾಗಿ ತಿರಸ್ಕರಿಸಿ.',
    icon: '📱',
    badgeColor: 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
  },
  {
    id: 'digital-arrest-immune',
    title: 'Digital Arrest Immunity',
    titleKn: 'ಡಿಜಿಟಲ್ ಅರೆಸ್ಟ್ ರಕ್ಷಾ ಕವಚ',
    description: 'Reject illegal fake police Skype video call intimidation.',
    descriptionKn: 'ನಕಲಿ ಪೊಲೀಸ್ ವಿಡಿಯೋ ಕಾಲ್ ಬೆದರಿಕೆಯನ್ನು ನಿರಾಕರಿಸಿ 1930 ಗೆ ಕರೆ ಮಾಡಿ.',
    icon: '⚖️',
    badgeColor: 'border-purple-500 bg-purple-500/10 text-purple-600 dark:text-purple-400'
  },
  {
    id: 'job-trap-buster',
    title: 'Task Scam Buster',
    titleKn: 'ಉದ್ಯೋಗ ವಂಚನೆ ಪತ್ತೇದಾರಿ',
    description: 'Expose fraudulent Telegram paid review task schemes.',
    descriptionKn: 'ಟೆಲಿಗ್ರಾಂ ಪಾರ್ಟ್-ಟೈಮ್ ಟಾಸ್ಕ್ ಹೂಡಿಕೆ ವಂಚನೆಯನ್ನು ಬಯಲು ಮಾಡಿ.',
    icon: '💼',
    badgeColor: 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400'
  },
  {
    id: 'kyc-guardian',
    title: 'Banking NetShield',
    titleKn: 'ಬ್ಯಾಂಕಿಂಗ್ ನೆಟ್‌ಶೀಲ್ಡ್',
    description: 'Spot phishing links impersonating official bank domains.',
    descriptionKn: 'ಬ್ಯಾಂಕ್ ಹೆಸರಿನಲ್ಲಿ ಬರುವ ನಕಲಿ ರಿವಾರ್ಡ್ ಲಿಂಕ್‌ಗಳನ್ನು ಗುರುತಿಸಿ.',
    icon: '🏦',
    badgeColor: 'border-cyan-500 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400'
  },
  {
    id: 'giveaway-skeptic',
    title: 'Giveaway Skeptic',
    titleKn: 'ಸಾಮಾಜಿಕ ಜಾಲತಾಣ ಜಾಗರೂಕ',
    description: 'Evade fake Instagram lottery and shipping fee scams.',
    descriptionKn: 'ಇನ್‌ಸ್ಟಾಗ್ರಾಮ್ ನಕಲಿ ಐಫೋನ್ ಬಹುಮಾನ ವಂಚನೆಯನ್ನು ತಪ್ಪಿಸಿ.',
    icon: '🎁',
    badgeColor: 'border-pink-500 bg-pink-500/10 text-pink-600 dark:text-pink-400'
  },
  {
    id: 'curriculum-master',
    title: 'Curriculum Graduate',
    titleKn: 'ಸಂಪೂರ್ಣ ಪಠ್ಯಕ್ರಮ ಪದವೀಧರ',
    description: 'Successfully complete all core scam simulation modules.',
    descriptionKn: 'ಎಲ್ಲಾ ಸೈಬರ್ ವಂಚನೆ ಮಾಡ್ಯೂಲ್‌ಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಮುಗಿಸಿ.',
    icon: '🎓',
    badgeColor: 'border-indigo-500 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
  },
  {
    id: 'flawless-grandmaster',
    title: 'Cyber Grandmaster',
    titleKn: 'ಪರಿಪೂರ್ಣ ಗ್ರ್ಯಾಂಡ್‌ಮಾಸ್ಟರ್',
    description: 'Score a perfect 100% in a complete quiz evaluation.',
    descriptionKn: 'ಸಂಪೂರ್ಣ ರಸಪ್ರಶ್ನೆ ಪರೀಕ್ಷೆಯಲ್ಲಿ 100% ಅಂಕ ಗಳಿಸಿ.',
    icon: '⭐',
    badgeColor: 'border-amber-400 bg-amber-400/10 text-amber-600 dark:text-amber-300'
  },
  {
    id: 'perseverance',
    title: 'Persistent Sentinel',
    titleKn: 'ನಿರಂತರ ಕಲಿಕಾ ಸಾಧಕ',
    description: 'Complete 3 or more total quiz challenge runs.',
    descriptionKn: '3 ಅಥವಾ ಅದಕ್ಕಿಂತ ಹೆಚ್ಚು ಬಾರಿ ರಸಪ್ರಶ್ನೆ ಅಭ್ಯಾಸ ನಡೆಸಿ.',
    icon: '🔥',
    badgeColor: 'border-orange-500 bg-orange-500/10 text-orange-600 dark:text-orange-400'
  }
];

const STORAGE_KEY = 'cybershield_quiz_progress_v2';

export const INITIAL_PROGRESS: QuizOverallProgress = {
  modules: {},
  unlockedAchievements: [],
  achievementUnlockDates: {},
  totalScore: 0,
  highestFullQuizScore: 0,
  totalQuizzesCompleted: 0,
  totalQuestionsAnswered: 0,
  totalCorrectAnswers: 0,
};

export function loadQuizProgress(): QuizOverallProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        ...INITIAL_PROGRESS,
        ...parsed,
        modules: parsed.modules || {},
        unlockedAchievements: parsed.unlockedAchievements || [],
        achievementUnlockDates: parsed.achievementUnlockDates || {},
      };
    }
  } catch {
    // ignore parse error
  }
  return INITIAL_PROGRESS;
}

export function saveQuizProgress(progress: QuizOverallProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // ignore storage quota error
  }
}

export function evaluateAchievements(
  progress: QuizOverallProgress,
  totalModuleCount: number
): { updatedProgress: QuizOverallProgress; newlyUnlocked: Achievement[] } {
  const currentUnlocked = new Set(progress.unlockedAchievements);
  const newlyUnlocked: Achievement[] = [];
  const nowStr = new Date().toISOString();
  const unlockDates = { ...progress.achievementUnlockDates };

  // Rule 1: First Step
  if (progress.totalQuestionsAnswered >= 1 && !currentUnlocked.has('first-step')) {
    currentUnlocked.add('first-step');
    unlockDates['first-step'] = nowStr;
    const ach = ACHIEVEMENTS_LIST.find(a => a.id === 'first-step');
    if (ach) newlyUnlocked.push(ach);
  }

  // Rule 2: UPI Sentinel (quiz-2 passed)
  if (progress.modules['quiz-2']?.passed && !currentUnlocked.has('upi-sentinel')) {
    currentUnlocked.add('upi-sentinel');
    unlockDates['upi-sentinel'] = nowStr;
    const ach = ACHIEVEMENTS_LIST.find(a => a.id === 'upi-sentinel');
    if (ach) newlyUnlocked.push(ach);
  }

  // Rule 3: Digital Arrest Immune (quiz-4 passed)
  if (progress.modules['quiz-4']?.passed && !currentUnlocked.has('digital-arrest-immune')) {
    currentUnlocked.add('digital-arrest-immune');
    unlockDates['digital-arrest-immune'] = nowStr;
    const ach = ACHIEVEMENTS_LIST.find(a => a.id === 'digital-arrest-immune');
    if (ach) newlyUnlocked.push(ach);
  }

  // Rule 4: Job Trap Buster (quiz-3 passed)
  if (progress.modules['quiz-3']?.passed && !currentUnlocked.has('job-trap-buster')) {
    currentUnlocked.add('job-trap-buster');
    unlockDates['job-trap-buster'] = nowStr;
    const ach = ACHIEVEMENTS_LIST.find(a => a.id === 'job-trap-buster');
    if (ach) newlyUnlocked.push(ach);
  }

  // Rule 5: KYC Guardian (quiz-1 passed)
  if (progress.modules['quiz-1']?.passed && !currentUnlocked.has('kyc-guardian')) {
    currentUnlocked.add('kyc-guardian');
    unlockDates['kyc-guardian'] = nowStr;
    const ach = ACHIEVEMENTS_LIST.find(a => a.id === 'kyc-guardian');
    if (ach) newlyUnlocked.push(ach);
  }

  // Rule 6: Giveaway Skeptic (quiz-5 passed)
  if (progress.modules['quiz-5']?.passed && !currentUnlocked.has('giveaway-skeptic')) {
    currentUnlocked.add('giveaway-skeptic');
    unlockDates['giveaway-skeptic'] = nowStr;
    const ach = ACHIEVEMENTS_LIST.find(a => a.id === 'giveaway-skeptic');
    if (ach) newlyUnlocked.push(ach);
  }

  // Rule 7: Curriculum Master (All core modules completed with pass)
  const completedCount = Object.values(progress.modules).filter(m => m.passed).length;
  if (completedCount >= Math.min(5, totalModuleCount) && !currentUnlocked.has('curriculum-master')) {
    currentUnlocked.add('curriculum-master');
    unlockDates['curriculum-master'] = nowStr;
    const ach = ACHIEVEMENTS_LIST.find(a => a.id === 'curriculum-master');
    if (ach) newlyUnlocked.push(ach);
  }

  // Rule 8: Flawless Grandmaster (100% on full quiz run)
  if (progress.highestFullQuizScore >= totalModuleCount * 20 && !currentUnlocked.has('flawless-grandmaster')) {
    currentUnlocked.add('flawless-grandmaster');
    unlockDates['flawless-grandmaster'] = nowStr;
    const ach = ACHIEVEMENTS_LIST.find(a => a.id === 'flawless-grandmaster');
    if (ach) newlyUnlocked.push(ach);
  }

  // Rule 9: Perseverance (3 or more quiz runs)
  if (progress.totalQuizzesCompleted >= 3 && !currentUnlocked.has('perseverance')) {
    currentUnlocked.add('perseverance');
    unlockDates['perseverance'] = nowStr;
    const ach = ACHIEVEMENTS_LIST.find(a => a.id === 'perseverance');
    if (ach) newlyUnlocked.push(ach);
  }

  const updatedProgress: QuizOverallProgress = {
    ...progress,
    unlockedAchievements: Array.from(currentUnlocked),
    achievementUnlockDates: unlockDates,
  };

  return { updatedProgress, newlyUnlocked };
}
