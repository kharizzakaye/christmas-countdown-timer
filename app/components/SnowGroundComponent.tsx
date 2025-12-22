import React from "react";

const SnowGroundComponent: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full">
      {/* Ground container */}
      <div className="bg-linear-to-t from-white to-blue-100 h-20 sm:h-28 md:h-36 lg:h-40 w-full relative overflow-hidden shadow-inner">
        {/* Organic snow shape using SVG */}
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="white"
            d="M0,256L60,245.3C120,235,240,213,360,197.3C480,181,600,171,720,176C840,181,960,203,1080,213.3C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>

        {/* Extra snow mounds for layering */}
        <div className="absolute bottom-0 left-0 w-full flex justify-around">
          <div className="bg-white rounded-t-full w-1/3 h-16 sm:h-20 md:h-24 lg:h-28 shadow-inner"></div>
          <div className="bg-white rounded-t-full w-1/4 h-12 sm:h-16 md:h-20 lg:h-24 shadow-inner"></div>
          <div className="bg-white rounded-t-full w-1/3 h-16 sm:h-20 md:h-24 lg:h-28 shadow-inner"></div>
        </div>
      </div>
    </div>
  );
};

export default SnowGroundComponent;
