import React, { useState } from 'react';
import logoImage from '../assets/logo.png';  // Use your logo image

const MenuM = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Hamburger Icon (Mobile) */}
      <div className="sm:hidden flex justify-between items-center px-6 py-4">
        <img src={logoImage} alt="Logo" className="w-10 h-10 rounded-full" />
        <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} />
        </button>
      </div>

      {/* Sliding Menu (Mobile) */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:hidden h-full bg-gray-800 text-white transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}
      >
        <div className="flex justify-between items-center p-6">
          <img src={logoImage} alt="Logo" className="w-10 h-10 rounded-full" />
          <button onClick={toggleMenu} className="text-white text-2xl">
            <i className="fas fa-times" />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-6 mt-12">
          <a href="#home" className="text-lg text-white">Home</a>
          <a href="#about" className="text-lg text-white">About</a>
          <a href="#contact" className="text-lg text-white">Contact Us</a>
        </div>
      </div>
    </>
  );
};

export default MenuM;
