import React from 'react';
import { ArrowRight, Heart, Users, Leaf, Brain, Book, Globe, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import StatCard from '../components/StatCard';

const Home = () => {
  const stats = [
    { number: "50K+", label: "Lives Impacted" },
    { number: "100+", label: "Active Projects" },
    { number: "25+", label: "Countries Reached" },
    { number: "10K+", label: "Volunteers" }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[800px] flex items-center justify-center text-white overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/90 via-green-800/85 to-emerald-900/90"></div>
        </motion.div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-20">
          <AnimatedSection delay={0.2}>
            <motion.h1 
              className="text-6xl md:text-7xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Give Time,{' '}
              <span className="text-emerald-300">Create Change</span>
            </motion.h1>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed text-emerald-50">
              Join our mission to create lasting positive change through innovative social service projects. 
              Whether it's environmental conservation, education, or community development - your time and 
              skills can make a real difference.
            </p>
            <Link 
              to="/volunteer"
              className="inline-flex items-center bg-emerald-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-emerald-400 transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px] shadow-lg hover:shadow-emerald-500/25 group"
            >
              Join Us Today
              <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                number={stat.number}
                label={stat.label}
                delay={0.4 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-24 bg-gradient-to-b from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-900 leading-tight">
              Our Impact Areas
            </h2>
            <p className="text-xl text-green-700 max-w-2xl mx-auto">
              Discover how we're making a difference across multiple areas of social impact
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="h-12 w-12 text-emerald-500" />,
                title: "Environmental Conservation",
                description: "Protecting our planet through sustainable initiatives and green projects.",
                bgImage: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              },
              {
                icon: <Book className="h-12 w-12 text-teal-500" />,
                title: "Education Support",
                description: "Empowering communities through knowledge and learning resources.",
                bgImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              },
              {
                icon: <Users className="h-12 w-12 text-green-500" />,
                title: "Community Development",
                description: "Building stronger communities through collaborative efforts.",
                bgImage: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              },
              {
                icon: <Heart className="h-12 w-12 text-emerald-500" />,
                title: "Healthcare Access",
                description: "Improving access to essential healthcare services.",
                bgImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              },
              {
                icon: <Brain className="h-12 w-12 text-teal-500" />,
                title: "Mental Health",
                description: "Supporting mental wellness through awareness and resources.",
                bgImage: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              },
              {
                icon: <Globe className="h-12 w-12 text-green-500" />,
                title: "Global Outreach",
                description: "Extending our impact across borders through international programs.",
                bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              }
            ].map((area, index) => (
              <AnimatedSection
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                delay={0.2 + index * 0.1}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${area.bgImage})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-white/90 group-hover:from-white/90 group-hover:to-white/85 transition-colors duration-300"></div>
                </div>
                <div className="relative p-8">
                  <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {area.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-green-800">{area.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{area.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 text-white overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-emerald-800/90"></div>
        </motion.div>
        <AnimatedSection className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Make a Difference?</h2>
          <p className="text-xl mb-12 text-emerald-50 max-w-2xl mx-auto">
            Join our community of volunteers and help create positive change in the world.
            Every small action counts towards making our world a better place.
          </p>
          <Link
            to="/volunteer"
            className="inline-flex items-center bg-white text-green-800 px-10 py-4 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px] shadow-lg hover:shadow-white/25 group"
          >
            Start Volunteering
            <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Home;