import React from 'react';
import Navbar from './Navbar';
import { Logo } from './Logo';
import { AnimatedButton } from '@/components/AnimatedButton';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="relative z-50">
          <Logo width={110} />
        </Link>
        <Navbar />
        <div className="relative z-50">
          <AnimatedButton variant="ghost" size="small">
            Book a Demo
          </AnimatedButton>
        </div>
      </div>
    </header>
  );
};

export default Header; 