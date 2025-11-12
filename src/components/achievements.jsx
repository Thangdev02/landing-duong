// src/components/Achievements.jsx
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Zap, Users, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { achievements } from "../data/achievements";
import { useState } from "react";

const icons = { Trophy, Zap, Users, Target };

export default function Achievements() {
  const navigate = useNavigate();

  return (
    <section id="achievements" className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            HONORS & AWARDS
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Click any card to explore the full story
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {achievements.map((a, i) => {
            const Icon = icons[Object.keys(icons)[i]];
            const [isOpen, setIsOpen] = useState(false);

            return (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => navigate(`/achievement/${a.id}`)}
                className="group relative h-96 rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
              >
                {/* Image */}
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/20 backdrop-blur rounded-2xl">
                      <Icon size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold leading-tight">{a.title}</h3>
                      <p className="text-sm opacity-90 mt-1">{a.subtitle}</p>
                    </div>
                  </div>

                  {/* What I get Button + Bottom-to-Top Dropdown */}
                  <div className="relative mt-4">
                    <button
                      type="button"
                      onMouseEnter={() => setIsOpen(true)}
                      onMouseLeave={() => setIsOpen(false)}
                      className="inline-flex items-center gap-2 rounded-full bg-yellow-400/20 px-4 py-2 text-sm font-semibold text-yellow-300 backdrop-blur transition-all hover:bg-yellow-400/30"
                    >
                      What I get
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

                    {/* Dropdown: Slides UP from the button */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute bottom-full left-0 mb-2 w-80 rounded-xl bg-black/85 p-4 text-sm text-yellow-200 backdrop-blur-lg shadow-xl z-20"
                          style={{ transformOrigin: "bottom" }}
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

                  <p className="mt-3 text-sm opacity-80 animate-pulse">
                    Click to read full story
                  </p>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}