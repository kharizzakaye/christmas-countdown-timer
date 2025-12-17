"use client";

import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const MusicPlayerComponent = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);

  // Using a creative commons Christmas music URL
  const audioSrc = "/assets/Jingle-Bells.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Playback Error", error);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="w-full max-w-md backdrop-blur-lg border-3 border-white rounded-3xl p-4 sm:p-5 shadow-2xl">
      <audio ref={audioRef} src={audioSrc} loop preload="auto" />

      {/* Flex container: column on mobile, row on sm+ screens, centered */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        {/* Buttons container: side by side */}
        <div className="flex items-center gap-2">
          <button
            onClick={togglePlay}
            className="cursor-pointer flex items-center justify-center min-w-11 p-3 sm:p-4 rounded-full bg-linear-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-lg transform transition-all duration-200 text-white hover:scale-105 active:scale-95"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            <div className="text-lg sm:text-2xl">
              {isPlaying ? <Pause /> : <Play />}
            </div>
          </button>

          <button
            onClick={toggleMute}
            className="text-white hover:text-yellow-300 transition-colors cursor-pointer p-2 rounded-md"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            <div className="text-base sm:text-lg">
              {isMuted ? <VolumeX /> : <Volume2 />}
            </div>
          </button>
        </div>

        {/* Slider container: full width on mobile, flex on sm+ */}
        <div className="w-full sm:flex-1 sm:w-auto">
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={(e) => {
                const newVolume = parseFloat(e.target.value);
                setVolume(newVolume);
                if (newVolume > 0) setIsMuted(false);
              }}
              className="flex-1 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer
                       [&::-webkit-slider-thumb]:appearance-none
                       [&::-webkit-slider-thumb]:w-4
                       [&::-webkit-slider-thumb]:h-4
                       [&::-webkit-slider-thumb]:rounded-full
                       [&::-webkit-slider-thumb]:bg-white
                       [&::-webkit-slider-thumb]:cursor-pointer
                       [&::-webkit-slider-thumb]:shadow-lg
                       [&::-moz-range-thumb]:w-4
                       [&::-moz-range-thumb]:h-4
                       [&::-moz-range-thumb]:rounded-full
                       [&::-moz-range-thumb]:bg-white
                       [&::-moz-range-thumb]:border-0
                       [&::-moz-range-thumb]:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayerComponent;
