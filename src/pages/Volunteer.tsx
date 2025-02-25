import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Clock, Users, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import PageContainer from '../components/PageContainer';
import GlassmorphicSection from '../components/GlassmorphicSection';
import GlassmorphicContainer from '../components/GlassmorphicContainer';

const Volunteer = () => {
  // SEO metadata
  const seoData = {
    title: "Volunteer With Us",
    description: "Join Shadownik Social Services as a volunteer and make a difference in your community. Find opportunities that match your skills and interests.",
    keywords: "volunteer opportunities, social services volunteer, community service, NGO volunteering, social impact, Shadownik Corporation",
    url: "https://shadownik.online/volunteer",
    type: "website"
  };

  const benefits = [
    {
      icon: <Heart className="h-8 w-8 text-emerald-400" />,
      title: "Make an Impact",
      description: "Create positive change in communities and help those in need."
    },
    {
      icon: <Clock className="h-8 w-8 text-emerald-400" />,
      title: "Flexible Hours",
      description: "Choose volunteer opportunities that fit your schedule."
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-400" />,
      title: "Build Connections",
      description: "Meet like-minded individuals and expand your network."
    },
    {
      icon: <Globe className="h-8 w-8 text-emerald-400" />,
      title: "Gain Experience",
      description: "Develop new skills and enhance your professional growth."
    }
  ];

  const opportunities = [
    {
      title: "Environmental Conservation",
      commitment: "4-8 hours/week",
      location: "Various Locations",
      skills: ["Environmental awareness", "Physical activity", "Team collaboration"]
    },
    {
      title: "Community Education",
      commitment: "6-10 hours/week",
      location: "Local Centers",
      skills: ["Teaching", "Communication", "Organization"]
    },
    {
      title: "Social Media & Marketing",
      commitment: "5-15 hours/week",
      location: "Remote",
      skills: ["Digital marketing", "Content creation", "Social media management"]
    }
  ];

  return (
    <PageContainer
      backgroundImage="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    >
      <SEO {...seoData} />

      {/* Hero Section */}
      <GlassmorphicSection fullWidth className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">
            Make a Difference
          </h1>
          <p className="text-xl text-white mb-8 drop-shadow-md">
            Join our community of volunteers and help create lasting positive change in the world.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            View Active Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </GlassmorphicSection>

      {/* Benefits Section */}
      <GlassmorphicSection
        title="Why Volunteer With Us?"
        subtitle="Discover the rewards of making a difference in your community"
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <GlassmorphicContainer
              key={index}
              delay={index * 0.1}
              className="p-6 text-center"
            >
              <div className="inline-flex p-3 rounded-full bg-white/10 backdrop-blur-md mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-emerald-50">
                {benefit.description}
              </p>
            </GlassmorphicContainer>
          ))}
        </div>
      </GlassmorphicSection>

      {/* Opportunities Section */}
      <GlassmorphicSection
        title="Current Opportunities"
        subtitle="Find the perfect role that matches your skills and interests"
      >
        <div className="grid gap-8 md:grid-cols-3">
          {opportunities.map((opportunity, index) => (
            <GlassmorphicContainer
              key={index}
              delay={index * 0.1}
              className="p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {opportunity.title}
              </h3>
              <div className="space-y-4 text-emerald-50">
                <p>
                  <span className="font-semibold">Time Commitment:</span>
                  <br />
                  {opportunity.commitment}
                </p>
                <p>
                  <span className="font-semibold">Location:</span>
                  <br />
                  {opportunity.location}
                </p>
                <div>
                  <span className="font-semibold">Required Skills:</span>
                  <ul className="mt-2 space-y-2">
                    {opportunity.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-emerald-400" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassmorphicContainer>
          ))}
        </div>
      </GlassmorphicSection>

      {/* Application Form */}
      <GlassmorphicSection
        title="Apply to Volunteer"
        subtitle="Take the first step towards making a difference"
      >
        <GlassmorphicContainer className="max-w-4xl mx-auto p-8">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfYGe4YZhHyeNXpLu8FQPXzhgYqK1_yXHsHxKZhN7q5ndoQXw/viewform?embedded=true"
              className="w-full h-[800px] border-0"
              title="Volunteer Application Form"
            >
              Loading form...
            </iframe>
          </div>
        </GlassmorphicContainer>
      </GlassmorphicSection>
    </PageContainer>
  );
};

export default Volunteer;