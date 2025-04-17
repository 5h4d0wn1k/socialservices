import React, { useState } from 'react';
import { X, Mail, Lock, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

// Google icon component since it's not available in lucide-react
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2 text-red-500">
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" stroke="none" fill="white"></path>
    <path d="M22.355 10.413c0-.744-.067-1.459-.193-2.141H12v4.049h5.819c-.467 2.314-2.082 4.293-4.437 5.339v4.429h7.182c2.078-1.913 3.391-4.732 3.391-8.036z" stroke="none" fill="#4285F4"></path>
    <path d="M12 22.936c2.428 0 4.442-.737 5.927-1.982l-3.777-2.853c-1.051.66-2.367 1.131-3.611 1.131-2.783 0-5.144-1.851-5.979-4.337H.066v2.974A10.802 10.802 0 0 0 12 22.936z" stroke="none" fill="#34A853"></path>
    <path d="M5.455 14.895c-.208-.658-.392-1.36-.392-2.081 0-.708.184-1.409.392-2.082V7.764H1.073A10.736 10.736 0 0 0 1.073 16.15l4.382-1.255z" stroke="none" fill="#FBBC05"></path>
    <path d="M12 6.144c1.567 0 2.987.531 4.097 1.575l3.281-3.214C17.334 2.718 14.886 1.814 12 1.814c-4.951 0-9.194 2.957-11.074 7.187l4.382 3.322C6.21 8.995 8.87 6.144 12 6.144z" stroke="none" fill="#EA4335"></path>
  </svg>
);

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

enum AuthView {
  LOGIN = 'login',
  REGISTER = 'register',
  FORGOT_PASSWORD = 'forgot_password',
  CHECK_EMAIL = 'check_email'
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [view, setView] = useState<AuthView>(AuthView.LOGIN);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Validate register password match
      if (view === AuthView.REGISTER && password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }

      if (view === AuthView.LOGIN) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        toast.success('Welcome back!');
        onClose();
      } else if (view === AuthView.REGISTER) {
        const { error: signUpError, data } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              email: email.toLowerCase(),
            }
          }
        });
        
        if (signUpError) throw signUpError;
        
        if (data.user?.identities?.length === 0) {
          throw new Error('An account with this email already exists');
        }
        
        // Create a profile for the new user
        if (data.user) {
          const { error: profileError } = await supabase
            .from('profiles')
            .insert([{ 
              id: data.user.id,
              email: email.toLowerCase(),
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString()
            }]);
          
          if (profileError) {
            console.error('Error creating profile:', profileError);
            // Continue anyway as the auth was successful
          }
        }
        
        toast.success('Account created successfully! Please check your email to confirm your account.');
        setView(AuthView.CHECK_EMAIL);
      } else if (view === AuthView.FORGOT_PASSWORD) {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/reset-password`
        });
        if (error) throw error;
        toast.success('Password reset link sent to your email!');
        setView(AuthView.CHECK_EMAIL);
      }
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setError(null);
    setLoading(true);
    
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}`
        }
      });
      
      if (error) throw error;
      // No need for success message as we're redirecting to Google
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
      setLoading(false);
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold mb-2 text-center">
          {view === AuthView.LOGIN && 'Welcome Back'}
          {view === AuthView.REGISTER && 'Create an Account'}
          {view === AuthView.FORGOT_PASSWORD && 'Reset Your Password'}
          {view === AuthView.CHECK_EMAIL && 'Check Your Email'}
        </h2>
        
        <p className="text-center text-gray-600 mb-6">
          {view === AuthView.LOGIN && 'Sign in to your account to continue'}
          {view === AuthView.REGISTER && 'Join our community of volunteers'}
          {view === AuthView.FORGOT_PASSWORD && "We'll send you a link to reset your password"}
          {view === AuthView.CHECK_EMAIL && 'We sent you an email with further instructions'}
        </p>

        {error && (
          <div className="mb-4 p-3 rounded bg-red-50 text-red-600 flex items-start">
            <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {view === AuthView.CHECK_EMAIL ? (
          <div className="text-center">
            <p className="mb-6">Please check your email inbox and follow the instructions.</p>
            <button
              onClick={() => setView(AuthView.LOGIN)}
              className="text-primary-600 hover:text-primary-800 font-medium"
            >
              Back to Sign In
            </button>
          </div>
        ) : (
          <>
            <form onSubmit={handleEmailAuth} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              {(view === AuthView.LOGIN || view === AuthView.REGISTER) && (
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    {view === AuthView.LOGIN && (
                      <button
                        type="button"
                        onClick={() => {
                          resetForm();
                          setView(AuthView.FORGOT_PASSWORD);
                        }}
                        className="text-sm text-primary-600 hover:text-primary-800"
                      >
                        Forgot password?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="••••••••"
                      required
                      minLength={8}
                    />
                  </div>
                </div>
              )}

              {view === AuthView.REGISTER && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="••••••••"
                      required
                      minLength={8}
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 flex justify-center items-center"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    Loading...
                  </>
                ) : view === AuthView.LOGIN ? (
                  'Sign In'
                ) : view === AuthView.REGISTER ? (
                  'Create Account'
                ) : (
                  'Send Reset Link'
                )}
              </button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleGoogleAuth}
              disabled={loading}
              className="w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex justify-center items-center"
            >
              <GoogleIcon />
              {view === AuthView.LOGIN ? 'Sign in with Google' : 'Sign up with Google'}
            </button>

            <div className="mt-6 text-center">
              {view === AuthView.LOGIN ? (
                <button
                  type="button"
                  onClick={() => {
                    resetForm();
                    setView(AuthView.REGISTER);
                  }}
                  className="text-primary-600 hover:text-primary-800 font-medium"
                >
                  Don't have an account? Sign up
                </button>
              ) : view === AuthView.REGISTER ? (
                <button
                  type="button"
                  onClick={() => {
                    resetForm();
                    setView(AuthView.LOGIN);
                  }}
                  className="text-primary-600 hover:text-primary-800 font-medium"
                >
                  Already have an account? Sign in
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    resetForm();
                    setView(AuthView.LOGIN);
                  }}
                  className="text-primary-600 hover:text-primary-800 font-medium"
                >
                  Back to Sign In
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};