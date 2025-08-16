// Centralized content for the Home page
import { HandHeart, Award as AwardIcon, Users as UsersIcon, Globe2 } from 'lucide-react';

export const heroBackgrounds = [
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80',
    alt: 'Majestic Indian mountains and forests',
    overlay: 'from-black/60 via-black/40 to-green-900/50'
  },
  {
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=2000&q=80',
    alt: 'Elephants in Indian wildlife sanctuary',
    overlay: 'from-black/50 via-black/30 to-green-900/40'
  },
  {
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=2000&q=80',
    alt: 'Diverse community of volunteers working together',
    overlay: 'from-black/70 via-black/50 to-green-900/60'
  },
  {
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=2000&q=80',
    alt: 'Traditional Indian village life',
    overlay: 'from-black/60 via-black/40 to-green-900/50'
  },
  {
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=2000&q=80',
    alt: 'Lush green forests and nature',
    overlay: 'from-black/50 via-black/30 to-green-900/40'
  }
];

export const floatingElements = [
  { icon: '🌱', text: 'Environmental Impact', delay: '0s' },
  { icon: '🤝', text: 'Community Service', delay: '1s' },
  { icon: '🏥', text: 'Healthcare Support', delay: '2s' },
  { icon: '📚', text: 'Education Programs', delay: '3s' },
  { icon: '🐘', text: 'Wildlife Protection', delay: '4s' },
  { icon: '🌿', text: 'Tree Plantation', delay: '5s' }
];

export const testimonials = [
  {
    name: 'Aarav Sharma',
    quote: 'Volunteering with Shadownik gave me purpose and lifelong friends. We are truly changing lives together.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Priya Patel',
    quote: 'I never thought my small actions could have such a big impact. Shadownik made it possible.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Rohan Gupta',
    quote: 'The team spirit and kindness here is unmatched. Join us and feel the difference!',
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
];

export const partners = [
  { name: 'UN SDG', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/UN_SDG_Logo.svg' },
  { name: 'WWF', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WWF_logo.svg' },
  { name: 'Rotary', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Rotary_International_logo.svg' },
];

export const featuredMedia = [
  { name: 'BBC', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/BBC_News_2022_%28Alt%29.svg' },
  { name: 'NDTV', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/NDTV_logo.svg' },
  { name: 'Times of India', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/The_Times_of_India_Logo.svg' },
  { name: 'The Hindu', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/The_Hindu_Logo.svg' },
  { name: 'Awwwards', logo: 'https://www.awwwards.com/assets/images/awwwards-logo.svg' },
];

export const whyVolunteer = [
  {
    icon: HandHeart,
    title: 'Real Impact',
    desc: 'Every hour you give changes lives and communities—see your impact in action.'
  },
  {
    icon: AwardIcon,
    title: 'Recognition',
    desc: 'Earn swags, certificates, and public recognition for your dedication.'
  },
  {
    icon: UsersIcon,
    title: 'Lifelong Friends',
    desc: 'Join a family of passionate, like-minded changemakers from across India.'
  },
  {
    icon: Globe2,
    title: 'Global Movement',
    desc: 'Be part of a movement that scales from local teams to global leadership.'
  },
];

export const latestNews = [
  {
    title: 'Shadownik wins Awwwards Site of the Day!',
    date: '2024-05-01',
    summary: 'Our new website is recognized for design and impact by Awwwards.',
    link: '#',
  },
  {
    title: 'ECO Warriors clean up 10,000kg of waste in Mumbai',
    date: '2024-04-20',
    summary: 'A record-breaking community effort led by our volunteers.',
    link: '#',
  },
  {
    title: 'Shadownik launches new education initiative',
    date: '2024-03-15',
    summary: 'Empowering underprivileged children with mentorship and resources.',
    link: '#',
  },
];