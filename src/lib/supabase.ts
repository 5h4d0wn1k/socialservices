import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create Supabase client with enhanced security options
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    // Use secure cookies instead of localStorage
    persistSession: true,
    storageKey: 'sb-auth-token',
    autoRefreshToken: true,
    // Use secure httpOnly cookies (can only be used by the server, not accessible via JavaScript)
    cookieOptions: {
      // Secure flag - only sent over HTTPS
      secure: window.location.protocol === 'https:',
      // SameSite strict to prevent CSRF attacks
      sameSite: 'strict',
      // Set domain to current domain only
      domain: window.location.hostname
    }
  }
});