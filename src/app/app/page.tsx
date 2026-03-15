"use client"

import { useState, useEffect } from 'react';
import Toolbar from '@/components/Toolbar';
import MarkdownEditor from '@/components/Editor';
import LivePreview from '@/components/LivePreview';
import SettingsModal from '@/components/SettingsModal';
import type { Settings, FontSize } from '@/types/settings';
import { Sun, Moon, BookOpen, Menu, X, Eye, Code } from 'lucide-react';
import Link from 'next/link';

const DEFAULT_MARKDOWN = `# Welcome to Evim - MD2DOCX

Convert your **Markdown** to professional Word documents instantly.

## Features
- ✨ Drag and drop files
- 🎨 Live HTML preview
- 📊 Supports GFM (Tables, Task Lists)
- 🚀 Export accurately to \`.docx\`

### Example Table
| Feature | Supported | Quality |
|---------|:---------:|--------:|
| Tables  | ✅        | High    |
| Code    | ✅        | High    |
| Links   | ✅        | High    |

\`\`\`javascript
// Code block example
function convert() {
  console.log("Exporting to DOCX...");
}
\`\`\`
`;


const DEFAULT_SETTINGS: Settings = {
  fontSize: 'medium',
  codeTheme: 'dark',
  wordWrap: true,
  lineNumbers: true,
  exportFilename: 'Evim_Document',
};

export default function Home() {
  const [markdown, setMarkdown] = useState<string>(DEFAULT_MARKDOWN);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [mobileView, setMobileView] = useState<'editor' | 'preview'>('editor');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  const handleUpload = (file: File) => {
    // Derive export name from the uploaded file's name (strip .md extension)
    const baseName = file.name.replace(/\.md$/i, '');
    setSettings(prev => ({ ...prev, exportFilename: baseName }));

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      setMarkdown(content);
    };
    reader.readAsText(file);
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) setMarkdown(prev => prev + '\n' + text);
    } catch {
      alert('Could not read clipboard. Please paste manually into the editor.');
    }
  };

  const handleGithubImport = async () => {
    const url = prompt("Enter GitHub URL (e.g., https://github.com/user/repo/blob/main/README.md):");
    if (!url) return;
    try {
      const res = await fetch(`/api/github?url=${encodeURIComponent(url)}`);
      if (!res.ok) throw new Error('Failed to fetch from GitHub');
      const data = await res.json();
      setMarkdown(data.content);
    } catch {
      alert("Failed to fetch markdown from GitHub. Please check the URL.");
    }
  };

  const handleExport = async () => {
    try {
      const res = await fetch('/api/convert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ markdown }),
      });
      if (!res.ok) throw new Error('Conversion failed');
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${settings.exportFilename || 'Evim_Document'}.docx`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch {
      alert('Error exporting to DOCX');
    }
  };

  const fontSizeMap: Record<FontSize, number> = { small: 12, medium: 14, large: 17 };

  return (
    <main className="flex flex-col h-screen w-full bg-orange-50/50 dark:bg-gray-950 font-sans text-gray-900 dark:text-gray-100 overflow-hidden transition-colors duration-300">
      {/* Header */}
      <header className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-orange-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/90 backdrop-blur-md z-20 transition-colors duration-300 shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-orange-500/30 active:scale-95 transition-transform cursor-pointer select-none">E</div>
          <h1 className="text-lg sm:text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500">
            Evim <span className="text-gray-300 dark:text-gray-700 font-normal">|</span> MD2DOCX
          </h1>
        </div>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center space-x-4 text-sm font-semibold">
          <button onClick={toggleDarkMode} aria-label="Toggle dark mode" className="p-2.5 rounded-full hover:bg-orange-100 dark:hover:bg-gray-800 transition-all active:scale-90 text-orange-600 dark:text-yellow-400 bg-white dark:bg-gray-900 border border-orange-100 dark:border-gray-800 shadow-sm">
            {isDarkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <Link href="/docs" className="flex items-center gap-1.5 text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors active:scale-95">
            <BookOpen size={15} />
            Docs
          </Link>
          <Link href="/" className="flex items-center gap-1.5 text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-colors active:scale-95">
            ← Home
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(o => !o)} className="sm:hidden p-2 rounded-lg hover:bg-orange-100 dark:hover:bg-gray-800 transition-colors text-orange-600 dark:text-yellow-400 active:scale-90">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="sm:hidden absolute top-[57px] left-0 right-0 z-30 bg-white dark:bg-gray-900 border-b border-orange-200 dark:border-gray-800 shadow-xl transition-colors flex flex-col gap-1 p-4">
          <button onClick={() => { toggleDarkMode(); setMenuOpen(false); }} className="flex items-center gap-2 text-sm font-semibold p-3 rounded-xl hover:bg-orange-50 dark:hover:bg-gray-800 text-orange-600 dark:text-yellow-400 transition-colors active:scale-95">
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />} {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <Link href="/docs" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 text-sm font-semibold p-3 rounded-xl hover:bg-orange-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors active:scale-95">
            <BookOpen size={18} /> Documentation
          </Link>
        </div>
      )}

      {/* Main Workspace */}
      <div className="flex flex-col flex-1 overflow-hidden p-2 sm:p-4 lg:p-6">
        <div className="flex flex-col flex-1 overflow-hidden bg-white dark:bg-[#0d1117] rounded-2xl shadow-xl shadow-orange-900/5 dark:shadow-none border border-orange-200/60 dark:border-gray-800">
          <Toolbar
            onUpload={handleUpload}
            onPaste={handlePaste}
            onGithubImport={handleGithubImport}
            onExport={handleExport}
            onSettings={() => setShowSettings(true)}
          />

          {/* Mobile tab switcher */}
          <div className="flex sm:hidden border-b border-orange-100 dark:border-gray-800 bg-white dark:bg-[#0d1117] transition-colors">
            <button
              onClick={() => setMobileView('editor')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-bold transition-all ${mobileView === 'editor' ? 'text-orange-600 border-b-2 border-orange-500 bg-orange-50/50 dark:bg-orange-900/10' : 'text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
            >
              <Code size={15} /> Editor
            </button>
            <button
              onClick={() => setMobileView('preview')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-bold transition-all ${mobileView === 'preview' ? 'text-orange-600 border-b-2 border-orange-500 bg-orange-50/50 dark:bg-orange-900/10' : 'text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
            >
              <Eye size={15} /> Preview
            </button>
          </div>

          {/* Split View — desktop */}
          <div className="hidden sm:flex flex-1 overflow-hidden">
            <div className="w-1/2 h-full border-r border-orange-100 dark:border-gray-800 transition-colors duration-300">
              <MarkdownEditor
                value={markdown}
                onChange={(val) => setMarkdown(val || '')}
                isDarkMode={isDarkMode}
                fontSize={fontSizeMap[settings.fontSize]}
                wordWrap={settings.wordWrap}
                lineNumbers={settings.lineNumbers}
              />
            </div>
            <div className="w-1/2 h-full bg-orange-50/20 dark:bg-[#0d1117] transition-colors duration-300">
              <LivePreview content={markdown} isDarkMode={isDarkMode} />
            </div>
          </div>

          {/* Mobile single-pane view */}
          <div className="flex sm:hidden flex-1 overflow-hidden">
            {mobileView === 'editor' ? (
              <div className="w-full h-full">
                <MarkdownEditor
                  value={markdown}
                  onChange={(val) => setMarkdown(val || '')}
                  isDarkMode={isDarkMode}
                  fontSize={fontSizeMap[settings.fontSize]}
                  wordWrap={settings.wordWrap}
                  lineNumbers={settings.lineNumbers}
                />
              </div>
            ) : (
              <div className="w-full h-full">
                <LivePreview content={markdown} isDarkMode={isDarkMode} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <SettingsModal
          settings={settings}
          onChange={setSettings}
          onClose={() => setShowSettings(false)}
          isDarkMode={isDarkMode}
        />
      )}
    </main>
  );
}
