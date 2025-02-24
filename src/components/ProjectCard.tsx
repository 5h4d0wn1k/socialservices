import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  icon: React.ReactNode;
  status: string;
  participants: number;
  delay?: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  category,
  icon,
  status,
  participants,
  delay = 0
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="backdrop-blur-lg bg-white/10 rounded-xl overflow-hidden border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 backdrop-blur-md bg-white/20 rounded-full p-2 border border-white/30">
          {icon}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-200">
            {category}
          </span>
          <span className="px-3 py-1 text-sm rounded-full bg-green-400/20 text-green-200">
            {status}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-emerald-100 mb-4">{description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-emerald-200">
            {participants} participants
          </span>
          <button className="inline-flex items-center px-4 py-2 bg-emerald-500/20 text-white rounded-lg hover:bg-emerald-500/30 transition-all duration-300 border border-emerald-400/30 group">
            Join Project
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;