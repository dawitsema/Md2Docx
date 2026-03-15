import Link from 'next/link';
import { Upload, Eye, Download, Github, Settings } from 'lucide-react';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans">

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-base select-none">E</div>
          <span className="font-bold text-gray-900 dark:text-gray-100">Evim MD2DOCX</span>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <Link href="/docs" className="text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors">Docs</Link>
          <Link href="/app" className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors">
            Open App
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-2xl mx-auto px-6 pt-20 pb-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-5 leading-tight text-gray-900 dark:text-gray-100">
          Convert Markdown to Word.<br />
          <span className="text-orange-500">Simple and fast.</span>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg mb-8 leading-relaxed">
          Paste or upload a <code className="bg-gray-100 dark:bg-gray-800 px-1.5 rounded text-sm">.md</code> file,
          see a live preview, and download a clean <code className="bg-gray-100 dark:bg-gray-800 px-1.5 rounded text-sm">.docx</code> in one click.
          No sign-up required.
        </p>
        <Link
          href="/app"
          className="inline-block px-7 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold text-base transition-colors"
        >
          Try it now →
        </Link>
        <p className="mt-4 text-sm text-gray-400 dark:text-gray-600">Free · No account · Runs in your browser</p>
      </section>

      {/* What it does */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: Upload, label: 'Upload, paste, or drag & drop a .md file' },
            { icon: Eye,    label: 'See a live Word preview as you type' },
            { icon: Download, label: 'Export to .docx with one click' },
            { icon: Github, label: 'Import directly from a GitHub link' },
            { icon: Settings, label: 'Customize filename, font size, and code style' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
              <div className="w-9 h-9 flex-shrink-0 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center text-orange-500">
                <Icon size={18} />
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 dark:border-gray-800 px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400 dark:text-gray-600">
        <span>Evim MD2DOCX</span>
        <div className="flex gap-4">
          <Link href="/app" className="hover:text-orange-500 transition-colors">Editor</Link>
          <Link href="/docs" className="hover:text-orange-500 transition-colors">Docs</Link>
        </div>
        <span>
          Built by{' '}
          <a
            href="https://linkedin.com/in/dawit-sema"
            target="_blank"
            rel="noreferrer"
            className="text-orange-500 hover:underline"
          >
            Dawit Sema
          </a>
        </span>
      </footer>
    </main>
  );
}
