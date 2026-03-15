import Link from 'next/link';
import { ArrowLeft, BookOpen, Settings, Zap, Edit3, Github, Globe } from 'lucide-react';

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-orange-50/50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
      {/* Header */}
      <header className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-orange-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/90 backdrop-blur-md sticky top-0 z-10 shadow-sm">
        <div className="flex items-center space-x-3">
          <Link href="/" className="p-2 rounded-full hover:bg-orange-100 dark:hover:bg-gray-800 transition-colors active:scale-95 text-orange-600 dark:text-yellow-400">
            <ArrowLeft size={20} />
          </Link>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-lg shadow-sm select-none">E</div>
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500">Evim | Docs</h1>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-yellow-500 pb-2">Documentation</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 font-medium max-w-xl mx-auto">
            Everything you need to get the best out of Evim MD2DOCX.
          </p>
        </div>

        <div className="space-y-6">
          {/* Card helper */}
          {[
            {
              icon: <Edit3 size={22} />,
              colorLight: 'bg-orange-100 text-orange-600',
              colorDark: 'dark:bg-orange-900/30 dark:text-orange-400',
              title: 'Getting Started',
              content: (
                <>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">Evim MD2DOCX is a premium markdown converter designed for perfect Word formatting.</p>
                  <ul className="mt-3 space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 list-disc list-inside">
                    <li><strong>Editor (left pane):</strong> Type directly. Supports GFM (GitHub Flavored Markdown).</li>
                    <li><strong>Live Preview (right pane):</strong> Renders exactly what your Word document will look like.</li>
                    <li><strong>Export:</strong> Click <em>Export DOCX</em> to download your file instantly.</li>
                  </ul>
                </>
              ),
            },
            {
              icon: <Zap size={22} />,
              colorLight: 'bg-red-100 text-red-600',
              colorDark: 'dark:bg-red-900/30 dark:text-red-400',
              title: 'Input Methods',
              content: (
                <ol className="space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 list-decimal list-inside">
                  <li><strong>Upload .md:</strong> Select a local file to read instantly.</li>
                  <li><strong>Paste:</strong> Grab content from your clipboard.</li>
                  <li><strong>Import:</strong> Paste a GitHub file URL — standard <code className="text-xs bg-orange-100 dark:bg-gray-800 px-1 py-0.5 rounded">github.com</code> and raw URLs are both supported.</li>
                </ol>
              ),
            },
            {
              icon: <Settings size={22} />,
              colorLight: 'bg-yellow-100 text-yellow-600',
              colorDark: 'dark:bg-yellow-900/30 dark:text-yellow-400',
              title: 'Settings Panel',
              content: (
                <ul className="space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 list-disc list-inside">
                  <li><strong>Font Size:</strong> Switch between Small / Medium / Large editor text.</li>
                  <li><strong>Code Block Style:</strong> GitHub Light, Dark, or Monokai visual themes.</li>
                  <li><strong>Export Filename:</strong> Customize the downloaded <code className="text-xs bg-orange-100 dark:bg-gray-800 px-1 py-0.5 rounded">.docx</code> filename.</li>
                  <li><strong>Word Wrap:</strong> Toggle soft wrapping in the editor.</li>
                  <li><strong>Line Numbers:</strong> Toggle line number gutter.</li>
                </ul>
              ),
            },
            {
              icon: <Globe size={22} />,
              colorLight: 'bg-blue-100 text-blue-600',
              colorDark: 'dark:bg-blue-900/30 dark:text-blue-400',
              title: 'Deploying to Vercel / Netlify',
              content: (
                <div className="space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  <p>See the step-by-step deployment instructions in the <code className="text-xs bg-orange-100 dark:bg-gray-800 px-1 py-0.5 rounded">README.md</code> in the project root.</p>
                  <ol className="space-y-2 list-decimal list-inside">
                    <li>Push your project to a <strong>GitHub repository</strong>.</li>
                    <li>Visit <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-orange-500 hover:underline font-semibold">vercel.com</a> or <a href="https://netlify.app" target="_blank" rel="noreferrer" className="text-orange-500 hover:underline font-semibold">netlify.app</a></li>
                    <li>Connect your GitHub account and select your repository.</li>
                    <li>Vercel auto-detects Next.js — just click <strong>Deploy</strong>.</li>
                    <li>Your app goes live and future <code className="text-xs bg-orange-100 dark:bg-gray-800 px-1 py-0.5 rounded">git push</code> commands auto-deploy.</li>
                  </ol>
                </div>
              ),
            },
          ].map(({ icon, colorLight, colorDark, title, content }) => (
            <section key={title} className="bg-white dark:bg-[#0d1117] p-6 sm:p-8 rounded-2xl shadow-md shadow-orange-900/5 dark:shadow-none border border-orange-100 dark:border-gray-800 transition-all hover:shadow-xl hover:-translate-y-0.5 duration-300">
              <div className="flex items-center space-x-3 mb-5">
                <div className={`p-2.5 rounded-xl ${colorLight} ${colorDark}`}>{icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
              </div>
              {content}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
