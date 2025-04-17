import React from 'react';
import { Calendar, Clock, MapPin, ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Education Support Program",
      category: "Education",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Help students achieve their educational goals through mentoring and tutoring programs.",
      location: "Multiple Locations",
      duration: "3-6 months",
      schedule: "Flexible",
      volunteers: 25
    },
    {
      id: 2,
      title: "Community Clean-up Initiative",
      category: "Environment",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Join our efforts to keep communities clean and sustainable through regular clean-up drives.",
      location: "City Parks",
      duration: "Ongoing",
      schedule: "Weekends",
      volunteers: 50
    },
    {
      id: 3,
      title: "Elder Care Support",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1516307365426-d8ac0056203e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Provide companionship and support to elderly community members through various programs.",
      location: "Senior Centers",
      duration: "Flexible",
      schedule: "Weekly",
      volunteers: 30
    },
    {
      id: 4,
      title: "Food Bank Distribution",
      category: "Food Security",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Help distribute food to families in need through our network of food banks.",
      location: "Distribution Centers",
      duration: "Ongoing",
      schedule: "Weekly",
      volunteers: 40
    }
  ];

  return (
    <PageLayout>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse through our current projects and find opportunities to make a difference in your community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 text-sm font-semibold text-red-500 bg-red-100 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-600">{project.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-600">{project.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-600">{project.schedule}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-gray-600">{project.volunteers} volunteers needed</span>
                    </div>
                  </div>

                  <Link
                    to="/register"
                    className="inline-flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                  >
                    Volunteer Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Projects;