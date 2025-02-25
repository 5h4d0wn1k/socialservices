import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  backgroundImage?: string;
  className?: string;
  theme?: 'nature' | 'community' | 'education' | 'health' | 'default';
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  backgroundImage,
  className = '',
  theme = 'default'
}) => {
  // Color psychology-based gradient maps
  const themeGradients = {
    nature: "from-emerald-900 via-green-800 to-teal-900", // Trust, Growth, Harmony
    community: "from-indigo-900 via-purple-800 to-violet-900", // Unity, Wisdom, Creativity
    education: "from-blue-900 via-sky-800 to-cyan-900", // Knowledge, Communication, Trust
    health: "from-rose-900 via-red-800 to-orange-900", // Energy, Vitality, Warmth
    default: "from-emerald-900 via-green-800 to-emerald-900" // Default nature theme
  };

  // Natural texture patterns for different themes
  const patterns = {
    nature: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310B981' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
    community: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0A30 30 0 110 30 30 30 0 0130 0z' fill='%238B5CF6' fill-opacity='0.1'/%3E%3C/svg%3E\")",
    education: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M30 20L45 45H15z' fill='%230EA5E9' fill-opacity='0.1'/%3E%3C/svg%3E\")",
    health: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30h10v10H30v10H20V40H10V30h10V20h10v10z' fill='%23F43F5E' fill-opacity='0.1'/%3E%3C/svg%3E\")",
    default: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310B981' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b ${themeGradients[theme]}`}>
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent animate-pulse-slow" />
        <div 
          className="absolute inset-0 opacity-50 animate-float" 
          style={{ backgroundImage: patterns[theme] }} 
        />
      </div>

      {/* Dynamic Background Image with Parallax */}
      {backgroundImage && (
        <div 
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            transform: 'translateZ(0)', // Hardware acceleration
          }}
        >
          <div className={`absolute inset-0 bg-gradient-to-b ${themeGradients[theme]} backdrop-blur-sm opacity-90`}>
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-white/10 animate-gradient" />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`relative z-10 ${className}`}>
        {children}
      </div>

      {/* Enhanced Glassmorphic Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[0]">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/5 backdrop-blur-[1px] mix-blend-overlay" />
        {/* Subtle light rays effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent animate-pulse-slow" />
      </div>
    </div>
  );
};

export default PageContainer; 