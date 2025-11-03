import { motion } from "framer-motion";
import { Trophy, Zap, Users, Target } from "lucide-react";
import React from "react";

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "VEX Robotics World Championship, Dallas, Texas, US",
      description: "VEX Robotics World Championship, Dallas, Texas, US, 2025.",
      highlight: "Top 91 over 800 teams in Robot Skills Challenge",
      image: "/av1.jpg",
      leadership: `Main Coder, Panda Robotics Vietnam (May 2024 - Present)
Led programming & automation system, optimizing robot performance.
Guided the team to become National Champion at Vietnam VEX Robotics 2025.
Earned Teamwork Champion & Design Award at Red River Delta Regional.`,
    },
    {
      icon: Zap,
      title: "Vietnam VEX Robotics National Championship",
      description: "SSIS VEX Qualifying Tournament | Ho Chi Minh, Vietnam 2024",
      highlight: "Tournament Champions",
      image: "/av2.jpg",
      leadership: `Leader, International School Ho Chi Minh City – Robotics Club (Dec 2022 - Feb 2024)
Founded & led Robotics Club, guiding members in design, coding & teamwork.
Coached peers to semifinals of VEX Robotics National 2024 (4th place).`,
    },
    {
      icon: Users,
      title: "Second Place - PIT Award",
      description: "First Lego League Virtual Open International | Greece, 2021",
      highlight: "Second Place",
      image: "/av3.jpeg",
      leadership: `Founder, STEM For Life (Sept 2025 - Present)
Initiative providing underprivileged children with access to STEM education.
Organized workshops engaging 100+ students and raised 20M VND in donations.`,
    },
    {
      icon: Target,
      title: "Social Impact Through Innovation",
      description: "Straight A Academic Year 2024–2025 for High Academic Achievement",
      highlight: "Academic Excellence",
      image: "/av4.jpeg",
      leadership: `Vice-President, Sweetened (Dec 2023 – Present)
Led STEM-based charity project benefiting 300+ children.
Raised donations for Tam Duc Shelter & organized “Across the River for the Future” program.`,
    },
  ];

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">HONORS AND AWARDS</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Competitions, innovations, and the joy of building something that matters.
          </p>
        </motion.div>

        {/* Achievements grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {achievements.map((a, index) => {
            const Icon = a.icon;

            return (
              // perspective container (add style here so no external CSS required)
              <div
                key={index}
                style={{ perspective: 1200 }}
                className="relative w-full h-96"
              >
                {/* card that flips on hover */}
                <motion.div
                  initial={{ rotateY: 0 }}
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  style={{ transformStyle: "preserve-3d", WebkitTransformStyle: "preserve-3d" }}
                  className="relative w-full h-full"
                >
                  {/* FRONT SIDE */}
                  <div
                    className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg"
                    style={{
                      background: "linear-gradient(180deg, rgba(10,11,13,0.6), rgba(10,11,13,0.4))",
                      WebkitBackfaceVisibility: "hidden",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={a.image}
                        alt={a.title}
                        className="object-cover w-full h-full transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    </div>

                    <div className="p-6 text-left">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-md">
                          <Icon size={20} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white">{a.title}</h3>
                          <p className="text-sm text-gray-300 mt-1">{a.description}</p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center text-sm mt-4">
                        <span className="text-blue-300 font-semibold">{a.highlight}</span>
                        <span className="text-white text-2xl">↻</span>
                      </div>
                    </div>
                  </div>

                  {/* BACK SIDE (rotated 180deg so it's hidden until parent rotates) */}
                  <div
                    className="absolute inset-0 rounded-2xl p-6 flex flex-col justify-center items-start"
                    style={{
                      transform: "rotateY(180deg)",
                      WebkitTransform: "rotateY(180deg)",
                      WebkitBackfaceVisibility: "hidden",
                      backfaceVisibility: "hidden",
                      background: "linear-gradient(180deg, rgba(2,6,23,0.86), rgba(10,12,20,0.86))",
                    }}
                  >
                    <h4 className="text-2xl font-semibold text-white mb-3">Leadership</h4>
                    <p className="text-sm text-gray-200 leading-relaxed whitespace-pre-line">
                      {a.leadership}
                    </p>

                    {/* optional actions */}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
