import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Heart } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEO from './components/SEO';
import { DEFAULT_SEO } from './constants/seo';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const Projects = React.lazy(() => import('./pages/Projects'));
const About = React.lazy(() => import('./pages/About'));
const Volunteer = React.lazy(() => import('./pages/Volunteer'));
const Contact = React.lazy(() => import('./pages/Contact'));
const PrivacyPolicy = React.lazy(() => import('./pages/Legal/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./pages/Legal/TermsOfService'));
const CookiePolicy = React.lazy(() => import('./pages/Legal/CookiePolicy'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-emerald-50">
    <div className="animate-float text-center">
      <Heart className="h-12 w-12 text-emerald-500 animate-pulse mx-auto" />
      <p className="mt-4 text-emerald-600 font-medium">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <SEO {...DEFAULT_SEO} />
          <Navbar />
          <main className="flex-grow pt-16">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/volunteer" element={<Volunteer />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;