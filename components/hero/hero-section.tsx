"use client";

import { motion } from "framer-motion";
import { Scene3D } from "./3d-scene";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  const [backgroundPosition, setBackgroundPosition] = useState("center");

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      setBackgroundPosition(`${x}% ${y}%`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${backgroundPosition}, #1e293b, #0f172a)`,
      }}
    >
      <Scene3D />
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
            Hi, I'm Aniket
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Software Engineer & Learner
          </p>
          <Button size="lg" className="group" onClick={handleScroll}>
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
