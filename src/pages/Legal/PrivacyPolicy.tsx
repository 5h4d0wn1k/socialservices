import React from 'react';
import GlassCard from '../../components/GlassCard';
import AnimatedSection from '../../components/AnimatedSection';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 via-green-800 to-emerald-900 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <GlassCard className="p-8 rounded-xl">
            <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
            <div className="prose prose-lg prose-invert">
              <p className="text-emerald-100">Last updated: March 1, 2024</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">1. Information We Collect</h2>
              <p className="text-emerald-100">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 text-emerald-100">
                <li>Name and contact information</li>
                <li>Volunteer preferences and availability</li>
                <li>Skills and experience</li>
                <li>Communication preferences</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">2. How We Use Your Information</h2>
              <p className="text-emerald-100">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-emerald-100">
                <li>Match you with volunteer opportunities</li>
                <li>Communicate about projects and events</li>
                <li>Improve our services</li>
                <li>Ensure safety and security</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">3. Information Sharing</h2>
              <p className="text-emerald-100">
                We do not sell or rent your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-emerald-100">
                <li>Partner organizations (with your consent)</li>
                <li>Service providers</li>
                <li>Legal authorities when required</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">4. Your Rights</h2>
              <p className="text-emerald-100">You have the right to:</p>
              <ul className="list-disc pl-6 text-emerald-100">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of communications</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">5. Contact Us</h2>
              <p className="text-emerald-100">
                If you have questions about this Privacy Policy, please contact us at:
                <br />
                Email: privacy@shadownik.org
                <br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default PrivacyPolicy;