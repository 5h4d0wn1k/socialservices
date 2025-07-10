import React from 'react';
import PageLayout from '../components/PageLayout';
import { Helmet } from 'react-helmet-async';

const teamMembers = [
  {
    name: 'Nikhil Nagpure',
    role: 'Founder & Visionary',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    funFact: 'Loves trekking in the Western Ghats',
    video: '', // Placeholder for video intro
  },
  {
    name: 'Yimlesh Bhawre',
    role: 'Community Lead',
    image: 'https://randomuser.me/api/portraits/men/85.jpg',
    funFact: 'Can cook 10 types of dal',
    video: '',
  },
  {
    name: 'Fadiya Fathima Muhammad',
    role: 'Innovation & Outreach',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    funFact: 'Speaks 5 languages',
    video: '',
  }
];

const milestones = [
  { year: 2021, event: 'Shadownik founded in India' },
  { year: 2022, event: 'First 100 volunteers join' },
  { year: 2023, event: 'Expanded to 5 states' },
  { year: 2024, event: 'Recognized by Awwwards & Webby Awards' },
];

const Team = () => (
  <>
    <Helmet>
      <title>Our Team – Shadownik | Meet the Leaders</title>
      <meta name="description" content="Meet the passionate leaders behind Shadownik’s mission for harmony, peace, and a better world. Join our team!" />
      <link rel="canonical" href="https://swnk.in/team" />
      <meta property="og:title" content="Our Team – Shadownik | Meet the Leaders" />
      <meta property="og:description" content="Meet the passionate leaders behind Shadownik’s mission for harmony, peace, and a better world. Join our team!" />
      <meta property="og:image" content="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80" />
      <meta property="og:url" content="https://swnk.in/team" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Our Team – Shadownik | Meet the Leaders" />
      <meta name="twitter:description" content="Meet the passionate leaders behind Shadownik’s mission for harmony, peace, and a better world. Join our team!" />
      <meta name="twitter:image" content="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80" />
    </Helmet>
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center mb-12 bg-gradient-to-r from-green-700 to-green-400">
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold text-white drop-shadow mb-4">Meet Our Team</h1>
          <p className="text-xl text-green-100 drop-shadow mb-2">The passionate leaders behind Shadownik’s mission for harmony, peace, and a better world.</p>
        </div>
      </section>

      {/* Team Members */}
      <section className="mb-16 animate-fade-in-up">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col items-center p-8 text-center group transition-transform hover:-translate-y-2 hover:shadow-2xl focus-within:ring-4 focus-within:ring-green-400" tabIndex={0} aria-label={member.name}>
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-green-200 group-hover:border-green-500 transition-all duration-300 group-hover:scale-110"
              />
              <h3 className="text-2xl font-semibold mb-1 text-green-800">{member.name}</h3>
              <span className="text-green-600 font-medium mb-2">{member.role}</span>
              <p className="text-gray-600 mb-2">{member.bio}</p>
              <div className="mt-2 text-sm text-green-700 italic group-hover:underline">Fun fact: {member.funFact}</div>
              {/* Placeholder for video intro */}
              {member.video && (
                <video src={member.video} controls className="mt-4 rounded-lg shadow w-full" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* NGO Timeline */}
      <section className="py-12 bg-green-50 animate-fade-in-up">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-green-800 mb-8">Our Journey</h2>
          <ol className="relative border-l-4 border-green-300">
            {milestones.map((m, i) => (
              <li key={i} className="mb-10 ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-green-600 rounded-full ring-8 ring-green-100 text-white font-bold">{m.year}</span>
                <div className="bg-white p-4 rounded-lg shadow-md ml-2">{m.event}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-16 text-center bg-gradient-to-r from-green-600 to-green-400 text-white animate-fade-in-up">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-4">Join Our Team</h3>
          <p className="mb-6 text-lg">Want to help lead the movement? We’re always looking for passionate, creative, and caring people to join our core team. Reach out and tell us why you’d be a great fit!</p>
          <a href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-green-700 font-bold rounded-lg hover:bg-green-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
            Contact Us
          </a>
        </div>
      </section>
    </PageLayout>
  </>
);

export default Team; 