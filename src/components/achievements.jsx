// src/components/Achievements.jsx
import { motion } from "framer-motion";
import { Trophy, Zap, Users, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { achievements } from "../data/achievements";

const icons = { Trophy, Zap, Users, Target };

export default function Achievements() {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
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
                  <p className="text-yellow-400 font-bold text-xl mt-4">{a.highlight}</p>
                  <p className="mt-3 text-sm opacity-80 animate-pulse">Click to read full story →</p>
                </div>

                {/* Shine */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
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