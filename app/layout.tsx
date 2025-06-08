import type { Metadata } from 'next';
import { Poppins } from 'next/font/google'; // Import Poppins
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider'; // We'll create this soon

// Configure Poppins font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Specify weights you need
  variable: '--font-poppins', // Define a CSS variable for the font
});

export const metadata: Metadata = {
  title: 'Notion Clone',
  description: 'A document application like Notion built with Next.js, Shadcn UI, and Tailwind CSS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans`}> {/* Apply font variable and fallback */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}