import { X, Type, Code2, AlignLeft, Hash, FileText } from 'lucide-react';
import type { Settings, FontSize, CodeTheme } from '@/app/page';

interface Props {
  settings: Settings;
  onChange: (s: Settings) => void;
  onClose: () => void;
  isDarkMode: boolean;
}

const label = "text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1.5 block";
const selectCls = "w-full mt-1 rounded-lg border border-orange-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-500 transition-colors";

export default function SettingsModal({ settings, onChange, onClose, isDarkMode }: Props) {
  const set = <K extends keyof Settings>(key: K, val: Settings[K]) =>
    onChange({ ...settings, [key]: val });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div className={`relative w-full max-w-md rounded-2xl shadow-2xl border transition-colors duration-300 ${isDarkMode ? 'bg-[#0d1117] border-gray-800 text-gray-100' : 'bg-white border-orange-100 text-gray-900'}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-orange-100 dark:border-gray-800">
          <h2 className="text-lg font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">Settings</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-orange-100 dark:hover:bg-gray-800 transition-colors active:scale-90 text-gray-500 dark:text-gray-400 hover:text-orange-600">
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-5">

          {/* Font Size */}
          <div>
            <label className={label}><Type size={14} className="inline mr-1.5 text-orange-500" />Editor Font Size</label>
            <select
              value={settings.fontSize}
              onChange={e => set('fontSize', e.target.value as FontSize)}
              className={selectCls}
            >
              <option value="small">Small (12px)</option>
              <option value="medium">Medium (14px)</option>
              <option value="large">Large (17px)</option>
            </select>
          </div>

          {/* Code Block Theme */}
          <div>
            <label className={label}><Code2 size={14} className="inline mr-1.5 text-red-500" />Code Block Style</label>
            <select
              value={settings.codeTheme}
              onChange={e => set('codeTheme', e.target.value as CodeTheme)}
              className={selectCls}
            >
              <option value="github">GitHub Light</option>
              <option value="dark">Dark</option>
              <option value="monokai">Monokai</option>
            </select>
          </div>

          {/* Export Filename */}
          <div>
            <label className={label}><FileText size={14} className="inline mr-1.5 text-yellow-500" />Export Filename</label>
            <input
              type="text"
              value={settings.exportFilename}
              onChange={e => set('exportFilename', e.target.value)}
              placeholder="Evim_Document"
              className={`${selectCls} mt-1`}
            />
            <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">.docx will be appended automatically</p>
          </div>

          {/* Toggles */}
          <div className="grid grid-cols-2 gap-4">
            <Toggle
              icon={<AlignLeft size={14} className="text-orange-500" />}
              label="Word Wrap"
              value={settings.wordWrap}
              onChange={v => set('wordWrap', v)}
              isDarkMode={isDarkMode}
            />
            <Toggle
              icon={<Hash size={14} className="text-red-500" />}
              label="Line Numbers"
              value={settings.lineNumbers}
              onChange={v => set('lineNumbers', v)}
              isDarkMode={isDarkMode}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-orange-100 dark:border-gray-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-lg font-bold text-sm transition-all active:scale-95 shadow hover:shadow-md hover:shadow-orange-500/20"
          >
            Apply &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
}

function Toggle({ icon, label, value, onChange, isDarkMode }: {
  icon: React.ReactNode;
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
  isDarkMode: boolean;
}) {
  return (
    <button
      onClick={() => onChange(!value)}
      className={`flex items-center justify-between gap-3 px-4 py-3 rounded-xl border text-sm font-semibold transition-all active:scale-95 ${
        value
          ? 'bg-orange-50 dark:bg-orange-900/20 border-orange-300 dark:border-orange-700 text-orange-700 dark:text-orange-300'
          : 'bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400'
      }`}
    >
      <span className="flex items-center gap-1.5">{icon} {label}</span>
      <span className={`w-9 h-5 rounded-full transition-colors flex items-center px-0.5 ${value ? 'bg-orange-500' : 'bg-gray-300 dark:bg-gray-600'}`}>
        <span className={`w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${value ? 'translate-x-4' : 'translate-x-0'}`} />
      </span>
    </button>
  );
}
