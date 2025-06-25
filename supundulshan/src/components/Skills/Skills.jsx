// src/components/Skills/Skills.jsx
import { useState } from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 30, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      staggerChildren: 0.1,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -30 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      type: "spring",
      stiffness: 100,
    },
  },
  hover: {
    scale: 1.05,
    rotateY: 5,
    z: 20,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0, rotate: -180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
  hover: {
    scale: 1.3,
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  floating: {
    y: [-5, 5],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <motion.section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Background 3D Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Section Title with Description */}
      <div className="text-center mb-16 relative z-10">
        <motion.div
          className="text-4xl sm:text-6xl font-bold text-white relative mb-6"
          variants={skillVariants}
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 text-transparent bg-clip-text">
            SKILLS & TECHNOLOGIES
          </span>
        </motion.div>
        
        <motion.div 
          className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"
          initial={{ width: 0 }}
          animate={{ width: 128 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        <motion.p
          className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed mb-12"
          variants={skillVariants}
        >
          Here are the technologies and tools I work with to build modern, scalable, and efficient applications.
        </motion.p>
      </div>

      {/* All Skills Grid Layout */}
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={sectionVariants}
      >
        {SkillsInfo.map((category) => (
          <motion.div
            key={category.title}
            className="mb-16"
            variants={categoryVariants}
          >
            {/* Category Title */}
            <motion.h3
              className="text-3xl font-bold text-center mb-12"
              variants={skillVariants}
            >
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                {category.title}
              </span>
            </motion.h3>

            {/* Skills Cards Grid */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
              variants={categoryVariants}
            >
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="group cursor-pointer"
                  variants={skillVariants}
                  whileHover="hover"
                  onHoverStart={() => setHoveredSkill(`${category.title}-${skill.name}`)}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                  <Tilt
                    tiltMaxAngleX={15}
                    tiltMaxAngleY={15}
                    perspective={1000}
                    scale={1.05}
                    transitionSpeed={1500}
                  >
                    {/* Skill Card */}
                    <motion.div
                      className="relative flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-800/60 via-gray-900/80 to-black/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden h-32"
                      whileHover={{
                        boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)",
                        borderColor: "rgba(147, 51, 234, 0.5)",
                        y: -5,
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Animated Background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        animate={{
                          background: [
                            "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.05))",
                            "linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.05))",
                            "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.05))",
                          ],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />

                      {/* Icon Container */}
                      <motion.div
                        className="relative mb-3"
                        variants={iconVariants}
                        animate={hoveredSkill === `${category.title}-${skill.name}` ? "hover" : "floating"}
                      >
                        {/* Icon Glow */}
                        <motion.div
                          className="absolute inset-0 bg-purple-500/30 rounded-full filter blur-lg scale-150"
                          animate={{
                            opacity: hoveredSkill === `${category.title}-${skill.name}` ? [0.3, 0.6, 0.3] : [0, 0.2, 0],
                            scale: [1.2, 1.4, 1.2],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        />
                        
                        {/* Skill Icon */}
                        <motion.img
                          src={skill.logo}
                          alt={`${skill.name} logo`}
                          className="w-12 h-12 relative z-10 filter drop-shadow-lg"
                          whileHover={{ 
                            scale: 1.2,
                            filter: "brightness(1.2) drop-shadow(0 0 20px rgba(147, 51, 234, 0.8))"
                          }}
                        />
                      </motion.div>

                      {/* Skill Name */}
                      <motion.span 
                        className="text-sm font-medium text-gray-200 group-hover:text-purple-300 transition-colors text-center leading-tight relative z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.05 + 0.2 }}
                      >
                        {skill.name}
                      </motion.span>
                    </motion.div>
                  </Tilt>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
