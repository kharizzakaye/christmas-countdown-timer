export const TimeUnit: React.FC<{ value: string; label: string }> = ({
  value,
  label,
}) => (
  <div className="flex flex-col items-center min-w-20 md:min-w-25">
    <div className="text-5xl md:text-7xl font-bold text-white mb-2 transition-all duration-300">
      {value}
    </div>
    <div className="text-sm md:text-base lg:text-2xl text-yellow-300 font-semibold uppercase tracking-wider">
      {label}
    </div>
  </div>
);
