import React, { useState } from 'react';
import { Leaf, Book, Heart, Users, Brain } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ProjectCard from '../components/ProjectCard';
import ProjectPopup from '../components/ProjectPopup';
import SEO from '../components/SEO';
import PageContainer from '../components/PageContainer';
import GlassmorphicSection from '../components/GlassmorphicSection';
import GlassmorphicContainer from '../components/GlassmorphicContainer';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // SEO metadata
  const seoData = {
    title: "Impact Projects",
    description: "Discover Shadownik Social Services' impactful projects in environmental conservation, education, healthcare, and community development. Join us in creating positive change.",
    keywords: "social services, NGO projects, environmental conservation, community development, volunteer opportunities, social impact, Shadownik Corporation",
    url: "https://shadownik.online/projects",
    type: "website"
  };

  const projects = [
    {
      category: "Environmental",
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      title: "Nature Conservation Initiative",
      description: "Join our initiative to protect and preserve natural habitats while promoting sustainable environmental practices.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      status: "Active",
      participants: 10,
      website: "https://nature.shadownik.online",
      startDate: "January 2024",
      location: "Multiple Locations",
      joinLink: "https://nature.shadownik.online/join",
      detailedDescription: "Our Nature Conservation Initiative is a comprehensive program focused on protecting biodiversity, restoring damaged ecosystems, and educating communities about sustainable environmental practices. We work closely with local communities, environmental experts, and volunteers to create lasting positive impact.",
      goals: [
        "Protect and restore natural habitats",
        "Implement sustainable conservation practices",
        "Educate communities about environmental protection",
        "Monitor and preserve local wildlife",
        "Develop green corridors in urban areas"
      ],
      requirements: [
        "Commitment to environmental conservation",
        "Ability to participate in outdoor activities",
        "Basic understanding of ecology (training provided)",
        "Minimum 4 hours per week commitment",
        "Willingness to learn and work in teams"
      ]
    },
    {
      category: "Education",
      icon: <Book className="h-8 w-8 text-blue-500" />,
      title: "Digital Learning Hub",
      description: "Creating and distributing educational content to bridge the digital divide in underprivileged communities.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      status: "Upcoming",
      participants: 0,
      startDate: "March 2024",
      location: "Online & Various Centers",
      joinLink: null,
      detailedDescription: "The Digital Learning Hub project aims to revolutionize education accessibility through technology. We're developing a comprehensive platform that will provide free educational resources to communities with limited access to quality education.",
      goals: [
        "Create accessible digital learning platforms",
        "Provide educational resources to underserved communities",
        "Train local educators in digital tools",
        "Establish community learning centers"
      ]
    },
    {
      category: "Healthcare",
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Mobile Health Clinic",
      description: "Providing essential healthcare services to remote communities through our mobile clinic initiative.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      status: "Upcoming",
      participants: 0,
      startDate: "April 2024",
      location: "Rural Communities",
      joinLink: null,
      detailedDescription: "Our Mobile Health Clinic project will bring essential healthcare services directly to communities with limited access to medical facilities. This initiative will combine healthcare delivery with community health education."
    },
    {
      category: "Community",
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Community Kitchen",
      description: "Operating community kitchens to provide nutritious meals and culinary education to those in need.",
      image: "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      status: "Upcoming",
      participants: 0,
      startDate: "May 2024",
      location: "Urban Centers",
      joinLink: null,
      detailedDescription: "The Community Kitchen project will establish sustainable food programs in urban areas, combining meal service with nutrition education and culinary training opportunities."
    },
    {
      category: "Mental Health",
      icon: <Brain className="h-8 w-8 text-indigo-500" />,
      title: "Mind Wellness Program",
      description: "Offering counseling services and mental health workshops to promote emotional well-being.",
      image: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      status: "Upcoming",
      participants: 0,
      startDate: "June 2024",
      location: "Multiple Locations",
      joinLink: null,
      detailedDescription: "The Mind Wellness Program will provide accessible mental health support through a combination of professional counseling, group workshops, and community support networks."
    },
    {
      category: "Environmental",
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      title: "Ocean Cleanup Initiative",
      description: "Organizing beach cleanups and marine conservation activities to protect our oceans.",
      image: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      status: "Upcoming",
      participants: 0,
      startDate: "July 2024",
      location: "Coastal Areas",
      joinLink: null,
      detailedDescription: "The Ocean Cleanup Initiative will focus on marine conservation through organized cleanup activities, education about marine ecosystems, and implementation of sustainable practices in coastal communities."
    }
  ];

  return (
    <PageContainer
      backgroundImage="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    >
      <SEO {...seoData} />
      
      {/* Hero Section */}
      <GlassmorphicSection fullWidth className="h-[400px] flex items-center justify-center">
        <AnimatedSection className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">Our Impact Projects</h1>
          <p className="text-xl text-white drop-shadow-md">
            Discover how we're making a difference through our various initiatives and join us in creating positive change.
          </p>
        </AnimatedSection>
      </GlassmorphicSection>

      {/* Projects Grid */}
      <GlassmorphicSection
        title="Our Projects"
        subtitle="Currently focused on our Nature Conservation Initiative, with more exciting projects launching soon."
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              delay={index * 0.1}
              onClick={() => setSelectedProject(index)}
            />
          ))}
        </div>
      </GlassmorphicSection>

      {/* Call to Action */}
      <GlassmorphicSection>
        <GlassmorphicContainer className="text-center p-12" hover={false}>
          <h2 className="text-3xl font-bold mb-6 text-white drop-shadow-lg">Ready to Make an Impact?</h2>
          <p className="text-xl mb-8 text-white drop-shadow-md">
            Join our community of changemakers and help us create lasting positive change in the world.
          </p>
          <button className="bg-white/90 backdrop-blur-sm text-emerald-900 px-8 py-3 rounded-full font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/20">
            Start Volunteering Today
          </button>
        </GlassmorphicContainer>
      </GlassmorphicSection>

      {/* Project Popup */}
      {selectedProject !== null && (
        <ProjectPopup
          project={projects[selectedProject]}
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </PageContainer>
  );
};

export default Projects;