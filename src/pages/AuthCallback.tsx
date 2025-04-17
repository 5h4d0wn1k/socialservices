import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthService } from '../lib/auth-service';
import { Loader2 } from 'lucide-react';
import { toast } from 'react-hot-toast';

/**
 * AuthCallback page that handles OAuth redirects and email verification
 * This is a critical security component that validates authentication
 * tokens returned from external providers
 */
const AuthCallback: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Extract URL with hash and query parameters
        const fullUrl = window.location.href;
        
        // Process the callback
        const { session, error } = await AuthService.handleAuthCallback(fullUrl);
        
        if (error) {
          throw error;
        }
        
        if (!session) {
          throw new Error('Authentication failed. Please try again.');
        }
        
        // Get redirect target from state if it exists
        const state = new URLSearchParams(location.search).get('state');
        let decodedState: any = {};
        
        try {
          if (state) {
            decodedState = JSON.parse(atob(state));
          }
        } catch (err) {
          console.warn('Could not parse state parameter');
        }
        
        const redirectTo = decodedState.redirectTo || '/dashboard';
        
        // Remove any sensitive parameters from URL
        window.history.replaceState({}, document.title, '/auth/callback');
        
        toast.success('Successfully authenticated!');
        
        // Redirect user to dashboard or previous page
        navigate(redirectTo, { replace: true });
      } catch (err: any) {
        console.error('Auth callback error:', err);
        setError(err.message);
        toast.error(`Authentication error: ${err.message}`);
        
        // Redirect to login after error
        setTimeout(() => {
          navigate('/', { replace: true });
        }, 3000);
      }
    };
    
    handleCallback();
  }, [navigate, location]);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {error ? 'Authentication Error' : 'Completing Authentication'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {error
              ? 'We encountered an error while completing your authentication.'
              : 'Please wait while we complete the authentication process...'
            }
          </p>
        </div>
        
        {error ? (
          <div className="bg-red-50 p-4 rounded-md">
            <div className="text-sm text-red-700">
              {error}
            </div>
            <p className="mt-2 text-sm text-red-600">
              Redirecting you to the home page in a few seconds...
            </p>
          </div>
        ) : (
          <div className="flex justify-center">
            <Loader2 className="animate-spin h-12 w-12 text-primary-500" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthCallback; 