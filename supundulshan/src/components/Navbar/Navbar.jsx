import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "certificates", label: "Certificate" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "services", label: "Services" }, // <-- Add this line
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Animated Logo */}
        <motion.div
          className="text-lg font-semibold cursor-pointer flex items-center gap-1"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          whileHover={{ scale: 1.08, rotate: 2 }}
        >
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">supun</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">dulshan</span>
          <span className="text-[#8245ec]">&gt;</span>
        </motion.div>

        {/* Desktop Menu with motion */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item, idx) => (
            <motion.li
              key={item.id}
              className={`cursor-pointer relative ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
              whileHover={{ scale: 1.1, color: "#a855f7" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
              {/* Animated underline */}
              {activeSection === item.id && (
                <motion.div
                  layoutId="navbar-underline"
                  className="absolute left-0 right-0 -bottom-1 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  style={{ zIndex: 1 }}
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Social Icons with motion */}
        <div className="hidden md:flex space-x-4">
          <motion.a
            href="https://github.com/dulsh1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
            whileHover={{ scale: 1.2, color: "#8245ec" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/supun-dulshan-2735a1316"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
            whileHover={{ scale: 1.2, color: "#8245ec" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaLinkedin size={24} />
          </motion.a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden"
          >
            <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
              {menuItems.map((item) => (
                <motion.li
                  key={item.id}
                  className={`cursor-pointer hover:text-white ${
                    activeSection === item.id ? "text-[#8245ec]" : ""
                  }`}
                  whileHover={{ scale: 1.08, color: "#a855f7" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <button onClick={() => handleMenuItemClick(item.id)}>
                    {item.label}
                  </button>
                </motion.li>
              ))}
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/dulsh1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                  whileHover={{ scale: 1.2, color: "#8245ec" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaGithub size={24} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/supun-dulshan-2735a1316"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                  whileHover={{ scale: 1.2, color: "#8245ec" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaLinkedin size={24} />
                </motion.a>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
