import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "C++", "React Native"],
      image: "/skills-programming.jpg",
    },
    {
      category: "Robotics & Automation",
      skills: ["VEX Robotics", "Arduino"],
      image: "/skills-robotics.jpg",
    },
    {
      category: "UI/UX Design & App Development",
      skills: ["Supabase", "Expo", "Figma"],
      image: "/skills-tools.jpg",
    },
    {
      category: "Core Competencies",
      skills: ["Algorithm Design", "System Optimization", "Team Leadership", "Technical Documentation", "Testing"],
      image: "/skills-competencies.jpg",
    },
    {
        category: "Data Analysis & Simulation",
        skills: [""],
        image: "/skills-competencies.jpg",
      },
      {
        category: "STEM Education & Curriculum Design",
        skills: [""],
        image: "/skills-competencies.jpg",
      },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 relative">
      <div className="max-w-6xl mx-auto">
        {/* Tiêu đề */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">INTERESTS, HOBBIES, SKILLS</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A comprehensive toolkit built through competition, projects, and continuous learning
          </p>
        </motion.div>

        {/* Danh sách skill */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300"
            >
              {/* Hình nền mờ */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.category}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Nội dung */}
              <div className="relative z-10 bg-card/80 backdrop-blur-sm p-6 space-y-4">
                <h3 className="text-xl font-bold text-primary">{category.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 text-sm font-medium text-foreground hover:border-primary/60 transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
