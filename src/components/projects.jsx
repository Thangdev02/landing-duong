import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const projects = [
    { title: "STEM For Life", role: "Founder", image: "/project-autonomous.jpg" },
    { title: "Cybetech Assemble", role: "Technical Advisor", image: "/lead1.jpg" },
    { title: "Sweetened", role: "Vice-President", image: "/lead2.jpg" },
    { title: "Panda Robotics Vietnam", role: "Main Coder", image: "/lead3.jpg" },
    { title: "International School Ho Chi Minh City – Robotics Club", role: "Leader", image: "/lead3.jpg" },
    { title: "Ultimate Volleyball Club", role: "Co-Founder", image: "/leadvol.jpeg" },
  ];

  const scroll = (direction) => {
    const el = sliderRef.current;
    if (!el) return;

    const amount = 360;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-white relative">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-5xl font-bold text-center mb-6">LEADERSHIP</h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto text-center mb-14">
          Showcasing impact through engineering, community building and leadership.
        </p>

        {/* Slider */}
        <div className="relative">

          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/90 border border-gray-200 shadow-lg hover:shadow-xl rounded-full w-12 h-12 flex items-center justify-center z-20"
          >
            <ChevronLeft />
          </button>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/90 border border-gray-200 shadow-lg hover:shadow-xl rounded-full w-12 h-12 flex items-center justify-center z-20"
          >
            <ChevronRight />
          </button>

          {/* Cards container */}
          <div
            ref={sliderRef}
            className="
              flex overflow-x-auto gap-10 px-4 scroll-smooth scrollbar-hide 
              pb-4
            "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {/* Hide scrollbar completely */}
            <style>
              {`
                ::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>

            {projects.map((p, i) => (
  <div
    key={i}
    onClick={() =>
      navigate(`/projectDetail/${encodeURIComponent(p.title)}`)
    }
    className="
      group flex-shrink-0 w-72 cursor-pointer 
      rounded-3xl bg-white shadow-xl relative overflow-hidden
      transition-all duration-300
    "
  >
    {/* Hover scale only inside, NOT the card */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="h-full w-full"
    >
      {/* IMAGE */}
      <div className="relative h-48 w-full overflow-hidden rounded-t-3xl">
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="text-xl font-bold">{p.title}</h3>
        <p className="text-gray-600 mt-1">{p.role}</p>
      </div>
    </motion.div>

    {/* Glow effect */}
    <div className="
      absolute -bottom-3 left-1/2 -translate-x-1/2 
      w-40 h-6 bg-primary/30 blur-2xl opacity-0
      group-hover:opacity-80 transition-all duration-500
    "></div>
  </div>
))}

          </div>
        </div>
      </div>
    </section>
  );
}
