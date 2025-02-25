import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Heart, Leaf, Users, Globe, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import PageContainer from '../components/PageContainer';
import GlassmorphicSection from '../components/GlassmorphicSection';
import GlassmorphicContainer from '../components/GlassmorphicContainer';

const Home = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.2]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  // SEO metadata
  const seoData = {
    title: "Home",
    description: "Shadownik Social Services - Creating positive social impact through sustainable initiatives and community development.",
    keywords: "Shadownik, social services, NGO, community development, volunteering, social impact, sustainability",
    url: "https://shadownik.online",
    type: "website"
  };

  const features = [
    {
      icon: <Heart className="h-8 w-8 text-nature-400" />,
      title: "Community Impact",
      description: "Creating lasting positive change in communities through sustainable social initiatives.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      delay: 0.2
    },
    {
      icon: <Leaf className="h-8 w-8 text-nature-400" />,
      title: "Environmental Focus",
      description: "Leading conservation efforts and promoting sustainable practices for a better future.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      delay: 0.4
    },
    {
      icon: <Users className="h-8 w-8 text-nature-400" />,
      title: "Volunteer Network",
      description: "Building a strong network of dedicated volunteers to drive social change.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      delay: 0.6
    },
    {
      icon: <Globe className="h-8 w-8 text-nature-400" />,
      title: "Global Reach",
      description: "Extending our impact across borders to help communities worldwide.",
      image: "https://images.unsplash.com/photo-1569974498991-d37c6d760f5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      delay: 0.8
    }
  ];

  return (
    <PageContainer theme="nature">
      <SEO {...seoData} />

      {/* Hero Section with Parallax */}
      <div ref={targetRef} style={{ opacity }} className="relative min-h-screen overflow-hidden">
        {/* Background Layers */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{
            scale: springScale,
            backgroundImage: `url(https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.8
          }}
        />
        <motion.div 
          className="absolute inset-0 z-10"
          style={{ 
            y: springY,
            backgroundImage: `url(https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3,
            mixBlendMode: 'overlay'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-nature-900/40 via-nature-900/30 to-nature-900/90 z-20" />
        
        {/* Content */}
        <div className="relative z-30 min-h-screen flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <motion.h1 
              className="text-7xl font-bold mb-6 text-white drop-shadow-glow"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Creating Positive Change
            </motion.h1>
            <motion.p 
              className="text-2xl text-white mb-12 drop-shadow-soft"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              A division of Shadownik Corporation dedicated to sustainable social initiatives and community development.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              <Link
                to="/projects"
                className="bg-nature-500/90 hover:bg-nature-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:drop-shadow-glow backdrop-blur-sm"
              >
                Explore Our Projects
              </Link>
            <Link 
              to="/volunteer"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
                Start Volunteering
            </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div 
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Features Section with Parallax Cards */}
      <GlassmorphicSection
        title="Our Impact Areas"
        subtitle="Discover how we're making a difference in communities through various initiatives"
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
                key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: feature.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <GlassmorphicContainer
                className="group h-full transform transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 -z-10 overflow-hidden rounded-xl">
                  <motion.img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-nature-900/80 to-nature-900/90 group-hover:opacity-75 transition-opacity duration-500" />
                </div>
                <div className="relative z-10 p-6 text-center">
                  <motion.div 
                    className="inline-flex p-3 rounded-full bg-white/10 backdrop-blur-md mb-4 group-hover:bg-white/20 transition-colors duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-glow">
                    {feature.title}
                  </h3>
                  <p className="text-nature-50">
                    {feature.description}
                  </p>
                </div>
              </GlassmorphicContainer>
            </motion.div>
            ))}
        </div>
      </GlassmorphicSection>

      {/* Active Project Section with Parallax */}
      <GlassmorphicSection>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <GlassmorphicContainer className="p-8 md:p-12 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.h2 
                  className="text-3xl font-bold text-white mb-4 drop-shadow-glow"
                  initial={{ x: -50 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Nature Conservation Initiative
                </motion.h2>
                <motion.p 
                  className="text-nature-50 mb-6"
                  initial={{ x: -50 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Join our active project focused on protecting biodiversity and restoring natural habitats. Make a direct impact on environmental conservation.
                </motion.p>
                <motion.div
                  initial={{ x: -50 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to="/projects"
                    className="inline-flex items-center px-6 py-3 bg-nature-500 hover:bg-nature-600 text-white rounded-lg font-semibold transition-all duration-300 group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
              <motion.div 
                className="relative h-64 md:h-full min-h-[300px] rounded-xl overflow-hidden"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Nature Conservation"
                  className="absolute inset-0 w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nature-900/80 to-transparent" />
              </motion.div>
            </div>
          </GlassmorphicContainer>
        </motion.div>
      </GlassmorphicSection>

      {/* Call to Action with Floating Elements */}
      <GlassmorphicSection>
        <GlassmorphicContainer className="text-center p-12 relative overflow-hidden" hover={false}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-glow">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 text-nature-50 drop-shadow-soft">
              Join our community of changemakers and help us create lasting positive change in the world.
          </p>
          <Link
              to="/contact"
              className="inline-flex items-center bg-white/90 backdrop-blur-sm text-nature-900 px-8 py-4 rounded-full font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:drop-shadow-glow group"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </motion.div>
        </GlassmorphicContainer>
      </GlassmorphicSection>
    </PageContainer>
  );
};

export default Home;