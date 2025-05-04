import {React, useEffect, useState} from 'react';
import worldImage from '../assets/WorldImage.png'; 
import bgImage from '../assets/background.png';
import Menu from '../components/Menu';
import { motion } from 'framer-motion';
import MenuM from '../components/MobileMenu';

const MainPage = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const [mousePosition, setMousePosition] = useState({ 
    x: 0, 
    y: 0,
    normalizedX: 0,
    normalizedY: 0
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      // Calculate normalized values (-1 to 1) for more natural animation
      const normalizedX = (x - window.innerWidth / 2) / (window.innerWidth / 2);
      const normalizedY = (y - window.innerHeight / 2) / (window.innerHeight / 2);
      
      setMousePosition({ 
        x, 
        y,
        normalizedX,
        normalizedY
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
    <div 
      className="h-screen sm:block hidden"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="w-2/3 h-full mx-auto py-4 z-50 flex flex-col justify-between">
        <Menu />
        <div className="mt-[10%]">
          <h1 className="text-[140px] orbitron-400 text-center">COUNTRIES</h1>    
        </div>
        <div className="flex justify-center mb-[-5%] perspective-1000"> {/* Add perspective for 3D effect */}
          <motion.img
            src={worldImage} 
            alt="World Map" 
            className="w-[150%] h-auto rounded-lg filter grayscale"
            animate={{
              x: mousePosition.normalizedX * 40, // Horizontal movement
              y: mousePosition.normalizedY * 40, // Vertical movement
              rotateX: -mousePosition.normalizedY * 10, // Tilt on X-axis
              rotateY: mousePosition.normalizedX * 10, // Tilt on Y-axis
              scale: 1.05, // Slight zoom effect
            }}
            transition={{ 
              type: 'spring', 
              stiffness: 150, 
              damping: 15,
              mass: 0.5
            }}
            style={{
              transformStyle: 'preserve-3d', // Enable 3D transformations
              transformOrigin: 'center center', // Rotation from center
              willChange: 'transform' // Optimize for animation performance
            }}
          />
        </div>
      </div>
    </div>

    <div
      className="h-screen w-[100vw] bg-cover bg-center sm:hidden block pt-[10%]"
      style={{ backgroundImage: `url(${bgImage})`,backgroundSize: 'scale', backgroundPosition: 'center'  }}
    >
      {/* Mobile Menu */}
      <MenuM />

      {/* Content Section */}
      <div className="h-full flex flex-col  text-black px-4 sm:px-0">
        <h1 className="text-3xl sm:text-6xl font-bold orbitron-400 mb-6">COUNTRIES</h1>
        <p className="text-md  mb-8">
          Discover the world’s Countries
        </p>
        <button
          onClick={() => window.location.href = '/home'}
          className="bg-gray-600 hover:bg-gray-700  text-white py-2 text-b w-32 rounded-full text-md focus:outline-none  transition duration-300"
        >
          Explore Now
        </button>
      </div>
    </div>


    </div>
  );
};

export default MainPage;