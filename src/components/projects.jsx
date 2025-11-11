import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects() {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const projects = [
    {
      title: "STEM For Life",
      role: "Founder",
      image: "/project-autonomous.jpg",
      content: `
It all started during a Mid-Autumn Festival event, when I visited underprivileged children and realized how limited their access to educational resources was. Seeing their curiosity and eagerness to learn despite the circumstances inspired me to create a project that could make a real difference.

I founded and led a workshop program called **STEM FOR LIFE**, aiming to give children access to hands-on STEM experiences. The program used the **KidAssist App** as a learning tool, helping students understand how computer science can be applied to solve real-life problems. At the same time, we used **educational robots and all-terrain vehicles** to make learning interactive, fun, and inspiring.

Beyond teaching, we wanted to support their daily learning needs. We **donated 2,800 notebooks** and contributed **20 million VND**, partnering with **Maison Chance Shelter** to reach children who needed it most.

This project taught me that education is not just about knowledge—it’s about opportunity. By providing children with access to new skills and resources, we can help them imagine possibilities they might not have considered before. What started as a small act of empathy during a festival has grown into a program that **empowers kids to explore, create, and dream bigger.**
      `,
    },
    {
      title: "Cybetech Assemble",
      role: "Technical Advisor",
      image: "/lead1.jpg",
      content: `
    As a Technical Advisor at Cybetech Assemble, I support a youth-led initiative dedicated to making digital literacy and computer science accessible to more young learners. When I first joined in June 2025, what inspired me most was seeing students who once felt intimidated by technology suddenly light up when they understood how it worked—and knowing I could help scale that impact. 
    In my role, I provide technical guidance for CS-focused lessons and content, ensuring that complex ideas become simple, clear, and exciting for beginners. I work closely with the executive team to develop curricula, shape digital engagement strategies, and design programs that turn curiosity into practical skills. 
    One of my favorite parts of the job is mentoring team members—helping them transform advanced topics like algorithms, AI, or cybersecurity into hands-on workshops and approachable online lessons. Watching peers grow into confident educators has been just as rewarding as seeing our learners succeed.
    I also support our outreach efforts, helping the organization grow to over 3,000 active followers, expanding our educational footprint and inspiring more students to explore technology. Through this experience, I’ve learned that empowering others to teach and share knowledge multiplies impact—and that digital literacy is not just a skill, but an opportunity to open doors for the next generation.
      `,
    },
    {
      title: "Sweetened",
      role: "Vice-President",
      image: "/lead2.jpg",
      content: `
As Vice-President of Sweetened (Dec 2023 – Present), I helped lead a STEM-based charity project that combines science education with fundraising. I organized outreach programs that benefited over 300 children and raised donations to support Tam Duc Shelter in District 4.
I developed and structured STEM curricula for underprivileged students, creating hands-on learning activities that sparked their curiosity and early interest in science and technology. To support our programs, I led fundraising efforts through dessert sales, successfully generating contributions for the shelter.
One highlight was organizing the summer program “Across the River for the Future” in Hau Giang Province, which integrated STEM learning, hygiene education, and cultural exchange activities, directly benefiting 300+ children. Through this work, I learned how education and community engagement can empower children, broaden their horizons, and create lasting impact.
      `,
    },
    {
      title: "Panda Robotics Vietnam",
      role: "Main Coder",
      image: "/lead3.jpg",
      content: `
When I joined Panda Robotics Vietnam as the Main Coder, my goal was simple: build a robot that could think, adapt, and compete—and help younger students discover the excitement behind engineering. What started as a technical challenge quickly grew into a mission to make robotics safer, more accessible, and inspiring for kids.. 
I led the programming and control system development, building automation routines and sensor-based logic to make our robot faster, smarter, and more reliable on the competitive field. Every iteration was a cycle of testing, debugging, and refining—late nights, heated debates, and breakthrough moments that made it all worth it. 
Our hard work paid off. Our team became National Champion at Vietnam VEX Robotics 2025, and we were honored with the Teamwork Champion and Design Award at the Red River Delta Regional Round. Those achievements weren’t just medals—they were proof that collaboration and persistence can turn ambitious ideas into real results.
Beyond competing, I wanted to create a pathway for others to follow. I mentored a new team from scratch and watched them proudly earn the Champion Title at the SSIS Scrimmage V5RC 2025–26. That moment—seeing them succeed on their own—felt even more rewarding than standing on the podium myself.
eyond competing, I wanted to create a pathway for others to follow. I mentored a new team from scratch and watched them proudly earn the Champion Title at the SSIS Scrimmage V5RC 2025–26. That moment—seeing them succeed on their own—felt even more rewarding than standing on the podium myself.

      `,
    },
    {
      title: "International School Ho Chi Minh City – Robotics Club",
      role: "Leader",
      image: "/lead3.jpg",
      content: `
When I founded the Robotics Club at ISHCMC, it wasn’t just about building robots—it was about building a place where students could explore, make mistakes, and feel excited about STEM. Back in 2022, our school didn’t have a dedicated space for robotics enthusiasts, so I gathered a small group of curious students, and together we created something from scratch. 
I led the club through everything from brainstorming robot designs to testing code late after school, and even staying after classes with teammates who wanted extra help. Beyond technical skills, I tried to build a culture where everyone felt safe to try, fail, ask questions, and try again—because real innovation happens when you’re not afraid to break things and rebuild them better.
Our hard work and passion paid off. We entered the national VEX Robotics competition for the first time and made it all the way to the semifinals, finishing fourth in Vietnam. For many of us, it was the first time seeing how far teamwork and dedication could take us. But to me, the biggest victory wasn’t the ranking—it was seeing members who once doubted themselves suddenly step up, solve problems, and truly believe they belonged in STEM.
What started as a small idea turned into a community—one that continues to grow and inspire students long after I graduated.
      `,
    },
    {
      title: "Ultimate Volleyball Club",
      role: "Co-Founder",
      image: "/leadvol.jpeg",
      content: `

I co-founded the Ultimate Volleyball Club because I’ve always believed that school shouldn’t only be about grades—it should also be about building discipline, teamwork, and resilience. Volleyball gave me all of that, so I wanted to create a space where other students could experience it too.
What started as a small group of friends practicing after school has grown into a 25-member club competing against teams from Phu Nhuan, ISHCMC, and EIS. We trained consistently, organized friendly matches, and built a team culture based on commitment, sportsmanship, and support.
Balancing school and sports wasn’t always easy—but that’s what made it meaningful. Volleyball taught us how to push through challenges, trust our teammates, and show up even when things get tough—skills that strengthened not only our game, but our academic life and personal growth too.
For me, this club isn’t just about winning matches. It’s about proving that students can excel both in the classroom and on the court, and that sports can build character and confidence in ways textbooks can’t.

      `,
    },
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
    <section id="leadership" className="py-20 px-6 md:px-12 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-6">LEADERSHIP</h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto text-center mb-14">
          Showcasing impact through engineering, community building and leadership.
        </p>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/90 border border-gray-200 shadow-lg hover:shadow-xl rounded-full w-12 h-12 flex items-center justify-center z-20"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/90 border border-gray-200 shadow-lg hover:shadow-xl rounded-full w-12 h-12 flex items-center justify-center z-20"
          >
            <ChevronRight />
          </button>

          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-10 px-4 scroll-smooth scrollbar-hide pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style>{`::-webkit-scrollbar { display: none; }`}</style>

            {projects.map((p, i) => (
              <div
                key={i}
                onClick={() =>
                  navigate(`/projectDetail/${encodeURIComponent(p.title)}`, { state: p })
                }
                className="group flex-shrink-0 w-72 cursor-pointer rounded-3xl bg-white shadow-xl relative overflow-hidden transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full w-full"
                >
                  <div className="relative h-48 w-full overflow-hidden rounded-t-3xl">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-bold">{p.title}</h3>
                    <p className="text-gray-600 mt-1">{p.role}</p>
                  </div>
                </motion.div>

                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-40 h-6 bg-primary/30 blur-2xl opacity-0 group-hover:opacity-80 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
