import React from "react";

interface AnimatedLogoProps {
  className?: string;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ className }) => {
  return (
    <div className={`${className || ""} flex items-center overflow-hidden`}>
      <div className="relative">
        <a
          href="/"
          className="text-2xl md:text-3xl font-bold tracking-tighter flex items-center"
        >
          <span className="text-white">shine</span>
          <span className="text-purple-300">store.in</span>

          {/* Small animated element that looks like a rover */}
          <span className="absolute -right-4 -top-1 h-2 w-2 bg-purple-400 rounded-full animate-pulse-slow"></span>
        </a>
      </div>
    </div>
  );
};

export default AnimatedLogo;
