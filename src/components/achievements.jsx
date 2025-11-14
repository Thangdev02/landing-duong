// src/components/Achievements.jsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Zap, Users, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { achievements } from "../data/achievements";
import { useState } from "react";

const icons = { Trophy, Zap, Users, Target };

export default function Achievements() {
  const navigate = useNavigate();

  return (
    <section
      id="achievements"
      className="py-24 px-6 relative bg-gradient-to-br 
      from-[#020617] via-[#031427] to-[#01101b] text-white"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[550px] h-[550px] bg-cyan-500/20 rounded-full blur-[180px] -top-10 left-0"></div>
        <div className="absolute w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[160px] bottom-10 right-0"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold tracking-tight text-cyan-300">
            HONORS & AWARDS
          </h2>
          <p className="text-lg text-gray-400 mt-4">
            Click what i got to explore the award
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12">
          {achievements.map((a, i) => {
            const Icon = icons[Object.keys(icons)[i]];
            const [isOpen, setIsOpen] = useState(false);

            return (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-96 rounded-3xl overflow-hidden 
                border border-cyan-500/20 hover:border-cyan-400/50
                shadow-[0_0_25px_rgba(0,255,255,0.12)]
                hover:shadow-[0_0_40px_rgba(0,255,255,0.25)]
                cursor-pointer transition-all duration-300"
              >
                {/* Image */}
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-cyan-500/20 backdrop-blur rounded-2xl shadow-inner">
                      <Icon size={32} className="text-cyan-300" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-cyan-200 drop-shadow">
                        {a.title}
                      </h3>
                      <p className="text-sm text-gray-300 mt-1">{a.subtitle}</p>
                    </div>
                  </div>

                  {/* WHAT I GOT BUTTON */}
                  <div className="relative mt-4">
                    <button
                      type="button"
                      onMouseEnter={() => setIsOpen(true)}
                      onMouseLeave={() => setIsOpen(false)}
                      className="inline-flex items-center gap-2 rounded-full 
                      bg-cyan-400/20 px-4 py-2 text-sm font-semibold 
                      text-cyan-200 backdrop-blur hover:bg-cyan-400/30 transition-all"
                    >
                      What I got
                      <svg
                        className="h-4 w-4 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* DROPDOWN */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute bottom-full left-0 mb-2 w-80 rounded-xl 
                          bg-[#001018]/95 border border-cyan-500/20 p-4 text-sm 
                          text-cyan-200 backdrop-blur-lg shadow-[0_0_20px_rgba(0,255,255,0.15)] z-20"
                          onMouseEnter={() => setIsOpen(true)}
                          onMouseLeave={() => setIsOpen(false)}
                        >
                          {a.highlight.split("\n").map((line, idx) => (
                            <p key={idx} className="mb-1 last:mb-0 leading-relaxed">
                              {line.trim()}
                            </p>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* SHINE EFFECT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r 
                  from-transparent via-white/10 to-transparent 
                  -translate-x-full group-hover:translate-x-full 
                  transition-transform duration-1000" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
