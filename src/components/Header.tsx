import React from 'react';
import Navbar from './Navbar';
import { Logo } from './Logo';
import { Button } from './Button';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <Logo width={110} />
        </Link>
        <div className="bg-white/10 border border-white rounded-full">
          <Navbar />
        </div>     
        <div>
          <Button variant="ghost" size="small">
            Book a Demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header; 