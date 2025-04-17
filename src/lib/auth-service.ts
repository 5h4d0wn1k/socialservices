import { AuthError, AuthResponse, Provider, Session, User } from '@supabase/supabase-js';
import { supabase } from './supabase';
import { UserProfile } from '../store/authStore';
import { toast } from 'react-hot-toast';

/**
 * Authentication service for handling all auth-related operations.
 * This service provides a centralized way to perform auth operations
 * and ensures proper error handling and type safety.
 */
export class AuthService {
  /**
   * Generate a secure random string for CSRF protection
   */
  private static generateSecureToken(length = 32): string {
    const array = new Uint8Array(length);
    window.crypto.getRandomValues(array);
    return Array.from(array, byte => ('0' + (byte & 0xFF).toString(16)).slice(-2)).join('');
  }

  /**
   * Set a CSRF token in sessionStorage
   */
  private static setCSRFToken(): string {
    const csrfToken = this.generateSecureToken();
    // Store in sessionStorage - will be cleared when browser tab is closed
    sessionStorage.setItem('csrf_token', csrfToken);
    return csrfToken;
  }

  /**
   * Verify the CSRF token
   */
  private static verifyCSRFToken(token: string): boolean {
    const storedToken = sessionStorage.getItem('csrf_token');
    return storedToken === token;
  }

  /**
   * Clear all auth-related tokens from storage
   */
  private static clearTokens(): void {
    sessionStorage.removeItem('csrf_token');
    // Let Supabase handle the auth token removal
  }

  /**
   * Sign in with email and password
   */
  static async signInWithEmail(email: string, password: string): Promise<AuthResponse> {
    try {
      // Set CSRF token before sign in
      const csrfToken = this.setCSRFToken();

      const response = await supabase.auth.signInWithPassword({
        email: email.toLowerCase().trim(),
        password,
        options: {
          // Include CSRF protection data
          captchaToken: csrfToken
        }
      });

      // Verify token to ensure we've completed a full request cycle
      if (response.data.session) {
        // Validate session existence
        if (!response.data.session.access_token) {
          throw new Error('Invalid session received from server');
        }

        // Set auth in secure cookie with Supabase - this is handled by the supabase client
        // Clear sessionStorage CSRF token after successful auth
        sessionStorage.removeItem('csrf_token');
      }

      return response;
    } catch (error) {
      console.error("Error signing in with email:", error);
      // Clear any partial auth data on error
      this.clearTokens();
      throw error;
    }
  }

  /**
   * Sign up with email and password
   */
  static async signUpWithEmail(email: string, password: string): Promise<AuthResponse> {
    try {
      // Set CSRF token before sign up
      const csrfToken = this.setCSRFToken();

      const response = await supabase.auth.signUp({
        email: email.toLowerCase().trim(),
        password,
        options: {
          data: {
            email: email.toLowerCase().trim(),
          },
          // Include CSRF protection
          captchaToken: csrfToken,
          // Require email verification
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      // Clear CSRF token after sign up
      sessionStorage.removeItem('csrf_token');

      return response;
    } catch (error) {
      console.error("Error signing up with email:", error);
      this.clearTokens();
      throw error;
    }
  }

  /**
   * Sign in with OAuth provider
   */
  static async signInWithOAuth(provider: Provider): Promise<{ error: AuthError | null }> {
    try {
      // Set CSRF token before OAuth sign in
      const csrfToken = this.setCSRFToken();

      const response = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
          // Include state for CSRF protection
          queryParams: {
            state: csrfToken
          }
        }
      });
      
      return response;
    } catch (error) {
      console.error(`Error signing in with ${provider}:`, error);
      this.clearTokens();
      throw error;
    }
  }

  /**
   * Handle auth callback from OAuth or email verification
   */
  static async handleAuthCallback(url: string): Promise<{ session: Session | null; error: AuthError | null }> {
    try {
      const params = new URLSearchParams(url.split('#')[1]);
      const state = params.get('state');
      
      // Verify state parameter matches our CSRF token
      if (state && !this.verifyCSRFToken(state)) {
        throw new Error('Invalid state parameter - possible CSRF attack');
      }
      
      // Exchange code for session
      const { data, error } = await supabase.auth.getSession();
      
      if (error) throw error;
      
      // Clear CSRF token after successful callback
      sessionStorage.removeItem('csrf_token');
      
      return { session: data.session, error: null };
    } catch (error: any) {
      console.error("Error handling auth callback:", error);
      this.clearTokens();
      return { session: null, error: error as AuthError };
    }
  }

  /**
   * Sign out the current user
   */
  static async signOut(): Promise<{ error: AuthError | null }> {
    try {
      // Clear any CSRF tokens
      this.clearTokens();
      
      // Sign out - this will clear auth cookies
      return await supabase.auth.signOut();
    } catch (error) {
      console.error("Error signing out:", error);
      throw error;
    }
  }

  /**
   * Send password reset email
   */
  static async resetPassword(email: string): Promise<{ error: AuthError | null }> {
    try {
      // Set CSRF token for password reset flow
      const csrfToken = this.setCSRFToken();
      
      return await supabase.auth.resetPasswordForEmail(email.toLowerCase().trim(), {
        redirectTo: `${window.location.origin}/reset-password`,
        captchaToken: csrfToken
      });
    } catch (error) {
      console.error("Error resetting password:", error);
      throw error;
    }
  }

  /**
   * Update user password
   */
  static async updatePassword(password: string): Promise<AuthResponse> {
    try {
      // Verify we have a valid session first
      const { data: sessionData } = await supabase.auth.getSession();
      
      if (!sessionData.session) {
        throw new Error('No active session found. Please sign in again.');
      }
      
      return await supabase.auth.updateUser({
        password,
      });
    } catch (error) {
      console.error("Error updating password:", error);
      throw error;
    }
  }

  /**
   * Get current session
   */
  static async getSession(): Promise<{ data: { session: Session | null } }> {
    try {
      return await supabase.auth.getSession();
    } catch (error) {
      console.error("Error getting session:", error);
      throw error;
    }
  }

  /**
   * Get current user
   */
  static async getUser(): Promise<User | null> {
    try {
      const { data } = await supabase.auth.getUser();
      return data?.user || null;
    } catch (error) {
      console.error("Error getting user:", error);
      return null;
    }
  }

  /**
   * Validate a JWT token
   */
  static validateToken(token: string): boolean {
    if (!token) return false;
    
    try {
      // Simple structural validation
      const parts = token.split('.');
      if (parts.length !== 3) return false;
      
      // Check if token is expired
      const payload = JSON.parse(atob(parts[1]));
      const expiryTime = payload.exp * 1000; // Convert to milliseconds
      const currentTime = Date.now();
      
      if (currentTime > expiryTime) {
        console.warn('Token has expired');
        return false;
      }
      
      return true;
    } catch (error) {
      console.error('Error validating token:', error);
      return false;
    }
  }

  /**
   * Security audit check for the client
   * This performs various security checks and logs warnings if issues are found
   */
  static performSecurityAudit(): void {
    // Check if running on HTTPS
    if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
      console.warn('Security Warning: Application is not running over HTTPS');
      toast.error('Your connection is not secure. Please use HTTPS.');
    }
    
    // Check for various security headers
    fetch(window.location.href)
      .then(response => {
        const headers = response.headers;
        
        // Check for security headers
        if (!headers.get('X-Frame-Options')) {
          console.warn('Security Warning: X-Frame-Options header not set');
        }
        
        if (!headers.get('Content-Security-Policy')) {
          console.warn('Security Warning: Content-Security-Policy header not set');
        }
        
        if (!headers.get('X-Content-Type-Options')) {
          console.warn('Security Warning: X-Content-Type-Options header not set');
        }
      })
      .catch(error => {
        console.error('Error checking security headers:', error);
      });
  }

  /**
   * Get user profile from the database
   */
  static async getUserProfile(userId: string): Promise<UserProfile | null> {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Error getting user profile:", error);
      return null;
    }
  }

  /**
   * Create or update user profile
   */
  static async updateUserProfile(
    userId: string,
    profileData: Partial<UserProfile>
  ): Promise<UserProfile | null> {
    try {
      // Check if profile exists
      const { data: existingProfile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      let result;

      if (existingProfile) {
        // Update existing profile
        const { data, error } = await supabase
          .from('profiles')
          .update({
            ...profileData,
            updated_at: new Date().toISOString(),
          })
          .eq('id', userId)
          .select('*')
          .single();

        if (error) throw error;
        result = data;
      } else {
        // Create new profile
        const { data, error } = await supabase
          .from('profiles')
          .insert([
            {
              id: userId,
              ...profileData,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            },
          ])
          .select('*')
          .single();

        if (error) throw error;
        result = data;
      }

      return result;
    } catch (error) {
      console.error("Error updating user profile:", error);
      return null;
    }
  }

  /**
   * Upload avatar image
   */
  static async uploadAvatar(userId: string, file: File): Promise<string | null> {
    try {
      // Validate file type and size
      const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!validTypes.includes(file.type)) {
        throw new Error('Invalid file type. Please upload a JPEG, PNG, or GIF image.');
      }
      
      // Max size 2MB
      if (file.size > 2 * 1024 * 1024) {
        throw new Error('File too large. Maximum size is 2MB.');
      }
      
      const fileExt = file.name.split('.').pop();
      // Create a unique filename with a random component
      const fileName = `${userId}-${this.generateSecureToken(8)}.${fileExt}`;
      const filePath = `avatars/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file, {
          cacheControl: '3600',
          contentType: file.type
        });

      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from('avatars').getPublicUrl(filePath);

      // Update user profile with the new avatar URL
      await this.updateUserProfile(userId, { avatar_url: data.publicUrl });

      return data.publicUrl;
    } catch (error) {
      console.error("Error uploading avatar:", error);
      return null;
    }
  }

  /**
   * Check if user email is confirmed
   */
  static isEmailConfirmed(user: User | null): boolean {
    return !!user?.email_confirmed_at;
  }

  /**
   * Check if the user is authenticated
   */
  static isAuthenticated(user: User | null): boolean {
    return !!user;
  }
} 