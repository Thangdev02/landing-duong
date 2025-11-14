"use client";

import { motion } from "framer-motion";
import { Brain, Users, Rocket } from "lucide-react";

export default function ResearchProduct() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      className="relative py-24 px-6 md:px-12 text-white overflow-hidden
                 bg-gradient-to-br from-[#020617] via-[#031427] to-[#01101b]"
      id="research"
    >
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[200px] -top-20 -left-20"></div>
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[180px] bottom-0 right-0"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(to right, #4fd3ff, #7df9ff)" }}
          >
            RESEARCH & CREATIVE PRODUCT
          </h2>
          <motion.div
            variants={item}
            className="w-20 h-1 bg-cyan-400 mx-auto rounded-full"
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#01101b]/70 border border-cyan-400/20 shadow-xl rounded-2xl p-8 md:p-10 backdrop-blur"
        >
          <motion.div variants={item} className="flex items-center gap-3 mb-3">
            <Rocket className="text-cyan-400 w-6 h-6" />
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              Co-Founder, Co-Researcher, Developer — Kid Assist Application
            </h3>
          </motion.div>
          <motion.p variants={item} className="text-sm text-cyan-300 mb-4">
            Sep 2025 – Present
          </motion.p>

          <motion.p variants={item} className="text-lg text-gray-300 mb-6">
            A cross-platform mobile app enhancing cognitive skills through interactive brain-training games.
          </motion.p>

          <ul className="space-y-3 text-gray-300">
            <motion.li
              variants={item}
              className="flex items-start gap-3 leading-relaxed"
            >
              <Brain className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
              <span>
                Co-founded and co-developed a <strong>React Native</strong> mobile application
                that strengthens memory and observation through adaptive brain-training gameplay.
              </span>
            </motion.li>
            <motion.li
              variants={item}
              className="flex items-start gap-3 leading-relaxed"
            >
              <Users className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
              <span>
                Researched and applied <strong>cognitive training principles</strong> to design
                progressive difficulty systems and engaging user experiences.
              </span>
            </motion.li>
            <motion.li
              variants={item}
              className="flex items-start gap-3 leading-relaxed"
            >
              <Brain className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
              <span>
                Implemented core game logic, <strong>UI/UX design</strong>, and backend integration
                with <strong>Supabase</strong>, ensuring smooth performance across iOS and Android.
              </span>
            </motion.li>
            <motion.li
              variants={item}
              className="flex items-start gap-3 leading-relaxed"
            >
              <Rocket className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
              <span>
                Managed <strong>testing, optimization,</strong> and deployment via{" "}
                <strong>Expo Application Services (EAS)</strong>, demonstrating strong technical
                and collaborative skills.
              </span>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
