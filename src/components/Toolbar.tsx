import { Upload, Download, Github, Wand2, Settings, ClipboardPaste } from 'lucide-react';

interface ToolbarProps {
  onUpload: (file: File) => void;
  onPaste: () => void;
  onGithubImport: () => void;
  onExport: () => void;
  onSettings: () => void;
}

export default function Toolbar({ onUpload, onPaste, onGithubImport, onExport, onSettings }: ToolbarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 p-3 sm:p-4 border-b border-orange-100 dark:border-gray-800 bg-white dark:bg-[#0d1117] transition-colors duration-300">
      {/* Left: Input actions */}
      <div className="flex items-center flex-wrap gap-2">
        <label className="flex items-center gap-1.5 px-3 py-2 bg-orange-50 hover:bg-orange-100 dark:bg-gray-800/80 dark:hover:bg-gray-700 text-orange-700 dark:text-orange-300 rounded-lg cursor-pointer transition-all active:scale-95 text-sm font-bold shadow-sm border border-orange-200/50 dark:border-gray-700">
          <Upload size={16} strokeWidth={2.5} />
          <span className="hidden sm:inline">Upload .md</span>
          <span className="sm:hidden">Upload</span>
          <input
            type="file"
            accept=".md,text/markdown"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                onUpload(e.target.files[0]);
              }
            }}
          />
        </label>

        <button onClick={onPaste} className="flex items-center gap-1.5 px-3 py-2 bg-orange-50 hover:bg-orange-100 dark:bg-gray-800/80 dark:hover:bg-gray-700 text-orange-700 dark:text-orange-300 rounded-lg transition-all active:scale-95 text-sm font-bold shadow-sm border border-orange-200/50 dark:border-gray-700">
          <ClipboardPaste size={16} strokeWidth={2.5} />
          <span>Paste</span>
        </button>

        <button onClick={onGithubImport} className="flex items-center gap-1.5 px-3 py-2 bg-orange-50 hover:bg-orange-100 dark:bg-gray-800/80 dark:hover:bg-gray-700 text-orange-700 dark:text-orange-300 rounded-lg transition-all active:scale-95 text-sm font-bold shadow-sm border border-orange-200/50 dark:border-gray-700">
          <Github size={16} strokeWidth={2.5} />
          <span className="hidden sm:inline">Import</span>
          <span className="sm:hidden">GitHub</span>
        </button>
      </div>

      {/* Right: Export / Settings */}
      <div className="flex items-center gap-2">
        <button
          onClick={onSettings}
          className="flex items-center gap-1.5 px-3 py-2 text-gray-500 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400 transition-all active:scale-95 hover:bg-orange-50 dark:hover:bg-gray-800/50 rounded-lg font-bold text-sm border border-transparent hover:border-orange-100 dark:hover:border-gray-700"
        >
          <Settings size={16} strokeWidth={2.5} />
          <span className="hidden sm:inline">Settings</span>
        </button>

        <button className="flex items-center gap-1.5 px-3 py-2 text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/40 rounded-lg transition-all active:scale-95 text-sm font-bold shadow-sm border border-red-100 dark:border-red-900/30">
          <Wand2 size={16} strokeWidth={2.5} />
          <span className="hidden sm:inline">Templates</span>
          <span className="sm:hidden">TPL</span>
        </button>

        <button onClick={onExport} className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-lg transition-all active:scale-95 shadow-md hover:shadow-orange-500/20 font-bold text-sm hover:-translate-y-0.5 transform">
          <Download size={16} strokeWidth={2.5} />
          <span className="hidden sm:inline">Export DOCX</span>
          <span className="sm:hidden">Export</span>
        </button>
      </div>
    </div>
  );
}
