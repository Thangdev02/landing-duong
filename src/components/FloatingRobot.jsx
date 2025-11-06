"use client"

import React, { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { motion, AnimatePresence } from "framer-motion"

function RobotModel({ onClick }) {
    const { scene } = useGLTF("/robot/scene.gltf")
    const ref = useRef()
  
    // Xoay nhẹ + float lên xuống
    useFrame((state) => {
      if (!ref.current) return
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.15
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.08
    })
  
    return (
      <primitive
        ref={ref}
        object={scene}
        scale={3.5}
        onClick={onClick}
        onPointerOver={(e) => {
          e.stopPropagation()
          document.body.style.cursor = "pointer"
        }}
        onPointerOut={() => (document.body.style.cursor = "default")}
      />
    )
  }
  

export default function FloatingRobot() {
  const [showHello, setShowHello] = useState(false)

  const handleClick = () => {
    setShowHello(true)
    setTimeout(() => setShowHello(false), 2000)
  }

  // Tự động chào mỗi 15s
  useEffect(() => {
    const id = setInterval(handleClick, 15000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="fixed  right-6 z-50 pointer-events-none" style={{ bottom: "-18%" }} >
      {/* Robot Canvas */}
      <motion.div
        className=" pointer-events-auto rounded-2xl overflow-hidden "
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <Canvas
          camera={{ position: [0, 0, 3], fov: 50 }}
          style={{ width: "300px", height: "400px" }}
        >
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <RobotModel onClick={handleClick} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1.5}
          />
        </Canvas>
      </motion.div>

      {/* Bong bóng Hello */}
      <AnimatePresence>
        {showHello && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute -top-14 left-1/2 -translate-x-1/2 
                        flex items-center gap-2 whitespace-nowrap"
          >
            <span className="text-2xl animate-[wave_1.5s_infinite]">👋</span>
            <span className="text-sm md:text-base font-medium text-gray-800">
              Hello! <br /> Duong Minh Khoi
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
