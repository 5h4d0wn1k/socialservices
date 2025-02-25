import { ArrowRight } from 'lucide-react';
import GlassmorphicContainer from './GlassmorphicContainer';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  icon: React.ReactNode;
  status: string;
  participants: number;
  delay?: number;
  onClick?: () => void;
}

const ProjectCard = ({
  title,
  description,
  image,
  category,
  icon,
  status,
  participants,
  delay = 0,
  onClick
}: ProjectCardProps) => {
  return (
    <GlassmorphicContainer
      delay={delay}
      className="group h-full"
      onClick={onClick}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 to-green-900/90 group-hover:from-emerald-900/90 group-hover:to-green-900/95 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 h-full flex flex-col">
        {/* Icon */}
        <div className="mb-4">
          <div className="inline-flex backdrop-blur-md bg-white/10 p-3 rounded-full border border-white/20">
            {icon}
          </div>
        </div>

        {/* Category and Status */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-sm text-emerald-100 border border-emerald-400/20">
            {category}
          </span>
          <span className="px-3 py-1 text-sm rounded-full bg-green-500/20 backdrop-blur-sm text-green-100 border border-green-400/20">
            {status}
          </span>
        </div>

        {/* Title and Description */}
        <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-lg">{title}</h3>
        <p className="text-emerald-50 mb-4 drop-shadow-md flex-grow">{description}</p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
          <span className="text-sm text-emerald-100 drop-shadow-sm">
            {participants} participants
          </span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onClick?.();
            }}
            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group/button"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover/button:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </GlassmorphicContainer>
  );
};

export default ProjectCard;