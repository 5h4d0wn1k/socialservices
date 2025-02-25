import React from 'react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="mb-4">
            This Cookie Policy explains how Shadownik Social Services, a division of Shadownik Corporation ("we," "us," or "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>
          <p className="mb-4">
            As part of the Shadownik Corporation family, we implement cookie practices that align with our parent company's high standards for user privacy and data protection.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. What Are Cookies?</h2>
          <p className="mb-4">
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>
          <p className="mb-4">
            Cookies set by the website owner (in this case, Shadownik Social Services) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
          <div className="ml-4">
            <h3 className="text-xl font-semibold mb-2">3.1 Essential Cookies</h3>
            <p className="mb-4">
              These cookies are strictly necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you which amount to a request for services, such as:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Setting your privacy preferences</li>
              <li>Logging in</li>
              <li>Filling in forms</li>
              <li>Securing your browsing experience</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">3.2 Performance Cookies</h3>
            <p className="mb-4">
              These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. Information collected includes:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Number of visitors</li>
              <li>Pages visited</li>
              <li>Traffic sources</li>
              <li>Anonymous location data</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">3.3 Functional Cookies</h3>
            <p className="mb-4">
              These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
            </p>

            <h3 className="text-xl font-semibold mb-2">3.4 Targeting Cookies</h3>
            <p className="mb-4">
              These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant adverts on other sites.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. How to Control Cookies</h2>
          <p className="mb-4">
            You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browser's help menu for more information.
          </p>
          <p className="mb-4">
            In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Digital Advertising Alliance</li>
            <li>European Interactive Digital Advertising Alliance</li>
            <li>Network Advertising Initiative</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Cookie Preferences</h2>
          <p className="mb-4">
            You can exercise your preferences in relation to cookies served on our Site by taking the following steps:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Using our cookie consent manager when you first visit our site</li>
            <li>Adjusting your browser settings to refuse cookies</li>
            <li>Clicking the cookie settings link in our website footer</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Updates to This Policy</h2>
          <p className="mb-4">
            We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
          </p>
          <p className="mb-4">
            The date at the top of this Cookie Policy indicates when it was last updated.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our use of cookies or other technologies, please contact us at:
          </p>
          <div className="ml-4">
            <p>Shadownik Social Services</p>
            <p>A Division of Shadownik Corporation</p>
            <p>Email: privacy@shadownik.org</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: [physical address]</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy; 