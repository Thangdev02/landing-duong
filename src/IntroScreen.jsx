"use client";
import { motion } from "framer-motion";
import LetterGlitch from "./components/Letter";
import { useEffect } from "react";

export default function IntroScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Thay vì gọi onFinish() → reload luôn trang
      window.location.reload();
    }, 4000); // ← chính xác 2 giây (có thể chỉnh 1800–2200 tùy thích)

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0">
        <LetterGlitch
          glitchColors={["#00ffff", "#00ff99", "#0066ff"]}
          glitchSpeed={60}
          smooth={true}
          outerVignette={true}
          centerVignette={false}
        />
      </div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="relative text-5xl md:text-7xl font-bold tracking-wider text-center"
        style={{
          textShadow: "0 0 30px rgba(0,255,200,0.8), 0 0 80px rgba(0,255,255,0.6)",
        }}
      >
        DUONG MINH KHOI
      </motion.h1>
    </motion.div>
  );
}