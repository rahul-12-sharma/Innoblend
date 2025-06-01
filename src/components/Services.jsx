import { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/20 shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" aria-label="Homepage">
          <h1 className="text-xl font-bold text-white flex items-center gap-2 select-none">
            <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="30" stroke="#2dd4bf" strokeWidth="4" fill="none" />
              <path d="M20 32c0-6 5-11 11-11s11 5 11 11-5 11-11 11" stroke="#2dd4bf" strokeWidth="3" strokeLinecap="round" />
              <path d="M28 21c1 3 2 3 4 0" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" />
              <path d="M45 24c-2 4-2 8 0 12" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 32h6M10 38h8M14 26h6" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-teal-400">Innoblend</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium tracking-wide">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`relative px-1 py-1 hover:text-indigo-400 transition-colors ${
                  location.pathname === to
                    ? 'text-indigo-400 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-indigo-400 after:rounded-full'
                    : ''
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-3xl p-1 rounded-md hover:bg-white/10 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        aria-hidden={!isOpen}
        className={`md:hidden bg-black/90 backdrop-blur-sm overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-60 py-4' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 text-gray-300 font-medium tracking-wide">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={() => setIsOpen(false)}
                className={`block px-1 py-2 rounded hover:text-indigo-400 transition-colors ${
                  location.pathname === to ? 'text-indigo-400' : ''
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
