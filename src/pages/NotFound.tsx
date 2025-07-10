import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 px-4">
    <img
      src="https://illustrations.popsy.co/gray/404-error.svg"
      alt="404 Not Found"
      className="w-72 h-72 mb-8 animate-fade-in"
      loading="lazy"
    />
    <h1 className="text-5xl font-bold text-green-800 mb-4">Page Not Found</h1>
    <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
      Oops! The page you’re looking for doesn’t exist or has been moved.<br />
      Let’s get you back to something inspiring!
    </p>
    <div className="flex flex-wrap gap-4 justify-center">
      <Link to="/" className="btn-primary px-8 py-3 rounded-full font-bold">Go Home</Link>
      <Link to="/projects" className="btn-secondary px-8 py-3 rounded-full font-bold">Explore Projects</Link>
      <Link to="/register" className="btn-secondary px-8 py-3 rounded-full font-bold">Become a Volunteer</Link>
    </div>
  </div>
);

export default NotFound; 