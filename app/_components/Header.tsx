import Link from 'next/link';

const Header = () => {
  return (
    <header className="justify-start text-center font-zenkaku ">
      <div className="px-10 py-3 flex flex-row w-full items-center text-main fixed backdrop-blur-md h-16 select-none">
        <Link href="/" className="font-mono text-slate-800">
          maetin.dev
        </Link>
        <div className="ml-auto space-x-6 text-lg">
          <Link href="/about" className="font-mono text-slate-800">
            about
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
