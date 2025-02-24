import React from 'react';
import { Leaf, Book, Heart, Users, Brain } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      category: "Environmental",
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      title: "Green Challenge",
      description: "Join our initiative to plant and nurture trees in urban areas, creating sustainable green spaces for future generations.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      status: "Active",
      participants: 234
    },
    {
      category: "Education",
      icon: <Book className="h-8 w-8 text-blue-500" />,
      title: "Digital Learning Hub",
      description: "Creating and distributing educational content to bridge the digital divide in underprivileged communities.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      status: "Active",
      participants: 156
    },
    {
      category: "Healthcare",
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Mobile Health Clinic",
      description: "Providing essential healthcare services to remote communities through our mobile clinic initiative.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      status: "Active",
      participants: 89
    },
    {
      category: "Community",
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Community Kitchen",
      description: "Operating community kitchens to provide nutritious meals and culinary education to those in need.",
      image: "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      status: "Active",
      participants: 178
    },
    {
      category: "Mental Health",
      icon: <Brain className="h-8 w-8 text-indigo-500" />,
      title: "Mind Wellness Program",
      description: "Offering counseling services and mental health workshops to promote emotional well-being.",
      image: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      status: "Active",
      participants: 123
    },
    {
      category: "Environmental",
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      title: "Ocean Cleanup Initiative",
      description: "Organizing beach cleanups and marine conservation activities to protect our oceans.",
      image: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      status: "Active",
      participants: 145
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-green-800/90"></div>
        </div>
        
        <AnimatedSection className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Impact Projects</h1>
          <p className="text-xl text-emerald-50">
            Discover how we're making a difference through our various initiatives and join us in creating positive change.
          </p>
        </AnimatedSection>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Active Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our ongoing initiatives and find ways to contribute your skills and time to meaningful causes.
            </p>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-900 text-white">
        <AnimatedSection className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl mb-8 text-emerald-50">
            Join our community of changemakers and help us create lasting positive change in the world.
          </p>
          <button className="bg-white text-emerald-900 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors duration-300 transform hover:scale-105">
            Start Volunteering Today
          </button>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Projects;