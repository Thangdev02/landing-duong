"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      className="py-20 md:py-32 px-6 md:px-12 relative 
      bg-gradient-to-br from-[#020617] via-[#031427] to-[#01101b] text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[180px] -top-10 -left-10"></div>
        <div className="absolute w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[160px] bottom-0 right-0"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative rounded-2xl overflow-hidden border border-cyan-500/40 
            shadow-[0_0_40px_rgba(0,255,255,0.2)]"
          >
            <img src="/avatar.jpg" alt="Profile" className="w-full object-cover"  style={{ aspectRatio: "1/1" }}/>

            {/* Rotating holo ring */}
            <motion.div
              className="absolute -top-12 -right-12 w-48 h-48 border border-cyan-400/40 rounded-full"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-300">
                Hello, World!
              </h2>
            </motion.div>

            <p className="text-lg text-gray-300 leading-relaxed">
              Hi, I’m Duong Minh Khoi — a student who fell in love with robots
              when one accidentally ran into a cup of water on my desk.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I still remember the day my tiny robot blinked its LED “heart.”
              It wasn’t perfect — it bumped, fell, and sometimes refused to
              move. But at that moment, I realized:
              <span className="text-cyan-300 font-medium">
                {" "}every piece of code is a heartbeat you give your creation.
              </span>
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My journey didn’t start in a classroom — but from curiosity,
              laughter, and a desk full of wires and soda cans.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { value: "3.74/4", label: "Cumulative GPA" },
                { value: "1350", label: "SAT" },
                { value: "4, AP", label: "AP" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.06 }}
                  className="bg-[#0a1a2f]/60 backdrop-blur border border-cyan-400/30 
                  rounded-xl p-4 text-center shadow-[0_0_20px_rgba(0,255,255,0.1)]"
                >
                  <div className="text-2xl font-bold text-cyan-300">
                    {stat.value}
                  </div>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
