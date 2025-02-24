import { CheckCircle, Clock, MapPin } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import GlassCard from '../components/GlassCard';

const Volunteer = () => {
  const opportunities = [
    {
      title: "Green Challenge Coordinator",
      category: "Environmental",
      commitment: "5-10 hours/week",
      location: "Various Locations",
      description: "Lead local tree planting initiatives and coordinate volunteer teams."
    },
    {
      title: "Education Content Creator",
      category: "Education",
      commitment: "3-6 hours/week",
      location: "Remote",
      description: "Create educational content for underprivileged communities."
    },
    {
      title: "Community Kitchen Helper",
      category: "Community",
      commitment: "4-8 hours/week",
      location: "City Center",
      description: "Assist in meal preparation and distribution to those in need."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 via-green-800 to-emerald-900">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/images/hero-background.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        </div>
        
        <AnimatedSection className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Become a Volunteer</h1>
          <p className="text-xl">
            Join our community of changemakers and make a real difference in people's lives.
          </p>
        </AnimatedSection>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Volunteer With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Make an Impact",
                description: "Your time and skills directly help those in need and create positive change."
              },
              {
                title: "Gain Experience",
                description: "Develop new skills and get hands-on experience in social service projects."
              },
              {
                title: "Build Community",
                description: "Connect with like-minded individuals and build meaningful relationships."
              }
            ].map((benefit, index) => (
              <GlassCard key={index} className="p-6 rounded-xl" delay={index * 0.1}>
                <CheckCircle className="h-12 w-12 text-emerald-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white text-center">{benefit.title}</h3>
                <p className="text-emerald-100 text-center">{benefit.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Google Form Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard className="p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">Volunteer Application</h2>
            <div className="relative overflow-hidden pb-[150%] h-0">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfxL_12wujnkoPKfgtYGCPi5-C0qYjGkanyO54xvohoOfhvOA/viewform?embedded=true"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
              >
                Loading…
              </iframe>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;