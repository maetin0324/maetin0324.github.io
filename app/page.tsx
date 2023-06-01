import { BsTwitter } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { FaFolder } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src="/maetin.jpg" alt="maetin" className="w-28 h-28 rounded-full" />
      <h3 className="text-4xl font-bold mt-8">まえちん</h3>
      <p className="text-gray-500 mt-2">全方位ワナビ</p>
      <ul className="flex mt-4">
        <li className="mr-4">
          <Link
            href="https://twitter.com/maetin_coins"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            <h5 className="text-5xl p-10">
              <BsTwitter />
            </h5>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/maetin0324" target="_blank" className="hover:underline">
            <h5 className="text-5xl p-10">
              <AiFillGithub />
            </h5>
          </Link>
        </li>
      </ul>
    </div>
  );
}
