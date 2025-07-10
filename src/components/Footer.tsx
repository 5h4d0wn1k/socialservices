import React from 'react';
import { Heart, Mail, Phone, Globe, ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-red-500" />
              <span className="ml-2 text-xl font-bold">Shadownik</span>
            </div>
            <p className="mt-4">Empowering India and the world through volunteer service, harmony, and community action.</p>
            <div className="mt-4 flex space-x-3">
              <a href="https://instagram.com/shadownik" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" className="h-6 w-6" />
              </a>
              <a href="https://facebook.com/shadownik" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/shadownik" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg" alt="Twitter" className="h-6 w-6" />
              </a>
              <a href="https://wa.me/9165644843" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg" alt="WhatsApp" className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@swnk.in</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 9165644843</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/projects" className="hover:text-red-500">Our Projects</a></li>
              <li><a href="/register" className="hover:text-red-500">Become a Volunteer</a></li>
              <li><a href="/contact" className="hover:text-red-500">Get in Touch</a></li>
              <li><a href="https://ngo.swnk.in" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 flex items-center"><Globe className="h-4 w-4 mr-1" /> ngo.swnk.in</a></li>
              <li><a href="https://linktr.ee/shadownik" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 flex items-center"><Globe className="h-4 w-4 mr-1" /> linktr.ee/shadownik</a></li>
            </ul>
            <div className="mt-6 flex items-center space-x-2">
              <img src="https://cdn-icons-png.flaticon.com/512/330/330439.png" alt="India" className="h-5 w-5" />
              <span className="text-xs text-gray-300">Proudly made in India</span>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4 mb-2">
            {/* Language Switcher (UI only) */}
            <div className="inline-flex items-center bg-gray-700 rounded-full px-3 py-1 text-xs font-semibold">
              <span className="mr-2">🌐 Language:</span>
              <button className="px-2 py-1 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400">EN</button>
              <button className="px-2 py-1 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400">HI</button>
            </div>
            {/* Accessibility Shortcuts */}
            <a href="#main-content" className="px-3 py-1 rounded-full bg-green-700 text-white text-xs font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400">Skip to Content</a>
          </div>
          {/* Back to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-full font-semibold shadow hover:bg-green-700 transition-all focus:outline-none focus:ring-2 focus:ring-green-400"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5 mr-2" /> Back to Top
          </button>
          <p className="mt-4">&copy; {new Date().getFullYear()} Shadownik. Made with love for India and the world. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;