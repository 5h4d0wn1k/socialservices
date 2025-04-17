import React from 'react';
import { Clock, Calendar } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  progress: number;
  hoursLogged: number;
  nextSession: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  progress,
  hoursLogged,
  nextSession,
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-500 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <div className="flex items-center mt-1 text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            {hoursLogged} hours logged
          </div>
        </div>
        <span className="text-sm font-medium text-primary-500">{progress}%</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div
          className="bg-primary-500 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex items-center text-sm text-gray-500">
        <Calendar className="h-4 w-4 mr-1" />
        Next: {nextSession}
      </div>
    </div>
  );
};

export default ProjectCard;