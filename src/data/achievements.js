// src/data/achievements.js
export const achievements = [
    {
      id: "vex-world",
      title: "VEX Robotics World Championship",
      subtitle: "Dallas, Texas, US • 2025",
      highlight: "Top 91/800 teams • Robot Skills",
      image: "/av1.jpg",
      period: "May 2025",
      content: `
  ## Main Coder, Panda Robotics Vietnam
  **May 2024 – Present**
  
  - Led programming & automation with **C++** and **VEXcode**.
  - Built sensor-based navigation + auto-scoring system.
  - Guided team to **National Champion 2025**.
  - Earned **Teamwork Champion** + **Design Award**.
  - Mentored junior team → **SSIS Scrimmage Champion 2025-26**.
      `.trim(),
      gallery: ["/av1.jpg", "/news1.jpg", "/news2.jpg","/news3.jpg"]
    },
    {
      id: "national-champion",
      title: "Vietnam VEX Robotics National Championship",
      subtitle: "SSIS & Red River Delta • 2024",
      highlight: "Tournament Champions",
      image: "/av2.jpg",
      period: "2024",
      content: `
  ## Leader, ISHCMC Robotics Club
  **Dec 2022 – Feb 2024**
  
  - Founded club → coached 15 members.
  - Designed **autonomous routines** in VEXcode.
  - 4th place National Semifinals.
  - Grew club from 5 → 30 active members.
      `.trim(),
      gallery: ["/av2.jpg", "/news4.jpg"]
    },
    {
      id: "stem-for-life",
      title: "Founder, STEM For Life",
      subtitle: "100+ kids • 20M VND donated",
      highlight: "KidAssist App + Robotics Workshops",
      image: "/av3.jpeg",
      period: "Sept 2025 – Present",
      content: `
  ## Founder & Workshop Lead
  
  - Built **KidAssist App** (React Native + Supabase).
  - Taught **coding, robotics, 3D design** to 100+ kids.
  - Donated **2,800 notebooks** + **20M VND**.
  - Partnered with **Maison Chance Shelter**.
      `.trim(),
      gallery: ["/stem-kids.jpg", "/workshop1.jpg", "/donation.jpg"]
    },
    {
      id: "sweetened",
      title: "Vice-President, Sweetened",
      subtitle: "300+ children • Hau Giang",
      highlight: "Across the River Program",
      image: "/av4.jpeg",
      period: "Dec 2023 – Present",
      content: `
  ## Charity + STEM Fusion
  
  - Sold desserts → raised funds for **Tam Duc Shelter**.
  - Organized summer camp: **STEM + hygiene + culture**.
  - Built **off-road robot cars** with kids.
      `.trim(),
      gallery: ["/sweetened.jpg", "/river-kids.jpg"]
    }
  ];