import { ArrowRight, Leaf, Users, Globe, Award, CheckCircle, Gift, Smile, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const volunteers = [
  {
    name: 'Aarav Sharma',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'I found my purpose and lifelong friends with Shadownik.'
  },
  {
    name: 'Priya Patel',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'Small actions, big impact. Shadownik made it possible.'
  },
  {
    name: 'Rohan Gupta',
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
    quote: 'The team spirit and kindness here is unmatched.'
  },
];

const whatYouGet = [
  { icon: Gift, title: 'Swags & Rewards', desc: 'Earn exclusive swags, certificates, and sometimes even prizes for your dedication.' },
  { icon: Smile, title: 'Skills & Growth', desc: 'Gain leadership, teamwork, and project management skills.' },
  { icon: Users, title: 'Community', desc: 'Join a supportive family of changemakers and make lifelong friends.' },
  { icon: CheckCircle, title: 'Recognition', desc: 'Get recognized for your impact at local and global levels.' },
];

const faqs = [
  { q: 'Do I need experience to join?', a: 'No experience needed! All you need is passion and a willingness to help.' },
  { q: 'Is there any cost to join?', a: 'No, volunteering is free. We only ask for your time and heart.' },
  { q: 'Can I volunteer remotely?', a: 'Many projects offer remote or flexible options—just ask!' },
  { q: 'How are teams formed?', a: 'We group volunteers by location and interest, with a leader for every 5 members.' },
];

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Volunteer Registration – Shadownik | Join ECO Warriors</title>
        <meta name="description" content="Sign up to become an ECO Warrior with Shadownik. Volunteer for harmony, nature, and community projects across India. Your time changes lives!" />
        <link rel="canonical" href="https://swnk.in/register" />
        <meta property="og:title" content="Volunteer Registration – Shadownik | Join ECO Warriors" />
        <meta property="og:description" content="Sign up to become an ECO Warrior with Shadownik. Volunteer for harmony, nature, and community projects across India. Your time changes lives!" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80" />
        <meta property="og:url" content="https://swnk.in/register" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Volunteer Registration – Shadownik | Join ECO Warriors" />
        <meta name="twitter:description" content="Sign up to become an ECO Warrior with Shadownik. Volunteer for harmony, nature, and community projects across India. Your time changes lives!" />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80" />
      </Helmet>
      <div className="bg-gray-50 min-h-screen pb-16">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-400/60" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-4 py-24 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Join the ECO Warriors Movement
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 drop-shadow">
              Shadownik is India’s non-profit for harmony, nature, and hope. We ask for your time, not your money. Become part of a global family, starting from your community and reaching the world.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <Link to="/" className="btn-secondary inline-flex items-center">
                <ArrowRight className="mr-2 h-5 w-5" /> Back to Home
              </Link>
            </div>
          </div>
        </section>

        {/* About Shadownik */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80" alt="Volunteers in India" className="mx-auto rounded-xl shadow-lg mb-6 w-full max-w-xl object-cover h-64" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-700">About Shadownik</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Shadownik is a people-powered movement, born in India, with a vision to unite communities for a cleaner, kinder, and more sustainable world. We empower volunteers to lead projects like cleaning, nature conservation, helping those in need, and more. We believe in harmony, peace, and the power of giving time. Sometimes, we even reward your efforts with swags, competitions, or by exchanging waste (like plastic or iron) for rewards – because every little action counts.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-green-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-800">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-8 text-center bg-white shadow-md rounded-xl">
                <Users className="mx-auto h-10 w-10 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Teams of 5 + 1 Leader</h3>
                <p className="text-gray-600">Everywhere, we form small, close-knit teams of 5 volunteers and one leader, ensuring everyone’s voice is heard and every action matters.</p>
              </div>
              <div className="card p-8 text-center bg-white shadow-md rounded-xl">
                <Globe className="mx-auto h-10 w-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">From Local to Global</h3>
                <p className="text-gray-600">Teams grow into areas, then cities, then states, then nations, and finally a global family – all led by passionate volunteers at every level.</p>
              </div>
              <div className="card p-8 text-center bg-white shadow-md rounded-xl">
                <Award className="mx-auto h-10 w-10 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Recognition & Rewards</h3>
                <p className="text-gray-600">We celebrate every contribution – with swags, competitions, and sometimes even rewards for waste management. Your time is valued here.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Emotional Appeal / Testimonial */}
        <section className="py-16 bg-gradient-to-r from-green-100 to-blue-100">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80" alt="Happy volunteer" className="mx-auto rounded-full shadow-lg mb-6 w-32 h-32 object-cover" />
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Why We Care</h2>
            <blockquote className="italic text-lg md:text-xl text-gray-700 mb-4">“Volunteering with Shadownik has given me a sense of purpose and belonging. It’s not just about helping others – it’s about building a kinder, more connected world.”</blockquote>
            <div className="text-gray-600">– A Shadownik Volunteer</div>
          </div>
        </section>

        {/* Step-by-Step Join Guide */}
        <section className="py-12 bg-white animate-fade-in-up">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center text-green-800 mb-8">How to Join</h2>
            <ol className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0 md:space-x-8">
              <li className="flex flex-col items-center">
                <span className="bg-green-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-2xl font-bold mb-2">1</span>
                <span className="font-semibold mb-1">Fill the Form</span>
                <span className="text-gray-500 text-sm">Tell us about yourself</span>
              </li>
              <li className="flex flex-col items-center">
                <span className="bg-green-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-2xl font-bold mb-2">2</span>
                <span className="font-semibold mb-1">Get Matched</span>
                <span className="text-gray-500 text-sm">We’ll connect you to a team</span>
              </li>
              <li className="flex flex-col items-center">
                <span className="bg-green-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-2xl font-bold mb-2">3</span>
                <span className="font-semibold mb-1">Start Volunteering</span>
                <span className="text-gray-500 text-sm">Make an impact together</span>
              </li>
            </ol>
          </div>
        </section>

        {/* Meet Our Volunteers */}
        <section className="py-16 bg-green-50 animate-fade-in-up">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center text-green-800 mb-8">Meet Our Volunteers</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {volunteers.map((v, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center w-64 group hover:-translate-y-2 transition-all duration-300">
                  <img src={v.image} alt={v.name} className="w-20 h-20 rounded-full object-cover mb-4 shadow" />
                  <blockquote className="italic text-lg text-gray-700 mb-2">“{v.quote}”</blockquote>
                  <span className="font-semibold text-green-700">{v.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 bg-white animate-fade-in-up">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center text-green-800 mb-8">What You Get</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {whatYouGet.map((item, i) => (
                <div key={i} className="card p-8 text-center bg-green-50 shadow-md rounded-xl group hover:-translate-y-2 transition-all duration-300">
                  <item.icon className="mx-auto h-10 w-10 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-200" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Progress Encouragement Bar */}
        <section className="py-4 bg-green-100 animate-fade-in-up">
          <div className="max-w-3xl mx-auto px-4">
            <div className="w-full bg-green-200 rounded-full h-4 overflow-hidden">
              <div className="bg-green-600 h-4 rounded-full animate-progress-bar" style={{ width: '33%' }} />
            </div>
            <div className="text-center text-green-800 font-semibold mt-2">Step 1 of 3: Fill the form to get started!</div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-16 bg-green-50 animate-fade-in-up">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center text-green-800 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-white rounded-lg shadow p-4 group">
                  <summary className="font-semibold text-green-700 cursor-pointer flex items-center gap-2 group-open:text-green-900">
                    <HelpCircle className="h-5 w-5" /> {faq.q}
                  </summary>
                  <div className="mt-2 text-gray-700">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Google Form Embed */}
        <section className="py-8">
          <div className="max-w-3xl mx-auto px-4 bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-center mb-4 text-green-700">Sign Up Now</h3>
            <p className="text-center text-gray-600 mb-6">
              Fill out the form below to join the ECO Warriors. Your journey to making a real impact starts here!
            </p>
            <div className="w-full flex justify-center">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfxL_12wujnkoPKfgtYGCPi5-C0qYjGkanyO54xvohoOfhvOA/viewform?embedded=true"
                width="100%"
                height="1200"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="ECO Warrior Registration"
                className="rounded-lg border-2 border-green-200 shadow-md"
                style={{ minHeight: 1200 }}
                allowFullScreen
              >
                Loading…
              </iframe>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 text-center bg-green-700 text-white">
          <div className="max-w-2xl mx-auto px-4">
            <h4 className="text-2xl font-semibold mb-2">Ready to Change the World?</h4>
            <p className="mb-4 text-lg">
              Volunteering with Shadownik means joining a supportive community, gaining new skills, and making friends for life – all while helping the planet. We value your time, celebrate your efforts, and sometimes even reward you with swags, competitions, and more!
            </p>
            <Users className="mx-auto h-10 w-10 text-white mb-2" />
            <div className="mt-4">
              <Link to="/" className="btn-primary inline-flex items-center bg-white text-green-700 hover:bg-green-100">
                <ArrowRight className="mr-2 h-5 w-5" /> Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Register;