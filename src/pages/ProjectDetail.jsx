import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function ProjectDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-cyan-300 bg-gradient-to-br from-[#020617] via-[#031427] to-[#01101b]">
        <p>No project data found.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-cyan-500/30 text-white rounded-lg hover:bg-cyan-500/50 transition"
        >
          Back to Projects
        </button>
      </div>
    );

  const { title, role, images = [], content } = state;

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#020617] via-[#031427] to-[#01101b] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Banner */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img src={images[0]} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />

        <div className="absolute bottom-10 left-10">
          <h1 className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            {title}
          </h1>
          <p className="text-cyan-300 text-lg opacity-90">{role}</p>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 bg-cyan-500/30 hover:bg-cyan-500/50 text-white rounded-full p-2 shadow-lg transition"
        >
          <ArrowLeft size={24} />
        </button>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto mt-16 px-6 md:px-0 pb-10">
        <article
          className="prose prose-lg prose-invert leading-relaxed text-cyan-100"
          dangerouslySetInnerHTML={{
            __html: content.replace(/\n/g, "<br/>"),
          }}
        />
      </div>

      {/* All Images Below Content */}
      <div className="max-w-5xl mx-auto px-6 md:px-0 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt={`${title}-image-${i}`}
            className="w-full h-64 object-cover rounded-xl shadow-lg shadow-cyan-500/30 hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          />
        ))}
      </div>
    </motion.div>
  );
}
