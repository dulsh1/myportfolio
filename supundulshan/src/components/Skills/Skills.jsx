// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import ReactTypingEffect from 'react-typing-effect'; // Import typing effect

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      staggerChildren: 0.07,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
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
    scale: 1.2,
    rotate: 360,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
};

const Skills = () => (
  <motion.section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    {/* Section Title with Typing Effect */}
    <div className="text-center mb-8">
      <motion.div
        className="text-3xl sm:text-4xl font-bold text-white"
        variants={skillVariants}
      >
        <ReactTypingEffect
          text={["SKILLS", "TECHNOLOGIES", "EXPERTISE"]}
          speed={100}
          eraseSpeed={100}
          typingDelay={1000}
          eraseDelay={2000}
          cursorRenderer={cursor => (
            <span className="text-purple-500">{cursor}</span>
          )}
        />
      </motion.div>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <motion.p
        className="text-gray-400 mt-4 text-lg font-semibold"
        variants={skillVariants}
      >
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </motion.p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
      {SkillsInfo.map((category) => (
        <motion.div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          variants={categoryVariants}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 30px rgba(130,69,236,0.4)",
            transition: { duration: 0.3 }
          }}
        >
          <motion.h3
            className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center"
            variants={skillVariants}
          >
            <ReactTypingEffect
              text={[category.title]}
              speed={50}
              eraseDelay={100000}
              typingDelay={200}
              displayTextRenderer={(text) => (
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                  {text}
                </span>
              )}
            />
          </motion.h3>

          {/* Skill Items Grid */}
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            className="group"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center hover:border-purple-500/50 hover:bg-gray-800/50 transition-all duration-300 group"
                  variants={skillVariants}
                  whileHover="hover"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    className="relative"
                  >
                    {/* Enhanced glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-purple-500/20 rounded-full filter blur-md"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.2, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                    <motion.img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 sm:w-8 sm:h-8 relative z-10 group-hover:scale-110 transition-transform"
                      drag
                      dragConstraints={{
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                      }}
                      dragElastic={0.1}
                      whileDrag={{ scale: 1.2 }}
                    />
                  </motion.div>
                  <motion.span 
                    className="text-xs sm:text-sm text-gray-300 group-hover:text-purple-400 transition-colors"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {skill.name}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </Tilt>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Skills;
