"use client";

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

/* Para solucionar la superposición del menú lateral con el logo: Quizás lo mejor sea meter el logo en otro nav/div o en otro componente. */

  return (
    <header className="bg-gray-800 text-white">
        {/* <div className="flex flex-col items-center justify-between p-6 bg-gray-800 text-white">
            <div className="flex items-center flex-shrink-0 mr-6">
                <span className="font-semibold text-xl tracking-tight">My App</span>
            </div>
        </div> */}
      <nav className="flex flex-wrap items-center justify-between p-6 ">
        {/* <div className="flex items-center flex-shrink-0 mr-6">
          <span className="font-semibold text-xl tracking-tight">My App</span>
        </div> */}
        <div className={`fixed top-0 left-0 h-screen w-50 bg-gray-800 z-50 overflow-y-auto ${showMenu ? 'block' : 'hidden'}`}>
          <div className="px-4 p-20">
            <Link className="block mt-4 text-gray-200 hover:text-white" href="/">
              Home
            </Link>
            <Link className="block mt-4 text-gray-200 hover:text-white" href="/about">
              About
            </Link>
            <Link className="block mt-4 text-gray-200 hover:text-white" href="/contact">
              Contact
            </Link>
          </div>
        </div>
        <div className="block relative z-50">
          <button
            className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
            onClick={toggleMenu}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
              ></path>
            </svg>
          </button>
        </div>
       
      </nav>
    </header>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Header />
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
};

export default Layout;