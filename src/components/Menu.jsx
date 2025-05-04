import React from 'react';
import logoImage from '../assets/logo.png';

const Menu = () => {
  return (
    <div className="fixed w-[50%] top-16 left-1/2 border border-gray-300 transform -translate-x-1/2 -translate-y-1/2 bg-white/30 w-1/2 rounded-[50px] backdrop-blur-md bg-opacity-35 py-4 z-50">
      <div className="flex justify-center items-center px-8">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img 
            src={logoImage} 
            alt="Logo" 
            className="w-12 sm:block hidden h-12 rounded-full"
          />
        </div>

        {/* Navigation */}
        <div className="flex space-x-6 ml-8 sm:block hidden">
          <a href="/home" className="text-lg orbitron-400 font-semibold text-gray-700 hover:text-black transition-colors">Home</a>
          <a href="/main" className="text-lg orbitron-400 font-semibold text-gray-700 hover:text-black transition-colors">Main</a>
          <a href="#contact" className="text-lg orbitron-400 font-semibold text-gray-700 hover:text-black transition-colors">Contact Us</a>
        </div>
        <div className="flex space-x-6 ml-8 sm:hidden block">
         <a href="#home" className="text-lg orbitron-400 font-semibold text-gray-700 hover:text-black transition-colors">Home</a>
          </div>
      </div>
    </div>
  );
};

export default Menu;
