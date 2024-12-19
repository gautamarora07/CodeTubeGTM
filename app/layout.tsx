import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CodeTube',
  description: 'A YouTube clone built with Next.js and Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>

      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex ">
            <aside className="w-64  hidden md:block">
              <Sidebar className="fixed top-0 bottom-0 left-0 w-64 border-r" />
            </aside>
            <main className="flex flex-1 justify-center items-center p-1 md:p-4 ">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}