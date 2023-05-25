import { BsTwitter } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import Link from 'next/link';
import '../app/ico.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <img src="/maetin.jpg" alt="maetin" className="w-28 h-28 rounded-full" />
        <h3 className="text-4xl font-bold mt-8">まえちん</h3>
        <ul className="flex mt-4">
          <li className="mr-4">
            <Link
              href="https://twitter.com/maetin_coins"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              @maetin_coins
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/maetin0324"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              maetin0324
            </Link>
          </li>
        </ul>
        {/* <div className="flex items-center justify-center mt-4">
          <IconContext.Provider value={{ color: '#1e90ff', size: '40px' }}>
            <Link rel="twitter" href="https://twitter.com/maetin_coins" target="_blank">
              <BsTwitter className="ico BsTwitter"/>
            </Link>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: '#000000', size: '40px' }}>
            <Link rel="github" href="https://github.com/maetin0324" target="_blank">
              <AiFillGithub className="ico AiFillGithub"/>
            </Link>
          </IconContext.Provider>
        </div> */}
      </div>
    </main>
  );
}
