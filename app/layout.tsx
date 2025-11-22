import './globals.css';
import './_components/Header';
import './_components/Footer';
import { Inter } from 'next/font/google';
import Header from './_components/Header';
import Footer from './_components/Footer';
import { ThemeProvider } from './_components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'maetin',
  description: "maetin's dev pages",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow flex flex-col items-center justify-center pt-20 pb-8">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
