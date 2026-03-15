import Editor from '@monaco-editor/react';

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string | undefined) => void;
  isDarkMode?: boolean;
  fontSize?: number;
  wordWrap?: boolean;
  lineNumbers?: boolean;
}

export default function MarkdownEditor({
  value,
  onChange,
  isDarkMode = true,
  fontSize = 14,
  wordWrap = true,
  lineNumbers = true,
}: MarkdownEditorProps) {
  return (
    <div className="w-full h-full transition-colors duration-300">
      <Editor
        height="100%"
        defaultLanguage="markdown"
        theme={isDarkMode ? 'vs-dark' : 'light'}
        value={value}
        onChange={onChange}
        options={{
          minimap: { enabled: false },
          wordWrap: wordWrap ? 'on' : 'off',
          lineNumbers: lineNumbers ? 'on' : 'off',
          padding: { top: 16 },
          fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
          fontSize,
          scrollBeyondLastLine: false,
          smoothScrolling: true,
          cursorBlinking: 'smooth',
          cursorSmoothCaretAnimation: 'on',
        }}
      />
    </div>
  );
}
