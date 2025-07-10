import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-200 ${
        isScrolled 
          ? 'backdrop-blur-md bg-white/70 shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center space-x-2">
              <Link to="/" className="flex items-center group">
                <Heart className="h-8 w-8 text-green-600 transform group-hover:scale-110 transition-transform duration-200" />
                <span className="ml-2 text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-200">
                  Shadownik
                </span>
              </Link>
              <span className="ml-3 text-xs text-green-700 font-semibold hidden sm:block border-l border-green-200 pl-3 italic">India’s Movement for Harmony & Nature</span>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {[
                { path: '/', label: 'Home' },
                { path: '/projects', label: 'Projects' },
                { path: '/team', label: 'Team' },
                { path: '/register', label: 'Volunteer' },
                { path: '/contact', label: 'Contact' }
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-green-700 bg-green-100'
                      : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://ngo.swnk.in"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-green-100 transition-colors"
                aria-label="Visit our website"
              >
                <Globe className="h-6 w-6 text-green-700" />
              </a>
              <a
                href="https://linktr.ee/shadownik"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-green-100 transition-colors"
                aria-label="Linktree"
              >
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linktree.svg" alt="Linktree" className="h-6 w-6" />
              </a>
              <Link
                to="/register"
                className="ml-4 px-6 py-2 rounded-full font-bold bg-green-600 text-white hover:bg-green-700 shadow-lg transition-all text-base focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                Join Us
              </Link>
              {/* Language Switcher (UI only) */}
              <div className="inline-flex items-center bg-green-50 rounded-full px-2 py-1 ml-2">
                <span className="mr-1 text-xs">🌐</span>
                <button className="px-2 py-1 rounded hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-400 text-xs">EN</button>
                <button className="px-2 py-1 rounded hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-400 text-xs">HI</button>
              </div>
              {/* Accessibility Shortcut */}
              <a href="#main-content" className="ml-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-400">Skip to Content</a>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-green-700 hover:bg-green-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 shadow-lg rounded-b-2xl border-t border-gray-100 animate-fade-in">
              <div className="px-4 py-2 space-y-1">
                {[
                  { path: '/', label: 'Home' },
                  { path: '/projects', label: 'Projects' },
                  { path: '/team', label: 'Team' },
                  { path: '/register', label: 'Volunteer' },
                  { path: '/contact', label: 'Contact' }
                ].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isActive(item.path)
                        ? 'text-green-700 bg-green-100'
                        : 'text-gray-700 hover:text-green-700 hover:bg-green-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="https://ngo.swnk.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 rounded-lg font-medium text-green-700 hover:bg-green-50"
                  onClick={() => setIsOpen(false)}
                >
                  Our Website
                </a>
                <a
                  href="https://linktr.ee/shadownik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 rounded-lg font-medium text-green-700 hover:bg-green-50"
                  onClick={() => setIsOpen(false)}
                >
                  Linktree
                </a>
                <Link
                  to="/register"
                  className="block w-full text-center mt-2 px-6 py-2 rounded-full font-bold bg-green-600 text-white hover:bg-green-700 shadow-lg transition-all text-base"
                  onClick={() => setIsOpen(false)}
                >
                  Join Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;