import Link from 'next/link';
import {
  FileText, Upload, Eye, Download, Github, Settings, Wand2,
  ArrowRight, Check, Zap, Shield, Globe
} from 'lucide-react';

const features = [
  {
    icon: Upload,
    color: 'from-orange-400 to-yellow-400',
    shadow: 'shadow-orange-400/20',
    title: 'Upload or paste your Markdown',
    desc: 'Drop a .md file, paste raw text, or import directly from a GitHub URL. No fuss.',
  },
  {
    icon: Eye,
    color: 'from-red-400 to-orange-400',
    shadow: 'shadow-red-400/20',
    title: 'See it live before you export',
    desc: 'The right pane shows you a pixel-perfect preview of your Word document as you type.',
  },
  {
    icon: Download,
    color: 'from-yellow-400 to-red-400',
    shadow: 'shadow-yellow-400/20',
    title: 'Download a clean .docx instantly',
    desc: 'Hit Export and get a properly formatted Word file — headings, tables, code blocks and all.',
  },
  {
    icon: Github,
    color: 'from-gray-600 to-gray-400',
    shadow: 'shadow-gray-400/20',
    title: 'Import from GitHub',
    desc: 'Paste any GitHub file link and Evim fetches the markdown for you — straight from the repo.',
  },
  {
    icon: Settings,
    color: 'from-orange-500 to-red-500',
    shadow: 'shadow-orange-500/20',
    title: 'Tune it your way',
    desc: 'Change font size, enable line numbers, pick a code theme, and name your output file.',
  },
  {
    icon: Wand2,
    color: 'from-red-500 to-yellow-400',
    shadow: 'shadow-red-500/20',
    title: 'Word templates (coming soon)',
    desc: 'Upload a branded .docx template and fill it with your markdown automatically.',
  },
];

const steps = [
  { n: '1', label: 'Open the editor', detail: 'Click "Start Converting" — no sign-up needed.' },
  { n: '2', label: 'Add your Markdown', detail: 'Type, paste, upload a file, or import from GitHub.' },
  { n: '3', label: 'Export your Word doc', detail: 'Click Export DOCX and your file downloads instantly.' },
];

const pills = ['Headings', 'Tables', 'Code blocks', 'Lists', 'Links', 'Images', 'Blockquotes', 'Footnotes', 'GFM', 'HTML'];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans overflow-x-hidden">

      {/* ─── NAV ─── */}
      <nav className="sticky top-0 z-30 flex items-center justify-between px-5 sm:px-10 py-4 bg-white/80 dark:bg-gray-950/90 backdrop-blur-md border-b border-orange-100 dark:border-gray-800 shadow-sm">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-orange-500/30 select-none">E</div>
          <span className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500">Evim MD2DOCX</span>
        </div>
        <div className="flex items-center gap-4 text-sm font-semibold">
          <Link href="/docs" className="text-gray-500 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors hidden sm:block">Docs</Link>
          <Link
            href="/app"
            className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-full font-bold text-sm shadow-md hover:shadow-lg hover:shadow-orange-400/30 transition-all active:scale-95"
          >
            Open Editor <ArrowRight size={15} />
          </Link>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden px-5 sm:px-10 pt-20 pb-28 text-center">
        {/* Background glow */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-br from-orange-300/20 via-red-300/10 to-yellow-200/20 rounded-full blur-3xl dark:from-orange-900/20 dark:via-red-900/10 dark:to-yellow-900/20" />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-bold mb-6 border border-orange-200 dark:border-orange-800">
          <Zap size={14} />
          No sign-up. Completely free. Works in the browser.
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-none">
          Turn Markdown into{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500">
            perfect Word docs
          </span>
          <br />in seconds.
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Evim converts your <code className="bg-orange-100 dark:bg-gray-800 text-orange-600 dark:text-orange-400 px-1.5 py-0.5 rounded text-sm font-mono">.md</code> files to properly formatted <code className="bg-orange-100 dark:bg-gray-800 text-orange-600 dark:text-orange-400 px-1.5 py-0.5 rounded text-sm font-mono">.docx</code> files — with live preview, GitHub import, and zero effort.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/app"
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl hover:shadow-orange-400/30 transition-all active:scale-95 hover:-translate-y-1"
          >
            Start Converting — it&apos;s free <ArrowRight size={20} />
          </Link>
          <Link
            href="/docs"
            className="flex items-center gap-2 px-6 py-4 border-2 border-orange-200 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-600 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 rounded-2xl font-bold transition-all active:scale-95"
          >
            Read the docs
          </Link>
        </div>

        {/* Supported elements pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-12 max-w-2xl mx-auto">
          {pills.map(p => (
            <span key={p} className="flex items-center gap-1 px-3 py-1 bg-white dark:bg-gray-900 border border-orange-100 dark:border-gray-800 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-400 shadow-sm">
              <Check size={11} className="text-orange-500" strokeWidth={3} /> {p}
            </span>
          ))}
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="px-5 sm:px-10 py-20 bg-orange-50/60 dark:bg-gray-900/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-3">
            How it works
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-12 text-base">Three steps. No account. No waiting.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {steps.map(({ n, label, detail }) => (
              <div key={n} className="relative bg-white dark:bg-[#0d1117] rounded-2xl p-8 border border-orange-100 dark:border-gray-800 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-white font-black text-xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-orange-400/30">
                  {n}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">{label}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="px-5 sm:px-10 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-3">Everything you need</h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-12 text-base">Simple words for powerful features.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, color, shadow, title, desc }) => (
              <div key={title} className="group bg-white dark:bg-[#0d1117] rounded-2xl p-7 border border-orange-100 dark:border-gray-800 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-lg ${shadow} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST STRIP ─── */}
      <section className="px-5 sm:px-10 py-14 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-white text-center sm:text-left">
          <div>
            <p className="text-2xl sm:text-3xl font-black">Ready to ditch copy-paste?</p>
            <p className="mt-1 text-orange-100 text-sm">No email. No credit card. Just paste and export.</p>
          </div>
          <Link
            href="/app"
            className="flex-shrink-0 flex items-center gap-2 bg-white text-orange-600 font-black px-7 py-3.5 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all active:scale-95 text-base"
          >
            Open Evim Free <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="px-5 sm:px-10 py-10 border-t border-orange-100 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400 dark:text-gray-600">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 flex items-center justify-center text-white font-black text-sm select-none">E</div>
          <span className="font-bold text-gray-600 dark:text-gray-400">Evim MD2DOCX</span>
        </div>
        <div className="flex gap-5">
          <Link href="/app" className="hover:text-orange-500 transition-colors">Editor</Link>
          <Link href="/docs" className="hover:text-orange-500 transition-colors">Docs</Link>
        </div>
        <p>
          Built by{' '}
          <a
            href="https://linkedin.com/in/dawit-sema"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-orange-500 hover:text-orange-600 hover:underline transition-colors"
          >
            Dawit Sema
          </a>
          {' '}· MIT License
        </p>
      </footer>
    </main>
  );
}
