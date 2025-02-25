import React from 'react';
import { motion } from 'framer-motion';

interface GlassmorphicContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
  onClick?: () => void;
}

const GlassmorphicContainer: React.FC<GlassmorphicContainerProps> = ({
  children,
  className = '',
  delay = 0,
  hover = true,
  onClick
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-xl
        bg-white/10 backdrop-blur-md
        border border-white/20
        shadow-lg shadow-emerald-900/10
        ${hover ? 'hover:bg-white/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlassmorphicContainer; 