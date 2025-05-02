import React, { useState } from 'react';
import { Link } from 'react-router';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
    <header className="bg-amber-600 p-4 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
      <Link to={"/"} className="text-white text-3xl font-bold"><span className='italic font-extrabold'>AT</span> <span className='font-light'>All Task</span></Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to={"/"} className="text-white hover:text-gray-300">Home</Link></li>
          <li><Link to={"/about"} className="text-white hover:text-gray-300">Api render</Link></li>
          <li><Link to={"/Calculator"} className="text-white hover:text-gray-300">Calculator</Link></li>
          <li><Link to={"/contect"} className="text-white hover:text-gray-300">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col bg-blue-500 p-4 space-y-2 m-3">
          <li><Link to={"/"} className="text-white hover:text-gray-300">Home</Link></li>
          <li><Link to={"/about"} className="text-white hover:text-gray-300">API render</Link></li>
          <li><Link to={"/Calculator"} className="text-white hover:text-gray-300">Calculator</Link></li>
          <li><Link to={"/contect"} className="text-white hover:text-gray-300">Contact</Link></li>
        </ul>
      )}
    </header>
      {/* <div>
        <Home />
      </div> */}
    </div>
  );
};

export default Header;
