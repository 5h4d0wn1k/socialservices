// Centralized team data for the entire website
import { Award, Users, Globe, Heart, Leaf, Shield, BookOpen, Star } from 'lucide-react';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  position: string;
  image: string;
  bio: string;
  shortBio: string;
  experience: string;
  education: string;
  skills: string[];
  achievements: string[];
  socialMedia: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    facebook?: string;
  };
  contact: {
    email: string;
    phone?: string;
  };
  location: string;
  joinDate: string;
  featured: boolean;
  category: 'leadership' | 'volunteer' | 'advisor' | 'partner';
}

export const teamCategories = [
  { id: 'leadership', name: 'Leadership Team', icon: Star, description: 'Core leadership and management team' },
  { id: 'volunteer', name: 'Volunteer Leaders', icon: Users, description: 'Dedicated volunteer coordinators and leaders' },
  { id: 'advisor', name: 'Advisory Board', icon: Award, description: 'Expert advisors and mentors' },
  { id: 'partner', name: 'Partners', icon: Globe, description: 'Strategic partners and collaborators' }
];

export const teamMembers: TeamMember[] = [
  {
    id: 'rahul-sharma',
    name: 'Rahul Sharma',
    role: 'Founder & CEO',
    position: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Rahul Sharma is the visionary founder of Shadownik, with over 15 years of experience in social work and community development. He started his journey as a volunteer and has dedicated his life to creating positive change through grassroots initiatives.',
    shortBio: 'Visionary leader with 15+ years in social work and community development',
    experience: '15+ years in social work, community development, and NGO management',
    education: 'Masters in Social Work, Delhi University',
    skills: ['Leadership', 'Community Development', 'Strategic Planning', 'Team Management'],
    achievements: [
      'Founded Shadownik in 2018',
      'Led 100+ successful projects',
      'Recipient of National Social Work Award 2023',
      'Featured in Forbes 30 Under 30 Social Entrepreneurs'
    ],
    socialMedia: {
      linkedin: 'linkedin.com/in/rahul-sharma-shadownik',
      twitter: '@rahulshadownik'
    },
    contact: {
      email: 'rahul@shadownik.org',
      phone: '+91-98765-43210'
    },
    location: 'Delhi, India',
    joinDate: '2018-01-01',
    featured: true,
    category: 'leadership'
  },
  {
    id: 'priya-patel',
    name: 'Priya Patel',
    role: 'Operations Director',
    position: 'Director of Operations',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80',
    bio: 'Priya Patel oversees all operational aspects of Shadownik, ensuring smooth execution of projects and efficient resource management. With her background in project management and social work, she has streamlined our processes and expanded our reach.',
    shortBio: 'Operations expert with 12+ years in project management and social work',
    experience: '12+ years in project management, operations, and social work',
    education: 'MBA in Social Enterprise Management, IIM Ahmedabad',
    skills: ['Operations Management', 'Project Management', 'Resource Planning', 'Team Coordination'],
    achievements: [
      'Streamlined operations across 25+ locations',
      'Increased volunteer retention by 40%',
      'Led successful expansion to 5 new states',
      'Recipient of Excellence in Operations Award 2022'
    ],
    socialMedia: {
      linkedin: 'linkedin.com/in/priya-patel-shadownik',
      twitter: '@priyashadownik'
    },
    contact: {
      email: 'priya@shadownik.org',
      phone: '+91-98765-43211'
    },
    location: 'Mumbai, India',
    joinDate: '2019-03-15',
    featured: true,
    category: 'leadership'
  },
  {
    id: 'aravind-kumar',
    name: 'Aravind Kumar',
    role: 'Environmental Lead',
    position: 'Head of Environmental Initiatives',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    bio: 'Aravind Kumar leads our environmental initiatives with expertise in conservation and sustainability. He has pioneered innovative approaches to waste management and tree plantation programs across India.',
    shortBio: 'Environmental expert leading conservation and sustainability initiatives',
    experience: '10+ years in environmental conservation and sustainability',
    education: 'Masters in Environmental Science, IISc Bangalore',
    skills: ['Environmental Conservation', 'Sustainability', 'Waste Management', 'Tree Plantation'],
    achievements: [
      'Led 50+ environmental projects',
      'Planted 100,000+ trees across India',
      'Developed innovative waste management solutions',
      'Recipient of Green Warrior Award 2023'
    ],
    socialMedia: {
      linkedin: 'linkedin.com/in/aravind-kumar-shadownik',
      twitter: '@aravindgreen'
    },
    contact: {
      email: 'aravind@shadownik.org',
      phone: '+91-98765-43212'
    },
    location: 'Bangalore, India',
    joinDate: '2020-06-01',
    featured: true,
    category: 'leadership'
  },
  {
    id: 'meera-devi',
    name: 'Meera Devi',
    role: 'Education Coordinator',
    position: 'Head of Education Programs',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
    bio: 'Meera Devi coordinates our education programs, bringing her passion for teaching and child development to create impactful learning experiences for underprivileged children.',
    shortBio: 'Education specialist with 8+ years in child development and teaching',
    experience: '8+ years in education, child development, and community teaching',
    education: 'Masters in Education, Delhi University',
    skills: ['Education', 'Child Development', 'Curriculum Design', 'Mentoring'],
    achievements: [
      'Developed 20+ educational programs',
      'Supported 500+ children in education',
      'Created innovative learning methodologies',
      'Recipient of Education Excellence Award 2022'
    ],
    socialMedia: {
      linkedin: 'linkedin.com/in/meera-devi-shadownik',
      twitter: '@meeraeducation'
    },
    contact: {
      email: 'meera@shadownik.org',
      phone: '+91-98765-43213'
    },
    location: 'Delhi, India',
    joinDate: '2021-01-10',
    featured: false,
    category: 'volunteer'
  },
  {
    id: 'krishna-menon',
    name: 'Krishna Menon',
    role: 'Wildlife Conservation Lead',
    position: 'Wildlife Conservation Specialist',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    bio: 'Krishna Menon specializes in wildlife conservation and has led numerous successful projects protecting endangered species and their habitats across India.',
    shortBio: 'Wildlife conservation expert with 12+ years in animal protection',
    experience: '12+ years in wildlife conservation and animal protection',
    education: 'Masters in Wildlife Biology, Wildlife Institute of India',
    skills: ['Wildlife Conservation', 'Animal Protection', 'Habitat Restoration', 'Community Education'],
    achievements: [
      'Protected 10+ endangered species',
      'Restored 5 wildlife habitats',
      'Trained 200+ community volunteers',
      'Recipient of Wildlife Conservation Award 2023'
    ],
    socialMedia: {
      linkedin: 'linkedin.com/in/krishna-menon-shadownik',
      twitter: '@krishnawildlife'
    },
    contact: {
      email: 'krishna@shadownik.org',
      phone: '+91-98765-43214'
    },
    location: 'Kerala, India',
    joinDate: '2020-09-15',
    featured: false,
    category: 'volunteer'
  },
  {
    id: 'dr-anjali-reddy',
    name: 'Dr. Anjali Reddy',
    role: 'Healthcare Advisor',
    position: 'Medical Advisor',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
    bio: 'Dr. Anjali Reddy provides medical expertise and guidance for our healthcare initiatives, ensuring quality medical care reaches underserved communities.',
    shortBio: 'Medical expert with 15+ years in public health and community medicine',
    experience: '15+ years in public health, community medicine, and rural healthcare',
    education: 'MBBS, MD in Community Medicine, AIIMS Delhi',
    skills: ['Public Health', 'Community Medicine', 'Rural Healthcare', 'Medical Training'],
    achievements: [
      'Led 100+ medical camps',
      'Treated 10,000+ patients',
      'Trained 50+ medical volunteers',
      'Recipient of Public Health Excellence Award 2022'
    ],
    socialMedia: {
      linkedin: 'linkedin.com/in/dr-anjali-reddy-shadownik'
    },
    contact: {
      email: 'anjali@shadownik.org',
      phone: '+91-98765-43215'
    },
    location: 'Hyderabad, India',
    joinDate: '2021-03-20',
    featured: false,
    category: 'advisor'
  },
  {
    id: 'professor-rajesh-kumar',
    name: 'Prof. Rajesh Kumar',
    role: 'Academic Advisor',
    position: 'Education Advisor',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    bio: 'Professor Rajesh Kumar brings academic expertise and research insights to our education programs, helping develop innovative learning methodologies.',
    shortBio: 'Academic expert with 20+ years in education research and policy',
    experience: '20+ years in education research, policy, and academic leadership',
    education: 'PhD in Education, Delhi University',
    skills: ['Education Research', 'Policy Development', 'Curriculum Design', 'Academic Leadership'],
    achievements: [
      'Published 50+ research papers',
      'Developed 10+ educational policies',
      'Mentored 100+ educators',
      'Recipient of Academic Excellence Award 2023'
    ],
    socialMedia: {
      linkedin: 'linkedin.com/in/prof-rajesh-kumar-shadownik'
    },
    contact: {
      email: 'rajesh@shadownik.org',
      phone: '+91-98765-43216'
    },
    location: 'Delhi, India',
    joinDate: '2022-01-05',
    featured: false,
    category: 'advisor'
  }
];

// Featured team members for homepage and other sections
export const featuredTeamMembers = teamMembers.filter(member => member.featured);

// Team members by category
export const getTeamMembersByCategory = (categoryId: string) => {
  return teamMembers.filter(member => member.category === categoryId);
};

// Leadership team
export const leadershipTeam = getTeamMembersByCategory('leadership');

// Volunteer leaders
export const volunteerLeaders = getTeamMembersByCategory('volunteer');

// Advisory board
export const advisoryBoard = getTeamMembersByCategory('advisor');

// Partners
export const partners = getTeamMembersByCategory('partner');

// Search team members
export const searchTeamMembers = (query: string) => {
  const searchTerm = query.toLowerCase();
  return teamMembers.filter(member =>
    member.name.toLowerCase().includes(searchTerm) ||
    member.role.toLowerCase().includes(searchTerm) ||
    member.bio.toLowerCase().includes(searchTerm) ||
    member.skills.some(skill => skill.toLowerCase().includes(searchTerm))
  );
};

// Team statistics
export const teamStats = {
  total: teamMembers.length,
  leadership: leadershipTeam.length,
  volunteers: volunteerLeaders.length,
  advisors: advisoryBoard.length,
  partners: partners.length,
  featured: featuredTeamMembers.length
}; 