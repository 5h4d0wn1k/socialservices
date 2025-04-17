import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import { User, AuthError, OAuthResponse, AuthResponse } from '@supabase/supabase-js';
import { toast } from 'react-hot-toast';

export interface UserProfile {
  id: string;
  first_name?: string;
  last_name?: string;
  email: string;
  avatar_url?: string;
  phone?: string;
  interests?: string[];
  availability?: string[];
  experience?: string;
  created_at: string;
  updated_at: string;
}

interface AuthState {
  user: User | null;
  profile: UserProfile | null;
  isLoading: boolean;
  error: string | null;
  isSessionValid: boolean;
  lastTokenRefresh: number | null;
  setUser: (user: User | null) => void;
  setProfile: (profile: UserProfile | null) => void;
  signOut: () => Promise<void>;
  createOrUpdateProfile: (profileData: Partial<UserProfile>) => Promise<UserProfile | null>;
  refreshProfile: () => Promise<void>;
  clearError: () => void;
  refreshSession: () => Promise<void>;
  validateSession: () => Promise<boolean>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  profile: null,
  isLoading: true,
  error: null,
  isSessionValid: false,
  lastTokenRefresh: null,
  setUser: (user) => set({ user }),
  setProfile: (profile) => set({ profile }),
  clearError: () => set({ error: null }),
  
  /**
   * Validate the current session
   * This checks if the session is still valid and updates the store state
   */
  validateSession: async () => {
    try {
      const { data } = await supabase.auth.getSession();
      const isValid = !!data.session;
      
      set({ isSessionValid: isValid });
      return isValid;
    } catch (error) {
      console.error("Error validating session:", error);
      set({ isSessionValid: false });
      return false;
    }
  },
  
  /**
   * Refresh the auth session token
   * This should be called before accessing secure resources
   */
  refreshSession: async () => {
    const { lastTokenRefresh } = get();
    const now = Date.now();
    
    // Only refresh if it's been more than 10 minutes since the last refresh
    // This prevents unnecessary refreshes
    if (lastTokenRefresh && (now - lastTokenRefresh < 10 * 60 * 1000)) {
      return;
    }
    
    try {
      set({ isLoading: true });
      
      const { data, error } = await supabase.auth.refreshSession();
      
      if (error) throw error;
      
      if (data.session) {
        set({ 
          user: data.user,
          isSessionValid: true,
          lastTokenRefresh: Date.now()
        });
      } else {
        set({ 
          isSessionValid: false,
          user: null,
          profile: null
        });
      }
    } catch (error: any) {
      console.error("Error refreshing session:", error);
      set({ 
        error: error.message,
        isSessionValid: false
      });
    } finally {
      set({ isLoading: false });
    }
  },
  
  signOut: async () => {
    try {
      set({ isLoading: true });
      await supabase.auth.signOut();
      set({ 
        user: null, 
        profile: null,
        isSessionValid: false,
        lastTokenRefresh: null
      });
      toast.success('Successfully signed out');
      
      // Clear any session-related storage
      sessionStorage.clear();
    } catch (error) {
      const authError = error as AuthError;
      set({ error: authError.message });
      toast.error(`Sign out failed: ${authError.message}`);
    } finally {
      set({ isLoading: false });
    }
  },
  
  createOrUpdateProfile: async (profileData) => {
    const { user } = get();
    
    if (!user) {
      set({ error: 'You must be logged in to update your profile' });
      return null;
    }
    
    // Validate current session before making a request
    const isSessionValid = await get().validateSession();
    if (!isSessionValid) {
      set({ error: 'Your session has expired. Please sign in again.' });
      toast.error('Session expired. Please sign in again.');
      await get().signOut();
      return null;
    }
    
    try {
      set({ isLoading: true });
      
      // Sanitize input data to prevent injection attacks
      const sanitizedData = Object.entries(profileData).reduce((acc, [key, value]) => {
        // Basic sanitization for string values
        if (typeof value === 'string') {
          // Strip any potentially harmful HTML tags, script tags, etc.
          const sanitized = value
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
            .replace(/<[^>]*>/g, ''); // Strip HTML
          return { ...acc, [key]: sanitized };
        }
        return { ...acc, [key]: value };
      }, {} as Partial<UserProfile>);
      
      // Check if profile exists
      const { data: existingProfile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      
      let profile;
      
      if (existingProfile) {
        // Update existing profile
        const { data, error } = await supabase
          .from('profiles')
          .update({
            ...sanitizedData,
            updated_at: new Date().toISOString()
          })
          .eq('id', user.id)
          .select('*')
          .single();
          
        if (error) throw error;
        profile = data;
      } else {
        // Create new profile
        const { data, error } = await supabase
          .from('profiles')
          .insert([{
            id: user.id,
            email: user.email || '',
            ...sanitizedData,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }])
          .select('*')
          .single();
          
        if (error) throw error;
        profile = data;
      }
      
      set({ profile });
      return profile;
    } catch (error: any) {
      set({ error: error.message });
      toast.error(`Failed to update profile: ${error.message}`);
      return null;
    } finally {
      set({ isLoading: false });
    }
  },
  
  refreshProfile: async () => {
    const { user } = get();
    
    if (!user) return;
    
    // Validate current session before making a request
    const isSessionValid = await get().validateSession();
    if (!isSessionValid) {
      console.warn('Session invalid during profile refresh');
      return;
    }
    
    try {
      set({ isLoading: true });
      
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      
      if (error) throw error;
      
      set({ profile: data });
    } catch (error: any) {
      set({ error: error.message });
      console.error('Failed to refresh profile:', error);
    } finally {
      set({ isLoading: false });
    }
  }
}));

// Initialize auth state
const initializeAuth = async () => {
  try {
    useAuthStore.setState({ isLoading: true });
    
    const { data, error } = await supabase.auth.getSession();
    
    if (error) {
      throw error;
    }
    
    if (data.session) {
      // Verify token is not expired
      const expiresAt = data.session?.expires_at;
      const now = Math.floor(Date.now() / 1000);
      
      if (expiresAt && expiresAt < now) {
        console.warn('Session token expired, attempting to refresh');
        await useAuthStore.getState().refreshSession();
      } else {
        useAuthStore.setState({ 
          isSessionValid: true,
          lastTokenRefresh: Date.now()
        });
        
        useAuthStore.getState().setUser(data.session.user);
        await useAuthStore.getState().refreshProfile();
      }
    }
  } catch (error: any) {
    useAuthStore.setState({ 
      error: error.message,
      isSessionValid: false 
    });
    console.error('Auth initialization error:', error);
  } finally {
    useAuthStore.setState({ isLoading: false });
  }
};

// Handle Auth State Changes
supabase.auth.onAuthStateChange(async (event, session) => {
  useAuthStore.setState({ isLoading: true });
  
  console.log(`Auth state changed: ${event}`);
  
  if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
    if (session?.user) {
      useAuthStore.setState({
        isSessionValid: true,
        lastTokenRefresh: Date.now()
      });
      
      useAuthStore.getState().setUser(session.user);
      
      // Check if user has a profile, create one if not (useful for OAuth sign-ins)
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single();
      
      if (!data) {
        // No profile exists, create one
        const userData = {
          id: session.user.id,
          email: session.user.email || '',
          first_name: session.user.user_metadata?.full_name?.split(' ')[0] || '',
          last_name: session.user.user_metadata?.full_name?.split(' ').slice(1).join(' ') || '',
          avatar_url: session.user.user_metadata?.avatar_url || '',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        
        const { error } = await supabase
          .from('profiles')
          .insert([userData]);
        
        if (error) {
          console.error('Error creating profile after OAuth login:', error);
        }
      }
      
      await useAuthStore.getState().refreshProfile();
    }
  } else if (event === 'SIGNED_OUT') {
    useAuthStore.setState({
      user: null,
      profile: null,
      isSessionValid: false,
      lastTokenRefresh: null
    });
  } else if (event === 'USER_UPDATED') {
    // Refresh profile when user is updated
    if (session?.user) {
      useAuthStore.getState().setUser(session.user);
      await useAuthStore.getState().refreshProfile();
    }
  }
  
  useAuthStore.setState({ isLoading: false });
});

// Set up session expiration monitoring
const setupSessionMonitoring = () => {
  const checkSessionValidity = async () => {
    const { isSessionValid, user } = useAuthStore.getState();
    
    if (isSessionValid && user) {
      await useAuthStore.getState().validateSession();
    }
  };
  
  // Check session validity every 5 minutes
  const intervalId = setInterval(checkSessionValidity, 5 * 60 * 1000);
  
  // Clean up on page unload
  window.addEventListener('beforeunload', () => {
    clearInterval(intervalId);
  });
};

// Initialize auth state
initializeAuth().then(() => {
  setupSessionMonitoring();
});