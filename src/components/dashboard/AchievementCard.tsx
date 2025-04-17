import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface AchievementCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  description,
  icon: Icon,
  color,
}) => {
  return (
    <div className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:border-primary-500 transition-colors">
      <div className={`${color} bg-opacity-10 rounded-lg p-2`}>
        <Icon className={`h-5 w-5 ${color}`} />
      </div>
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default AchievementCard;