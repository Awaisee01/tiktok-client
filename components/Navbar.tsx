'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    if (pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        const yOffset = -64;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const hash = window.location.hash.substring(1);
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, [pathname]);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xl font-bold text-pink-600 hover:text-pink-700 transition-colors"
            >
              TikTokDownloader
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {/* Link-style buttons */}
            <button
              onClick={() => scrollToSection('download')}
              className="text-gray-700 hover:text-pink-600 transition-colors bg-transparent border-none p-0 cursor-pointer text-base font-medium"
            >
              Download
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-pink-600 transition-colors bg-transparent border-none p-0 cursor-pointer text-base font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-pink-600 transition-colors bg-transparent border-none p-0 cursor-pointer text-base font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('faqs')}
              className="text-gray-700 hover:text-pink-600 transition-colors bg-transparent border-none p-0 cursor-pointer text-base font-medium"
            >
              FAQs
            </button>
            
            {/* Primary button */}
            <button
              onClick={() => scrollToSection('get-started')}
              className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md transition-colors text-base font-medium"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}