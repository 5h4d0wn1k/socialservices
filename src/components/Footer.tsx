import React from 'react';
import { Heart, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-to-b from-green-900 to-emerald-900 text-white relative">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-400"></div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 group">
              <Heart className="h-6 w-6 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
              <span className="font-bold text-xl group-hover:text-emerald-300 transition-colors duration-300">
                Shadownik
              </span>
            </div>
            <p className="text-emerald-200">
              Making a difference through compassion, dedication, and community service.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-emerald-300">Quick Links</h3>
            <div className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/projects', label: 'Projects' },
                { to: '/about', label: 'About Us' },
                { to: '/volunteer', label: 'Volunteer' }
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="block text-emerald-200 hover:text-white transition-colors duration-300"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-emerald-300">Contact Us</h3>
            <div className="space-y-3 text-emerald-200">
              <a
                href="mailto:contact@shadownik.org"
                className="flex items-center space-x-2 hover:text-white transition-colors duration-300"
              >
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>info@shadownik.online</span>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-emerald-300">Stay Updated</h3>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-green-800 text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 border border-emerald-700"
                  aria-label="Email for newsletter"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-green-900"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-green-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-emerald-300 text-sm">
            <p>© {currentYear} Shadownik. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/legal/PrivacyPolicy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="/legal/Terms" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;