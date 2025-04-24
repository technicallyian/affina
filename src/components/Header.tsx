import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Placeholder */}
        <div>
          LOGO
        </div>

        {/* Centered Navbar - Simplified Wrapper */}
        <div>
          <Navbar />
        </div>
        
        {/* Button Placeholder - Simplified */}
        <div>
          <button>
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 