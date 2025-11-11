"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function MyStory() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white text-gray-900 p-24">
      
      {/* TOP HERO SECTION */}
      <section className="relative w-full pt-14 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-blue-600 font-medium mb-8 hover:underline"
          >
            <ArrowLeft size={18} /> Back
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-extrabold leading-tight tracking-tight text-gray-900"
          >
            My Story:  
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              A Journey Through Robotics, Code & Purpose
            </span>
          </motion.h1>

          <p className="text-gray-600 text-lg mt-6 max-w-2xl">
            From playful curiosity to national championships, teaching, and building
            my own STEM community—this is how it all began.
          </p>
        </div>

        {/* Parallax Cover Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-16 max-w-5xl mx-auto px-6"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-blue-200/40">
            <motion.img
              src="/mainavt.jpg"
              className="w-full h-[460px] object-cover"
              animate={{ scale: [1.1, 1, 1.1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* STORY BODY */}
      <section className="max-w-3xl mx-auto px-6 py-20 space-y-20">
        
        {/* Section 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
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
          className="my-12 p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 shadow-sm"
        >
          <p className="text-xl font-semibold text-blue-800 leading-relaxed">
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
          className="prose prose-lg max-w-none"
        >
          <h2 className="text-3xl font-bold">The Moment Everything Changed</h2>
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
          className="rounded-2xl overflow-hidden shadow-xl shadow-blue-100 my-12"
        >
          <img src="/story.jpg" className="w-full object-cover h-[340px]" />
        </motion.div>

        {/* Section 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none"
        >
          <h2 className="text-3xl font-bold">Giving Back — STEM For Life</h2>
          <p>
            I realized early that technology is meaningful only when shared.  
            That’s why I founded <strong>STEM For Life</strong>: to help kids—especially
            those from underprivileged backgrounds—discover the same excitement
            that shaped my childhood.
          </p>
          <p>
            Teaching a student how to build their first robot or write their first
            program reminded me of why I fell in love with this field in the first place.
          </p>
        </motion.div>

        {/* ---- NEW STORY SECTIONS ---- */}

        

        {/* The Dream */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none mt-16"
        >
          <h2 className="text-3xl font-bold">The Dream Going Forward</h2>
          <p>
            My dream is to build technology that creates real impact—through
            robotics, AI, and tools that empower students worldwide.
          </p>
          <p>
            This journey has taught me something powerful:  
            <strong> every idea begins small—but grows when shared.</strong>
          </p>
        </motion.div>
      </section>
    </div>
  );
}
