'use client';

import { useState, useEffect } from &apos;react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from &apos;react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Itinerary', path: '/itinerary' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Transportation', path: '/transportation' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener(&apos;scroll', handleScroll);
    return () => window.removeEventListener(&apos;scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className=&quot;container-custom flex items-center justify-between&quot;>
        <Link href=&quot;/&quot; className=&quot;text-lg font-bold text-blue-700&quot;>
          Lancaster Trip 2025
        </Link>

        {/* Desktop Navigation */}
        <nav className=&quot;hidden md:flex items-center space-x-6&quot;>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                pathname === link.path ? &apos;text-blue-600' : &apos;text-gray-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className=&quot;md:hidden text-gray-700 focus:outline-none&quot;
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label=&quot;Toggle menu&quot;
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className=&quot;md:hidden bg-white&quot;>
          <div className=&quot;container-custom py-4 flex flex-col space-y-4&quot;>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-base font-medium transition-colors hover:text-blue-600 ${
                  pathname === link.path ? &apos;text-blue-600' : &apos;text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
