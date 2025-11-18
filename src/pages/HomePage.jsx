"use client";

import { motion } from "framer-motion";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Skills from "../components/skills";
import About from "../components/about";
import ResearchProduct from "../components/ResearchProduct";
import Contact from "../components/contact";
import Achievements from "../components/achievements";
import OtherActivities from "../components/OtherActivities";

export default function HomePage() {
  return (
    <motion.main
      className="relative min-h-screen bg-background text-foreground overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Background animated shapes */}
      <div className="fixed inset-0 -z-10">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Hero />
      <About />
      <Achievements id="achievements" />
      <Projects />
      <ResearchProduct />
      <OtherActivities />
      <Skills />
      <Contact />
    </motion.main>
  );
}