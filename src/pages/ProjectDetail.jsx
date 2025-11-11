import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function ProjectDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-600">
        <p>No project data found.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg"
        >
          Back to Projects
        </button>
      </div>
    );

  const { title, role, image, content } = state;

  return (
    <motion.div
      className="min-h-screen bg-gray-50 text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Banner */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="text-5xl font-bold mb-2">{title}</h1>
          <p className="text-lg opacity-80">{role}</p>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg"
        >
          <ArrowLeft size={24} />
        </button>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto mt-16 px-6 md:px-0 pb-20">
        <article
          className="prose prose-lg prose-gray leading-relaxed"
          dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, "<br/>") }}
        />
      </div>
    </motion.div>
  );
}
