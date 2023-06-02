import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 border-b z-10 ">
      <div className="px-10 py-3 flex flex-row w-full items-center text-main fixed backdrop-blur-md h-16 select-none">
        <Link href="/" className="font-mono white">
          maetin.dev
        </Link>
      </div>
    </header>
  );
};

export default Header;
