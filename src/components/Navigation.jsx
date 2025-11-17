import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Gọi ngay lần đầu để kiểm tra trạng thái ban đầu
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    if (href.startsWith("#")) {
      if (location.pathname === "/") {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      navigate(href);
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "My Story", href: "/my-story" },
    { name: "Achievements", href: "#achievements" },
    { name: "Leadership", href: "#leadership" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-lg" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo - luôn trắng ở top, xanh khi scroll */}
        <div className={`text-2xl font-bold transition-colors duration-500 ${
          scrolled ? "text-blue-600" : "text-white drop-shadow-lg"
        }`}>
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); navigate("/"); }}
            className="hover:text-cyan-400 transition-colors"
          >
            <a href="/" className="text-blue-600">
            Duong Minh Khoi
            </a>
          </a>
        </div>

        {/* Menu - chữ trắng khi ở top, xanh/xám khi scroll */}
        <ul className="flex gap-8">
          {navLinks.map((link, idx) => (
            <motion.li
              key={idx}
              whileHover={{ y: -3, scale: 1.08 }}
              className="cursor-pointer"
            >
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`font-medium transition-all duration-500 ${
                  scrolled
                    ? "text-blue-600 hover:text-blue-800"
                    : "text-white hover:text-cyan-300"
                }`}
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}