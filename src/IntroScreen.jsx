"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import LetterGlitch from "./components/Letter"

export default function IntroScreen({ onFinish }) {
  const [, setCookie] = useCookies(["intro_seen"])
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    setCookie("intro_seen", "true", { path: "/", maxAge: 2 * 24 * 60 * 60 })

    // Bắt đầu fade out sau 4.5s (animation 0.5s sau đó)
    const fadeTimer = setTimeout(() => setFadeOut(true), 4500)
    // Kết thúc hẳn sau 5s
    const finishTimer = setTimeout(() => onFinish(), 5000)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(finishTimer)
    }
  }, [onFinish, setCookie])

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Nền LetterGlitch */}
          <div className="absolute inset-0">
            <LetterGlitch
              glitchColors={["#00ffff", "#00ff99", "#0066ff"]}
              glitchSpeed={60}
              smooth={true}
              outerVignette={true}
              centerVignette={false}
            />
          </div>

          {/* Tiêu đề xuất hiện */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="relative text-5xl md:text-7xl font-bold tracking-wider text-center drop-shadow-[0_0_25px_rgba(0,255,255,0.8)]"
            style={{
              textShadow: "0 0 30px rgba(0,255,200,0.8), 0 0 60px rgba(0,255,255,0.5)",
            }}
          >
            DUONG MINH KHOI
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
