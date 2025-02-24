import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-green-900/95 backdrop-blur-md shadow-lg' : 'bg-black shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
            aria-label="Home"
          >
            <Heart className="h-8 w-8 text-white group-hover:text-emerald-300 transition-colors duration-300" />
            <span className="font-bold text-xl text-white group-hover:text-emerald-300 transition-colors duration-300">
              Shadownik
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/projects', label: 'Projects' },
              { path: '/about', label: 'About Us' },
              { path: '/volunteer', label: 'Volunteer' },
              { path: '/contact', label: 'Contact' }
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`text-white transition-all duration-300 hover:text-emerald-300 relative ${
                  isActive(path) ? 'text-emerald-300' : ''
                }`}
              >
                {label}
                {isActive(path) && (
                  <span className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-emerald-300 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-emerald-300 transition-colors duration-300"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'max-h-96 opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="py-4 space-y-2">
            {[
              { path: '/', label: 'Home' },
              { path: '/projects', label: 'Projects' },
              { path: '/about', label: 'About Us' },
              { path: '/volunteer', label: 'Volunteer' },
              { path: '/contact', label: 'Contact' }
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block px-4 py-2 text-white hover:bg-green-800 rounded-lg transition-all duration-300 ${
                  isActive(path) ? 'bg-green-800 text-emerald-300' : ''
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;