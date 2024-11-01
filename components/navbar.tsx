// components/Navbar.tsx
import { FC } from 'react';
import Link from 'next/link';
import { ModeToggle } from './darkmode';
import { CubeIcon} from "@radix-ui/react-icons"

const Navbar: FC = () => {
  return (
    <nav className="bg-white dark:bg-black shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center justify-center gap-2">
        <CubeIcon className='size-11 font-bold'/>
          MediaSoft
        </Link>
    
        <div className="flex gap-6">
          <Link href="/" className="text-gray-700 dark:text-white hover:font-bold hover:scale-110 transition-transform">
            Home
          </Link>
          <Link href="/blog" className="text-gray-700 dark:text-white hover:font-bold hover:scale-110 transition-transform">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-700 dark:text-white hover:font-bold hover:scale-110 transition-transform">
            Contact
          </Link>
        </div>
        
        <ModeToggle/>
      </div>
    </nav>
  );
};

export default Navbar;
