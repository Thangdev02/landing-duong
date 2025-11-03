"use client"

import { motion } from "framer-motion"
import { Mail, Github, Send } from "lucide-react"

export default function Contact() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 relative" id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something That Matters</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Dream. Build. Fail. Learn. Repeat. — That's my motto. Whether it's a robotics project, a coding challenge,
            or changing the world through tech, I'm always excited to collaborate.
          </p>
        </motion.div>

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
            { icon: Github, label: "Personal Site", value: "duongminhkhoi.com", href: "https://duongminhkhoi.com" },
          ].map((contact, index) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : "_self"}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : ""}
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-card border border-primary/20 rounded-xl p-6 text-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
              >
                <motion.div
                  className="mb-4 flex justify-center"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Icon size={32} className="text-primary" />
                </motion.div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{contact.label}</h3>
                <p className="text-sm text-muted-foreground">{contact.value}</p>
              </motion.a>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-card border border-primary/20 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Ready for the Next Adventure?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            When I'm not coding or soldering, you'll find me spiking volleyballs with my team, performing at cultural
            nights, or mentoring younger students. Because to me, STEM isn't just about science — it's about stories: of
            curiosity, failure, friendship, and purpose.
          </p>
          <motion.a
            href="mailto:khoiduongminh2008@gmail.com"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(88, 126, 255, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold flex items-center gap-2 mx-auto hover:shadow-lg transition-all"
          >
            Get In Touch
            <Send size={20} />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 pt-8 border-t border-primary/20 text-center text-muted-foreground"
        >
          <p>
            © 2025 DUONG MINH KHOI. Every project is a continuation of that first blinking robot — imagination powered
            by code.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
