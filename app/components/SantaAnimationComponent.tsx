"use client"; // if you're using Next.js App Router

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SantaAnimationComponent() {
  const [showSanta, setShowSanta] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const seconds = new Date().getSeconds();
      if (seconds === 0) {
        setShowSanta(true);
        setTimeout(() => setShowSanta(false), 6000); // match animation duration
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {showSanta && (
        <motion.img
          src="assets/animated-santa-sleigh.gif" // your PNG file
          alt="Santa in sleigh"
          className="fixed bottom-2/4 h-20 md:h-60 z-200" // Tailwind for size & position
          initial={{ x: "-1000px", y: 0, opacity: 1 }}
          animate={{
            x: "100vw", // fly across screen
            y: [0, -30, 0, 30, 0], // bounce up & down
            opacity: 1,
          }}
          transition={{
            duration: 6,
            ease: "linear",
            y: {
              repeat: Infinity, // keeps bouncing during flight
              duration: 1.2,
              ease: "easeInOut",
            },
          }}
        />
      )}
    </>
  );
}
