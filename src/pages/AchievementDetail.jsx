import { useParams, Link } from "react-router-dom";
import { achievements } from "../data/achievements";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function AchievementDetail() {
  const { id } = useParams();
  const item = achievements.find((a) => a.id === id);

  if (!item) return <div className="p-10 text-center">Not found</div>;

  return (
    <div className="min-h-screen w-full bg-[#fafafa] text-[#222] flex mt-14">
      
      {/* ✅ LEFT CATEGORY SIDEBAR */}
      <aside className="w-72 border-r bg-white min-h-screen p-8 sticky top-0 hidden lg:block">
        <Link to="/" className="flex items-center gap-2 text-primary font-semibold mb-8">
          <ChevronLeft size={18} /> Back
        </Link>

        <h2 className="text-xl font-bold mb-6">ACHIEVEMENTS</h2>

        <nav className="space-y-4">
          {achievements.map((a) => (
            <Link
              key={a.id}
              to={`/achievement/${a.id}`}
              className={`block text-sm leading-tight ${
                a.id === id ? "font-semibold text-primary" : "text-gray-600 hover:text-black"
              }`}
            >
              {a.title}
            </Link>
          ))}
        </nav>
      </aside>

      {/* ✅ RIGHT CONTENT AREA */}
      <main className="flex-1 px-6 lg:px-16 py-10">
        
        {/* Title */}
        <h1 className="text-4xl font-bold leading-tight mb-6">{item.title}</h1>

        {/* Hero Image */}
        <div className="w-full h-[380px] overflow-hidden rounded-lg mb-10">
          <img
            src={item.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Metadata */}
        <p className="text-gray-500 text-sm mb-6">{item.subtitle}</p>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-10">
          <ReactMarkdown>{item.content}</ReactMarkdown>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          {item.gallery?.map((img, index) => (
            <img
              key={index}
              src={img}
              className="rounded-xl shadow-md object-cover w-full h-64"
              alt="gallery"
            />
          ))}
        </div>

      </main>
    </div>
  );
}
