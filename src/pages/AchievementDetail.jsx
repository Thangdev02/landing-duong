"use client";

import { useParams, Link } from "react-router-dom";
import { achievements } from "../data/achievements";
import { motion } from "framer-motion";
import { ChevronLeft, Trophy, Zap, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function AchievementDetail() {
  const { id } = useParams();
  const item = achievements.find((a) => a.id === id);

  if (!item) return <div className="p-10 text-center text-white text-2xl">Not found</div>;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#020617] via-[#031427] to-[#01101b] text-white overflow-x-hidden">
      {/* Animated Background Glow */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <motion.div
          animate={{ x: [0, 120, 0], y: [0, -80, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-[220px] -top-40 -left-40"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute w-[700px] h-[700px] bg-blue-600/25 rounded-full blur-[200px] bottom-0 right-0"
        />
      </div>

      <div className="flex mt-14">
        {/* LEFT SIDEBAR */}
        <aside className="hidden lg:block w-80 border-r border-cyan-500/30 bg-black/60 backdrop-blur-2xl min-h-screen sticky top-0 p-8">
          <Link to="/" className="flex items-center gap-3 text-cyan-400 font-bold hover:text-cyan-300 transition mb-12 group">
            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition" />
            <span>BACK TO HOME</span>
          </Link>

          <div className="flex items-center gap-3 mb-8">
            <Trophy className="text-yellow-400 drop-shadow-lg" size={36} />
            <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              ACHIEVEMENTS
            </h2>
          </div>

          <nav className="space-y-2">
            {achievements.map((a, i) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/achievement/${a.id}`}
                  className={`block py-3 px-5 rounded-xl text-sm font-medium transition-all duration-400 relative overflow-hidden
                    ${a.id === id
                      ? "bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-400/70 text-cyan-200 shadow-2xl shadow-cyan-500/40"
                      : "text-gray-400 hover:text-cyan-200 hover:bg-white/5"
                    }`}
                >
                  {a.id === id && <Zap className="inline mr-2 text-yellow-400" size={16} />}
                  {a.title}
                  {a.id === id && (
                    <motion.div layoutId="activeBar" className="absolute inset-0 bg-cyan-500/10" />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 px-6 lg:px-16 py-12 max-w-6xl mx-auto">
          {/* Mobile Back */}
          <Link to="/" className="flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 mb-10 lg:hidden">
            <ChevronLeft size={24} /> BACK
          </Link>

          {/* TITLE + BADGE DALLAS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="inline-block bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-10 py-4 rounded-full text-2xl md:text-3xl font-black tracking-wider shadow-2xl shadow-cyan-500/60 animate-pulse"
              >
                {item.location || ""}
              </motion.div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-600 drop-shadow-2xl">
                {item.title}
              </span>
            </h1>
          </motion.div>

          {/* HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative rounded-3xl overflow-hidden mb-16 group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <div className="absolute inset-0 border-4 border-cyan-500/50 rounded-3xl animate-pulse" />
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[500px] md:h-[650px] object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute bottom-8 left-8 z-20">
              <p className="text-3xl md:text-5xl font-bold text-white drop-shadow-2xl">{item.subtitle}</p>
            </div>
          </motion.div>

          {/* NỘI DUNG SIÊU CATCHY */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="space-y-10 text-gray-300 text-lg md:text-xl leading-relaxed"
          >
            <ReactMarkdown
              components={{
                p: ({ children }) => {
                  const text = String(children);

                  // Dòng có từ khóa thành tích → highlight mạnh
                  if (text.includes("Champion") || text.includes("Award") || text.includes("National")) {
                    return (
                      <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-l-8 border-cyan-400 rounded-r-2xl pl-8 pr-6 py-6 my-10 shadow-2xl shadow-cyan-500/30">
                        <p className="text-xl md:text-2xl font-bold text-white flex items-center gap-4">
                          <Trophy className="text-yellow-400" size={36} />
                          {children}
                        </p>
                      </div>
                    );
                  }

                  // Dòng vai trò (Main Coder, Led, Mentored)
                  if (text.includes("Main Coder") || text.includes("Led") || text.includes("Mentored") || text.includes("Built")) {
                    return (
                      <p className="text-cyan-200 text-xl md:text-2xl font-semibold flex items-center gap-4 my-8">
                        <Sparkles className="text-yellow-300" size={32} />
                        {children}
                      </p>
                    );
                  }

                  return <p className="my-6">{children}</p>;
                },
                strong: ({ children }) => <span className="text-cyan-300 font-black">{children}</span>,
              }}
            >
              {item.content}
            </ReactMarkdown>
          </motion.div>

          {/* GALLERY */}
          {item.gallery && item.gallery.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
              {item.gallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -16, scale: 1.05 }}
                  className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img src={img} alt="" className="w-full h-96 object-cover transition-transform duration-1000 group-hover:scale-125" />
                </motion.div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}