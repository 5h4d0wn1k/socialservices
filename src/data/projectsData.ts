// Centralized projects data for the entire website
import { Leaf, Users, Heart, BookOpen, Shield, Globe, Award, Clock, MapPin, Users as UsersIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: string;
  image: string;
  status: 'active' | 'completed' | 'upcoming';
  location: string;
  duration: string;
  volunteersNeeded: number;
  currentVolunteers: number;
  impact: string;
  tags: string[];
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  requirements: string[];
  benefits: string[];
  contactPerson: string;
  contactEmail: string;
  contactPhone: string;
  socialMedia?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

export const projectCategories = [
  { id: 'environment', name: 'Environment', icon: Leaf, color: 'green', description: 'Tree planting, waste management, and conservation efforts' },
  { id: 'education', name: 'Education', icon: BookOpen, color: 'blue', description: 'Teaching, mentoring, and educational support programs' },
  { id: 'healthcare', name: 'Healthcare', icon: Heart, color: 'red', description: 'Medical camps, health awareness, and elderly care' },
  { id: 'community', name: 'Community', icon: Users, color: 'purple', description: 'Community development and social welfare initiatives' },
  { id: 'wildlife', name: 'Wildlife', icon: Shield, color: 'orange', description: 'Animal protection and wildlife conservation' },
  { id: 'global', name: 'Global', icon: Globe, color: 'indigo', description: 'International projects and cross-border initiatives' }
];

export const projects: Project[] = [
  {
    id: 'eco-warriors-mumbai',
    title: 'ECO Warriors Mumbai',
    description: 'A comprehensive environmental initiative focused on cleaning up Mumbai\'s beaches and public spaces. Volunteers participate in regular clean-up drives, waste segregation workshops, and environmental awareness campaigns.',
    shortDescription: 'Join our beach and public space clean-up initiative in Mumbai',
    category: 'environment',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
    status: 'active',
    location: 'Mumbai, Maharashtra',
    duration: 'Ongoing',
    volunteersNeeded: 50,
    currentVolunteers: 35,
    impact: '10,000kg waste collected, 5 beaches cleaned',
    tags: ['beach-cleanup', 'waste-management', 'environmental-awareness'],
    featured: true,
    createdAt: '2024-01-15',
    updatedAt: '2024-05-01',
    requirements: ['Age 16+', 'Physical fitness', 'Commitment to 4 hours/week'],
    benefits: ['Environmental impact certificate', 'Community recognition', 'Skill development'],
    contactPerson: 'Priya Sharma',
    contactEmail: 'eco.mumbai@shadownik.org',
    contactPhone: '+91-98765-43210',
    socialMedia: {
      instagram: '@ecowarriorsmumbai',
      facebook: 'ECO Warriors Mumbai'
    }
  },
  {
    id: 'education-support-delhi',
    title: 'Education Support Delhi',
    description: 'Providing educational support to underprivileged children in Delhi through tutoring, mentoring, and resource distribution. Volunteers help with homework, teach basic skills, and organize educational activities.',
    shortDescription: 'Support underprivileged children with education in Delhi',
    category: 'education',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
    status: 'active',
    location: 'Delhi, NCR',
    duration: 'Ongoing',
    volunteersNeeded: 30,
    currentVolunteers: 25,
    impact: '150+ children supported, 80% improvement in grades',
    tags: ['education', 'mentoring', 'children', 'tutoring'],
    featured: true,
    createdAt: '2024-02-01',
    updatedAt: '2024-04-15',
    requirements: ['Age 18+', 'Patience with children', 'Basic teaching skills'],
    benefits: ['Teaching experience', 'Child development certificate', 'Community impact'],
    contactPerson: 'Rahul Verma',
    contactEmail: 'education.delhi@shadownik.org',
    contactPhone: '+91-98765-43211'
  },
  {
    id: 'elder-care-bangalore',
    title: 'Elder Care Bangalore',
    description: 'Providing companionship and support to elderly community members through regular visits, health check-ups, and social activities. Volunteers help with daily tasks, provide emotional support, and organize recreational activities.',
    shortDescription: 'Provide companionship and support to elderly community members',
    category: 'healthcare',
    image: 'https://images.unsplash.com/photo-1516307365426-d8ac0056203e?auto=format&fit=crop&w=800&q=80',
    status: 'active',
    location: 'Bangalore, Karnataka',
    duration: 'Ongoing',
    volunteersNeeded: 20,
    currentVolunteers: 18,
    impact: '45 elderly supported, 100+ visits completed',
    tags: ['elderly-care', 'companionship', 'healthcare', 'social-support'],
    featured: true,
    createdAt: '2024-01-20',
    updatedAt: '2024-04-20',
    requirements: ['Age 18+', 'Empathy', 'Reliability', '2 hours/week commitment'],
    benefits: ['Healthcare experience', 'Elder care certificate', 'Life experience'],
    contactPerson: 'Anjali Patel',
    contactEmail: 'eldercare.bangalore@shadownik.org',
    contactPhone: '+91-98765-43212'
  },
  {
    id: 'wildlife-protection-kerala',
    title: 'Wildlife Protection Kerala',
    description: 'Protecting and conserving wildlife in Kerala through awareness campaigns, habitat restoration, and anti-poaching initiatives. Volunteers participate in forest patrols, wildlife monitoring, and community education.',
    shortDescription: 'Protect and conserve wildlife in Kerala forests',
    category: 'wildlife',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
    status: 'active',
    location: 'Kerala',
    duration: 'Ongoing',
    volunteersNeeded: 15,
    currentVolunteers: 12,
    impact: '5 forest areas protected, 1000+ trees planted',
    tags: ['wildlife', 'conservation', 'forest-protection', 'awareness'],
    featured: false,
    createdAt: '2024-03-01',
    updatedAt: '2024-04-25',
    requirements: ['Age 18+', 'Physical fitness', 'Forest experience preferred'],
    benefits: ['Wildlife conservation certificate', 'Forest experience', 'Environmental impact'],
    contactPerson: 'Krishna Menon',
    contactEmail: 'wildlife.kerala@shadownik.org',
    contactPhone: '+91-98765-43213'
  },
  {
    id: 'community-development-chennai',
    title: 'Community Development Chennai',
    description: 'Empowering local communities in Chennai through skill development, women empowerment, and sustainable livelihood programs. Volunteers help with training, mentoring, and community organization.',
    shortDescription: 'Empower local communities through skill development',
    category: 'community',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    status: 'active',
    location: 'Chennai, Tamil Nadu',
    duration: 'Ongoing',
    volunteersNeeded: 25,
    currentVolunteers: 20,
    impact: '200+ women empowered, 15 skills taught',
    tags: ['community-development', 'skill-development', 'women-empowerment'],
    featured: false,
    createdAt: '2024-02-15',
    updatedAt: '2024-04-10',
    requirements: ['Age 18+', 'Teaching skills', 'Community experience'],
    benefits: ['Community development certificate', 'Leadership experience', 'Social impact'],
    contactPerson: 'Lakshmi Devi',
    contactEmail: 'community.chennai@shadownik.org',
    contactPhone: '+91-98765-43214'
  },
  {
    id: 'medical-camps-pune',
    title: 'Medical Camps Pune',
    description: 'Organizing free medical camps in rural areas around Pune, providing basic healthcare services, health awareness, and medical check-ups to underserved communities.',
    shortDescription: 'Provide free medical services in rural Pune',
    category: 'healthcare',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80',
    status: 'active',
    location: 'Pune, Maharashtra',
    duration: 'Monthly',
    volunteersNeeded: 40,
    currentVolunteers: 35,
    impact: '500+ patients treated, 10 camps organized',
    tags: ['medical-camps', 'healthcare', 'rural-health', 'awareness'],
    featured: false,
    createdAt: '2024-01-10',
    updatedAt: '2024-04-30',
    requirements: ['Age 18+', 'Medical background preferred', 'Weekend availability'],
    benefits: ['Medical experience', 'Healthcare certificate', 'Community service'],
    contactPerson: 'Dr. Amit Kumar',
    contactEmail: 'medical.pune@shadownik.org',
    contactPhone: '+91-98765-43215'
  },
  {
    id: 'tree-plantation-hyderabad',
    title: 'Tree Plantation Hyderabad',
    description: 'Large-scale tree plantation initiative in and around Hyderabad, focusing on native species, urban forestry, and creating green corridors for wildlife.',
    shortDescription: 'Plant trees and create green spaces in Hyderabad',
    category: 'environment',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80',
    status: 'active',
    location: 'Hyderabad, Telangana',
    duration: 'Ongoing',
    volunteersNeeded: 60,
    currentVolunteers: 45,
    impact: '5000+ trees planted, 20 locations covered',
    tags: ['tree-plantation', 'urban-forestry', 'environment', 'green-spaces'],
    featured: false,
    createdAt: '2024-01-05',
    updatedAt: '2024-04-28',
    requirements: ['Age 16+', 'Physical fitness', 'Commitment to maintenance'],
    benefits: ['Environmental certificate', 'Tree care skills', 'Community impact'],
    contactPerson: 'Srinivas Reddy',
    contactEmail: 'trees.hyderabad@shadownik.org',
    contactPhone: '+91-98765-43216'
  },
  {
    id: 'digital-literacy-ahmedabad',
    title: 'Digital Literacy Ahmedabad',
    description: 'Teaching digital skills to underprivileged communities in Ahmedabad, including basic computer operations, internet usage, and digital safety awareness.',
    shortDescription: 'Teach digital skills to underprivileged communities',
    category: 'education',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    status: 'active',
    location: 'Ahmedabad, Gujarat',
    duration: 'Ongoing',
    volunteersNeeded: 35,
    currentVolunteers: 28,
    impact: '300+ people trained, 15 centers established',
    tags: ['digital-literacy', 'computer-skills', 'education', 'technology'],
    featured: false,
    createdAt: '2024-02-20',
    updatedAt: '2024-04-15',
    requirements: ['Age 18+', 'Computer skills', 'Teaching ability'],
    benefits: ['Teaching certificate', 'Digital skills', 'Community impact'],
    contactPerson: 'Meera Shah',
    contactEmail: 'digital.ahmedabad@shadownik.org',
    contactPhone: '+91-98765-43217'
  }
];

// Featured projects for homepage and other sections
export const featuredProjects = projects.filter(project => project.featured);

// Projects by category
export const getProjectsByCategory = (categoryId: string) => {
  return projects.filter(project => project.category === categoryId);
};

// Active projects
export const activeProjects = projects.filter(project => project.status === 'active');

// Projects by location
export const getProjectsByLocation = (location: string) => {
  return projects.filter(project => 
    project.location.toLowerCase().includes(location.toLowerCase())
  );
};

// Search projects
export const searchProjects = (query: string) => {
  const searchTerm = query.toLowerCase();
  return projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm) ||
    project.description.toLowerCase().includes(searchTerm) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    project.category.toLowerCase().includes(searchTerm)
  );
};

// Project statistics
export const projectStats = {
  total: projects.length,
  active: activeProjects.length,
  completed: projects.filter(p => p.status === 'completed').length,
  upcoming: projects.filter(p => p.status === 'upcoming').length,
  totalVolunteers: projects.reduce((sum, p) => sum + p.currentVolunteers, 0),
  totalNeeded: projects.reduce((sum, p) => sum + p.volunteersNeeded, 0),
  categories: projectCategories.length
}; 