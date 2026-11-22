/**
 * Advanced Password Security & Entropy Utility
 */

const WORDLIST = [
  'falcon', 'mountain', 'quantum', 'glacier', 'shield', 'velocity', 'cipher',
  'aurora', 'beacon', 'nebula', 'horizon', 'sapphire', 'sentinel', 'matrix',
  'phoenix', 'granite', 'voyager', 'vortex', 'ember', 'shadow', 'zenith',
  'cascade', 'thunder', 'ironclad', 'harbor', 'solstice', 'stratus', 'radiant',
  'obsidian', 'citadel', 'tempest', 'compass', 'prism', 'valiant', 'whisper'
];

export interface PasswordConfig {
  length: number;
  includeUpper: boolean;
  includeLower: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  excludeAmbiguous: boolean; // e.g., 0, O, I, l, 1
  mode: 'custom' | 'passphrase' | 'pin';
  passphraseWordCount: number;
  passphraseSeparator: string;
}

export function generatePassword(config: PasswordConfig): string {
  if (config.mode === 'pin') {
    let pin = '';
    for (let i = 0; i < config.length; i++) {
      pin += Math.floor(Math.random() * 10).toString();
    }
    return pin;
  }

  if (config.mode === 'passphrase') {
    const selectedWords: string[] = [];
    for (let i = 0; i < config.passphraseWordCount; i++) {
      const randomIndex = Math.floor(Math.random() * WORDLIST.length);
      let word = WORDLIST[randomIndex];
      // Capitalize first letter of every alternate word
      if (config.includeUpper && i % 2 === 0) {
        word = word.charAt(0).toUpperCase() + word.slice(1);
      }
      selectedWords.push(word);
    }
    let phrase = selectedWords.join(config.passphraseSeparator);
    if (config.includeNumbers) {
      phrase += config.passphraseSeparator + Math.floor(10 + Math.random() * 90);
    }
    if (config.includeSymbols) {
      const syms = ['!', '@', '#', '$', '%', '&', '*'];
      phrase += syms[Math.floor(Math.random() * syms.length)];
    }
    return phrase;
  }

  // Standard Custom Generator
  let charset = '';
  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lower = 'abcdefghijklmnopqrstuvwxyz';
  let numbers = '0123456789';
  let symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  if (config.excludeAmbiguous) {
    upper = upper.replace(/[IO]/g, '');
    lower = lower.replace(/[lo]/g, '');
    numbers = numbers.replace(/[01]/g, '');
    symbols = symbols.replace(/[|]/g, '');
  }

  if (config.includeUpper) charset += upper;
  if (config.includeLower) charset += lower;
  if (config.includeNumbers) charset += numbers;
  if (config.includeSymbols) charset += symbols;

  if (!charset) {
    charset = lower + numbers;
  }

  const length = Math.max(6, Math.min(64, config.length));
  const array = new Uint32Array(length);
  window.crypto.getRandomValues(array);

  let password = '';
  for (let i = 0; i < length; i++) {
    password += charset[array[i] % charset.length];
  }

  return password;
}

export interface PasswordAudit {
  score: number; // 0 to 100
  label: 'Very Weak' | 'Weak' | 'Moderate' | 'Strong' | 'Fort Knox (Ultra Secure)';
  entropyBits: number;
  crackTimeEstimate: string;
  feedback: string[];
  charPoolSize: number;
}

export function evaluatePassword(pwd: string): PasswordAudit {
  if (!pwd) {
    return {
      score: 0,
      label: 'Very Weak',
      entropyBits: 0,
      crackTimeEstimate: 'Instant',
      feedback: ['Enter a password to evaluate'],
      charPoolSize: 0,
    };
  }

  let poolSize = 0;
  if (/[a-z]/.test(pwd)) poolSize += 26;
  if (/[A-Z]/.test(pwd)) poolSize += 26;
  if (/[0-9]/.test(pwd)) poolSize += 10;
  if (/[^a-zA-Z0-9]/.test(pwd)) poolSize += 33;

  // Entropy calculation: L * log2(poolSize)
  const entropy = Math.round(pwd.length * (poolSize > 0 ? Math.log2(poolSize) : 0));
  const feedback: string[] = [];

  // Common pattern checks
  const commonWeak = ['password', '123456', 'qwerty', 'admin', 'welcome', 'login', 'iloveyou', 'test'];
  const lower = pwd.toLowerCase();
  for (const w of commonWeak) {
    if (lower.includes(w)) {
      feedback.push(`Contains dictionary word or obvious pattern "${w}".`);
    }
  }

  if (pwd.length < 8) {
    feedback.push('Too short (minimum 12+ characters recommended).');
  } else if (pwd.length >= 16) {
    feedback.push('Excellent length! Length is the #1 defense against brute force.');
  }

  if (!/[A-Z]/.test(pwd)) feedback.push('Add uppercase characters to expand complexity.');
  if (!/[a-z]/.test(pwd)) feedback.push('Add lowercase letters.');
  if (!/[0-9]/.test(pwd)) feedback.push('Add digits to raise entropy.');
  if (!/[^a-zA-Z0-9]/.test(pwd)) feedback.push('Include special symbols (!@#$%^&*).');

  // Repetition check
  if (/(.)\1{2,}/.test(pwd)) {
    feedback.push('Repeated characters detected (e.g. "aaa").');
  }

  // Calculate Crack Time (assuming an offline GPU cluster at 100 billion guesses / sec)
  const guessesPerSecond = 1e11;
  const combinations = Math.pow(Math.max(1, poolSize), pwd.length);
  const secondsToCrack = combinations / (2 * guessesPerSecond);

  let crackTimeEstimate = '';
  if (secondsToCrack < 1) {
    crackTimeEstimate = 'Instant (< 1 second)';
  } else if (secondsToCrack < 60) {
    crackTimeEstimate = `${Math.round(secondsToCrack)} seconds`;
  } else if (secondsToCrack < 3600) {
    crackTimeEstimate = `${Math.round(secondsToCrack / 60)} minutes`;
  } else if (secondsToCrack < 86400) {
    crackTimeEstimate = `${Math.round(secondsToCrack / 3600)} hours`;
  } else if (secondsToCrack < 31536000) {
    crackTimeEstimate = `${Math.round(secondsToCrack / 86400)} days`;
  } else if (secondsToCrack < 31536000 * 100) {
    crackTimeEstimate = `${Math.round(secondsToCrack / 31536000)} years`;
  } else if (secondsToCrack < 31536000 * 1e6) {
    crackTimeEstimate = `${Math.round(secondsToCrack / (31536000 * 1000))} thousand years`;
  } else {
    crackTimeEstimate = 'Trillions of centuries (Practically Uncrackable)';
  }

  // Score from 0 to 100
  let score = Math.min(100, Math.round((entropy / 100) * 100));
  if (feedback.some(f => f.includes('Contains dictionary word'))) {
    score = Math.min(score, 25);
  }

  let label: PasswordAudit['label'] = 'Very Weak';
  if (score >= 85) label = 'Fort Knox (Ultra Secure)';
  else if (score >= 65) label = 'Strong';
  else if (score >= 45) label = 'Moderate';
  else if (score >= 25) label = 'Weak';

  return {
    score,
    label,
    entropyBits: entropy,
    crackTimeEstimate,
    feedback: feedback.length ? feedback : ['No obvious vulnerabilities found. Excellent cryptographic strength!'],
    charPoolSize: poolSize,
  };
}
