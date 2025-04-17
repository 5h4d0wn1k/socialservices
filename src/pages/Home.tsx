import React from 'react';
import { ArrowRight, Users, Calendar, Heart, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your Time is the Most Precious Gift
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
              Join Shadownik's mission to create lasting positive change. Together, we can build stronger communities and brighter futures.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/register" className="btn-primary">
                Become a Volunteer
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/projects" className="btn-secondary">
                Explore Projects
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Impact</h2>
            <p className="section-subtitle">Together we're making a difference in communities around the world</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, count: "1000+", label: "Active Volunteers", color: "bg-blue-500" },
              { icon: Calendar, count: "50+", label: "Projects Completed", color: "bg-green-500" },
              { icon: Heart, count: "10K+", label: "Lives Impacted", color: "bg-red-500" }
            ].map((stat, index) => (
              <div key={index} className="card p-8 text-center group hover:-translate-y-2">
                <div className={`inline-flex p-4 rounded-full ${stat.color} bg-opacity-10 mb-6 group-hover:bg-opacity-20 transition-all duration-200`}>
                  <stat.icon className={`h-8 w-8 ${stat.color.replace('bg-', 'text-')}`} />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.count}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Discover how you can make a difference in your community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Education Support",
                image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Help students achieve their educational goals through mentoring and tutoring programs.",
                category: "Education"
              },
              {
                title: "Community Clean-up",
                image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Join our efforts to keep communities clean and sustainable through regular clean-up drives.",
                category: "Environment"
              },
              {
                title: "Elder Care",
                image: "https://images.unsplash.com/photo-1516307365426-d8ac0056203e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                description: "Provide companionship and support to elderly community members through various programs.",
                category: "Healthcare"
              }
            ].map((project, index) => (
              <div key={index} className="card group">
                <div className="relative overflow-hidden">
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

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto">
            Join our community of volunteers and help us create positive change in the world.
          </p>
          <Link to="/register" className="inline-flex items-center px-8 py-4 bg-white text-red-500 font-bold rounded-lg hover:bg-red-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
            Start Volunteering Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;