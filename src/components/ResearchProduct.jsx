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
    <section className="py-24 bg-gradient-to-b from-white to-blue-50" id="research">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            RESEARCH & CREATIVE PRODUCT
          </motion.h2>
          <motion.div
            variants={item}
            className="w-20 h-1 bg-blue-600 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white border border-blue-100 shadow-xl rounded-2xl p-8 md:p-10"
        >
          <motion.div variants={item} className="flex items-center gap-3 mb-3">
            <Rocket className="text-blue-600 w-6 h-6" />
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
              Co-Founder, Co-Researcher, Developer — Kid Assist Application
            </h3>
          </motion.div>
          <motion.p variants={item} className="text-sm text-gray-500 mb-4">
            Sep 2025 – Present
          </motion.p>

          <motion.p variants={item} className="text-lg text-gray-700 mb-6">
            A cross-platform mobile app enhancing cognitive skills through interactive brain-training games.
          </motion.p>

          <ul className="space-y-3 text-gray-700">
            <motion.li
              variants={item}
              className="flex items-start gap-3 leading-relaxed"
            >
              <Brain className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <span>
                Co-founded and co-developed a <strong>React Native</strong> mobile application
                that strengthens memory and observation through adaptive brain-training gameplay.
              </span>
            </motion.li>
            <motion.li
              variants={item}
              className="flex items-start gap-3 leading-relaxed"
            >
              <Users className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <span>
                Researched and applied <strong>cognitive training principles</strong> to design
                progressive difficulty systems and engaging user experiences.
              </span>
            </motion.li>
            <motion.li
              variants={item}
              className="flex items-start gap-3 leading-relaxed"
            >
              <Brain className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <span>
                Implemented core game logic, <strong>UI/UX design</strong>, and backend integration
                with <strong>Supabase</strong>, ensuring smooth performance across iOS and Android.
              </span>
            </motion.li>
            <motion.li
              variants={item}
              className="flex items-start gap-3 leading-relaxed"
            >
              <Rocket className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
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
