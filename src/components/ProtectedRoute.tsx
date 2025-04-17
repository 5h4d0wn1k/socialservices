import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Loader2, ShieldAlert } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
}

/**
 * ProtectedRoute component for guarding routes that require authentication.
 * If the user is not authenticated, they will be redirected to the specified route.
 * This component also validates the session and refreshes tokens as needed.
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  redirectTo = '/' 
}) => {
  const { user, isLoading, isSessionValid, validateSession, refreshSession } = useAuthStore();
  const [validating, setValidating] = useState(true);
  const [sessionExpired, setSessionExpired] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const verifyAuth = async () => {
      setValidating(true);
      
      try {
        // Verify that the session is valid
        const isValid = await validateSession();
        
        if (!isValid && user) {
          // Session exists but is invalid (expired token, etc.)
          console.warn('Session invalid, attempting to refresh');
          await refreshSession();
          
          // Check if session is now valid after refresh
          const isNowValid = await validateSession();
          
          if (!isNowValid) {
            setSessionExpired(true);
            toast.error('Your session has expired. Please sign in again.');
          }
        }
      } catch (error) {
        console.error('Authentication validation error:', error);
      } finally {
        setValidating(false);
      }
    };
    
    if (!isLoading) {
      verifyAuth();
    }
  }, [user, isLoading, validateSession, refreshSession, location.pathname]);

  // If auth is still loading, show a loading spinner
  if (isLoading || validating) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center">
          <Loader2 className="animate-spin h-12 w-12 text-primary-500 mb-4" />
          <p className="text-gray-600 text-lg">Verifying your credentials...</p>
        </div>
      </div>
    );
  }

  // If session expired, show a session expired message
  if (sessionExpired) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
            <ShieldAlert className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Session Expired</h2>
          <p className="text-gray-600 mb-6">
            Your session has expired for security reasons. Please sign in again to continue.
          </p>
          <Navigate to={redirectTo} state={{ from: location.pathname, sessionExpired: true }} replace />
        </div>
      </div>
    );
  }

  // If not authenticated, redirect to the specified route
  if (!user || !isSessionValid) {
    // Store the attempted URL for redirecting back after login
    return <Navigate to={redirectTo} state={{ from: location.pathname }} replace />;
  }

  // If authenticated, render the protected component
  return <>{children}</>;
};

export default ProtectedRoute; 