import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, ArrowRight, Users, Star, Leaf, Heart, BookOpen, HelpingHand, Award as AwardIcon, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import { Helmet } from 'react-helmet-async';

const heroVideos = [
  {
    src: 'https://www.w3schools.com/howto/rain.mp4',
    poster: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80',
    alt: 'Rain in nature',
  },
  {
    src: 'https://cdn.coverr.co/videos/coverr-forest-walk-1577975846657?token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJjb3ZlcnItdmlkZW8vY292ZXJyLWZvcmVzdC13YWxrLTE1Nzc5NzU4NDY2NTcubXA0In0.3Qw1QnQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQw',
    poster: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=1500&q=80',
    alt: 'Forest walk',
  },
  {
    src: 'https://cdn.coverr.co/videos/coverr-indian-village-1577975846657?token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJjb3ZlcnItdmlkZW8vY292ZXJyLWluZGlhbi12aWxsYWdlLTE1Nzc5NzU4NDY2NTcubXA0In0.3Qw1QnQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQw',
    poster: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1500&q=80',
    alt: 'Indian village',
  },
  {
    src: 'https://cdn.coverr.co/videos/coverr-wildlife-elephants-1577975846657?token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJjb3ZlcnItdmlkZW8vY292ZXJyLXdpbGRsaWZlLWVsZXBoYW50cy0xNTc3OTc1ODQ2NjU3Lm1wNCJ9.3Qw1QnQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQw',
    poster: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80',
    alt: 'Wildlife elephants',
  },
  {
    src: 'https://cdn.coverr.co/videos/coverr-community-people-1577975846657?token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJjb3ZlcnItdmlkZW8vY292ZXJyLWNvbW11bml0eS1wZW9wbGUtMTU3Nzk3NTg0NjY1Ny5tcDQifQ.3Qw1QnQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQw',
    poster: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1500&q=80',
    alt: 'Community people',
  },
];
const HERO_VIDEO_DURATION = 9000;

const allProjects = [
  {
    id: 1,
    title: "Education Support Program",
    category: "Education",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Help students achieve their educational goals through mentoring and tutoring programs.",
    duration: "3-6 months",
    schedule: "Flexible",
    volunteers: 25,
    tags: ['Award-winning'],
    gallery: [
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80"
    ],
    testimonials: [
      {
        name: "Asha K.",
        text: "Mentoring students here has been the most rewarding experience of my life."
      }
    ]
  },
  {
    id: 2,
    title: "Community Clean-up Initiative",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Join our efforts to keep communities clean and sustainable through regular clean-up drives.",
    duration: "Ongoing",
    schedule: "Weekends",
    volunteers: 50,
    tags: ['Urgent'],
    gallery: [
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
    ],
    testimonials: [
      {
        name: "Ravi S.",
        text: "Seeing the city transform after our clean-ups is incredible!"
      }
    ]
  },
  {
    id: 3,
    title: "Elder Care Support",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1516307365426-d8ac0056203e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Provide companionship and support to elderly community members through various programs.",
    duration: "Flexible",
    schedule: "Weekly",
    volunteers: 30,
    tags: [],
    gallery: [
      "https://images.unsplash.com/photo-1516307365426-d8ac0056203e?auto=format&fit=crop&w=800&q=80"
    ],
    testimonials: [
      {
        name: "Meena D.",
        text: "The smiles we bring to elders are priceless."
      }
    ]
  },
  {
    id: 4,
    title: "Food Bank Distribution",
    category: "Food Security",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Help distribute food to families in need through our network of food banks.",
    duration: "Ongoing",
    schedule: "Weekly",
    volunteers: 40,
    tags: [],
    gallery: [
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
    ],
    testimonials: [
      {
        name: "Suresh P.",
        text: "Distributing food is a humbling and joyful experience."
      }
    ]
  }
];

const categories = [
  { name: "All", icon: Star },
  { name: "Education", icon: BookOpen },
  { name: "Environment", icon: Leaf },
  { name: "Healthcare", icon: Heart },
  { name: "Food Security", icon: HelpingHand },
];

const impactStats = [
  { icon: Users, value: 1500, label: 'Volunteers' },
  { icon: Leaf, value: 80, label: 'Projects Completed' },
  { icon: Heart, value: 20000, label: 'Lives Impacted' }
];

const testimonials = [
  {
    name: "Priya S.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Volunteering with Shadownik has been life-changing. I’ve made friends, learned so much, and seen the real impact of our work in my city!"
  },
  {
    name: "Amit R.",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    text: "The community clean-ups are so much fun and rewarding. It’s amazing to see everyone come together for a cleaner India."
  }
];

const partners = [
  { name: 'UN SDG', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/UN_SDG_Logo.svg' },
  { name: 'WWF', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WWF_logo.svg' },
  { name: 'Rotary', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Rotary_International_logo.svg' },
];

// Animated counter hook
function useCountUp(end: number, duration = 2000) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    let current = 0;
    const step = () => {
      current += increment;
      if (ref.current) {
        ref.current.textContent = Math.floor(current).toLocaleString();
      }
      if (current < end) {
        requestAnimationFrame(step);
      } else if (ref.current) {
        ref.current.textContent = end.toLocaleString();
      }
    };
    step();
  }, [end, duration]);
  return ref;
}

type Project = typeof allProjects[number];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const projects = selectedCategory === "All"
    ? allProjects
    : allProjects.filter(p => p.category === selectedCategory);

  // Modal state
  const [modalProject, setModalProject] = useState<Project | null>(null);

  // Hero video carousel
  const [videoIdx, setVideoIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setVideoIdx((idx) => (idx + 1) % heroVideos.length);
    }, HERO_VIDEO_DURATION);
    return () => clearInterval(interval);
  }, []);

  const volunteersRef = useCountUp(impactStats[0].value);
  const projectsRef = useCountUp(impactStats[1].value);
  const livesRef = useCountUp(impactStats[2].value);

  return (
    <>
      <Helmet>
        <title>Projects – Shadownik | Volunteer, Community, Environment</title>
        <meta name="description" content="Explore Shadownik’s award-winning projects in education, environment, healthcare, and food security. Join us to make a real impact!" />
        <link rel="canonical" href="https://swnk.in/projects" />
        <meta property="og:title" content="Projects – Shadownik | Volunteer, Community, Environment" />
        <meta property="og:description" content="Explore Shadownik’s award-winning projects in education, environment, healthcare, and food security. Join us to make a real impact!" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80" />
        <meta property="og:url" content="https://swnk.in/projects" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projects – Shadownik | Volunteer, Community, Environment" />
        <meta name="twitter:description" content="Explore Shadownik’s award-winning projects in education, environment, healthcare, and food security. Join us to make a real impact!" />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80" />
      </Helmet>
      {/* Decorative background shapes */}
      <div aria-hidden="true" className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-100 rounded-full opacity-30 blur-2xl animate-float" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-2xl animate-float-slow" />
      </div>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden mb-12">
        {heroVideos.map((video, idx) => (
          <video
            key={video.src}
            autoPlay
            loop
            muted
            playsInline
            poster={video.poster}
            aria-label={video.alt}
            className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${videoIdx === idx ? 'opacity-80' : 'opacity-0'}`}
            style={{ transitionProperty: 'opacity' }}
          >
            <source src={video.src} type="video/mp4" />
          </video>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-green-900/40 z-0" />
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4 py-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-white drop-shadow mb-4">Our Projects</h1>
          <p className="text-xl text-green-100 drop-shadow mb-2">Discover how you can make a difference in your community and beyond.</p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="mb-12 animate-fade-in-up">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center bg-white rounded-xl shadow-md px-8 py-6 min-w-[180px]">
            <Users className="h-8 w-8 text-green-600 mb-2" />
            <span className="text-3xl font-bold text-green-800"><span ref={volunteersRef}>0</span>+</span>
            <span className="text-gray-600 mt-1">Volunteers</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow-md px-8 py-6 min-w-[180px]">
            <Leaf className="h-8 w-8 text-green-600 mb-2" />
            <span className="text-3xl font-bold text-green-800"><span ref={projectsRef}>0</span>+</span>
            <span className="text-gray-600 mt-1">Projects Completed</span>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow-md px-8 py-6 min-w-[180px]">
            <Heart className="h-8 w-8 text-green-600 mb-2" />
            <span className="text-3xl font-bold text-green-800"><span ref={livesRef}>0</span>+</span>
            <span className="text-gray-600 mt-1">Lives Impacted</span>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="mb-8 text-center animate-fade-in-up">
        <div className="inline-flex bg-green-50 rounded-full shadow px-2 py-1">
          {categories.map(cat => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all duration-200 ${selectedCategory === cat.name ? 'bg-green-600 text-white' : 'text-green-700 hover:bg-green-100'}`}
            >
              <cat.icon className="h-5 w-5" />
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="mb-16 animate-fade-in-up relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-xl overflow-hidden group transition-transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer" onClick={() => setModalProject(project)} tabIndex={0} aria-label={`View details for ${project.title}`}> 
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 text-sm font-semibold bg-white text-green-700 rounded-full shadow-md">
                  {project.category}
                </span>
                <div className="absolute top-4 right-4 flex gap-2">
                  {project.tags?.includes('Award-winning') && <span className="px-2 py-1 text-xs bg-yellow-300 text-yellow-900 rounded-full flex items-center gap-1"><AwardIcon className="h-4 w-4" /> Award-winning</span>}
                  {project.tags?.includes('Urgent') && <span className="px-2 py-1 text-xs bg-red-200 text-red-700 rounded-full flex items-center gap-1"><Zap className="h-4 w-4" /> Urgent</span>}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-green-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">{project.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">{project.schedule}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">{project.volunteers} volunteers needed</span>
                  </div>
                </div>
                <Link
                  to="/register"
                  className="inline-flex items-center px-5 py-2 bg-green-600 text-white rounded-full font-semibold shadow hover:bg-green-700 transition-colors"
                  onClick={e => e.stopPropagation()}
                >
                  Volunteer Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Project Detail Modal */}
      {modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 animate-fade-in" role="dialog" aria-modal="true" aria-label={`Details for ${modalProject.title}`}> 
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative animate-fade-in-up">
            <button className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold" onClick={() => setModalProject(null)} aria-label="Close details">&times;</button>
            <h2 className="text-3xl font-bold mb-2 text-green-800">{modalProject.title}</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">{modalProject.category}</span>
              {modalProject.tags?.map((tag, i) => (
                <span key={i} className={`px-3 py-1 text-xs rounded-full ${tag === 'Award-winning' ? 'bg-yellow-300 text-yellow-900' : tag === 'Urgent' ? 'bg-red-200 text-red-700' : 'bg-gray-200 text-gray-700'}`}>{tag}</span>
              ))}
            </div>
            <div className="flex gap-4 mb-4 overflow-x-auto">
              {modalProject.gallery?.map((img, i) => (
                <img key={i} src={img} alt={modalProject.title + ' photo'} className="h-32 w-32 object-cover rounded-lg shadow" />
              ))}
            </div>
            <p className="mb-4 text-gray-700">{modalProject.description}</p>
            <div className="mb-4">
              <div className="flex items-center mb-2"><Calendar className="h-5 w-5 text-gray-400 mr-2" /><span>{modalProject.duration}</span></div>
              <div className="flex items-center mb-2"><Clock className="h-5 w-5 text-gray-400 mr-2" /><span>{modalProject.schedule}</span></div>
              <div className="flex items-center mb-2"><Users className="h-5 w-5 text-gray-400 mr-2" /><span>{modalProject.volunteers} volunteers needed</span></div>
            </div>
            {modalProject.testimonials?.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold text-green-700 mb-2">Volunteer Stories</h4>
                {modalProject.testimonials.map((t, i) => (
                  <blockquote key={i} className="italic text-gray-600 border-l-4 border-green-400 pl-4 mb-2">“{t.text}” <span className="block text-xs text-green-700 mt-1">– {t.name}</span></blockquote>
                ))}
              </div>
            )}
            <div className="text-right">
              <Link to="/register" className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-bold shadow hover:bg-green-700 transition-colors">
                Join This Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* How to Join Stepper */}
      <section className="py-16 bg-green-50 animate-fade-in-up relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-green-800 mb-8">How to Join a Project</h2>
          <ol className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0 md:space-x-8">
            <li className="flex flex-col items-center">
              <span className="bg-green-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-2xl font-bold mb-2">1</span>
              <span className="font-semibold mb-1">Browse Projects</span>
              <span className="text-gray-500 text-sm">Find a cause that inspires you</span>
            </li>
            <li className="flex flex-col items-center">
              <span className="bg-green-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-2xl font-bold mb-2">2</span>
              <span className="font-semibold mb-1">View Details</span>
              <span className="text-gray-500 text-sm">Learn more about the project’s impact</span>
            </li>
            <li className="flex flex-col items-center">
              <span className="bg-green-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-2xl font-bold mb-2">3</span>
              <span className="font-semibold mb-1">Sign Up</span>
              <span className="text-gray-500 text-sm">Register and join the movement</span>
            </li>
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16 animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-green-800 mb-8">What Our Volunteers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
                <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full object-cover mb-4 shadow" />
                <p className="italic text-lg text-gray-700 mb-2">“{t.text}”</p>
                <span className="font-semibold text-green-700">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Partners */}
      <section className="py-12 bg-green-50 animate-fade-in-up">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Our Partners & Recognition</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((p, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={p.logo} alt={p.name} className="h-16 w-auto mb-2 grayscale hover:grayscale-0 transition-all duration-300" />
                <span className="text-sm text-gray-600">{p.name}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-gray-500 text-sm">As seen in: <span className="font-semibold">Awwwards, The Webby Awards, Times of India, NDTV</span></div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center bg-gradient-to-r from-green-600 to-green-400 text-white animate-fade-in-up">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-4">Ready to Make a Real Impact?</h3>
          <p className="mb-6 text-lg">Join Shadownik’s family of volunteers and help us create a cleaner, kinder, and more harmonious world. Your time can change lives!</p>
          <Link to="/register" className="inline-flex items-center px-8 py-4 bg-white text-green-700 font-bold rounded-lg hover:bg-green-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
            Become an ECO Warrior
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Projects;