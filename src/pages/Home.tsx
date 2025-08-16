import { ArrowRight, Users, Heart, ChevronDown, Globe, Leaf, Award, Newspaper, Play, Star, MapPin, Calendar, Users as UsersIcon2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  heroBackgrounds,
  floatingElements,
  testimonials,
  partners,
  featuredMedia,
  whyVolunteer,
  latestNews
} from '../data/homeData';
import { featuredProjects } from '../data/projectsData';

// Simple animated counter hook
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

const Home = () => {
  const volunteersRef = useCountUp(1200);
  const projectsRef = useCountUp(70);
  const livesRef = useCountUp(15000);

  // Hero background carousel state
  const [bgIdx, setBgIdx] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIdx((idx) => (idx + 1) % heroBackgrounds.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>Shadownik – India's Movement for Harmony, Nature & Volunteering</title>
        <meta name="description" content="Join Shadownik, India's award-winning NGO for volunteering, harmony, and environmental action. Give your time, not your money, and make a real impact!" />
        <link rel="canonical" href="https://swnk.in/" />
        <meta property="og:title" content="Shadownik – India's Movement for Harmony, Nature & Volunteering" />
        <meta property="og:description" content="Join Shadownik, India's award-winning NGO for volunteering, harmony, and environmental action. Give your time, not your money, and make a real impact!" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1500&q=80" />
        <meta property="og:url" content="https://swnk.in/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shadownik – India's Movement for Harmony, Nature & Volunteering" />
        <meta name="twitter:description" content="Join Shadownik, India's award-winning NGO for volunteering, harmony, and environmental action. Give your time, not your money, and make a real impact!" />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1500&q=80" />
      </Helmet>

      {/* World-Class Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background Images */}
        {heroBackgrounds.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
              index === bgIdx ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={bg.image}
              alt={bg.alt}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${bg.overlay}`} />
          </div>
        ))}

        {/* Animated Particles/Stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20 animate-fade-in">
            <Star className="h-5 w-5 text-yellow-400 mr-2" />
            <span className="text-white font-medium">India's Movement for Harmony & Nature</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 drop-shadow-2xl animate-fade-in-up">
            <span className="bg-gradient-to-r from-white via-green-100 to-green-200 bg-clip-text text-transparent">
              Your Time.
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-200 via-green-300 to-green-400 bg-clip-text text-transparent">
              Our World.
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
              Infinite Impact.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-green-100 mb-12 drop-shadow-lg max-w-4xl mx-auto animate-fade-in-up delay-300">
            Join Shadownik's award-winning movement. We unite hearts and hands for a cleaner, kinder, more sustainable world. 
            <span className="text-green-300 font-semibold"> Give your time, not your money</span>—and see the difference you make.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in-up delay-500">
            <Link 
              to="/register" 
              className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center">
                Become a Volunteer
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            <Link 
              to="/projects" 
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center">
                Explore Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>

            <button 
              onClick={() => setIsVideoPlaying(!isVideoPlaying)}
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center">
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </span>
            </button>
          </div>

          {/* Location & Time Info */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 animate-fade-in-up delay-1000">
            <div className="flex items-center text-white/80">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Across India & Beyond</span>
            </div>
            <div className="flex items-center text-white/80">
              <Calendar className="h-5 w-5 mr-2" />
              <span>24/7 Impact</span>
            </div>
            <div className="flex items-center text-white/80">
              <UsersIcon2 className="h-5 w-5 mr-2" />
              <span>All Ages Welcome</span>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {isVideoPlaying && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors"
              >
                ✕
              </button>
              <div className="relative pt-[56.25%] bg-black rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Shadownik Story"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Why Volunteer With Us */}
      <section className="py-20 bg-green-50 animate-fade-in-up" aria-labelledby="why-volunteer-title">
        <div className="max-w-6xl mx-auto px-4">
          <h2 id="why-volunteer-title" className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-800">Why Volunteer With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {whyVolunteer.map((item, i) => (
              <div key={i} className="card p-8 text-center bg-white shadow-md rounded-xl group hover:-translate-y-2 transition-all duration-300 focus-within:ring-4 focus-within:ring-green-400" tabIndex={0} aria-label={item.title}>
                <item.icon className="mx-auto h-10 w-10 text-green-500 mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News/Stories */}
      <section className="py-20 bg-white animate-fade-in-up" aria-labelledby="latest-news-title">
        <div className="max-w-6xl mx-auto px-4">
          <h2 id="latest-news-title" className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-800">Latest News & Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((news, i) => (
              <a
                key={i}
                href={news.link}
                className="card p-8 bg-green-50 rounded-xl shadow-md group hover:-translate-y-2 hover:bg-green-100 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-400"
                tabIndex={0}
                aria-label={news.title}
              >
                <Newspaper className="mx-auto h-8 w-8 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-xl font-semibold mb-2 text-green-900 group-hover:text-green-700">{news.title}</h3>
                <div className="text-xs text-gray-500 mb-2">{new Date(news.date).toLocaleDateString()}</div>
                <p className="text-gray-700 mb-2">{news.summary}</p>
                <span className="text-green-700 font-semibold group-hover:underline">Read More</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-white animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title text-4xl font-bold">Our Impact</h2>
            <p className="section-subtitle text-lg">Together, we're making a difference in communities across India and beyond</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="inline-flex p-4 rounded-full bg-blue-500 bg-opacity-10 mb-6 group-hover:bg-opacity-20 transition-all duration-200">
                <Users className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">
                <span ref={volunteersRef}>0</span>+
              </h3>
              <p className="text-gray-600">Active Volunteers</p>
            </div>
            <div className="card p-8 text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="inline-flex p-4 rounded-full bg-green-500 bg-opacity-10 mb-6 group-hover:bg-opacity-20 transition-all duration-200">
                <Leaf className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">
                <span ref={projectsRef}>0</span>+
              </h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="card p-8 text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="inline-flex p-4 rounded-full bg-red-500 bg-opacity-10 mb-6 group-hover:bg-opacity-20 transition-all duration-200">
                <Heart className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">
                <span ref={livesRef}>0</span>+
              </h3>
              <p className="text-gray-600">Lives Impacted</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-green-50 animate-fade-in-up">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-800">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center bg-white shadow-md rounded-xl">
              <Users className="mx-auto h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Teams of 5 + 1 Leader</h3>
              <p className="text-gray-600">Small, close-knit teams of 5 volunteers and one leader, ensuring every voice is heard and every action matters.</p>
            </div>
            <div className="card p-8 text-center bg-white shadow-md rounded-xl">
              <Globe className="mx-auto h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">From Local to Global</h3>
              <p className="text-gray-600">Teams grow into areas, then cities, then states, then nations, and finally a global family—all led by passionate volunteers at every level.</p>
            </div>
            <div className="card p-8 text-center bg-white shadow-md rounded-xl">
              <Award className="mx-auto h-10 w-10 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Recognition & Rewards</h3>
              <p className="text-gray-600">We celebrate every contribution—with swags, competitions, and sometimes even rewards for waste management. Your time is valued here.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="py-20 bg-gradient-to-r from-green-100 to-blue-100 animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">What Our Volunteers Say</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6 flex-1 animate-fade-in-up">
                <img src={t.image} alt={t.name} className="mx-auto rounded-full shadow mb-4 w-24 h-24 object-cover" />
                <blockquote className="italic text-lg text-gray-700 mb-2">"{t.quote}"</blockquote>
                <div className="text-green-700 font-semibold">– {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title text-4xl font-bold">Featured Projects</h2>
            <p className="section-subtitle text-lg">Discover how you can make a difference in your community</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.slice(0, 3).map((project, index) => (
              <div key={project.id} className="card group bg-white shadow-lg rounded-xl animate-fade-in-up">
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-sm font-semibold bg-white text-red-500 rounded-full shadow-md">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.shortDescription}</p>
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center text-red-500 hover:text-red-600 font-semibold group-hover:translate-x-2 transition-transform duration-200"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects" className="btn-primary">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-green-50 animate-fade-in-up">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-800">Get Involved</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <Link to="/register" className="btn-primary text-lg px-8 py-4 rounded-full shadow-xl">
              Become a Volunteer
            </Link>
            <Link to="/projects" className="btn-secondary text-lg px-8 py-4 rounded-full">
              Join a Project
            </Link>
            <a href="https://ngo.swnk.in" target="_blank" rel="noopener noreferrer" className="btn-secondary text-lg px-8 py-4 rounded-full">
              Visit Our Website
            </a>
            <a href="https://linktr.ee/shadownik" target="_blank" rel="noopener noreferrer" className="btn-secondary text-lg px-8 py-4 rounded-full">
              Social Links
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white animate-fade-in-up">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Add Impact To Your Inbox</h2>
          <p className="mb-6 text-gray-600">Sign up to receive inspiring stories, project updates, and ways to get involved.</p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 w-full sm:w-auto"
              required
            />
            <button
              type="submit"
              className="btn-primary px-8 py-3 rounded-lg text-lg"
              disabled
              title="Coming soon!"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;