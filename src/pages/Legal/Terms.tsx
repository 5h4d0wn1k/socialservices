import React from 'react';
import GlassCard from '../../components/GlassCard';
import AnimatedSection from '../../components/AnimatedSection';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 via-green-800 to-emerald-900 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <GlassCard className="p-8 rounded-xl">
            <h1 className="text-4xl font-bold mb-8 text-white">Terms of Service</h1>
            <div className="prose prose-lg prose-invert">
              <p className="text-emerald-100">Last updated: March 1, 2024</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">1. Acceptance of Terms</h2>
              <p className="text-emerald-100">
                By accessing and using Shadownik's services, you agree to be bound by these Terms of Service.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">2. Volunteer Responsibilities</h2>
              <p className="text-emerald-100">As a volunteer, you agree to:</p>
              <ul className="list-disc pl-6 text-emerald-100">
                <li>Provide accurate information</li>
                <li>Follow project guidelines and safety protocols</li>
                <li>Maintain confidentiality</li>
                <li>Respect other volunteers and beneficiaries</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">3. Code of Conduct</h2>
              <p className="text-emerald-100">All volunteers must:</p>
              <ul className="list-disc pl-6 text-emerald-100">
                <li>Act professionally and ethically</li>
                <li>Avoid discriminatory behavior</li>
                <li>Report any concerns or incidents</li>
                <li>Follow safety guidelines</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">4. Liability</h2>
              <p className="text-emerald-100">
                Volunteers participate at their own risk. Shadownik is not liable for:
              </p>
              <ul className="list-disc pl-6 text-emerald-100">
                <li>Personal injury during volunteer activities</li>
                <li>Loss or damage of personal property</li>
                <li>Third-party claims</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">5. Termination</h2>
              <p className="text-emerald-100">
                Shadownik reserves the right to terminate volunteer relationships for:
              </p>
              <ul className="list-disc pl-6 text-emerald-100">
                <li>Violation of these terms</li>
                <li>Inappropriate behavior</li>
                <li>Failure to meet commitments</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">6. Contact</h2>
              <p className="text-emerald-100">
                For questions about these terms, contact us at:
                <br />
                Email: legal@shadownik.org
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

export default Terms;