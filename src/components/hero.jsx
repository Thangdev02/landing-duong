"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 md:px-12 py-20 
        bg-gradient-to-br from-[#020617] via-[#031427] to-[#01101b] 
        text-white overflow-hidden">

      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[200px] -top-20 -left-20"></div>
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[180px] bottom-0 right-0"></div>
      </div>

      <motion.div
        className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* TEXT SECTION */}
        <div>
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-900/40 border border-cyan-500/40 backdrop-blur">
              <span className="inline-block w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-cyan-300">
                Robotics & Computer Science Student
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="block">Hi, I'm DUONG MINH KHOI</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Building Innovation Through Code & Robotics
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
          >
            International School Ho Chi Minh City - American Academy
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4">
            {/* EXPLORE BUTTON */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 35px rgba(0, 200, 255, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/achievement/vex-world")}
              className="px-8 py-4 bg-cyan-500 text-black rounded-lg font-semibold 
                  flex items-center gap-2 hover:bg-cyan-400 transition-colors"
            >
              Explore My Work
              <ArrowRight size={20} />
            </motion.button>

            {/* VIEW MY STORY BUTTON */}
            <motion.div
              className="relative"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(0, 255, 170, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/my-story")}
                className="px-8 py-4 border border-cyan-400 text-cyan-300 
                    bg-cyan-900/20 hover:bg-cyan-800/40 rounded-lg font-semibold backdrop-blur"
              >
                View My Story
              </motion.button>

              {/* FUTURISTIC HOLOGRAM PREVIEW */}
              <AnimatePresence>
                {hovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[320px]
                      bg-gradient-to-br from-cyan-900/40 to-blue-900/40 
                      border border-cyan-400/40 rounded-2xl shadow-xl p-4 
                      text-cyan-200 text-sm backdrop-blur-lg"
                  >
                    <p className="font-semibold">🤖 Vision & Robotics</p>
                    <p className="text-xs mt-2 opacity-80">
                      Curiosity → Engineering → Innovation.  
                      Discover the story behind the mindset.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>

        {/* IMAGE SECTION */}
        <motion.div variants={itemVariants} className="relative h-96 md:h-full">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{ height: "500px" }}
            className="relative rounded-2xl overflow-hidden border border-cyan-500/40 shadow-[0_0_40px_rgba(0,255,255,0.2)]"
          >
            <img
              src="/mainavt.jpg"
              alt="DUONG MINH KHOI - Robotics Student"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00141f]/60 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border border-cyan-400 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-cyan-300 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
