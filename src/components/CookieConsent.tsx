import React, { useState } from 'react';

const CookieConsent = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-white shadow-lg rounded-xl px-6 py-4 flex flex-col md:flex-row items-center gap-4 border border-green-200 animate-fade-in">
      <span className="text-gray-700 text-sm">
        This website uses cookies to enhance your experience. By continuing to browse, you agree to our use of cookies. <a href="/privacy" className="underline text-green-700 hover:text-green-900">Learn more</a>.
      </span>
      <button
        onClick={() => setVisible(false)}
        className="ml-2 px-5 py-2 bg-green-600 text-white rounded-full font-semibold shadow hover:bg-green-700 transition-all focus:outline-none focus:ring-2 focus:ring-green-400"
        aria-label="Accept cookies"
      >
        Accept
      </button>
    </div>
  );
};

export default CookieConsent; 