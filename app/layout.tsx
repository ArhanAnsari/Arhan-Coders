import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arhan Coders | Web & App Solutions',
  description: 'Providing modern web & app services tailored to client needs. From full-stack development to UI/UX design, AI integration, and more.',
  keywords: ['Web development', 'App development', 'UI UX', 'Next.js', 'React', 'Arhan Coders'],
  authors: [{ name: 'Arhan Ansari', url: 'https://arhanansari.vercel.app' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="pt-20 min-h-[calc(100vh-160px)]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}