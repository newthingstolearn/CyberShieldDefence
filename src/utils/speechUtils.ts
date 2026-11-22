/**
 * Web Speech API text-to-speech utility
 */

import { LanguageCode } from '../types';

export function getLangLocale(code: LanguageCode): string {
  switch (code) {
    case 'kn': return 'kn-IN';
    case 'hi': return 'hi-IN';
    case 'ta': return 'ta-IN';
    case 'te': return 'te-IN';
    case 'bn': return 'bn-IN';
    case 'mr': return 'mr-IN';
    case 'es': return 'es-ES';
    case 'fr': return 'fr-FR';
    case 'de': return 'de-DE';
    case 'en':
    default:
      return 'en-US';
  }
}

class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isSpeakingState = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
    }
  }

  public isAvailable(): boolean {
    return this.synth !== null;
  }

  public speak(
    text: string,
    lang: string = 'en-US',
    onEnd?: () => void,
    rate: number = 0.95
  ): void {
    if (!this.synth) return;

    this.stop();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = rate; // slightly slower for senior/accessible readability
    utterance.pitch = 1.0;

    // Pick a natural voice if available
    const voices = this.synth.getVoices();
    const preferredVoice = voices.find(
      v => v.lang.startsWith(lang.slice(0, 2)) && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Premium'))
    ) || voices.find(v => v.lang.startsWith(lang.slice(0, 2)));

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onstart = () => {
      this.isSpeakingState = true;
    };

    utterance.onend = () => {
      this.isSpeakingState = false;
      this.currentUtterance = null;
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      this.isSpeakingState = false;
      this.currentUtterance = null;
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  public stop(): void {
    if (this.synth) {
      this.synth.cancel();
      this.isSpeakingState = false;
      this.currentUtterance = null;
    }
  }

  public isSpeaking(): boolean {
    return this.isSpeakingState;
  }
}

export const speechService = new SpeechService();
