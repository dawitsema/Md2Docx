import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Evim - MD2DOCX | Premium Converter',
  description: 'Convert markdown to docx easily with Evim. Live preview, hot styling, and seamless export.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-white dark:bg-gray-950`}>{children}</body>
    </html>
  );
}
