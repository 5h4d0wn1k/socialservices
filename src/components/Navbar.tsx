import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X, User } from 'lucide-react';
import { AuthModal } from './AuthModal';
import { useAuthStore } from '../store/authStore';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuthStore();

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
      <nav className={`fixed w-full z-50 transition-all duration-200 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center group">
                <Heart className={`h-8 w-8 text-primary-500 transform group-hover:scale-110 transition-transform duration-200`} />
                <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'} group-hover:text-primary-500 transition-colors duration-200`}>
                  Shadownik
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {[
                { path: '/', label: 'Home' },
                { path: '/projects', label: 'Projects' },
                { path: '/register', label: 'Volunteer' },
                { path: '/contact', label: 'Contact' }
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-primary-500 bg-primary-50'
                      : `${isScrolled ? 'text-gray-700' : 'text-primary-500'} hover:text-primary-500`
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {user ? (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/dashboard"
                    className="flex items-center px-4 py-2 rounded-lg font-medium text-primary-500 hover:bg-primary-50"
                  >
                    <User className="h-5 w-5 mr-2" />
                    Dashboard
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-primary-500"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="px-4 py-2 rounded-lg font-medium bg-primary-500 text-white hover:bg-primary-600"
                >
                  Sign In
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl border-t border-gray-100">
              <div className="px-4 py-2 space-y-1">
                {[
                  { path: '/', label: 'Home' },
                  { path: '/projects', label: 'Projects' },
                  { path: '/register', label: 'Volunteer' },
                  { path: '/contact', label: 'Contact' }
                ].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isActive(item.path)
                        ? 'text-primary-500 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-500 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {user ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 rounded-lg font-medium text-primary-500 hover:bg-primary-50"
                      onClick={() => setIsOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        signOut();
                        setIsOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      setShowAuthModal(true);
                      setIsOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 rounded-lg font-medium bg-primary-500 text-white hover:bg-primary-600"
                  >
                    Sign In
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
};

export default Navbar;