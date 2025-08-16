// Centralized volunteer data for the entire website
import { Users, Award, Clock, MapPin, Heart, BookOpen, Shield, Globe, Star, CheckCircle } from 'lucide-react';

export interface VolunteerOpportunity {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: string;
  location: string;
  duration: string;
  timeCommitment: string;
  requirements: string[];
  benefits: string[];
  skills: string[];
  ageGroup: 'all' | '16+' | '18+' | '21+';
  experience: 'beginner' | 'intermediate' | 'advanced';
  remote: boolean;
  featured: boolean;
  urgent: boolean;
  spotsAvailable: number;
  spotsFilled: number;
  startDate: string;
  endDate?: string;
  image: string;
  contactPerson: string;
  contactEmail: string;
  contactPhone: string;
}

export interface VolunteerRegistration {
  id: string;
  title: string;
  description: string;
  steps: string[];
  requirements: string[];
  documents: string[];
  timeline: string;
  benefits: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

export const volunteerCategories = [
  { id: 'environment', name: 'Environmental', icon: Shield, color: 'green', description: 'Tree planting, waste management, conservation' },
  { id: 'education', name: 'Education', icon: BookOpen, color: 'blue', description: 'Teaching, mentoring, skill development' },
  { id: 'healthcare', name: 'Healthcare', icon: Heart, color: 'red', description: 'Medical camps, elderly care, health awareness' },
  { id: 'community', name: 'Community', icon: Users, color: 'purple', description: 'Community development, social welfare' },
  { id: 'wildlife', name: 'Wildlife', icon: Shield, color: 'orange', description: 'Animal protection, wildlife conservation' },
  { id: 'remote', name: 'Remote', icon: Globe, color: 'indigo', description: 'Online volunteering, virtual support' }
];

export const volunteerOpportunities: VolunteerOpportunity[] = [
  {
    id: 'eco-warriors-mumbai-volunteer',
    title: 'ECO Warriors Mumbai Volunteer',
    description: 'Join our beach and public space clean-up initiative in Mumbai. Help us keep the city clean and raise environmental awareness.',
    shortDescription: 'Beach and public space clean-up in Mumbai',
    category: 'environment',
    location: 'Mumbai, Maharashtra',
    duration: 'Ongoing',
    timeCommitment: '4-6 hours per week',
    requirements: ['Age 16+', 'Physical fitness', 'Commitment to regular participation'],
    benefits: ['Environmental impact certificate', 'Community recognition', 'Skill development'],
    skills: ['Teamwork', 'Communication', 'Environmental awareness'],
    ageGroup: '16+',
    experience: 'beginner',
    remote: false,
    featured: true,
    urgent: true,
    spotsAvailable: 15,
    spotsFilled: 35,
    startDate: '2024-05-01',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
    contactPerson: 'Priya Sharma',
    contactEmail: 'eco.mumbai@shadownik.org',
    contactPhone: '+91-98765-43210'
  },
  {
    id: 'education-support-delhi-volunteer',
    title: 'Education Support Delhi Volunteer',
    description: 'Help underprivileged children with their education through tutoring, mentoring, and educational activities.',
    shortDescription: 'Support children with education in Delhi',
    category: 'education',
    location: 'Delhi, NCR',
    duration: 'Ongoing',
    timeCommitment: '6-8 hours per week',
    requirements: ['Age 18+', 'Patience with children', 'Basic teaching skills'],
    benefits: ['Teaching experience', 'Child development certificate', 'Community impact'],
    skills: ['Teaching', 'Patience', 'Communication', 'Child development'],
    ageGroup: '18+',
    experience: 'beginner',
    remote: false,
    featured: true,
    urgent: false,
    spotsAvailable: 5,
    spotsFilled: 25,
    startDate: '2024-05-15',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
    contactPerson: 'Rahul Verma',
    contactEmail: 'education.delhi@shadownik.org',
    contactPhone: '+91-98765-43211'
  },
  {
    id: 'elder-care-bangalore-volunteer',
    title: 'Elder Care Bangalore Volunteer',
    description: 'Provide companionship and support to elderly community members through regular visits and social activities.',
    shortDescription: 'Provide companionship to elderly in Bangalore',
    category: 'healthcare',
    location: 'Bangalore, Karnataka',
    duration: 'Ongoing',
    timeCommitment: '2-4 hours per week',
    requirements: ['Age 18+', 'Empathy', 'Reliability', '2 hours/week commitment'],
    benefits: ['Healthcare experience', 'Elder care certificate', 'Life experience'],
    skills: ['Empathy', 'Communication', 'Patience', 'Healthcare awareness'],
    ageGroup: '18+',
    experience: 'beginner',
    remote: false,
    featured: true,
    urgent: false,
    spotsAvailable: 2,
    spotsFilled: 18,
    startDate: '2024-05-10',
    image: 'https://images.unsplash.com/photo-1516307365426-d8ac0056203e?auto=format&fit=crop&w=800&q=80',
    contactPerson: 'Anjali Patel',
    contactEmail: 'eldercare.bangalore@shadownik.org',
    contactPhone: '+91-98765-43212'
  },
  {
    id: 'digital-literacy-remote',
    title: 'Digital Literacy Remote Volunteer',
    description: 'Teach digital skills to underprivileged communities through online platforms and virtual mentoring.',
    shortDescription: 'Teach digital skills remotely',
    category: 'remote',
    location: 'Remote (India-wide)',
    duration: 'Ongoing',
    timeCommitment: '3-5 hours per week',
    requirements: ['Age 18+', 'Computer skills', 'Teaching ability', 'Stable internet'],
    benefits: ['Teaching certificate', 'Digital skills', 'Remote work experience'],
    skills: ['Computer skills', 'Teaching', 'Communication', 'Patience'],
    ageGroup: '18+',
    experience: 'intermediate',
    remote: true,
    featured: false,
    urgent: false,
    spotsAvailable: 10,
    spotsFilled: 20,
    startDate: '2024-05-20',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    contactPerson: 'Meera Shah',
    contactEmail: 'digital.remote@shadownik.org',
    contactPhone: '+91-98765-43213'
  },
  {
    id: 'wildlife-conservation-kerala',
    title: 'Wildlife Conservation Kerala Volunteer',
    description: 'Protect and conserve wildlife in Kerala through awareness campaigns and habitat restoration.',
    shortDescription: 'Protect wildlife in Kerala forests',
    category: 'wildlife',
    location: 'Kerala',
    duration: 'Ongoing',
    timeCommitment: '8-12 hours per week',
    requirements: ['Age 18+', 'Physical fitness', 'Forest experience preferred'],
    benefits: ['Wildlife conservation certificate', 'Forest experience', 'Environmental impact'],
    skills: ['Physical fitness', 'Environmental awareness', 'Teamwork'],
    ageGroup: '18+',
    experience: 'intermediate',
    remote: false,
    featured: false,
    urgent: true,
    spotsAvailable: 3,
    spotsFilled: 12,
    startDate: '2024-05-05',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
    contactPerson: 'Krishna Menon',
    contactEmail: 'wildlife.kerala@shadownik.org',
    contactPhone: '+91-98765-43214'
  },
  {
    id: 'community-development-chennai',
    title: 'Community Development Chennai Volunteer',
    description: 'Empower local communities through skill development and women empowerment programs.',
    shortDescription: 'Empower communities through skill development',
    category: 'community',
    location: 'Chennai, Tamil Nadu',
    duration: 'Ongoing',
    timeCommitment: '6-10 hours per week',
    requirements: ['Age 18+', 'Teaching skills', 'Community experience'],
    benefits: ['Community development certificate', 'Leadership experience', 'Social impact'],
    skills: ['Teaching', 'Leadership', 'Community engagement', 'Communication'],
    ageGroup: '18+',
    experience: 'intermediate',
    remote: false,
    featured: false,
    urgent: false,
    spotsAvailable: 5,
    spotsFilled: 20,
    startDate: '2024-05-25',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    contactPerson: 'Lakshmi Devi',
    contactEmail: 'community.chennai@shadownik.org',
    contactPhone: '+91-98765-43215'
  }
];

export const volunteerRegistration: VolunteerRegistration = {
  id: 'volunteer-registration',
  title: 'Become a Volunteer',
  description: 'Join our movement and make a real difference in communities across India. No experience required - just your willingness to help!',
  steps: [
    'Fill out the registration form below',
    'Attend our orientation session (online or in-person)',
    'Choose a project that matches your interests and schedule',
    'Complete the onboarding process',
    'Start volunteering and making an impact!'
  ],
  requirements: [
    'Age 16 or older (some projects require 18+)',
    'Commitment to regular participation',
    'Willingness to learn and contribute',
    'Valid government ID for verification',
    'Emergency contact information'
  ],
  documents: [
    'Government ID (Aadhaar, PAN, or Passport)',
    'Recent photograph',
    'Emergency contact details',
    'Availability schedule',
    'Skills and interests form'
  ],
  timeline: 'Registration process takes 2-3 business days. You\'ll receive confirmation and next steps within 24 hours.',
  benefits: [
    'Make a real impact in your community',
    'Gain valuable skills and experience',
    'Earn certificates and recognition',
    'Build lasting friendships',
    'Contribute to meaningful causes',
    'Flexible time commitment options',
    'Training and support provided',
    'Opportunity for leadership roles'
  ],
  faq: [
    {
      question: 'Do I need any special skills to volunteer?',
      answer: 'No special skills are required for most projects. We provide training and support for all volunteers. The most important requirement is your commitment and willingness to make a difference.'
    },
    {
      question: 'How much time do I need to commit?',
      answer: 'Time commitment varies by project, but most volunteers commit 4-8 hours per week. We have flexible options to accommodate different schedules and availability.'
    },
    {
      question: 'Can I volunteer remotely?',
      answer: 'Yes! We have several remote volunteering opportunities including online teaching, content creation, social media management, and virtual mentoring programs.'
    },
    {
      question: 'What training will I receive?',
      answer: 'All volunteers receive orientation training covering our mission, safety guidelines, and project-specific training. Ongoing support is provided throughout your volunteering journey.'
    },
    {
      question: 'Will I receive any recognition?',
      answer: 'Yes! Volunteers receive certificates, badges, and recognition for their contributions. We also celebrate outstanding volunteers through awards and public recognition programs.'
    }
  ]
};

export const volunteerBenefits = [
  {
    icon: Heart,
    title: 'Make Real Impact',
    description: 'See the direct impact of your work on communities and individuals. Every hour you give changes lives.',
    color: 'text-red-500'
  },
  {
    icon: Award,
    title: 'Earn Recognition',
    description: 'Receive certificates, badges, and public recognition for your dedication and contributions.',
    color: 'text-yellow-500'
  },
  {
    icon: Users,
    title: 'Build Community',
    description: 'Join a family of passionate, like-minded changemakers from across India.',
    color: 'text-blue-500'
  },
  {
    icon: BookOpen,
    title: 'Learn & Grow',
    description: 'Gain new skills, experience, and knowledge while contributing to meaningful causes.',
    color: 'text-green-500'
  },
  {
    icon: Star,
    title: 'Leadership Opportunities',
    description: 'Take on leadership roles and guide new volunteers in their journey.',
    color: 'text-purple-500'
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Connect with volunteers and organizations worldwide through our network.',
    color: 'text-indigo-500'
  }
];

export const volunteerTestimonials = [
  {
    name: 'Aarav Sharma',
    role: 'Environmental Volunteer',
    location: 'Mumbai',
    duration: '2 years',
    quote: 'Volunteering with Shadownik gave me purpose and lifelong friends. We are truly changing lives together.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    impact: 'Led 50+ beach cleanups, collected 2000kg waste'
  },
  {
    name: 'Priya Patel',
    role: 'Education Volunteer',
    location: 'Delhi',
    duration: '1.5 years',
    quote: 'I never thought my small actions could have such a big impact. Shadownik made it possible.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    impact: 'Mentored 25+ children, improved grades by 80%'
  },
  {
    name: 'Rohan Gupta',
    role: 'Healthcare Volunteer',
    location: 'Bangalore',
    duration: '3 years',
    quote: 'The team spirit and kindness here is unmatched. Join us and feel the difference!',
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
    impact: 'Supported 100+ elderly, organized 20 medical camps'
  },
  {
    name: 'Meera Devi',
    role: 'Community Volunteer',
    location: 'Chennai',
    duration: '1 year',
    quote: 'Volunteering here has taught me more about life than any classroom ever could.',
    image: 'https://randomuser.me/api/portraits/women/28.jpg',
    impact: 'Empowered 50+ women, taught 15 skills'
  }
];

export const volunteerStats = {
  total: 1200,
  active: 850,
  newThisMonth: 45,
  retentionRate: 85,
  projects: 70,
  locations: 25,
  hoursVolunteered: 50000,
  livesTouched: 15000
};

// Helper functions
export const getVolunteerOpportunitiesByCategory = (categoryId: string) => {
  return volunteerOpportunities.filter(opportunity => opportunity.category === categoryId);
};

export const getUrgentOpportunities = () => {
  return volunteerOpportunities.filter(opportunity => opportunity.urgent);
};

export const getFeaturedOpportunities = () => {
  return volunteerOpportunities.filter(opportunity => opportunity.featured);
};

export const getRemoteOpportunities = () => {
  return volunteerOpportunities.filter(opportunity => opportunity.remote);
};

export const searchVolunteerOpportunities = (query: string) => {
  const searchTerm = query.toLowerCase();
  return volunteerOpportunities.filter(opportunity =>
    opportunity.title.toLowerCase().includes(searchTerm) ||
    opportunity.description.toLowerCase().includes(searchTerm) ||
    opportunity.location.toLowerCase().includes(searchTerm) ||
    opportunity.skills.some(skill => skill.toLowerCase().includes(searchTerm))
  );
}; 