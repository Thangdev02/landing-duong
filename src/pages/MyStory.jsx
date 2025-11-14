"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function MyStory() {
  return (
    <div className="w-full bg-gradient-to-br from-[#020617] via-[#031427] to-[#01101b] text-white">
      
      {/* TOP HERO SECTION */}
      <section className="relative w-full pt-14 pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2 text-cyan-400 font-medium mb-8 hover:underline"
          >
            <ArrowLeft size={18} /> Back
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text mb-6"
            style={{ backgroundImage: "linear-gradient(to right, #4fd3ff, #7df9ff)" }}
          >
            My Story:  
            <span className="block">A Journey Through Robotics, Code & Purpose</span>
          </motion.h1>

          <p className="text-cyan-200 text-lg md:text-xl max-w-2xl">
            From playful curiosity to national championships, teaching, and building
            my own STEM community—this is how it all began.
          </p>
        </div>

        {/* Parallax Cover Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/40">
            <motion.img
              src="/mainavt.jpg"
              className="w-full h-[460px] object-cover"
              animate={{ scale: [1.05, 1, 1.05] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Glow */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-60 h-10 opacity-60 bg-cyan-500 blur-3xl"></div>
          </div>
        </motion.div>
      </section>

      {/* STORY BODY */}
      <section className="max-w-3xl mx-auto px-6 md:px-0 py-20 space-y-20">
        
        {/* Section 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none text-cyan-100"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Where Curiosity Started
          </h2>
          <p>
            Ever since I was young, I’ve always been fascinated by how machines move,
            how programs think, and how technology transforms the world around us.
            What started as tiny experiments—disassembling toys, building LEGO bots,
            and writing my first “if-else” statements—slowly became a passion.
          </p>
          <p>
            These early moments didn’t feel special at the time, but looking back,
            they were the sparks that shaped everything that followed.
          </p>
        </motion.div>

        {/* Highlight Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="my-12 p-8 rounded-2xl bg-[#01101b]/70 border border-cyan-400/20 shadow-xl backdrop-blur"
        >
          <p className="text-xl md:text-2xl font-semibold text-cyan-400 leading-relaxed">
            “Robotics didn’t just teach me engineering—it taught me resilience,
            teamwork, and the beauty of building something that can *think*.”
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none text-cyan-100"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">The Moment Everything Changed</h2>
          <p>
            My first real breakthrough was discovering robotics competitions. The
            thrill of designing something from scratch—writing its logic, improving
            its precision, and watching it compete—was unlike anything else.
          </p>
          <p>
            It wasn’t just about winning. It was about solving problems creatively,
            learning fast, and pushing myself harder each time.
          </p>
        </motion.div>

        {/* Big Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-xl shadow-cyan-500/30"
        >
          <img src="/story.jpg" className="w-full object-cover h-[340px] rounded-2xl" />
          {/* Glow */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-8 opacity-60 bg-cyan-500 blur-2xl"></div>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none text-cyan-100"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Giving Back — STEM For Life</h2>
          <p>
            I realized early that technology is meaningful only when shared.  
            That’s why I founded <strong className="text-cyan-400">STEM For Life</strong>: to help kids—especially
            those from underprivileged backgrounds—discover the same excitement
            that shaped my childhood.
          </p>
          <p>
            Teaching a student how to build their first robot or write their first
            program reminded me of why I fell in love with this field in the first place.
          </p>
        </motion.div>

        {/* The Dream */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none text-cyan-100 mt-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">The Dream Going Forward</h2>
          <p>
            My dream is to build technology that creates real impact—through
            robotics, AI, and tools that empower students worldwide.
          </p>
          <p>
            This journey has taught me something powerful:  
            <strong className="text-cyan-400"> every idea begins small—but grows when shared.</strong>
          </p>
        </motion.div>
      </section>
    </div>
  );
}
