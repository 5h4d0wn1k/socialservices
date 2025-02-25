import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="mb-4">
            Welcome to Shadownik Social Services, a division of Shadownik Corporation ("Shadownik," "we," "us," or "our"). By accessing or using our website and services, you agree to be bound by these Terms of Service ("Terms"). Please read these Terms carefully before using our services.
          </p>
          <p className="mb-4">
            As a division of Shadownik Corporation, we are committed to maintaining the highest standards of service delivery while adhering to our parent company's principles of integrity, transparency, and social responsibility.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Definitions</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>"Services" refers to all services, programs, and activities provided by Shadownik Social Services</li>
            <li>"User," "you," and "your" refer to individuals accessing or using our services</li>
            <li>"Website" refers to shadownik.org and all related platforms</li>
            <li>"Content" includes text, images, videos, and other materials on our website</li>
            <li>"Shadownik Corporation" refers to our parent company and its subsidiaries</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Use of Services</h2>
          <div className="ml-4">
            <h3 className="text-xl font-semibold mb-2">3.1 Eligibility</h3>
            <p className="mb-4">
              You must be at least 18 years old to use our services independently. Users under 18 must have parental or guardian consent and supervision.
            </p>

            <h3 className="text-xl font-semibold mb-2">3.2 Account Registration</h3>
            <p className="mb-4">
              Some services may require registration. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
            </p>

            <h3 className="text-xl font-semibold mb-2">3.3 Prohibited Activities</h3>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Impersonate any person or entity</li>
              <li>Interfere with the operation of our services</li>
              <li>Collect user information without consent</li>
              <li>Use our services for commercial purposes without authorization</li>
              <li>Engage in any harmful or malicious activities</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Donations and Financial Transactions</h2>
          <div className="ml-4">
            <p className="mb-4">
              All donations are final and non-refundable unless required by law. We maintain transparent financial records and provide tax receipts as required by law.
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Donations are used in accordance with our mission and donor intent</li>
              <li>We comply with all applicable charitable giving regulations</li>
              <li>Financial information is processed securely through trusted payment processors</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property Rights</h2>
          <p className="mb-4">
            All content on our website is owned by or licensed to Shadownik Social Services and is protected by copyright and other intellectual property laws.
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>You may not use our content without permission</li>
            <li>Our trademarks and logos may not be used without written consent</li>
            <li>You retain ownership of content you submit to us</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Volunteer Policies</h2>
          <p className="mb-4">
            Volunteers must comply with our volunteer policies and guidelines, including:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Following safety protocols and procedures</li>
            <li>Maintaining confidentiality of sensitive information</li>
            <li>Adhering to our code of conduct</li>
            <li>Completing required training and documentation</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
          <p className="mb-4">
            To the maximum extent permitted by law, Shadownik Social Services shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Indemnification</h2>
          <p className="mb-4">
            You agree to indemnify and hold harmless Shadownik Social Services, its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of our services or violation of these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Modifications to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these Terms at any time. We will notify users of any material changes through our website or email. Continued use of our services after such modifications constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
          <p className="mb-4">
            These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located within the jurisdiction of Shadownik Corporation's principal place of business.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
          <p className="mb-4">
            For questions about these Terms, please contact us at:
          </p>
          <div className="ml-4">
            <p>Shadownik Social Services</p>
            <p>A Division of Shadownik Corporation</p>
            <p>Email: legal@shadownik.org</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: [physical address]</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService; 