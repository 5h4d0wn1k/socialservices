// Centralized contact data for the entire website
import { Mail, Phone, MapPin, Clock, Users, Globe, MessageCircle, HelpCircle, FileText, Award } from 'lucide-react';

export interface ContactDepartment {
  id: string;
  name: string;
  description: string;
  email: string;
  phone: string;
  icon: any;
  color: string;
  workingHours: string;
  responseTime: string;
  team: string[];
}

export interface ContactLocation {
  id: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  email: string;
  workingHours: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  image: string;
  description: string;
  services: string[];
}

export interface ContactForm {
  id: string;
  title: string;
  description: string;
  fields: Array<{
    name: string;
    type: string;
    required: boolean;
    placeholder: string;
    options?: string[];
  }>;
  submitText: string;
  successMessage: string;
}

export const contactDepartments: ContactDepartment[] = [
  {
    id: 'volunteering',
    name: 'Volunteer Coordination',
    description: 'Get help with volunteer registration, project selection, and volunteer support.',
    email: 'volunteer@shadownik.org',
    phone: '+91-98765-43211',
    icon: Users,
    color: 'text-blue-600',
    workingHours: 'Monday - Friday: 9:00 AM - 6:00 PM',
    responseTime: 'Within 24 hours',
    team: ['Priya Sharma', 'Rahul Verma', 'Anjali Patel']
  },
  {
    id: 'projects',
    name: 'Project Management',
    description: 'Information about our projects, partnerships, and project-related inquiries.',
    email: 'projects@shadownik.org',
    phone: '+91-98765-43212',
    icon: Globe,
    color: 'text-green-600',
    workingHours: 'Monday - Friday: 9:00 AM - 6:00 PM',
    responseTime: 'Within 48 hours',
    team: ['Aravind Kumar', 'Meera Devi', 'Krishna Menon']
  },
  {
    id: 'media',
    name: 'Media & Communications',
    description: 'Press inquiries, media partnerships, and communication-related questions.',
    email: 'media@shadownik.org',
    phone: '+91-98765-43213',
    icon: MessageCircle,
    color: 'text-purple-600',
    workingHours: 'Monday - Friday: 9:00 AM - 6:00 PM',
    responseTime: 'Within 24 hours',
    team: ['Lakshmi Devi', 'Srinivas Reddy']
  },
  {
    id: 'partnerships',
    name: 'Partnerships & Collaborations',
    description: 'Corporate partnerships, NGO collaborations, and strategic alliances.',
    email: 'partnerships@shadownik.org',
    phone: '+91-98765-43214',
    icon: Award,
    color: 'text-orange-600',
    workingHours: 'Monday - Friday: 9:00 AM - 6:00 PM',
    responseTime: 'Within 72 hours',
    team: ['Dr. Anjali Reddy', 'Prof. Rajesh Kumar']
  },
  {
    id: 'support',
    name: 'General Support',
    description: 'General inquiries, website support, and general information.',
    email: 'info@shadownik.org',
    phone: '+91-98765-43210',
    icon: HelpCircle,
    color: 'text-gray-600',
    workingHours: 'Monday - Friday: 9:00 AM - 6:00 PM',
    responseTime: 'Within 24 hours',
    team: ['Support Team', 'Customer Care']
  }
];

export const contactLocations: ContactLocation[] = [
  {
    id: 'delhi',
    city: 'Delhi',
    state: 'Delhi',
    address: 'Central Office, Connaught Place, New Delhi - 110001',
    phone: '+91-98765-43210',
    email: 'delhi@shadownik.org',
    workingHours: 'Monday - Friday: 9:00 AM - 6:00 PM',
    coordinates: { lat: 28.6139, lng: 77.2090 },
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
    description: 'Our central office in the heart of Delhi, serving as the main hub for all operations.',
    services: ['Volunteer Coordination', 'Project Management', 'Training Center', 'Media Relations']
  },
  {
    id: 'mumbai',
    city: 'Mumbai',
    state: 'Maharashtra',
    address: 'Regional Office, Bandra West, Mumbai - 400050',
    phone: '+91-98765-43211',
    email: 'mumbai@shadownik.org',
    workingHours: 'Monday - Friday: 9:00 AM - 6:00 PM',
    coordinates: { lat: 19.0760, lng: 72.8777 },
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
    description: 'Regional office serving Maharashtra and western India with focus on environmental projects.',
    services: ['Environmental Projects', 'Beach Cleanup', 'Community Development', 'Education Programs']
  },
  {
    id: 'bangalore',
    city: 'Bangalore',
    state: 'Karnataka',
    address: 'Regional Office, Koramangala, Bangalore - 560034',
    phone: '+91-98765-43212',
    email: 'bangalore@shadownik.org',
    workingHours: 'Monday - Friday: 9:00 AM - 6:00 PM',
    coordinates: { lat: 12.9716, lng: 77.5946 },
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    description: 'Regional office serving Karnataka and southern India with focus on technology and education.',
    services: ['Education Programs', 'Digital Literacy', 'Healthcare Initiatives', 'Tech Volunteering']
  },
  {
    id: 'chennai',
    city: 'Chennai',
    state: 'Tamil Nadu',
    address: 'Regional Office, T Nagar, Chennai - 600017',
    phone: '+91-98765-43213',
    email: 'chennai@shadownik.org',
    workingHours: 'Monday - Friday: 9:00 AM - 6:00 PM',
    coordinates: { lat: 13.0827, lng: 80.2707 },
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
    description: 'Regional office serving Tamil Nadu and southern India with focus on community development.',
    services: ['Community Development', 'Women Empowerment', 'Skill Development', 'Rural Projects']
  }
];

export const contactForms: ContactForm[] = [
  {
    id: 'general-inquiry',
    title: 'General Inquiry',
    description: 'Have a general question? We\'d love to hear from you.',
    fields: [
      { name: 'name', type: 'text', required: true, placeholder: 'Your full name' },
      { name: 'email', type: 'email', required: true, placeholder: 'Your email address' },
      { name: 'phone', type: 'tel', required: false, placeholder: 'Your phone number' },
      { name: 'subject', type: 'select', required: true, placeholder: 'Select a subject', options: ['General Inquiry', 'Volunteer Information', 'Project Information', 'Partnership', 'Media Inquiry', 'Other'] },
      { name: 'message', type: 'textarea', required: true, placeholder: 'Your message' }
    ],
    submitText: 'Send Message',
    successMessage: 'Thank you for your message! We\'ll respond within 24 hours.'
  },
  {
    id: 'volunteer-registration',
    title: 'Volunteer Registration',
    description: 'Ready to make a difference? Register as a volunteer with us.',
    fields: [
      { name: 'name', type: 'text', required: true, placeholder: 'Your full name' },
      { name: 'email', type: 'email', required: true, placeholder: 'Your email address' },
      { name: 'phone', type: 'tel', required: true, placeholder: 'Your phone number' },
      { name: 'age', type: 'number', required: true, placeholder: 'Your age' },
      { name: 'location', type: 'text', required: true, placeholder: 'Your city and state' },
      { name: 'interests', type: 'select', required: true, placeholder: 'Select your interests', options: ['Environment', 'Education', 'Healthcare', 'Community Development', 'Wildlife', 'Remote Volunteering'] },
      { name: 'availability', type: 'select', required: true, placeholder: 'Select your availability', options: ['Weekdays', 'Weekends', 'Both', 'Flexible'] },
      { name: 'experience', type: 'textarea', required: false, placeholder: 'Any relevant experience or skills' },
      { name: 'motivation', type: 'textarea', required: true, placeholder: 'Why do you want to volunteer with us?' }
    ],
    submitText: 'Register as Volunteer',
    successMessage: 'Thank you for registering! We\'ll contact you within 2-3 business days with next steps.'
  },
  {
    id: 'partnership-inquiry',
    title: 'Partnership Inquiry',
    description: 'Interested in partnering with us? Let\'s discuss collaboration opportunities.',
    fields: [
      { name: 'name', type: 'text', required: true, placeholder: 'Your full name' },
      { name: 'organization', type: 'text', required: true, placeholder: 'Organization name' },
      { name: 'email', type: 'email', required: true, placeholder: 'Your email address' },
      { name: 'phone', type: 'tel', required: true, placeholder: 'Your phone number' },
      { name: 'partnershipType', type: 'select', required: true, placeholder: 'Type of partnership', options: ['Corporate Partnership', 'NGO Collaboration', 'Academic Partnership', 'Government Partnership', 'Media Partnership', 'Other'] },
      { name: 'projectArea', type: 'select', required: true, placeholder: 'Area of interest', options: ['Environment', 'Education', 'Healthcare', 'Community Development', 'Wildlife', 'Technology', 'Other'] },
      { name: 'budget', type: 'select', required: false, placeholder: 'Budget range', options: ['Under ₹1 Lakh', '₹1-5 Lakhs', '₹5-10 Lakhs', '₹10+ Lakhs', 'In-kind support', 'Other'] },
      { name: 'message', type: 'textarea', required: true, placeholder: 'Tell us about your partnership proposal' }
    ],
    submitText: 'Submit Partnership Inquiry',
    successMessage: 'Thank you for your partnership inquiry! We\'ll review and get back to you within 72 hours.'
  },
  {
    id: 'media-inquiry',
    title: 'Media Inquiry',
    description: 'Press inquiries, interviews, and media-related questions.',
    fields: [
      { name: 'name', type: 'text', required: true, placeholder: 'Your full name' },
      { name: 'media', type: 'text', required: true, placeholder: 'Media organization' },
      { name: 'email', type: 'email', required: true, placeholder: 'Your email address' },
      { name: 'phone', type: 'tel', required: true, placeholder: 'Your phone number' },
      { name: 'inquiryType', type: 'select', required: true, placeholder: 'Type of inquiry', options: ['Press Release', 'Interview Request', 'Story Feature', 'Event Coverage', 'Expert Quote', 'Other'] },
      { name: 'deadline', type: 'date', required: false, placeholder: 'Deadline (if any)' },
      { name: 'message', type: 'textarea', required: true, placeholder: 'Tell us about your media inquiry' }
    ],
    submitText: 'Submit Media Inquiry',
    successMessage: 'Thank you for your media inquiry! We\'ll respond within 24 hours.'
  }
];

export const contactInfo = {
  general: {
    email: 'info@shadownik.org',
    phone: '+91-98765-43210',
    address: 'Central Office, Delhi, India',
    workingHours: 'Monday - Friday: 9:00 AM - 6:00 PM',
    emergency: '+91-98765-43219'
  },
  social: {
    website: 'https://ngo.swnk.in',
    instagram: '@shadownik',
    facebook: 'Shadownik',
    twitter: '@shadownik',
    linkedin: 'shadownik',
    youtube: '@shadownik'
  },
  support: {
    email: 'support@shadownik.org',
    phone: '+91-98765-43215',
    responseTime: 'Within 24 hours',
    faq: 'https://shadownik.org/faq'
  }
};

export const contactStats = {
  totalInquiries: 2500,
  responseTime: '24 hours',
  satisfactionRate: 95,
  locations: 4,
  departments: 5,
  teamMembers: 25
};

export const contactFAQ = [
  {
    question: 'How can I get in touch with Shadownik?',
    answer: 'You can contact us through email at info@shadownik.org, call us at +91-98765-43210, or fill out our contact form. We respond to all inquiries within 24 hours.'
  },
  {
    question: 'What are your working hours?',
    answer: 'Our offices are open Monday to Friday from 9:00 AM to 6:00 PM IST. For urgent matters, you can reach our emergency contact at +91-98765-43219.'
  },
  {
    question: 'How do I register as a volunteer?',
    answer: 'You can register as a volunteer by filling out our volunteer registration form on the website, calling our volunteer coordination team, or visiting any of our regional offices.'
  },
  {
    question: 'Can I visit your office?',
    answer: 'Yes! We welcome visitors at all our regional offices. Please call ahead to schedule an appointment, especially if you\'re coming for a specific purpose like volunteer registration or partnership discussions.'
  },
  {
    question: 'How quickly do you respond to inquiries?',
    answer: 'We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call our emergency contact number.'
  },
  {
    question: 'Do you have offices in other cities?',
    answer: 'Yes, we have regional offices in Delhi (Central), Mumbai, Bangalore, and Chennai. Each office serves its respective region and specific project areas.'
  }
];

export const contactFeatures = [
  {
    icon: Clock,
    title: 'Quick Response',
    description: 'We respond to all inquiries within 24 hours',
    color: 'text-green-600'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Dedicated team members for each department',
    color: 'text-blue-600'
  },
  {
    icon: Globe,
    title: 'Multiple Locations',
    description: 'Regional offices across major Indian cities',
    color: 'text-purple-600'
  },
  {
    icon: MessageCircle,
    title: 'Multiple Channels',
    description: 'Email, phone, social media, and in-person',
    color: 'text-orange-600'
  }
];

// Helper functions
export const getDepartmentById = (id: string) => {
  return contactDepartments.find(dept => dept.id === id);
};

export const getLocationById = (id: string) => {
  return contactLocations.find(location => location.id === id);
};

export const getFormById = (id: string) => {
  return contactForms.find(form => form.id === id);
};

export const getDepartmentsByService = (service: string) => {
  return contactDepartments.filter(dept => 
    dept.description.toLowerCase().includes(service.toLowerCase())
  );
}; 