"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CountdownTimerComponent from "./components/CountdownTimerComponent";
import MusicPlayerComponent from "./components/MusicPlayerComponent";
import SantaAnimationComponent from "./components/SantaAnimationComponent";
import SnowfallComponent from "./components/SnowfallComponent";
import SnowflakesComponent from "./components/SnowflakeComponent";
import SnowGroundComponent from "./components/SnowGroundComponent";

const Page = () => {
  return (
    <main className="relative min-h-screen bg-linear-to-b from-[#ba0c0c] to-[#5c0000] overflow-hidden text-center">
      <header className="text-3xl md:text-5xl lg:text-7xl absolute mt-8 md:mt-23 items-center w-full">
        <h1 className="font-bold text-white">Christmas Countdown</h1>
      </header>

      {/* Christmas Trees */}
      <div className="hidden lg:block absolute left-10 bottom-20 h-150 w-100">
        <Image
          src="/assets/christmas-tree-hd.png"
          alt="Christmas Tree Left"
          fill
          className="object-contain"
        />
      </div>
      <div className="hidden lg:block absolute right-5 bottom-20 h-150 w-100">
        <Image
          src="/assets/christmas-tree-hd.png"
          alt="Christmas Tree Right"
          fill
          className="object-contain"
        />
      </div>

      {/* Snowman */}
      <div className="hidden lg:block absolute right-64 bottom-35 h-50 w-55">
        <motion.img
          src="/assets/snowman.png"
          alt="Snowman"
          className="object-contain"
          initial={{ y: 0, rotate: 0 }}
          animate={{
            y: [0, -2, 0, 2, 0], // gentle up/down bob
            rotate: [0, 2, -2, 0], // slight wobble
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Center content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className="space-y-8 w-full flex flex-col items-center">
          <CountdownTimerComponent />
          <MusicPlayerComponent />
        </div>
      </div>

      <SantaAnimationComponent />

      <SnowfallComponent />
      <SnowflakesComponent />

      <SnowGroundComponent />
    </main>
  );
};

export default Page;
