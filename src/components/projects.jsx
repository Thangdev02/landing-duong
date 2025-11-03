import React from "react";
import { motion } from "framer-motion";
import { Code2, Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "STEM For Life",
      description:
        "A student-led community initiative providing underprivileged children with access to STEM education through hands-on workshops in coding, robotics, and engineering.",
      tags: ["Founded", "Organized", "Donated", "Partnered","Inspired"],
      role: "Founderr",
      image: "/project-autonomous.jpg",
      github: "https://github.com/", // có thể thêm link thật ở đây
      demo: "https://example.com",
    },
    {
      title: "Cybetech Assemble",
      description:
        "A youth organization promoting digital literacy provided Computer Science guidance, advised on curriculum design, and mentored peers to create accessible educational content.",
      tags: ["Provided", "Advised", "Mentored", "Supported"],
      role: "Technical Advisor",
      image: "/lead1.jpg",
      github: "https://www.facebook.com/cybertechassemble",
    },
    {
      title: "Sweetened",
      description:
        "A STEM-based charity project combining science education and fundraising; organized outreach programs benefiting 300+ children and raised donations for Tam Duc Shelter.",
      tags: ["Developed", "Led", "Organized"],
      role: "ArchitVice-Presidentect",
      image: "/lead2.jpg",
    },
    {
      title: "Panda Robotics Vietnam",
      description:
        "A project to encourage safety and plan recreational and instructive activities for kids.",
      tags: ["Led", "Guided", "Earned", "Mentored","Organized"],
      role: "Main Coder",
      image: "/lead3.jpg",
    },
    {
        title: "International School Ho Chi Minh City – Robotics Club",
        description:
          "A project to encourage safety and plan recreational and instructive activities for kids.",
        tags: ["Founded", "Coached"],
        role: "Leader",
        image: "/lead3.jpg",
      },
      {
        title: "Ultimate Volleyball Club",
        description:
          "The school’s volleyball club was founded to practice and prepare for interschool competitions.",
        tags: ["Co-founded", "Volleyball"],
        role: "Co-Founder",
        image: "/leadvol.jpeg",
      },
  ];

  return (
    <section className="py-20 px-6 md:px-12 relative bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
          LEADERSHIP
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Showcasing my work in robotics, programming, and creative problem-solving
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="grid md:grid-cols-3 gap-6 items-center">
                {/* Image */}
                <div className="relative h-64 md:h-full overflow-hidden rounded-l-xl">
                  <img
                    src={project.image}
                    style={{ objectFit: "cover", height: "300px", width: "100%" }}
                    alt={project.title}
                    className=" object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/30 to-transparent" />
                </div>

                {/* Text Content */}
                <div className="md:col-span-2 p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4 flex-1">
                      <motion.div
                        className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0"
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      >
                        <Code2 size={24} className="text-blue-600" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-600"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-700">
                      {project.role}
                    </span>
                    <motion.div whileHover={{ scale: 1.1 }} className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github
                            size={18}
                            className="text-gray-500 hover:text-blue-600 transition-colors"
                          />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink
                            size={18}
                            className="text-gray-500 hover:text-blue-600 transition-colors"
                          />
                        </a>
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
