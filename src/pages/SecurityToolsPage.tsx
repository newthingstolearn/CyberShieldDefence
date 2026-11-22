import React from 'react';
import { 
  KeyRound, 
  Link2, 
  QrCode, 
  Copy, 
  Check, 
  RefreshCw, 
  ShieldCheck, 
  AlertTriangle, 
  Upload, 
  ExternalLink,
  Sliders,
  CheckCircle2,
  XCircle,
  Eye,
  Info
} from 'lucide-react';
import { generatePassword, evaluatePassword, PasswordConfig, PasswordAudit } from '../utils/passwordUtils';
import { analyzeUrl } from '../utils/urlAnalyzer';
import { analyzeQrString, decodeQrFromImage } from '../utils/qrAnalyzer';
import { UrlAnalysisResult, QrAnalysisResult, LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface Props {
  language?: LanguageCode;
}

export const SecurityToolsPage: React.FC<Props> = ({ language = 'en' }) => {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;
  const [activeTab, setActiveTab] = React.useState<'password' | 'link' | 'qr'>('password');

  // Password Generator State
  const [pwdConfig, setPwdConfig] = React.useState<PasswordConfig>({
    length: 16,
    includeUpper: true,
    includeLower: true,
    includeNumbers: true,
    includeSymbols: true,
    excludeAmbiguous: true,
    mode: 'custom',
    passphraseWordCount: 4,
    passphraseSeparator: '-',
  });

  const [generatedPassword, setGeneratedPassword] = React.useState<string>('');
  const [auditResult, setAuditResult] = React.useState<PasswordAudit | null>(null);
  const [copiedPwd, setCopiedPwd] = React.useState(false);
  const [testPasswordInput, setTestPasswordInput] = React.useState<string>('');
  const [manualAudit, setManualAudit] = React.useState<PasswordAudit | null>(null);

  // Link Analyzer State
  const [urlInput, setUrlInput] = React.useState<string>('http://sbi-netbanking-verify.xyz/login');
  const [urlResult, setUrlResult] = React.useState<UrlAnalysisResult | null>(null);
  const [urlError, setUrlError] = React.useState<string | null>(null);

  // QR Analyzer State
  const [qrInput, setQrInput] = React.useState<string>('upi://pay?pa=rakesh_army@okaxis&pn=Capt+Rakesh+Verma&am=8000&tn=Army+Advance+Voucher');
  const [qrResult, setQrResult] = React.useState<QrAnalysisResult | null>(null);
  const [qrError, setQrError] = React.useState<string | null>(null);
  const [isDecodingImage, setIsDecodingImage] = React.useState(false);

  // Generate initial password
  React.useEffect(() => {
    handleRegenerate();
    handleAnalyzeUrl(urlInput);
    handleAnalyzeQr(qrInput);
  }, []);

  const handleRegenerate = () => {
    const pwd = generatePassword(pwdConfig);
    setGeneratedPassword(pwd);
    setAuditResult(evaluatePassword(pwd));
    setCopiedPwd(false);
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(generatedPassword);
    setCopiedPwd(true);
    setTimeout(() => setCopiedPwd(false), 2000);
  };

  const handleManualAuditChange = (val: string) => {
    setTestPasswordInput(val);
    if (val.trim()) {
      setManualAudit(evaluatePassword(val));
    } else {
      setManualAudit(null);
    }
  };

  const handleAnalyzeUrl = (targetUrl: string) => {
    setUrlError(null);
    try {
      const res = analyzeUrl(targetUrl);
      setUrlResult(res);
    } catch (err: any) {
      setUrlError(err.message || 'Error inspecting URL');
      setUrlResult(null);
    }
  };

  const handleAnalyzeQr = (targetString: string) => {
    setQrError(null);
    try {
      const res = analyzeQrString(targetString);
      setQrResult(res);
    } catch (err: any) {
      setQrError(err.message || 'Error inspecting QR data');
      setQrResult(null);
    }
  };

  const handleQrFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsDecodingImage(true);
    setQrError(null);

    try {
      const decodedString = await decodeQrFromImage(file);
      setQrInput(decodedString);
      handleAnalyzeQr(decodedString);
    } catch (err: any) {
      setQrError(err.message || 'Failed to decode QR image');
    } finally {
      setIsDecodingImage(false);
    }
  };

  return (
    <div className="space-y-8 py-6 sm:py-8">
      {/* Tools Suite Header */}
      <div className="bg-gradient-to-r from-slate-900 via-[#19102c] to-slate-900 p-6 sm:p-10 rounded-3xl text-white border border-[#8D65EC]/30 shadow-xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5E17EB]/20 text-[#8D65EC] text-xs font-bold border border-[#8D65EC]/40">
          <ShieldCheck className="w-3.5 h-3.5 text-[#8D65EC]" />
          <span>Advanced Cyber Defense Toolkit</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
          Client-Side Security Verification Tools
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
          Zero data leaves your browser. Generate cryptographic passphrases, analyze deceptive phishing URLs, and unpack QR code payloads before scanning them.
        </p>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 pt-4">
          <button
            onClick={() => setActiveTab('password')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'password'
                ? 'bg-[#5E17EB] text-white shadow-md shadow-[#5E17EB]/30'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
            }`}
          >
            <KeyRound className="w-4 h-4" />
            <span>{t.toolsPasswordTab}</span>
          </button>

          <button
            onClick={() => setActiveTab('link')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'link'
                ? 'bg-[#5E17EB] text-white shadow-md shadow-[#5E17EB]/30'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
            }`}
          >
            <Link2 className="w-4 h-4" />
            <span>{t.toolsLinkTab}</span>
          </button>

          <button
            onClick={() => setActiveTab('qr')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'qr'
                ? 'bg-[#5E17EB] text-white shadow-md shadow-[#5E17EB]/30'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
            }`}
          >
            <QrCode className="w-4 h-4" />
            <span>{t.toolsQrTab}</span>
          </button>
        </div>
      </div>

      {/* ===================== TAB 1: PASSWORD GENERATOR ===================== */}
      {activeTab === 'password' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <h2 className="text-xl font-extrabold text-[#1D1B28] dark:text-white flex items-center gap-2">
              <Sliders className="w-5 h-5 text-[#5E17EB]" />
              <span>Password Generator Configuration</span>
            </h2>

            {/* Mode Selector */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'custom', label: 'High-Entropy' },
                { id: 'passphrase', label: 'Passphrase' },
                { id: 'pin', label: 'Secure PIN' }
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => {
                    const newConfig = { ...pwdConfig, mode: m.id as any };
                    setPwdConfig(newConfig);
                    const pwd = generatePassword(newConfig);
                    setGeneratedPassword(pwd);
                    setAuditResult(evaluatePassword(pwd));
                  }}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                    pwdConfig.mode === m.id
                      ? 'bg-[#F2EEFC] dark:bg-[#1a1230] border-2 border-[#5E17EB] text-[#5E17EB] dark:text-[#8D65EC]'
                      : 'border-slate-200 dark:border-slate-800 text-[#6E6B7B] dark:text-slate-400 hover:border-[#8D65EC] hover:bg-[#F2EEFC]/30'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            {/* Mode-specific Controls */}
            {pwdConfig.mode === 'custom' && (
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold text-[#1D1B28] dark:text-slate-300 mb-1">
                    <span>Password Length: {pwdConfig.length} Characters</span>
                    <span className="text-[#5E17EB] dark:text-[#8D65EC]">
                      {pwdConfig.length >= 16 ? 'Recommended (16+)' : 'Acceptable'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={8}
                    max={64}
                    value={pwdConfig.length}
                    onChange={(e) => {
                      const newConfig = { ...pwdConfig, length: parseInt(e.target.value) };
                      setPwdConfig(newConfig);
                      const pwd = generatePassword(newConfig);
                      setGeneratedPassword(pwd);
                      setAuditResult(evaluatePassword(pwd));
                    }}
                    className="w-full accent-[#5E17EB] cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 cursor-pointer hover:border-[#8D65EC]">
                    <input
                      type="checkbox"
                      checked={pwdConfig.includeUpper}
                      onChange={(e) => setPwdConfig({ ...pwdConfig, includeUpper: e.target.checked })}
                      className="accent-[#5E17EB] rounded"
                    />
                    <span>Uppercase (A-Z)</span>
                  </label>
                  <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 cursor-pointer hover:border-[#8D65EC]">
                    <input
                      type="checkbox"
                      checked={pwdConfig.includeLower}
                      onChange={(e) => setPwdConfig({ ...pwdConfig, includeLower: e.target.checked })}
                      className="accent-cyan-500 rounded"
                    />
                    <span>Lowercase (a-z)</span>
                  </label>
                  <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={pwdConfig.includeNumbers}
                      onChange={(e) => setPwdConfig({ ...pwdConfig, includeNumbers: e.target.checked })}
                      className="accent-cyan-500 rounded"
                    />
                    <span>Numbers (0-9)</span>
                  </label>
                  <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={pwdConfig.includeSymbols}
                      onChange={(e) => setPwdConfig({ ...pwdConfig, includeSymbols: e.target.checked })}
                      className="accent-cyan-500 rounded"
                    />
                    <span>Symbols (!@#$%)</span>
                  </label>
                </div>

                <label className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={pwdConfig.excludeAmbiguous}
                    onChange={(e) => setPwdConfig({ ...pwdConfig, excludeAmbiguous: e.target.checked })}
                    className="accent-cyan-500 rounded"
                  />
                  <span>Exclude Ambiguous Characters (e.g. 0, O, I, l, 1)</span>
                </label>
              </div>
            )}

            {pwdConfig.mode === 'passphrase' && (
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    <span>Number of Words: {pwdConfig.passphraseWordCount} Words</span>
                  </div>
                  <input
                    type="range"
                    min={3}
                    max={6}
                    value={pwdConfig.passphraseWordCount}
                    onChange={(e) => {
                      const newConfig = { ...pwdConfig, passphraseWordCount: parseInt(e.target.value) };
                      setPwdConfig(newConfig);
                      const pwd = generatePassword(newConfig);
                      setGeneratedPassword(pwd);
                      setAuditResult(evaluatePassword(pwd));
                    }}
                    className="w-full accent-cyan-500 cursor-pointer"
                  />
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Word Separator:</span>
                  {['-', '.', '_', ' '].map((sep) => (
                    <button
                      key={sep}
                      onClick={() => {
                        const newConfig = { ...pwdConfig, passphraseSeparator: sep };
                        setPwdConfig(newConfig);
                        const pwd = generatePassword(newConfig);
                        setGeneratedPassword(pwd);
                        setAuditResult(evaluatePassword(pwd));
                      }}
                      className={`px-3 py-1 rounded-lg border font-mono ${
                        pwdConfig.passphraseSeparator === sep
                          ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400'
                          : 'border-slate-200 dark:border-slate-800'
                      }`}
                    >
                      {sep === ' ' ? 'Space' : sep}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={handleRegenerate}
              className="w-full py-3 bg-[#5E17EB] hover:bg-[#4D0FD4] text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-[#5E17EB]/30 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Regenerate Password</span>
            </button>
          </div>

          {/* Result & Audit Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Generated Password Box */}
            <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-4">
              <span className="text-xs uppercase tracking-wider font-extrabold text-cyan-400 block">
                Cryptographically Secure Password
              </span>

              <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-between gap-3">
                <span className="font-mono text-base sm:text-lg font-bold text-emerald-400 break-all select-all">
                  {generatedPassword}
                </span>
                <button
                  onClick={handleCopyPassword}
                  className="p-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl shrink-0 transition-colors cursor-pointer"
                  title="Copy to clipboard"
                >
                  {copiedPwd ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>

              {auditResult && (
                <div className="space-y-4 pt-2">
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                      <span className="text-slate-400 block mb-0.5">Shannon Entropy:</span>
                      <span className="text-base font-black text-cyan-300">{auditResult.entropyBits} Bits</span>
                    </div>
                    <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                      <span className="text-slate-400 block mb-0.5">Estimated Crack Time:</span>
                      <span className="text-sm font-black text-amber-400 leading-tight block">
                        {auditResult.crackTimeEstimate}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold">
                      <span>Strength Rating: {auditResult.label}</span>
                      <span>{auditResult.score}/100</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-300 ${
                          auditResult.score >= 80 ? 'bg-emerald-500' : auditResult.score >= 50 ? 'bg-amber-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${auditResult.score}%` }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Test Existing Password Box */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-500" />
                <span>Test & Audit Your Current Password (Local Only)</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Type any password to evaluate its vulnerability against brute-force attacks. Nothing is saved or uploaded.
              </p>

              <input
                type="text"
                value={testPasswordInput}
                onChange={(e) => handleManualAuditChange(e.target.value)}
                placeholder="Type password to test (e.g. MyPassword123!)..."
                className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white text-xs sm:text-sm font-mono focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              {manualAudit && (
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
                  <div className="flex justify-between font-bold">
                    <span className="text-slate-700 dark:text-slate-300">Rating: {manualAudit.label} ({manualAudit.entropyBits} bits)</span>
                    <span className="text-amber-500">Crack Time: {manualAudit.crackTimeEstimate}</span>
                  </div>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-400">
                    {manualAudit.feedback.map((fb, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-cyan-500 font-bold">•</span>
                        <span>{fb}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ===================== TAB 2: FAKE LINK IDENTIFIER ===================== */}
      {activeTab === 'link' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          <div className="space-y-2 border-b border-slate-100 dark:border-slate-800 pb-4">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <Link2 className="w-6 h-6 text-cyan-500" />
              <span>Fake Link & Phishing URL Identifier</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
              Inspect suspicious web links before clicking. Analyzes domain homoglyphs (lookalike characters), misleading subdomains, high-risk TLDs, and credential harvesting parameters.
            </p>
          </div>

          {/* URL Input Form */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="Enter suspicious link (e.g. http://sbi-netbanking-verify.xyz/login)..."
                className="flex-1 p-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-[#1D1B28] dark:text-white text-xs sm:text-sm font-mono focus:outline-none focus:border-[#5E17EB] focus:ring-2 focus:ring-[#5E17EB]/20 transition-all"
              />
              <button
                onClick={() => handleAnalyzeUrl(urlInput)}
                className="px-6 py-3 bg-[#5E17EB] hover:bg-[#4D0FD4] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-[#5E17EB]/30 cursor-pointer shrink-0"
              >
                Inspect Link
              </button>
            </div>

            {/* Quick Sample Links */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-500">Test Samples:</span>
              <button
                onClick={() => {
                  const s = 'http://sbi-netbanking-verify.xyz/login';
                  setUrlInput(s);
                  handleAnalyzeUrl(s);
                }}
                className="px-2.5 py-1 bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 rounded-lg border border-red-300 dark:border-red-900 cursor-pointer"
              >
                Phishing SBI
              </button>
              <button
                onClick={() => {
                  const s = 'https://paypal.com.account-verify.shop/signin';
                  setUrlInput(s);
                  handleAnalyzeUrl(s);
                }}
                className="px-2.5 py-1 bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 rounded-lg border border-red-300 dark:border-red-900 cursor-pointer"
              >
                Subdomain PayPal Trick
              </button>
              <button
                onClick={() => {
                  const s = 'http://192.168.1.1/free-iphone';
                  setUrlInput(s);
                  handleAnalyzeUrl(s);
                }}
                className="px-2.5 py-1 bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 rounded-lg border border-red-300 dark:border-red-900 cursor-pointer"
              >
                Raw IP Host
              </button>
              <button
                onClick={() => {
                  const s = 'https://sbi.co.in';
                  setUrlInput(s);
                  handleAnalyzeUrl(s);
                }}
                className="px-2.5 py-1 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 rounded-lg border border-emerald-300 dark:border-emerald-900 cursor-pointer"
              >
                Official SBI Domain
              </button>
            </div>
          </div>

          {urlError && (
            <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-500 text-red-600 dark:text-red-300 text-xs">
              {urlError}
            </div>
          )}

          {/* Analysis Results Display */}
          {urlResult && (
            <div className="space-y-6 pt-4 border-t border-slate-100 dark:border-slate-800">
              {/* Verdict Banner */}
              <div className={`p-6 rounded-2xl border text-white space-y-2 ${
                urlResult.riskLevel === 'Dangerous'
                  ? 'bg-red-950 border-red-600'
                  : urlResult.riskLevel === 'Suspicious'
                  ? 'bg-amber-950 border-amber-600'
                  : 'bg-emerald-950 border-emerald-600'
              }`}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded bg-black/40">
                    VERDICT: {urlResult.riskLevel}
                  </span>
                  <span className="text-2xl font-black">
                    Risk Score: {urlResult.riskScore} / 100
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black">
                  {urlResult.verdict}
                </h3>
                <div className="text-xs font-mono text-slate-300">
                  Target Domain: {urlResult.hostname} • Protocol: {urlResult.protocol.toUpperCase()}
                </div>
              </div>

              {/* Flags Breakdown */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Detected Link Attributes & Vulnerabilities:
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {urlResult.flags.map((flag, idx) => (
                    <div 
                      key={idx}
                      className={`p-4 rounded-xl border text-xs space-y-1 ${
                        flag.severity === 'danger'
                          ? 'bg-red-50 dark:bg-red-950/20 border-red-300 dark:border-red-900/60 text-slate-800 dark:text-slate-200'
                          : flag.severity === 'warning'
                          ? 'bg-amber-50 dark:bg-amber-950/20 border-amber-300 dark:border-amber-900/60 text-slate-800 dark:text-slate-200'
                          : flag.severity === 'safe'
                          ? 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-900/60 text-slate-800 dark:text-slate-200'
                          : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200'
                      }`}
                    >
                      <div className="font-bold flex items-center gap-1.5">
                        {flag.severity === 'danger' && <XCircle className="w-4 h-4 text-red-500 shrink-0" />}
                        {flag.severity === 'warning' && <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />}
                        {flag.severity === 'safe' && <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />}
                        <span>{flag.title}</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {flag.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Safety Recommendations */}
              <div className="bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
                <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider block">
                  Actionable Safety Directives:
                </span>
                <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                  {urlResult.recommendations.map((rec, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-cyan-500 font-bold">•</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ===================== TAB 3: FAKE QR CODE INSPECTOR ===================== */}
      {activeTab === 'qr' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          <div className="space-y-2 border-b border-slate-100 dark:border-slate-800 pb-4">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
              <QrCode className="w-6 h-6 text-cyan-500" />
              <span>Fake QR Code Payload Inspector</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
              Inspect decoded QR contents safely without triggering automatic actions or apps. Unmasks deceptive UPI debit requests, Trojan APK installers, and malicious website redirects.
            </p>
          </div>

          {/* QR Input Options: Upload Image OR Paste String */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Option A: Upload QR Image */}
            <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-6 text-center space-y-3 flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-800/30">
              <Upload className="w-8 h-8 text-cyan-500" />
              <div>
                <span className="font-bold text-slate-900 dark:text-white text-sm block">Upload QR Code Screenshot</span>
                <span className="text-xs text-slate-500">Supports PNG, JPG, WEBP (Decoded client-side in browser)</span>
              </div>
              <label className="px-4 py-2 bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold cursor-pointer transition-colors">
                <span>{isDecodingImage ? 'Decoding Image...' : 'Choose QR Image'}</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleQrFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* Option B: Paste Raw QR String */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                Or Paste Decoded Text / UPI Link:
              </label>
              <textarea
                rows={4}
                value={qrInput}
                onChange={(e) => setQrInput(e.target.value)}
                placeholder="Paste QR payload (e.g. upi://pay?pa=... or https://...)"
                className="w-full p-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl text-[#1D1B28] dark:text-white text-xs font-mono focus:outline-none focus:border-[#5E17EB] focus:ring-2 focus:ring-[#5E17EB]/20 transition-all"
              />
              <button
                onClick={() => handleAnalyzeQr(qrInput)}
                className="w-full py-2.5 bg-[#5E17EB] hover:bg-[#4D0FD4] text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-md shadow-[#5E17EB]/30"
              >
                Inspect QR Payload
              </button>
            </div>
          </div>

          {/* Quick Preloaded Samples */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-500">Test Samples:</span>
            <button
              onClick={() => {
                const s = 'upi://pay?pa=rakesh_army@okaxis&pn=Capt+Rakesh+Verma&am=8000&tn=Army+Advance+Voucher';
                setQrInput(s);
                handleAnalyzeQr(s);
              }}
              className="px-2.5 py-1 bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 rounded-lg border border-red-300 dark:border-red-900 cursor-pointer"
            >
              Dangerous UPI Debit Scam QR
            </button>
            <button
              onClick={() => {
                const s = 'http://bses-bill-portal.live/SBI_KYC_Verification.apk';
                setQrInput(s);
                handleAnalyzeQr(s);
              }}
              className="px-2.5 py-1 bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 rounded-lg border border-red-300 dark:border-red-900 cursor-pointer"
            >
              Malicious APK Download QR
            </button>
            <button
              onClick={() => {
                const s = 'WIFI:S:Home_Network;T:WPA;P:SecretPassword123;;';
                setQrInput(s);
                handleAnalyzeQr(s);
              }}
              className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-300 dark:border-slate-700 cursor-pointer"
            >
              Wi-Fi Setup QR
            </button>
          </div>

          {qrError && (
            <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-500 text-red-600 dark:text-red-300 text-xs">
              {qrError}
            </div>
          )}

          {/* QR Analysis Output */}
          {qrResult && (
            <div className="space-y-6 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className={`p-6 rounded-2xl border text-white space-y-2 ${
                qrResult.riskLevel === 'Dangerous'
                  ? 'bg-red-950 border-red-600'
                  : qrResult.riskLevel === 'Suspicious'
                  ? 'bg-amber-950 border-amber-600'
                  : 'bg-emerald-950 border-emerald-600'
              }`}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-black uppercase tracking-wider px-2.5 py-0.5 rounded bg-black/40">
                    CLASSIFICATION: {qrResult.type.toUpperCase()} • {qrResult.riskLevel}
                  </span>
                  <span className="text-2xl font-black">
                    Risk Score: {qrResult.riskScore} / 100
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black">
                  {qrResult.summary}
                </h3>
              </div>

              {/* Decoded Details */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Decoded Payload Parameters:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {qrResult.details.map((d, idx) => (
                    <div key={idx} className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
                      <span className="text-slate-500 dark:text-slate-400 block mb-0.5">{d.label}:</span>
                      <span className="font-mono font-bold text-slate-900 dark:text-white break-all">{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Warnings */}
              {qrResult.warnings.length > 0 && (
                <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-300 dark:border-red-900/60 text-xs space-y-2">
                  <span className="font-bold text-red-600 dark:text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" />
                    <span>High Priority Safety Warnings:</span>
                  </span>
                  <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
                    {qrResult.warnings.map((warn, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-red-500 font-bold">•</span>
                        <span>{warn}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Checklist */}
              <div className="bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200 dark:border-slate-700 text-xs space-y-1 text-slate-600 dark:text-slate-300">
                <span className="font-bold text-slate-900 dark:text-white uppercase tracking-wider block mb-1">
                  Safety Checklist:
                </span>
                {qrResult.safetyChecklist.map((c, idx) => (
                  <p key={idx} className="flex items-start gap-1.5">
                    <span className="text-cyan-500 font-bold">✓</span>
                    <span>{c}</span>
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
