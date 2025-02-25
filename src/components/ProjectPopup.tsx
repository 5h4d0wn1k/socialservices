import React from 'react';
import { X, Globe, Users, Calendar, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectPopupProps {
  project: {
    title: string;
    description: string;
    image: string;
    category: string;
    icon: React.ReactNode;
    status: string;
    participants: number;
    website?: string;
    startDate?: string;
    location?: string;
    detailedDescription?: string;
    goals?: string[];
    requirements?: string[];
    joinLink?: string | null;
  };
  isOpen: boolean;
  onClose: () => void;
}

const ProjectPopup: React.FC<ProjectPopupProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Popup Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-gradient-to-br from-emerald-900 to-green-900 rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Project Image */}
            <div className="relative h-64 overflow-hidden rounded-t-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm">
                    {project.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-emerald-500/20 text-emerald-100 border border-emerald-400/20">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-100 border border-green-400/20">
                    {project.status}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-white">{project.title}</h2>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-emerald-50">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>{project.participants} participants</span>
                </div>
                {project.startDate && (
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>{project.startDate}</span>
                  </div>
                )}
                {project.location && (
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>{project.location}</span>
                  </div>
                )}
                {project.website && (
                  <div className="flex items-center space-x-2">
                    <Globe className="h-5 w-5" />
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>

              {/* Detailed Description */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">About the Project</h3>
                <p className="text-emerald-50 leading-relaxed">
                  {project.detailedDescription || project.description}
                </p>
              </div>

              {/* Goals */}
              {project.goals && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Project Goals</h3>
                  <ul className="list-disc list-inside space-y-2 text-emerald-50">
                    {project.goals.map((goal, index) => (
                      <li key={index}>{goal}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Requirements */}
              {project.requirements && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Requirements</h3>
                  <ul className="list-disc list-inside space-y-2 text-emerald-50">
                    {project.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Button */}
              {project.joinLink ? (
                <a
                  href={project.joinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-6 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold text-center transition-colors"
                >
                  Join This Project
                </a>
              ) : (
                <div className="space-y-3">
                  <button disabled className="w-full py-3 px-6 bg-emerald-500/50 text-white rounded-lg font-semibold cursor-not-allowed">
                    Coming Soon
                  </button>
                  <p className="text-sm text-emerald-300 text-center">
                    This project is not yet open for registration. Check back in {project.startDate}.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectPopup; 