"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function OtherActivities() {
  const [index, setIndex] = useState(0)

  const activities = [
    {
      title: "Moonlight Giving",
      role: "Organizer, Donor",
      time: "Jul – Sept 2024",
      description: [
        "Planned and led the “Moonlight Giving” community program celebrating the Mid-Autumn Festival through interactive workshops and cultural performances.",
        "Raised 7,800,000 VND from mooncake sales, funding 300+ lanterns and 100 gifts for underprivileged children.",
        "Hosted traditional Vietnamese games and organized a cultural night promoting local heritage and connection.",
        "Featured on Ba Ria – Vung Tau Television (15/09/2024) highlighting the project’s community impact.",
      ],
      images: [
        "/oa4.JPG",
        "/oa5.JPG",
        "/oa6.JPG",
      ],
    },
    {
      title: "AAVN - Moonlight Festival",
      role: "Event Coordinator",
      time: "Aug – Oct 2025",
      description: [
        "Coordinated logistics and planning for the School Moon Festival to enhance student engagement, with 200+ participants.",
        "Designed engaging workshops integrating robotics and cultural creativity.",
        "Led a student team to manage stage setup, sound, and decoration for the festival night.",
      ],
      images: [ "/oa1.jpg",
        "/oa2.jpg",
        "/oa3.jpg",],
    },
  ]

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % activities.length)
  }

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + activities.length) % activities.length)
  }

  return (
    <section className="bg-white py-20 px-6 md:px-12 overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
        >
          <span className="text-blue-600">Other </span>
          <span className="text-purple-600">Activities</span>
        </motion.h2>

        {/* Nút điều hướng */}
        <div className="absolute top-[50%] left-4 md:left-12 -translate-y-1/2 z-20">
          <button
            onClick={handlePrev}
            className="bg-white/80 hover:bg-white shadow-lg p-3 rounded-full transition"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <div className="absolute top-[50%] right-4 md:right-12 -translate-y-1/2 z-20">
          <button
            onClick={handleNext}
            className="bg-white/80 hover:bg-white shadow-lg p-3 rounded-full transition"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-lg p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                    {activities[index].title}
                  </h3>
                  <p className="text-sm mt-1 text-gray-600">
                    {activities[index].role} • {activities[index].time}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-widest text-blue-600 bg-blue-100 px-3 py-1 rounded-full mt-3 md:mt-0">
                  Community
                </span>
              </div>

              <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-8 leading-relaxed">
                {activities[index].description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {activities[index].images.map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    className="overflow-hidden rounded-2xl"
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-60 object-cover rounded-2xl hover:opacity-90 transition"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
