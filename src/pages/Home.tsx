import { ArrowRight, Users, Heart, ChevronDown, Globe, Leaf, Award, Newspaper, HandHeart, Award as AwardIcon, Users as UsersIcon, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';

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

const testimonials = [
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

const partners = [
  { name: 'UN SDG', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/UN_SDG_Logo.svg' },
  { name: 'WWF', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WWF_logo.svg' },
  { name: 'Rotary', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Rotary_International_logo.svg' },
];

// Video carousel for hero section
const heroVideos = [
  {
    src: 'https://www.w3schools.com/howto/rain.mp4',
    poster: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80',
    alt: 'Rain in nature',
  },
  {
    src: 'https://cdn.coverr.co/videos/coverr-forest-walk-1577975846657?token=eyJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJjb3ZlcnItdmlkZW8vY292ZXJyLWZvcmVzdC13YWxrLTE1Nzc5NzU4NDY2NTcubXA0In0.3Qw1QnQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQwQw',
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

const HERO_VIDEO_DURATION = 9000; // ms per video

const featuredMedia = [
  { name: 'BBC', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/BBC_News_2022_%28Alt%29.svg' },
  { name: 'NDTV', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/NDTV_logo.svg' },
  { name: 'Times of India', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/The_Times_of_India_Logo.svg' },
  { name: 'The Hindu', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/The_Hindu_Logo.svg' },
  { name: 'Awwwards', logo: 'https://www.awwwards.com/assets/images/awwwards-logo.svg' },
];

const whyVolunteer = [
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

const latestNews = [
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

const Home = () => {
  const volunteersRef = useCountUp(1200);
  const projectsRef = useCountUp(70);
  const livesRef = useCountUp(15000);

  // Video carousel state
  const [videoIdx, setVideoIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setVideoIdx((idx) => (idx + 1) % heroVideos.length);
    }, HERO_VIDEO_DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>Shadownik – India’s Movement for Harmony, Nature & Volunteering</title>
        <meta name="description" content="Join Shadownik, India’s award-winning NGO for volunteering, harmony, and environmental action. Give your time, not your money, and make a real impact!" />
        <link rel="canonical" href="https://swnk.in/" />
        <meta property="og:title" content="Shadownik – India’s Movement for Harmony, Nature & Volunteering" />
        <meta property="og:description" content="Join Shadownik, India’s award-winning NGO for volunteering, harmony, and environmental action. Give your time, not your money, and make a real impact!" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80" />
        <meta property="og:url" content="https://swnk.in/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shadownik – India’s Movement for Harmony, Nature & Volunteering" />
        <meta name="twitter:description" content="Join Shadownik, India’s award-winning NGO for volunteering, harmony, and environmental action. Give your time, not your money, and make a real impact!" />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          key={heroVideos[videoIdx].src}
          autoPlay
          loop
          muted
          playsInline
          poster={heroVideos[videoIdx].poster}
          aria-label={heroVideos[videoIdx].alt}
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 transition-opacity duration-1000"
          style={{ transitionProperty: 'opacity' }}
        >
          <source src={heroVideos[videoIdx].src} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-green-900/40 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-32 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Your Time. Our World. Infinite Impact.
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-10 drop-shadow">
            Join Shadownik’s award-winning movement. We unite hearts and hands for a cleaner, kinder, more sustainable world. Give your time, not your money—and see the difference you make.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link to="/register" className="btn-primary text-lg px-8 py-4 rounded-full shadow-xl animate-bounce focus:outline-none focus:ring-4 focus:ring-green-400 transition-transform duration-200 hover:scale-105">
              Become a Volunteer
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/projects" className="btn-secondary text-lg px-8 py-4 rounded-full focus:outline-none focus:ring-4 focus:ring-green-400 transition-transform duration-200 hover:scale-105">
              Explore Projects
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* Featured In Media Bar */}
      <section className="py-6 bg-white animate-fade-in-up" aria-label="Featured in media">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-8 opacity-80">
          {featuredMedia.map((media, i) => (
            <img
              key={i}
              src={media.logo}
              alt={media.name}
              className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              loading="lazy"
            />
          ))}
        </div>
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
            <p className="section-subtitle text-lg">Together, we’re making a difference in communities across India and beyond</p>
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
                <blockquote className="italic text-lg text-gray-700 mb-2">“{t.quote}”</blockquote>
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
            {[
              {
                title: 'Education Support',
                image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
                description: 'Help students achieve their educational goals through mentoring and tutoring programs.',
                category: 'Education',
              },
              {
                title: 'Community Clean-up',
                image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
                description: 'Join our efforts to keep communities clean and sustainable through regular clean-up drives.',
                category: 'Environment',
              },
              {
                title: 'Elder Care',
                image: 'https://images.unsplash.com/photo-1516307365426-d8ac0056203e?auto=format&fit=crop&w=800&q=80',
                description: 'Provide companionship and support to elderly community members through various programs.',
                category: 'Healthcare',
              },
            ].map((project, index) => (
              <div key={index} className="card group bg-white shadow-lg rounded-xl animate-fade-in-up">
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
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link
                    to="/projects"
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
    </>
  );
};

export default Home;