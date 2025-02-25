import React, { useState, useRef, useEffect } from 'react';
import { Mail, Send, Facebook, Twitter, Instagram, Linkedin, ExternalLink, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';
import PageContainer from '../components/PageContainer';
import GlassmorphicSection from '../components/GlassmorphicSection';
import GlassmorphicContainer from '../components/GlassmorphicContainer';
import DOMPurify from 'dompurify';

// Rate limiting configuration
const RATE_LIMIT = {
  maxAttempts: 3,
  timeWindow: 300000, // 5 minutes in milliseconds
};

// Input validation
const INPUT_LIMITS = {
  name: 50,
  email: 100,
  subject: 100,
  message: 1000,
};

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Honeypot field to catch bots
  });

  const [formStatus, setFormStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({
    type: 'idle',
    message: ''
  });

  // Rate limiting state
  const [submitAttempts, setSubmitAttempts] = useState<{ timestamp: number }[]>([]);
  const [csrfToken, setCsrfToken] = useState('');

  // EmailJS configuration state
  const [emailjsConfig, setEmailjsConfig] = useState<{
    serviceId: string;
    templateId: string;
    publicKey: string;
  } | null>(null);

  // Generate CSRF token
  useEffect(() => {
    const token = Math.random().toString(36).substring(2) + Date.now().toString(36);
    setCsrfToken(token);
  }, []);

  // Initialize EmailJS
  useEffect(() => {
    const config = {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    };

    if (!config.serviceId || !config.templateId || !config.publicKey) {
      console.error('EmailJS configuration is incomplete. Please check your environment variables.');
      return;
    }

    emailjs.init(config.publicKey);
    setEmailjsConfig(config);
  }, []);

  // Input validation function
  const validateInput = (data: typeof formData): string | null => {
    // Check for empty required fields
    if (!data.name.trim() || !data.email.trim() || !data.subject.trim() || !data.message.trim()) {
      return 'All fields are required';
    }

    // Check input lengths
    if (data.name.length > INPUT_LIMITS.name) {
      return 'Name is too long';
    }
    if (data.email.length > INPUT_LIMITS.email) {
      return 'Email is too long';
    }
    if (data.subject.length > INPUT_LIMITS.subject) {
      return 'Subject is too long';
    }
    if (data.message.length > INPUT_LIMITS.message) {
      return 'Message is too long';
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return 'Invalid email format';
    }

    // Check for potential XSS content
    if (data.message.includes('<script>') || data.message.includes('javascript:')) {
      return 'Invalid message content';
    }

    return null;
  };

  // Check rate limiting
  const checkRateLimit = (): boolean => {
    const now = Date.now();
    const recentAttempts = submitAttempts.filter(
      attempt => now - attempt.timestamp < RATE_LIMIT.timeWindow
    );

    if (recentAttempts.length >= RATE_LIMIT.maxAttempts) {
      return false;
    }

    setSubmitAttempts([...recentAttempts, { timestamp: now }]);
    return true;
  };

  // SEO metadata
  const seoData = {
    title: "Contact Us",
    description: "Get in touch with Shadownik Social Services. We're here to answer your questions and discuss collaboration opportunities.",
    keywords: "contact Shadownik, social services contact, NGO contact, get in touch, volunteer inquiry, Shadownik Corporation",
    url: "https://shadownik.online/contact",
    type: "website"
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!emailjsConfig) {
      setFormStatus({
        type: 'error',
        message: 'Email service is not configured properly.'
      });
      return;
    }

    // Check honeypot
    if (formData.honeypot) {
      setFormStatus({
        type: 'error',
        message: 'Invalid submission'
      });
      return;
    }

    // Check rate limiting
    if (!checkRateLimit()) {
      setFormStatus({
        type: 'error',
        message: 'Too many attempts. Please try again later.'
      });
      return;
    }

    // Validate input
    const validationError = validateInput(formData);
    if (validationError) {
      setFormStatus({
        type: 'error',
        message: validationError
      });
      return;
    }

    setFormStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      if (!form.current) return;

      // Sanitize input data
      const sanitizedData = {
        from_name: DOMPurify.sanitize(formData.name),
        from_email: DOMPurify.sanitize(formData.email),
        message_subject: DOMPurify.sanitize(formData.subject),
        message: DOMPurify.sanitize(formData.message),
        csrf_token: csrfToken
      };

      const result = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        sanitizedData,
        emailjsConfig.publicKey
      );
      
      if (result.text === 'OK') {
        setFormStatus({
          type: 'success',
          message: 'Thank you for your message! We will get back to you soon.'
        });
        
        // Clear form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          honeypot: ''
        });
      } else {
        throw new Error('Failed to send message');
      }

      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus({ type: 'idle', message: '' });
      }, 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again.'
      });

      // Reset error status after 5 seconds
      setTimeout(() => {
        setFormStatus({ type: 'idle', message: '' });
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Enforce input limits
    if (value.length <= (INPUT_LIMITS[name as keyof typeof INPUT_LIMITS] || Number.MAX_VALUE)) {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-emerald-400" />,
      title: "Email",
      details: "info@shadownik.online",
      link: "mailto:info@shadownik.online"
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/shadownik', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/shadownik', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/shadownik', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/shadownik', label: 'LinkedIn' }
  ];

  return (
    <PageContainer
      backgroundImage="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    >
      <SEO {...seoData} />

      {/* Hero Section */}
      <GlassmorphicSection fullWidth className="min-h-[40vh] flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">
            Get in Touch
          </h1>
          <p className="text-xl text-white mb-8 drop-shadow-md">
            Have questions about our initiatives or want to get involved? We'd love to hear from you.
          </p>
        </div>
      </GlassmorphicSection>

      <GlassmorphicSection>
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <GlassmorphicContainer className="p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/10 transition-colors group"
                  >
                    <div className="p-3 rounded-full bg-white/10 backdrop-blur-md group-hover:bg-white/20 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                      <p className="text-emerald-50">{info.details}</p>
                    </div>
                    <ExternalLink className="h-5 w-5 text-emerald-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>

              {/* Social Media Links */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-emerald-400 transition-colors"
                      aria-label={label}
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </GlassmorphicContainer>

            {/* Map Preview */}
          </div>

          {/* Contact Form */}
          <GlassmorphicContainer className="p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Send us a Message</h2>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field - hidden from real users */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                style={{ display: 'none' }}
                tabIndex={-1}
                aria-hidden="true"
              />
              
              {/* CSRF Token */}
              <input type="hidden" name="csrf_token" value={csrfToken} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-emerald-50 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={INPUT_LIMITS.name}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                    placeholder="John Doe"
                  />
                  <p className="text-xs text-emerald-50 mt-1">
                    {formData.name.length}/{INPUT_LIMITS.name} characters
                  </p>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-emerald-50 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={INPUT_LIMITS.email}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                  />
                  <p className="text-xs text-emerald-50 mt-1">
                    {formData.email.length}/{INPUT_LIMITS.email} characters
                  </p>
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-emerald-50 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  maxLength={INPUT_LIMITS.subject}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  placeholder="How can we help?"
                />
                <p className="text-xs text-emerald-50 mt-1">
                  {formData.subject.length}/{INPUT_LIMITS.subject} characters
                </p>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-emerald-50 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={INPUT_LIMITS.message}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Your message..."
                />
                <p className="text-xs text-emerald-50 mt-1">
                  {formData.message.length}/{INPUT_LIMITS.message} characters
                </p>
              </div>

              {/* Form Status Message */}
              {formStatus.type !== 'idle' && (
                <div
                  className={`p-4 rounded-lg flex items-center space-x-2 ${
                    formStatus.type === 'success'
                      ? 'bg-green-500/20 text-green-100'
                      : formStatus.type === 'error'
                      ? 'bg-red-500/20 text-red-100'
                      : 'bg-white/10 text-white'
                  }`}
                >
                  {formStatus.type === 'success' && <CheckCircle className="h-5 w-5 text-green-400" />}
                  {formStatus.type === 'error' && <AlertCircle className="h-5 w-5 text-red-400" />}
                  {formStatus.type === 'loading' && (
                    <Loader className="h-5 w-5 text-white animate-spin" />
                  )}
                  <p>{formStatus.message}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus.type === 'loading'}
                className={`w-full flex items-center justify-center space-x-2 px-6 py-3 bg-emerald-500 rounded-lg font-semibold transition-all duration-300 ${
                  formStatus.type === 'loading'
                    ? 'opacity-75 cursor-not-allowed'
                    : 'hover:bg-emerald-600 hover:shadow-lg hover:scale-[1.02]'
                }`}
              >
                {formStatus.type === 'loading' ? (
                  <>
                    <Loader className="h-5 w-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </GlassmorphicContainer>
        </div>
      </GlassmorphicSection>
    </PageContainer>
  );
};

export default Contact;