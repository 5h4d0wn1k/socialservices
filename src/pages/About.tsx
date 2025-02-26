import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Globe, Target, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import PageContainer from '../components/PageContainer';
import GlassmorphicSection from '../components/GlassmorphicSection';
import GlassmorphicContainer from '../components/GlassmorphicContainer';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const team = [
    {
      name: "Nikhil Nagpure",
      role: "Founder & CEO",
      image: "/images/nikhil.png",
      linkedin: "https://linkedin.com/in/nikhilnagpure24",
      bio: "Nikhil Nagpure is the Founder and CEO of Shadownik Corporation, a visionary leader driving social impact initiatives and technological innovation. With expertise in software development and social entrepreneurship, Nikhil leads the company's mission to create sustainable community development solutions.",
      location: "Mumbai, India",
      education: "Computer Engineering",
      expertise: ["Social Entrepreneurship", "Technology Innovation", "Community Development", "Software Engineering"]
    },
    {
      name: "Fadiya Fathima Muhammad",
      role: "Product Designer & Operations Manager",
      image: "/images/fadiya.jpg",
      linkedin: "https://linkedin.com/in/fadiyafathimamuhammad",
      bio: "Fadiya Fathima Muhammad is the Product Designer and Operations Manager at Shadownik Social Services, bringing creative excellence to user experience design and operational efficiency. Her innovative approach combines design thinking with social impact.",
      location: "Mumbai, India",
      expertise: ["Product Design", "UX/UI Design", "Operations Management", "Social Impact Design"]
    }
  ];

  // SEO metadata
  const seoData = {
    title: "About Us - Meet Our Team | Nikhil Nagpure & Fadiya Fathima Muhammad",
    description: "Meet Nikhil Nagpure, Founder & CEO of Shadownik Corporation, and Fadiya Fathima Muhammad, Product Designer. Leaders in social impact, technology innovation, and community development. Discover our mission and values at Shadownik Social Services.",
    keywords: "Nikhil Nagpure, Nikhil Nagpure Shadownik, Nikhil Nagpure CEO, Nikhil Nagpure LinkedIn, Nikhil Nagpure founder, " +
      "Fadiya Fathima Muhammad, Fadiya Fathima Muhammad designer, Fadiya Fathima Muhammad Shadownik, " +
      "Shadownik CEO, Shadownik founder, Shadownik leadership, Shadownik team, " +
      "social services, NGO mission, social impact, community development, " +
      "tech for good, social innovation, sustainable development, " +
      "Shadownik Corporation, Shadownik Social Services, " +
      "Indian entrepreneurs, tech entrepreneurs, social entrepreneurs, " +
      "product design, UX design, operations management, " +
      "community initiatives, social welfare, nonprofit organization, " +
      "Mumbai tech companies, Indian startups, social impact startups",
    url: "https://shadownik.online/about",
    type: "website",
    image: team[0].image
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

  // Enhanced Schema.org structured data
  const teamStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shadownik Social Services",
    "url": "https://shadownik.online",
    "logo": "https://shadownik.online/logo.png",
    "sameAs": [
      "https://linkedin.com/company/shadownik",
      "https://twitter.com/shadownik",
      "https://facebook.com/shadownik",
      "https://instagram.com/shadownik"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "employee": team.map(member => ({
      "@type": "Person",
      "name": member.name,
      "jobTitle": member.role,
      "image": member.image,
      "sameAs": [member.linkedin],
      "description": member.bio,
      "worksFor": {
        "@type": "Organization",
        "name": "Shadownik Corporation",
        "url": "https://shadownik.online"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": member.location
      },
      "knowsAbout": member.expertise
    }))
  };

  // Additional structured data for the CEO
  const ceoStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nikhil Nagpure",
    "jobTitle": "Founder & CEO",
    "image": team[0].image,
    "sameAs": [team[0].linkedin],
    "description": team[0].bio,
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": team[0].education
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Shadownik Corporation",
      "url": "https://shadownik.online"
    },
    "knowsAbout": team[0].expertise
  };

  return (
    <PageContainer
      backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    >
      <SEO {...seoData} />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(teamStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(ceoStructuredData)}
        </script>
        <meta name="author" content="Nikhil Nagpure" />
        <meta name="og:title" content={`${team[0].name} - ${team[0].role} at Shadownik Corporation`} />
        <meta name="og:description" content={team[0].bio} />
        <meta name="twitter:title" content={`${team[0].name} - ${team[0].role} at Shadownik Corporation`} />
        <meta name="twitter:description" content={team[0].bio} />
      </Helmet>

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
