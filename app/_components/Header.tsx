'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 animate-slide-down">
      <div className="px-6 md:px-10 py-4 flex flex-row w-full items-center backdrop-blur-lg bg-white/70 dark:bg-slate-900/70 border-b border-white/20 dark:border-slate-700/50 shadow-soft select-none">
        <Link
          href="/"
          className="font-mono text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
        >
          maetin.dev
        </Link>
        <nav className="ml-auto flex items-center space-x-4 md:space-x-8">
          <Link
            href="/about"
            className="font-mono text-base md:text-lg text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 hover:scale-105"
          >
            about
          </Link>
          <Link
            href="https://zenn.dev/maetin"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-base md:text-lg text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 hover:scale-105"
          >
            blog
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
