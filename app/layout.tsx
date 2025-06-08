// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'sonner';
// import { Navbar } from '@/components/navbar'; // We will render Navbar in page.tsx

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'shadowpad - your simple notepad',
  description: 'A simple dark-mode notepad application with minimal design.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Children will be your page.tsx content */}
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}