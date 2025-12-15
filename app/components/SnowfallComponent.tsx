"use client";

import { useEffect, useRef } from "react";

const SnowfallComponent = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    interface SnowFlake {
      x: number;
      y: number;
      size: number;
      speed: number;
      alpha: number;
      swing: number;
    }

    const createFlake = (): SnowFlake => ({
      x: Math.random() * width,
      y: Math.random() * height - height,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 1 + 0.5,
      alpha: Math.random() * 0.6 + 0.4,
      swing: Math.random() * 0.02 + 0.005,
    });

    const flakes: SnowFlake[] = Array.from({ length: 150 }, createFlake);
    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      flakes.forEach((flake) => {
        flake.y += flake.speed;
        flake.x += Math.sin(flake.y * flake.swing) * 0.8;

        if (flake.y > height) {
          flake.y = -10;
          flake.x = Math.random() * width;
        }

        ctx.globalAlpha = flake.alpha;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default SnowfallComponent;
