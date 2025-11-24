import { BsTwitter } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center animate-fade-in px-4">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        <img
          src="/maetin.jpg"
          alt="maetin"
          className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-slate-800 shadow-card animate-scale-in"
        />
      </div>

      <h1 className="text-5xl md:text-6xl font-bold mt-10 text-slate-800 dark:text-slate-100 animate-slide-up">
        maetin
      </h1>

      <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mt-4 animate-slide-up font-light">
        全方位ワナビ
      </p>

      <p className="text-base md:text-lg text-slate-500 dark:text-slate-500 mt-6 max-w-md text-center animate-slide-up leading-relaxed">
        筑波大学でシステムソフトウェア/ストレージシステムを研究中。
        <br />
        Rust / 非同期処理 / 低レイヤに興味があります。
      </p>

      <div className="flex gap-4 mt-8 animate-slide-up">
        <Link
          href="https://twitter.com/maetin_coins"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white dark:bg-slate-800 rounded-full shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-110"
          aria-label="Twitter"
        >
          <BsTwitter className="text-2xl md:text-3xl text-blue-500 group-hover:text-blue-600 transition-colors" />
        </Link>

        <Link
          href="https://github.com/maetin0324"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white dark:bg-slate-800 rounded-full shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-110"
          aria-label="GitHub"
        >
          <AiFillGithub className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
        </Link>
      </div>

      <Link
        href="/about"
        className="mt-12 px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium rounded-full shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 animate-slide-up"
      >
        More About Me
      </Link>
    </div>
  );
}
