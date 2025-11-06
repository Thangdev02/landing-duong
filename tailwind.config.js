/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",   // màu xanh primary
        secondary: "#9333EA", // màu tím secondary
        accent: "#F472B6",    // màu hồng accent
      },
      keyframes: {
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "fade-in-up": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "bounce-slow": "bounce-slow 2s infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
      },
      boxShadow: {
        "lg-glow": "0 10px 25px rgba(59, 130, 246, 0.4)", // shadow xanh đẹp
      },
    },
  },
  plugins: [],
};
