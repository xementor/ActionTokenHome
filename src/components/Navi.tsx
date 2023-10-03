/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

export const Navibar = () => {
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null); 

  const toggleSound = () => {
    setIsSoundOn((prevState) => !prevState);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) {
      if (isSoundOn) {
        audioElement.play().catch((error) => {
          console.error('Failed to play audio:', error);
        });
      } else {
        audioElement.pause();
      }
    }
  }, [isSoundOn]);

  return (
    <div className='w-full items-center flex justify-center overflow-hidden'>
      <nav className="bg-gradient-to-r from-lime-900 via-lime-800 to-lime-900 rounded-2xl p-4 m-4 mt-10 justify-between flex w-4/5">
        <div className="flex items-center md:px-2 lg:px-4 justify-between flex-1 md:mx-2 lg:mx-10">
          <div className="text-white font-bold text-xl">
            <div className='flex flex-row items-center justify-center'>
              <Image src="/logo.png" alt="Action Tokens Logo" width={50} height={50} />
              <span className="ml-2">Action Tokens</span>
            </div>
          </div>
          <div className="hidden md:flex flex-row md:gap-5 lg:gap-10 font-bold items-center w-max">
            <a href="#" className="text-gray-300 hover:text-white hover:scale-110 hidden lg:flex">Home</a>
            <a href="https://collections.action-tokens.com/" className="text-gray-300 hover:text-white hover:scale-110" onClick={closeMobileMenu}>
              Collection
            </a>
            <a href="#" className="text-gray-300 hover:text-white hover:scale-110" onClick={closeMobileMenu}>
              Gallery
            </a>
            <a href="#" className="text-gray-300 hover:text-white hover:scale-110" onClick={closeMobileMenu}>
              Map
            </a>
            <div className='flex w-10 items-center justify-center'>
              {isSoundOn ? (
                <Image
                  src="/soundon.png"
                  alt="Turn music on"
                  id="soundon"
                  width={40}
                  height={40}
                  className='hover:scale-110 cursor-pointer'
                  onClick={toggleSound}
                />
              ) : (
                <Image
                  src="/soundoff.png"
                  alt="Turn music off"
                  id="soundoff"
                  width={50}
                  height={50}
                  className='hover:scale-110 cursor-pointer'
                  onClick={toggleSound}
                />
              )}
            </div>
          </div>
          <div className='flex flex-row items-center justify-center md:hidden'>
            <div className="cursor-pointer" onClick={toggleMobileMenu}>
              <Image
                src="/hamburger.png"
                alt="Open mobile menu"
                width={40}
                height={40}
                className='hover:scale-110'
              />
            </div>
          </div>
        </div>
      </nav>
      
      {isMobileMenuOpen && (
        <div className="md:hidden shadow-xl bg-slate-100/80 justify-center absolute flex -top-2 rounded backdrop-blur w-full h-full m-2">
          <div className='border-2 border-cyan-950  '>
          <div className='h-10'></div>
          <a href="#" className="flex text-gray-800 hover:text-black py-2" onClick={closeMobileMenu}>
            Home
          </a>
          <a href="https://collections.action-tokens.com/" className="flex text-gray-800 hover:text-black py-2" onClick={closeMobileMenu}>
            Collection
          </a>
          <a href="#" className="flex text-gray-800 hover:text-black py-2" onClick={closeMobileMenu}>
            Gallery
          </a>
          <a href="#" className="flex text-gray-800 hover:text-black py-2" onClick={closeMobileMenu}>
            Map
          </a>
          </div>
          <div className="flex justify-end">
            <div className="cursor-pointer" onClick={closeMobileMenu}>
              <Image
                src="/close.png"
                alt="Close mobile menu"
                width={24}
                height={24}
                className='hover:scale-110'
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
