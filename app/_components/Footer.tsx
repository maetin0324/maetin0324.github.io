'use client';

const Footer = () => {
  return (
    <footer className="mt-auto backdrop-blur-lg bg-white/50 dark:bg-slate-900/50 border-t border-slate-200/50 dark:border-slate-700/50">
      <div className="max-w-4xl w-full mx-auto px-6 py-8 md:py-12">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="font-mono text-slate-700 dark:text-slate-300 text-sm md:text-base">
            © 2024 maetin. All rights reserved.
          </div>
          <div className="flex items-center space-x-2 text-xs md:text-sm text-slate-500 dark:text-slate-500">
            <span>Built with</span>
            <span className="font-semibold text-primary-600 dark:text-primary-400">Next.js</span>
            <span>•</span>
            <span className="font-semibold text-accent-600 dark:text-accent-400">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
