import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface LivePreviewProps {
  content: string;
  isDarkMode?: boolean;
}

export default function LivePreview({ content, isDarkMode }: LivePreviewProps) {
  return (
    <div className={`w-full h-full overflow-auto transition-colors duration-300 ${isDarkMode ? 'bg-[#0d1117]' : 'bg-orange-50/30'}`}>
      <div className={`max-w-3xl mx-auto my-6 mx-4 sm:mx-auto rounded-xl p-6 sm:p-10 shadow-sm transition-colors duration-300 ${isDarkMode ? 'bg-[#0d1117] border border-gray-800 text-gray-100' : 'bg-white border border-orange-100 text-gray-900'}`}>
        <div
          id="preview-content"
          className={`prose max-w-none transition-colors duration-300
            ${isDarkMode ? 'prose-invert' : 'prose-slate'}
            prose-headings:font-bold
            prose-a:text-orange-500 dark:prose-a:text-orange-400 prose-a:no-underline hover:prose-a:underline
            prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
            ${isDarkMode
              ? 'prose-code:bg-gray-800 prose-code:text-orange-300 prose-pre:bg-[#161b22] prose-pre:text-gray-100 prose-th:bg-gray-800/70 prose-th:border-gray-700 prose-td:border-gray-700'
              : 'prose-code:bg-orange-50 prose-code:text-orange-700 prose-pre:bg-gray-100 prose-pre:text-gray-800 prose-th:bg-orange-50 prose-th:border-orange-200 prose-td:border-orange-100'
            }
            prose-table:border-collapse
            prose-th:border prose-th:p-2.5 prose-th:text-left prose-th:font-semibold
            prose-td:border prose-td:p-2.5
            prose-img:rounded-lg prose-img:shadow-md
            prose-blockquote:border-l-4 prose-blockquote:border-orange-400 prose-blockquote:pl-4
            ${isDarkMode ? 'prose-blockquote:text-gray-400 prose-blockquote:bg-gray-900/40' : 'prose-blockquote:text-gray-600 prose-blockquote:bg-orange-50/50'}
          `}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {content || '*Start typing or upload a markdown file to see the preview...*'}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
