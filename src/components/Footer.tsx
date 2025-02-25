import React from 'react';
import { Heart, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/shadownik', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/shadownik', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/shadownik', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/shadownik', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-to-b from-green-900 to-emerald-900 text-white relative">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-400"></div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-emerald-400" />
              <span className="text-2xl font-bold">Shadownik</span>
            </Link>
            <p className="text-gray-300 mb-4">
              A division of Shadownik Corporation dedicated to making a positive impact in communities through sustainable social initiatives and volunteer programs.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <Mail className="h-5 w-5" />
              <a href="mailto:info@shadownik.online" className="hover:text-emerald-400 transition-colors">
                info@shadownik.online
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="mt-8 pt-8 border-t border-green-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} Shadownik Corporation. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;