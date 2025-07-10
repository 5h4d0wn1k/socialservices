import React, { useState } from 'react';
import { Mail, Phone, Send, Globe, CheckCircle } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { Helmet } from 'react-helmet-async';

const teamMembers = [
  {
    name: 'Nikhil Nagpure',
    role: 'Founder & Visionary',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Yimlesh Bhawre',
    role: 'Community Lead',
    image: 'https://randomuser.me/api/portraits/men/85.jpg',
  },
  {
    name: 'Fadiya Fathima Muhammad',
    role: 'Innovation & Outreach',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <Helmet>
        <title>Contact – Shadownik | Connect, Collaborate, Volunteer</title>
        <meta name="description" content="Contact Shadownik for volunteering, partnerships, or questions. We’re here to help you make a difference!" />
        <link rel="canonical" href="https://swnk.in/contact" />
        <meta property="og:title" content="Contact – Shadownik | Connect, Collaborate, Volunteer" />
        <meta property="og:description" content="Contact Shadownik for volunteering, partnerships, or questions. We’re here to help you make a difference!" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80" />
        <meta property="og:url" content="https://swnk.in/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact – Shadownik | Connect, Collaborate, Volunteer" />
        <meta name="twitter:description" content="Contact Shadownik for volunteering, partnerships, or questions. We’re here to help you make a difference!" />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80" />
      </Helmet>
      {/* Decorative Map Background */}
      <div aria-hidden="true" className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80" alt="Map background" className="w-full h-full object-cover opacity-10 blur-sm" />
      </div>
      <div className="py-12 bg-gray-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" alt="Contact Shadownik" className="mx-auto rounded-xl shadow-lg mb-6 w-full max-w-lg object-cover h-56" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Shadownik</h1>
            <p className="text-xl text-gray-600">
              We’re here to listen, support, and connect. Whether you have questions, want to join our movement, or simply wish to say hello, reach out to us. Together, we can build a kinder, greener India and world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  disabled={submitted}
                >
                  {submitted ? (
                    <span className="flex items-center"><CheckCircle className="mr-2 h-5 w-5 text-white animate-bounce" /> Sent!</span>
                  ) : (
                    <span className="flex items-center">Send Message <Send className="ml-2 h-5 w-5" /></span>
                  )}
                </button>
              </form>
              {submitted && (
                <div className="mt-4 text-green-700 flex items-center justify-center animate-fade-in">
                  <CheckCircle className="h-6 w-6 mr-2" /> Thank you! We’ll get back to you soon.
                </div>
              )}
              <div className="mt-6 flex justify-center">
                <a href="https://wa.me/9165644843" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-full font-semibold shadow hover:bg-green-600 transition-all" aria-label="WhatsApp">
                  <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg" alt="WhatsApp" className="h-5 w-5 mr-2" /> WhatsApp Us
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-green-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600">info@swnk.in</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-green-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="mt-1 text-gray-600">+91 9165644843</p>
                    <p className="mt-1 text-gray-600">Mon-Fri from 9am to 6pm IST</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Avg. response time: &lt;24h</span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Connect with Us</h3>
                <div className="flex space-x-4">
                  <a href="https://ngo.swnk.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-green-700 hover:text-green-900 font-semibold">
                    <Globe className="h-5 w-5 mr-1" /> ngo.swnk.in
                  </a>
                  <a href="https://linktr.ee/shadownik" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-green-700 hover:text-green-900 font-semibold">
                    <Globe className="h-5 w-5 mr-1" /> linktr.ee/shadownik
                  </a>
                  <a href="https://instagram.com/shadownik" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" className="h-6 w-6 ml-2" />
                  </a>
                  <a href="https://facebook.com/shadownik" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" className="h-6 w-6 ml-2" />
                  </a>
                  <a href="https://twitter.com/shadownik" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg" alt="Twitter" className="h-6 w-6 ml-2" />
                  </a>
                  <a href="https://wa.me/9165644843" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg" alt="WhatsApp" className="h-6 w-6 ml-2" />
                  </a>
                </div>
                <div className="mt-6 flex items-center space-x-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/330/330439.png" alt="India" className="h-5 w-5" />
                  <span className="text-xs text-gray-400">Proudly made in India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team Preview Section */}
      <section className="py-16 animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-green-800 mb-8">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="bg-green-50 rounded-xl shadow p-6 flex flex-col items-center text-center w-64 group hover:-translate-y-2 transition-all duration-300">
                <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full object-cover mb-4 shadow" />
                <span className="font-semibold text-green-700">{member.name}</span>
                <span className="text-green-500 text-sm mb-2">{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;