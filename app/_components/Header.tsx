import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 border-b z-10 bg-opacity-80 " style={{ background: '#c7d6f0' }}>
      <div className="max-w-4xl mx-auto flex justify-between items-center h-12">
        <Link href="/" className="font-mono white">
          maetin.dev
        </Link>
      </div>
    </header>
  );
};

export default Header;
