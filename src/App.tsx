import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuthStore } from './store/authStore';
import { useEffect, useState } from 'react';
import ResetPassword from './pages/ResetPassword';
import AuthCallback from './pages/AuthCallback';
import { AuthService } from './lib/auth-service';
import Team from './pages/Team';
import NotFound from './pages/NotFound';
import CookieConsent from './components/CookieConsent';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const { isLoading } = useAuthStore();
  const [appReady, setAppReady] = useState(false);

  // Wait for the auth state to be initialized
  useEffect(() => {
    if (!isLoading) {
      setAppReady(true);
    }
  }, [isLoading]);

  // Run security audit when app initializes
  useEffect(() => {
    AuthService.performSecurityAudit();
  }, []);

  if (!appReady) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow" id="main-content">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <motion.div
                  key="home"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.5 }}
                >
                  <Home />
                </motion.div>
              } />
              <Route path="/projects" element={
                <motion.div
                  key="projects"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.5 }}
                >
                  <Projects />
                </motion.div>
              } />
              <Route path="/register" element={
                <motion.div
                  key="register"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.5 }}
                >
                  <Register />
                </motion.div>
              } />
              <Route path="/contact" element={
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.5 }}
                >
                  <Contact />
                </motion.div>
              } />
              <Route path="/team" element={
                <motion.div
                  key="team"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.5 }}
                >
                  <Team />
                </motion.div>
              } />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/auth/callback" element={<AuthCallback />} />
              {/* Protected Routes */}
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
              <Route path="*" element={
                <motion.div
                  key="notfound"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.5 }}
                >
                  <NotFound />
                </motion.div>
              } />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <CookieConsent />
        <Toaster 
          position="top-right" 
          toastOptions={{
            duration: 5000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              style: {
                background: '#22c55e',
              },
            },
            error: {
              style: {
                background: '#ef4444',
              },
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;