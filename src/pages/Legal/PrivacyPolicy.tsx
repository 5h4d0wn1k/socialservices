import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="mb-4">
            We at Shadownik Social Services ("we," "us," or "our"), a division of Shadownik Corporation, respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>
          <p className="mb-4">
            As part of the Shadownik Corporation family, we adhere to the highest standards of data protection and privacy practices while maintaining our commitment to social impact and community service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <div className="ml-4">
            <h3 className="text-xl font-semibold mb-2">2.1 Personal Information</h3>
            <p className="mb-4">We may collect:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
              <li>Donation information and history</li>
              <li>Volunteer registration information</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">2.2 Automatically Collected Information</h3>
            <p className="mb-4">When you visit our website, we automatically collect:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Usage data</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">We use your information to:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Process your donations and provide tax receipts</li>
            <li>Communicate about our programs and initiatives</li>
            <li>Coordinate volunteer activities</li>
            <li>Send newsletters and updates (with your consent)</li>
            <li>Improve our services and website functionality</li>
            <li>Comply with legal obligations</li>
            <li>Prevent fraud and enhance security</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Data Protection and Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational security measures to protect your personal information, including:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Encryption of sensitive data</li>
            <li>Secure servers and databases</li>
            <li>Regular security assessments</li>
            <li>Staff training on data protection</li>
            <li>Access controls and authentication measures</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent for data processing</li>
            <li>Object to data processing</li>
            <li>Request data portability</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
          <p className="mb-4">
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. International Data Transfers</h2>
          <p className="mb-4">
            We may transfer your information to servers and databases located outside your country. As part of Shadownik Corporation's global infrastructure, we ensure appropriate safeguards are in place to protect your information in compliance with applicable data protection laws, including GDPR and other regional privacy regulations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
          <p className="mb-4">
            We do not knowingly collect or maintain information from persons under 13 years of age without verifiable parental consent. If we learn that personal information of persons under 13 has been collected without parental consent, we will take appropriate steps to delete this information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
          <p className="mb-4">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this privacy policy or our data practices, please contact us at:
          </p>
          <div className="ml-4">
            <p>Shadownik Social Services</p>
            <p>A Division of Shadownik Corporation</p>
            <p>Email: info@shadownik.online</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;