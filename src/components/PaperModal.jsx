"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function PaperModal({ isOpen, onClose }) {
  const story = `⚙️ My Story – Dream: Build a Space Robot!

When I was younger, I used to dream of building a robot that could fly into space. I didn’t have fancy tools, so I built with clay, bottle caps, and broken toys.
Each project was a little adventure: “What if this soda can could talk?” “What if this car could dance?”

Through these moments — captured in the “Đất Sét Project” — I found something magical. Robots weren’t just machines; they were imagination powered by patience.
That spark became my lifelong fascination with STEM — the place where art meets logic, and mistakes turn into ideas.`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Container */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0, rotateX: -90 }}
            animate={{
              scaleY: 1,
              opacity: 1,
              rotateX: 0,
              transition: {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            exit={{
              scaleY: 0,
              opacity: 0,
              rotateX: 90,
              transition: { duration: 0.6 },
            }}
            className="relative max-w-2xl mx-auto p-10 rounded-[30px] shadow-[0_0_40px_rgba(0,200,255,0.4)]
              bg-gradient-to-b from-[#0a0f1f] to-[#08101f] border border-cyan-500/50
              text-lg leading-relaxed font-mono text-cyan-100 tracking-wide overflow-hidden"
          >
            {/* Hologram flicker effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-cyan-400/10 to-transparent"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Glowing corner lines */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-24 h-[2px] bg-cyan-400 shadow-[0_0_15px_cyan]" />
              <div className="absolute top-0 left-0 h-24 w-[2px] bg-cyan-400 shadow-[0_0_15px_cyan]" />
              <div className="absolute bottom-0 right-0 w-24 h-[2px] bg-cyan-400 shadow-[0_0_15px_cyan]" />
              <div className="absolute bottom-0 right-0 h-24 w-[2px] bg-cyan-400 shadow-[0_0_15px_cyan]" />
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-cyan-300 hover:text-cyan-100 transition-transform hover:scale-110"
            >
              <X size={26} />
            </button>

            {/* Nội dung */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="relative z-10"
            >
              <h2 className="text-3xl font-bold mb-5 text-center text-cyan-300 tracking-[0.1em] drop-shadow-[0_0_15px_cyan]">
                ⚙️ My Story
              </h2>
              <p className="whitespace-pre-line text-cyan-100/90">{story}</p>
            </motion.div>

            {/* Floating cyber particles */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-[2px] h-[2px] bg-cyan-300 rounded-full"
                animate={{
                  x: [0, Math.random() * 200 - 100],
                  y: [0, Math.random() * 300 - 150],
                  opacity: [0, 1, 0],
                  scale: [0.8, 1.4, 0.8],
                }}
                transition={{
                  duration: 3 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
