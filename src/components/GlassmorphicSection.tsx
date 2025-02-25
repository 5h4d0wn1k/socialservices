import React from 'react';
import { motion } from 'framer-motion';

interface GlassmorphicSectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  delay?: number;
  fullWidth?: boolean;
}

const GlassmorphicSection: React.FC<GlassmorphicSectionProps> = ({
  children,
  className = '',
  title,
  subtitle,
  delay = 0,
  fullWidth = false
}) => {
  return (
    <section className={`relative py-16 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/50 to-green-800/50 backdrop-blur-sm" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className={`relative z-10 ${fullWidth ? 'w-full' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}`}
      >
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-emerald-50 max-w-3xl mx-auto drop-shadow-md">
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        <div className="relative">
          {children}
        </div>
      </motion.div>
    </section>
  );
};

export default GlassmorphicSection; 