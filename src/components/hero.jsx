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
    <section className="min-h-screen flex items-center justify-center relative px-6 md:px-12 py-20 bg-white text-gray-900 overflow-hidden">
      <motion.div
        className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* TEXT SECTION */}
        <div>
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-300">
              <span className="inline-block w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-600">
                Computer Science Student
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="block">Hi, I'm DUONG MINH KHOI</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
              Building Innovation Through Code & Robotics
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed"
          >
            International School Ho Chi Minh City - American Academy
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4">
            {/* EXPLORE BUTTON */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(88, 126, 255, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors"
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
                  boxShadow: "0 0 20px rgba(255, 215, 0, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/my-story")}  
                className="px-8 py-4 border border-blue-500 rounded-lg font-semibold text-blue-700 bg-blue-50 hover:bg-yellow-100 transition-all relative z-10"
              >
                View My Story
              </motion.button>

              {/* Hover preview paper effect */}
              <AnimatePresence>
                {hovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: 20, rotateX: -90 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[300px]
                      bg-gradient-to-b from-[#f7e7c1] to-[#f3dba1]
                      border border-yellow-300 rounded-2xl shadow-xl p-4 text-[#3e2f1c]
                      text-sm leading-relaxed origin-top transform-gpu"
                    style={{
                      perspective: 1000,
                      backgroundImage: `url('https://www.transparenttextures.com/patterns/paper-fibers.png')`,
                    }}
                  >
                    <p className="font-medium text-yellow-800">
                      ⚙️ “Dream: Build a Space Robot!”
                    </p>
                    <p className="text-xs mt-2 opacity-80 italic">
                      Hovering curiosity becomes imagination…
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
            className="relative rounded-2xl overflow-hidden border-2 border-blue-200 shadow-2xl"
          >
            <img
              src="/mainavt.jpg"
              alt="DUONG MINH KHOI - Computer Science Student"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border border-blue-400 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-blue-500 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
