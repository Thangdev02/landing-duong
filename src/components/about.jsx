"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 relative">
      <div className="max-w-5xl mx-auto">
        

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative h-100 rounded-2xl overflow-hidden border-2 border-accent/30"
          >
            <img src="/avatar.jpg" alt="Profile" className="w-full h-full object-cover" />
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 border-2 border-accent/30 rounded-full"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance">Hello, World!</h2>
        </motion.div>
            <p className="text-lg text-muted-foreground leading-relaxed">
            Hi, I’m Duong Minh Khoi, a student who fell in love with robots when one accidentally ran into a cup of water on my desk
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
            I still remember the day I first saw my tiny robot blink its LED “heart.” It wasn’t perfect — it bumped, fell, and sometimes refused to move. But at that moment, I realized: every piece of code is a heartbeat you give your creation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
            That’s how my journey began — not from a classroom, but from curiosity, laughter, and a desk full of wires and soda cans.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-card border border-primary/20 rounded-lg p-4 text-center"
              >
                <div className="text-2xl font-bold text-accent">3.74/4</div>
                <p className="text-sm text-muted-foreground">Cumulative GPA</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-card border border-primary/20 rounded-lg p-4 text-center"
              >
                <div className="text-2xl font-bold text-accent">1350</div>
                <p className="text-sm text-muted-foreground">SAT</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-card border border-primary/20 rounded-lg p-4 text-center"
              >
                <div className="text-2xl font-bold text-accent">4, AP</div>
                <p className="text-sm text-muted-foreground">AP</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
