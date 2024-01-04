// Navbar.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavLinks from './nav-links';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-2 z-40"> {/* Add background, shadow, and padding */}
      <div className="container mx-auto px-4 flex justify-between items-center"> {/* Container for centering and spacing */}
        {/* Logo and Website Name */}
        <div className="flex items-center">
          <Link href="/">
              <Image src="/ritmos-logo.png" width={100} height={76} alt="Logo" />
              <span className="ml-2 text-xl font-bold">Ritmos</span> {/* Margin and styling for the text */}
            
          </Link>
        </div>

        <NavLinks />
      </div>
    </nav>
  );
};

