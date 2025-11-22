'use client';

import { useTheme } from './ThemeProvider';
import { BsSun, BsMoon } from 'react-icons/bs';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-200 hover:scale-110"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <BsMoon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
      ) : (
        <BsSun className="w-5 h-5 text-slate-700 dark:text-slate-300" />
      )}
    </button>
  );
}
