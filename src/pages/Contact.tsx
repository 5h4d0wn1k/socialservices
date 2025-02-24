import React from 'react';
import { Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Contact Info Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about our projects or want to get involved? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Mail className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@shadownik.online</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Clock className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
              <p className="text-gray-600">Monday - Friday</p>
              <p className="text-gray-600">9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition font-semibold"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Location Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Our Location</h2>
              {/* <div className="bg-gray-100 rounded-lg p-8 mb-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-indigo-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Main Office</h3>
                    <p className="text-gray-600">
                      123 Community Street<br />
                      Suite 456<br />
                      City, State 12345<br />
                      Country
                    </p>
                  </div>
                </div>
              </div> */}
              
              {/* Map Placeholder */}
              {/* <div className="h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Map Integration Here</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;