import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "C++", "React Native"],
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop",
    },
    {
      category: "Robotics & Automation",
      skills: ["VEX Robotics", "Arduino"],
      image: "https://mitwpu.edu.in/uploads/blog/B.Tech%20in%20Robotics%20&%20Automation%20%28Eligibility,%20Scope%20&%20Career%20Prospects%29.webp",
    },
    {
      category: "UI/UX Design & App Dev",
      skills: ["Figma", "Expo", "Supabase"],
      image: "https://images.unsplash.com/photo-1597733336794-12d05021d510?w=800&h=600&fit=crop",
    },
    {
      category: "Core Competencies",
      skills: ["Algorithm Design", "System Optimization", "Team Leadership", "Testing"],
      image: "https://online.stanford.edu/sites/default/files/styles/embedded_large/public/2018-03/engineering-computer-science-algorithms-design-analysis_soe-ycsalgorithms.png?itok=9li5BBeK",
    },
    {
      category: "Data & Simulation",
      skills: [""],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
    {
      category: "STEM Education",
      skills: [""],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Tiêu đề */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            INTERESTS • HOBBIES • SKILLS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through competition, projects, and continuous learning
          </p>
        </motion.div>

        {/* Grid Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-xl cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={cat.image}
                  alt={cat.category}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Overlay Content */}
              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-bold mb-3 tracking-wide">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium border border-white/30
                                 hover:bg-white/30 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}