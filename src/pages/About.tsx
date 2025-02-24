import React from 'react';
import { Target, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">About Shadownik</h1>
          <p className="text-xl max-w-3xl mx-auto px-4">
            Empowering communities through innovation, sustainability, and impactful solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Target className="h-8 w-8 text-indigo-600" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600">
                To create a lasting impact by driving innovative solutions across cybersecurity, technology, esports, and business, fostering sustainable growth and community empowerment.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Globe className="h-8 w-8 text-indigo-600" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600">
                To build a world where technology and creativity merge, empowering individuals and businesses to innovate, grow, and make a positive difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-indigo-600">1+</div>
              <div className="text-gray-600">Ongoing Projects</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-indigo-600">2+</div>
              <div className="text-gray-600">Interns & Collaborators</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-indigo-600">2+</div>
              <div className="text-gray-600">Community Members</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-indigo-600">0+</div>
              <div className="text-gray-600">Global Partnerships</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Nikhil Nagpure",
                role: "Founder & CEO",
                image: "images/nikhil.png"
              },  
              {
                name: "Fadiya Fathima Muhammad",
                role: "Operations Manager",
                image: "images/fadiya.jpg"
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
