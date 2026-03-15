export type FontSize = 'small' | 'medium' | 'large';
export type CodeTheme = 'github' | 'dark' | 'monokai';

export interface Settings {
  fontSize: FontSize;
  codeTheme: CodeTheme;
  wordWrap: boolean;
  lineNumbers: boolean;
  exportFilename: string;
}
