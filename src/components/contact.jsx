"use client"

import { motion } from "framer-motion"
import { Mail, Github, Send } from "lucide-react"

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-32 px-6 md:px-12 relative"
      style={{ background: "linear-gradient(to bottom, #071423, #0a1a2f)" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(to right, #4fd3ff, #7df9ff)" }}
          >
            Let's Build Something That Matters
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Dream. Build. Fail. Learn. Repeat. — That's my motto. Whether it's a robotics project, a coding challenge,
            or changing the world through tech, I'm always excited to collaborate.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {[
            {
              icon: Mail,
              label: "Email",
              value: "khoiduongminh2008@gmail.com",
              href: "mailto:khoiduongminh2008@gmail.com",
            },
            {
              icon: Github,
              label: "Personal Site",
              value: "duongminhkhoi.com",
              href: "https://duongminhkhoi.com",
            },
          ].map((contact, idx) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={idx}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : "_self"}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : ""}
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[rgba(10,25,45,0.8)] border border-[rgba(90,170,255,0.2)] rounded-2xl p-6 text-center shadow-[0_0_20px_rgba(0,140,255,0.15)] hover:border-[rgba(80,160,255,0.5)] hover:shadow-[0_0_30px_rgba(0,180,255,0.3)] transition-all duration-300 group"
              >
                <motion.div
                  className="mb-4 flex justify-center"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Icon size={32} className="text-cyan-400" />
                </motion.div>
                <h3 className="font-semibold mb-2 text-cyan-400 group-hover:text-cyan-200 transition-colors">
                  {contact.label}
                </h3>
                <p className="text-sm text-gray-300">{contact.value}</p>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[rgba(10,25,45,0.8)] border border-[rgba(90,170,255,0.2)] rounded-3xl p-8 md:p-12 text-center shadow-[0_0_20px_rgba(0,140,255,0.15)]"
        >
          <h3 className="text-2xl font-bold mb-4 text-cyan-400">Ready for the Next Adventure?</h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            When I'm not coding or soldering, you'll find me spiking volleyballs with my team, performing at cultural
            nights, or mentoring younger students. STEM isn't just about science — it's about curiosity, failure, friendship, and purpose.
          </p>
          <motion.a
            href="mailto:khoiduongminh2008@gmail.com"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0,180,255,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-white rounded-lg font-semibold flex items-center gap-2 mx-auto hover:shadow-lg transition-all"
          >
            Get In Touch <Send size={20} />
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 pt-8 border-t border-[rgba(90,170,255,0.2)] text-center text-gray-400"
        >
          <p>
            © 2025 DUONG MINH KHOI. Every project is a continuation of that first blinking robot — imagination powered by code.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
