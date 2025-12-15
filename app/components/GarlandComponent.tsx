const GarlandComponent = () => {
  const colors = [
    "bg-red-500",
    "bg-green-500",
    "bg-yellow-400",
    "bg-blue-500",
    "bg-pink-400",
    "bg-purple-500",
  ];

  return (
    <div className="relative w-full flex justify-center mb-8">
      <svg
        viewBox="0 0 100 20"
        className="w-full max-w-4xl h-16 absolute top-0"
        preserveAspectRatio="none"
      >
        <path
          d="M0,10 Q25,18 50,10 T100,10"
          stroke="rgba(34, 139, 34, 0.6)"
          strokeWidth="3"
          fill="transparent"
        />
      </svg>

      <div className="flex justify-between w-full max-w-4xl relative pt-2">
        {Array.from({ length: 24 }).map((_, i) => {
          const delay = i * 150;
          const yOffset = Math.sin((i / 24) * Math.PI * 2) * 8;

          return (
            <div
              key={i}
              className={`w-4 h-4 rounded-full ${colors[i % colors.length]} 
                shadow-lg cursor-pointer transition-all duration-300
                hover:scale-150 hover:shadow-2xl`}
              style={{
                transform: `translateY(${yOffset}px)`,
                animation: `pulse 2s ease-in-out infinite`,
                animationDelay: `${delay}ms`,
                boxShadow: "0 0 10px currentColor",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GarlandComponent;
