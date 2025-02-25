import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Globe, Target, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import PageContainer from '../components/PageContainer';
import GlassmorphicSection from '../components/GlassmorphicSection';
import GlassmorphicContainer from '../components/GlassmorphicContainer';

const About = () => {
  // SEO metadata
  const seoData = {
    title: "About Us",
    description: "Learn about Shadownik Social Services, our mission, values, and the team behind our social impact initiatives.",
    keywords: "about Shadownik, social services, NGO mission, team, values, social impact, Shadownik Corporation",
    url: "https://shadownik.online/about",
    type: "website"
  };

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-emerald-400" />,
      title: "Compassion",
      description: "We approach every initiative with empathy and understanding, putting people first."
    },
    {
      icon: <Target className="h-8 w-8 text-emerald-400" />,
      title: "Impact",
      description: "We focus on creating measurable, sustainable change in communities."
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-400" />,
      title: "Collaboration",
      description: "We believe in the power of working together to achieve common goals."
    },
    {
      icon: <Globe className="h-8 w-8 text-emerald-400" />,
      title: "Sustainability",
      description: "We ensure our initiatives create lasting positive change for future generations."
    }
  ];

  const team = [
    {
      name: "Nikhil Nagpure",
      role: "Founder & CEO",
      image: "/images/nikhil.png",
      linkedin: "https://linkedin.com/in/nikhilnagpure24"
    },
    {
      name: "Fadiya Fathima Muhammad",
      role: "Product Designer & Operations Manager",
      image: "/images/fadiya.jpg",
      linkedin: "https://linkedin.com/in/fadiyafathimamuhammad"
    }
  ];

  return (
    <PageContainer
      backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    >
      <SEO {...seoData} />

      {/* Hero Section */}
      <GlassmorphicSection fullWidth className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">
            About Shadownik Social Services
          </h1>
          <p className="text-xl text-white mb-8 drop-shadow-md">
            A division of Shadownik Corporation committed to creating sustainable social impact through innovative initiatives and community engagement.
          </p>
        </div>
      </GlassmorphicSection>

      {/* Mission Section */}
      <GlassmorphicSection>
        <GlassmorphicContainer className="p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-emerald-50 mb-6">
                We strive to create lasting positive change in communities through sustainable social initiatives, environmental conservation, and empowerment programs. As part of Shadownik Corporation, we leverage corporate resources and expertise to maximize our social impact.
              </p>
              <p className="text-emerald-50">
                Our approach combines innovative solutions with community engagement to address pressing social and environmental challenges.
              </p>
            </div>
            <div className="relative h-64 md:h-full min-h-[300px] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Our Mission"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent" />
            </div>
          </div>
        </GlassmorphicContainer>
      </GlassmorphicSection>

      {/* Values Section */}
      <GlassmorphicSection
        title="Our Values"
        subtitle="The principles that guide our work and impact"
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <GlassmorphicContainer
              key={index}
              delay={index * 0.1}
              className="p-6 text-center"
            >
              <div className="inline-flex p-3 rounded-full bg-white/10 backdrop-blur-md mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {value.title}
              </h3>
              <p className="text-emerald-50">
                {value.description}
              </p>
            </GlassmorphicContainer>
          ))}
        </div>
      </GlassmorphicSection>

      {/* Team Section */}
      <GlassmorphicSection
        title="Our Team"
        subtitle="Meet the dedicated individuals driving our mission forward"
      >
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <GlassmorphicContainer
              key={index}
              delay={index * 0.1}
              className="p-6 text-center"
            >
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-emerald-50 mb-4">
                {member.role}
              </p>
              <a 
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
            </GlassmorphicContainer>
          ))}
        </div>
      </GlassmorphicSection>

      {/* Call to Action */}
      <GlassmorphicSection>
        <GlassmorphicContainer className="text-center p-12" hover={false}>
          <h2 className="text-3xl font-bold mb-6 text-white drop-shadow-lg">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 text-white drop-shadow-md">
            Be part of our journey to create positive change in communities worldwide.
          </p>
          <Link
            to="/volunteer"
            className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Start Volunteering
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </GlassmorphicContainer>
      </GlassmorphicSection>
    </PageContainer>
  );
};

export default About;
