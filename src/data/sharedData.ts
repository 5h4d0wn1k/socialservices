// Shared data for the entire website
import { Mail, Phone, MapPin, Globe, Instagram, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

// Site-wide settings and information
export const siteConfig = {
  name: 'Shadownik',
  tagline: "India's Movement for Harmony & Nature",
  description: 'Join Shadownik, India\'s award-winning NGO for volunteering, harmony, and environmental action. Give your time, not your money, and make a real impact!',
  url: 'https://swnk.in',
  logo: '/logo.svg',
  favicon: '/favicon.ico',
  keywords: ['volunteering', 'NGO', 'environment', 'community service', 'India', 'social work', 'harmony', 'nature'],
  author: 'Shadownik Team',
  copyright: '© 2024 Shadownik. All rights reserved.',
  version: '1.0.0'
};

// Contact information
export const contactInfo = {
  general: {
    email: 'info@shadownik.org',
    phone: '+91-98765-43210',
    address: 'Delhi, India',
    workingHours: 'Monday - Friday: 9:00 AM - 6:00 PM'
  },
  departments: {
    volunteering: {
      email: 'volunteer@shadownik.org',
      phone: '+91-98765-43211',
      name: 'Volunteer Coordination'
    },
    projects: {
      email: 'projects@shadownik.org',
      phone: '+91-98765-43212',
      name: 'Project Management'
    },
    media: {
      email: 'media@shadownik.org',
      phone: '+91-98765-43213',
      name: 'Media & Communications'
    },
    partnerships: {
      email: 'partnerships@shadownik.org',
      phone: '+91-98765-43214',
      name: 'Partnerships & Collaborations'
    }
  },
  locations: [
    {
      city: 'Delhi',
      address: 'Central Office, Delhi',
      phone: '+91-98765-43210',
      email: 'delhi@shadownik.org'
    },
    {
      city: 'Mumbai',
      address: 'Regional Office, Mumbai',
      phone: '+91-98765-43211',
      email: 'mumbai@shadownik.org'
    },
    {
      city: 'Bangalore',
      address: 'Regional Office, Bangalore',
      phone: '+91-98765-43212',
      email: 'bangalore@shadownik.org'
    },
    {
      city: 'Chennai',
      address: 'Regional Office, Chennai',
      phone: '+91-98765-43213',
      email: 'chennai@shadownik.org'
    }
  ]
};

// Social media links
export const socialLinks = [
  {
    name: 'Website',
    url: 'https://ngo.swnk.in',
    icon: Globe,
    color: 'text-blue-600'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/shadownik',
    icon: Instagram,
    color: 'text-pink-600'
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/shadownik',
    icon: Facebook,
    color: 'text-blue-600'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/shadownik',
    icon: Twitter,
    color: 'text-blue-400'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/shadownik',
    icon: Linkedin,
    color: 'text-blue-700'
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@shadownik',
    icon: Youtube,
    color: 'text-red-600'
  },
  {
    name: 'Linktree',
    url: 'https://linktr.ee/shadownik',
    icon: Globe,
    color: 'text-green-600'
  }
];

// Navigation menu items
export const navigationItems = [
  {
    name: 'Home',
    path: '/',
    description: 'Welcome to Shadownik'
  },
  {
    name: 'Projects',
    path: '/projects',
    description: 'Explore our initiatives',
    children: [
      { name: 'Environment', path: '/projects?category=environment' },
      { name: 'Education', path: '/projects?category=education' },
      { name: 'Healthcare', path: '/projects?category=healthcare' },
      { name: 'Community', path: '/projects?category=community' },
      { name: 'Wildlife', path: '/projects?category=wildlife' }
    ]
  },
  {
    name: 'Team',
    path: '/team',
    description: 'Meet our team'
  },
  {
    name: 'Volunteer',
    path: '/register',
    description: 'Join our movement'
  },
  {
    name: 'Contact',
    path: '/contact',
    description: 'Get in touch'
  }
];

// Footer links
export const footerLinks = {
  organization: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Mission', path: '/mission' },
    { name: 'Team', path: '/team' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ],
  programs: [
    { name: 'Environmental Projects', path: '/projects?category=environment' },
    { name: 'Education Programs', path: '/projects?category=education' },
    { name: 'Healthcare Initiatives', path: '/projects?category=healthcare' },
    { name: 'Community Development', path: '/projects?category=community' },
    { name: 'Wildlife Conservation', path: '/projects?category=wildlife' }
  ],
  getInvolved: [
    { name: 'Become a Volunteer', path: '/register' },
    { name: 'Donate', path: '/donate' },
    { name: 'Partner With Us', path: '/partnerships' },
    { name: 'Internships', path: '/internships' },
    { name: 'Events', path: '/events' }
  ],
  resources: [
    { name: 'Blog', path: '/blog' },
    { name: 'Newsletter', path: '/newsletter' },
    { name: 'Annual Reports', path: '/reports' },
    { name: 'Research', path: '/research' },
    { name: 'Publications', path: '/publications' }
  ],
  legal: [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'Accessibility', path: '/accessibility' },
    { name: 'Sitemap', path: '/sitemap' }
  ]
};

// Awards and recognition
export const awards = [
  {
    title: 'Awwwards Site of the Day',
    year: '2024',
    description: 'Recognition for outstanding website design and user experience',
    logo: 'https://www.awwwards.com/assets/images/awwwards-logo.svg'
  },
  {
    title: 'National Social Work Award',
    year: '2023',
    description: 'Excellence in community development and social impact',
    logo: '/awards/national-social-work.svg'
  },
  {
    title: 'Green Warrior Award',
    year: '2023',
    description: 'Outstanding contribution to environmental conservation',
    logo: '/awards/green-warrior.svg'
  },
  {
    title: 'Forbes 30 Under 30',
    year: '2023',
    description: 'Social Entrepreneurs category recognition',
    logo: '/awards/forbes.svg'
  }
];

// Media mentions and press
export const mediaMentions = [
  {
    outlet: 'BBC',
    title: 'Shadownik: Revolutionizing Volunteering in India',
    date: '2024-03-15',
    url: 'https://bbc.com/article/shadownik-volunteering-india',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/BBC_News_2022_%28Alt%29.svg'
  },
  {
    outlet: 'NDTV',
    title: 'How Shadownik is Building a Better India Through Volunteering',
    date: '2024-02-20',
    url: 'https://ndtv.com/article/shadownik-volunteering-impact',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/NDTV_logo.svg'
  },
  {
    outlet: 'Times of India',
    title: 'Shadownik: The NGO That\'s Changing Lives One Volunteer at a Time',
    date: '2024-01-10',
    url: 'https://timesofindia.com/article/shadownik-volunteering',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/The_Times_of_India_Logo.svg'
  },
  {
    outlet: 'The Hindu',
    title: 'Environmental Conservation: Shadownik\'s Green Initiative',
    date: '2023-12-05',
    url: 'https://thehindu.com/article/shadownik-environment',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/The_Hindu_Logo.svg'
  }
];

// Statistics and impact numbers
export const impactStats = {
  volunteers: {
    total: 1200,
    active: 850,
    newThisMonth: 45,
    retentionRate: 85
  },
  projects: {
    total: 70,
    active: 45,
    completed: 25,
    categories: 6
  },
  impact: {
    livesTouched: 15000,
    communitiesServed: 200,
    locations: 25,
    hoursVolunteered: 50000
  },
  environmental: {
    treesPlanted: 100000,
    wasteCollected: 50000,
    beachesCleaned: 15,
    wildlifeProtected: 10
  }
};

// FAQ sections
export const faqs = {
  general: [
    {
      question: 'What is Shadownik?',
      answer: 'Shadownik is India\'s award-winning NGO focused on volunteering, environmental conservation, and community development. We believe in giving your time, not your money, to create positive change.'
    },
    {
      question: 'How can I become a volunteer?',
      answer: 'You can become a volunteer by registering on our website, choosing a project that interests you, and attending our orientation session. No prior experience is required - just your willingness to help!'
    },
    {
      question: 'Do I need any special skills to volunteer?',
      answer: 'No special skills are required for most of our projects. We provide training and support for all volunteers. The most important requirement is your commitment and willingness to make a difference.'
    },
    {
      question: 'How much time do I need to commit?',
      answer: 'Time commitment varies by project, but most volunteers commit 4-8 hours per week. We have flexible options to accommodate different schedules and availability.'
    }
  ],
  projects: [
    {
      question: 'What types of projects do you have?',
      answer: 'We have projects in six main categories: Environment (tree planting, waste management), Education (teaching, mentoring), Healthcare (medical camps, elderly care), Community Development, Wildlife Conservation, and Global Initiatives.'
    },
    {
      question: 'Can I start a new project?',
      answer: 'Yes! We welcome new project ideas from volunteers. If you have a project idea, you can submit it through our website, and our team will help you develop and implement it.'
    },
    {
      question: 'Are projects available in my city?',
      answer: 'We have projects across 25+ cities in India. You can search for projects by location on our website, or contact us to learn about opportunities in your area.'
    }
  ],
  impact: [
    {
      question: 'How do you measure impact?',
      answer: 'We measure impact through various metrics including number of volunteers, projects completed, lives touched, environmental impact (trees planted, waste collected), and community feedback.'
    },
    {
      question: 'What recognition do volunteers receive?',
      answer: 'Volunteers receive certificates, badges, and recognition for their contributions. We also celebrate outstanding volunteers through awards and public recognition programs.'
    },
    {
      question: 'Can I volunteer remotely?',
      answer: 'Yes! We have several remote volunteering opportunities including online teaching, content creation, social media management, and virtual mentoring programs.'
    }
  ]
};

// Newsletter signup
export const newsletterConfig = {
  title: 'Add Impact To Your Inbox',
  description: 'Sign up to receive inspiring stories, project updates, and ways to get involved.',
  placeholder: 'Your email address',
  buttonText: 'Subscribe',
  successMessage: 'Thank you for subscribing! You\'ll receive our updates soon.',
  errorMessage: 'Something went wrong. Please try again.'
};

// Site-wide announcements
export const announcements = [
  {
    id: 'new-website',
    title: 'New Website Launch!',
    message: 'Welcome to our new website! We\'ve redesigned everything to make it easier for you to find projects and get involved.',
    type: 'info',
    active: true,
    date: '2024-05-01'
  },
  {
    id: 'summer-campaign',
    title: 'Summer Volunteering Campaign',
    message: 'Join our summer campaign and make a difference in your community. Special projects available for students and professionals.',
    type: 'success',
    active: true,
    date: '2024-04-15'
  }
];

// Error messages
export const errorMessages = {
  404: {
    title: 'Page Not Found',
    message: 'The page you\'re looking for doesn\'t exist. Please check the URL or go back to the homepage.',
    action: 'Go Home'
  },
  500: {
    title: 'Server Error',
    message: 'Something went wrong on our end. Please try again later or contact support if the problem persists.',
    action: 'Try Again'
  },
  network: {
    title: 'Connection Error',
    message: 'Please check your internet connection and try again.',
    action: 'Retry'
  }
};

// Loading states
export const loadingMessages = [
  'Loading amazing projects...',
  'Finding the perfect volunteer opportunity...',
  'Connecting you with our community...',
  'Preparing to make a difference...',
  'Loading stories of impact...'
];

// Success messages
export const successMessages = {
  volunteerRegistration: 'Thank you for registering! We\'ll contact you soon with next steps.',
  projectApplication: 'Your application has been submitted successfully! We\'ll review and get back to you.',
  contactForm: 'Thank you for your message! We\'ll respond within 24 hours.',
  newsletterSignup: 'Welcome to our community! You\'ll receive our updates soon.'
}; 