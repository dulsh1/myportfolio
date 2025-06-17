import React, { useState, useRef, useEffect } from "react";
import { experiences } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";

// Add these animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: -10,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
  hover: {
    scale: 1.05,
    rotateY: 5,
    boxShadow: "0 25px 50px -12px rgba(130,69,236,0.4)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const imageVariants = {
  hover: {
    scale: 1.1,
    rotate: [0, -5, 5, 0],
    transition: {
      duration: 0.4,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    backgroundColor: "rgba(139, 92, 246, 0.9)",
    transition: {
      duration: 0.2,
      yoyo: Infinity,
    },
  },
  tap: {
    scale: 0.95,
  },
};

const Certificates = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef(null);
  const cardRefs = useRef([]);

  // Scroll to card when dot is clicked
  const scrollToCard = (idx) => {
    cardRefs.current[idx]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    setActiveIdx(idx);
  };

  // Detect scroll and update active dot
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = cardRefs.current[0]?.offsetWidth || 1;
    const idx = Math.round(scrollLeft / (cardWidth + 40)); // 40 = gap-10
    setActiveIdx(idx);
  };

  return (
    <section
      id="certificates"
      className="py-24 pb-24 px-[5vw] md:px-[7vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title with Animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-extrabold text-white tracking-tight drop-shadow-lg">
          CERTIFICATES
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-300 mt-4 text-lg font-semibold">
          Verified certifications and achievements that showcase my expertise
        </p>
      </motion.div>

      {/* Modern Certificate Row */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex gap-10 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          maxWidth: "100vw",
          scrollbarWidth: "none",
        }}
      >
        {experiences.map((cert, idx) => (
          <motion.div
            key={cert.id}
            id={`certificate-${idx}`}
            ref={(el) => (cardRefs.current[idx] = el)}
            variants={cardVariants}
            whileHover="hover"
            custom={idx}
            className="min-w-[340px] max-w-xs relative bg-gradient-to-br from-[#1a1333cc] to-[#251f38cc] rounded-3xl overflow-hidden border border-purple-700/40 shadow-2xl backdrop-blur-xl transition-all duration-300 snap-center"
          >
            {/* Enhanced Glassmorphism Effect */}
            <motion.div
              className="absolute inset-0 bg-white/10 backdrop-blur-2xl z-0"
              animate={{
                opacity: [0.1, 0.2, 0.1],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            <div className="relative p-8 space-y-5 z-10">
              {/* Certificate Image with Enhanced Animation */}
              <motion.div
                className="relative group mb-2"
                whileHover="hover"
              >
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-30"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <motion.div
                  className="relative bg-white/80 rounded-2xl p-3 flex items-center justify-center shadow-lg"
                  variants={imageVariants}
                >
                  <motion.img
                    src={cert.img}
                    alt={cert.company}
                    className="w-32 h-32 object-contain rounded-xl"
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.4 }
                    }}
                  />
                  <motion.span
                    className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
                    <FaCheckCircle className="text-green-500" title="Verified" />
                  </motion.span>
                </motion.div>
              </motion.div>

              {/* Certificate Details with Staggered Animation */}
              <motion.div
                className="space-y-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white">{cert.role}</h3>
                  <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full font-semibold">
                    {cert.date}
                  </span>
                </div>
                <h4 className="text-sm font-medium text-purple-400">
                  {cert.company}
                </h4>
                <p className="text-gray-300 text-sm line-clamp-2 hover:line-clamp-none transition-all duration-300">
                  {cert.desc}
                </p>
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {cert.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {/* Enhanced Button Animation */}
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="w-full flex items-center justify-center gap-2 py-3 mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/20"
                  onClick={() => window.open(cert.link, "_blank")}
                >
                  View Certificate
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <FaExternalLinkAlt className="ml-1" />
                  </motion.span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 gap-3">
        {experiences.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToCard(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIdx === idx
                ? "bg-gradient-to-r from-purple-500 to-pink-500 scale-125 shadow"
                : "bg-gray-400/40"
            }`}
            aria-label={`Go to certificate ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Certificates;
