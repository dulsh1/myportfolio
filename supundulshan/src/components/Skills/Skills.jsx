// src/components/Skills/Skills.jsx
import { useState } from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import ReactTypingEffect from 'react-typing-effect';

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

      {/* Section Title with Enhanced Typing Effect */}
      <div className="text-center mb-16 relative z-10">
        <motion.div
          className="text-4xl sm:text-6xl font-bold text-white relative"
          variants={skillVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text blur-sm scale-110 opacity-70"></div>
          <ReactTypingEffect
            text={["SKILLS & TECHNOLOGIES", "TECHNICAL EXPERTISE", "MY ARSENAL"]}
            speed={80}
            eraseSpeed={50}
            typingDelay={1000}
            eraseDelay={3000}
            displayTextRenderer={(text) => (
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 text-transparent bg-clip-text relative z-10">
                {text}
              </span>
            )}
            cursorRenderer={cursor => (
              <span className="text-purple-400 animate-pulse">{cursor}</span>
            )}
          />
        </motion.div>
        <motion.div 
          className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 128 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.p
          className="text-gray-300 mt-6 text-lg font-medium max-w-2xl mx-auto"
          variants={skillVariants}
        >
          Cutting-edge technologies and frameworks I&apos;ve mastered through hands-on experience and continuous learning
        </motion.p>
      </div>

      {/* Enhanced Skill Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10">
        {SkillsInfo.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            className="relative group"
            variants={categoryVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
              transitionSpeed={1500}
              gyroscope={true}
              className="w-full h-full"
            >
              {/* 3D Card with Glass Morphism */}
              <div className="relative bg-gradient-to-br from-gray-800/40 via-gray-900/60 to-black/40 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden">
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.05), rgba(59, 130, 246, 0.1))",
                      "linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.1))",
                      "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.1))",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />

                {/* Glowing Border Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: "linear-gradient(45deg, transparent, rgba(147, 51, 234, 0.3), transparent)",
                    filter: "blur(1px)",
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Category Title */}
                <motion.h3
                  className="text-3xl sm:text-4xl font-bold mb-8 text-center relative z-10"
                  variants={skillVariants}
                >
                  <ReactTypingEffect
                    text={[category.title]}
                    speed={100}
                    eraseDelay={100000}
                    typingDelay={categoryIndex * 300}
                    displayTextRenderer={(text) => (
                      <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 text-transparent bg-clip-text">
                        {text}
                      </span>
                    )}
                  />
                </motion.h3>

                {/* Skills Grid */}
                <motion.div 
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 relative z-10"
                  variants={categoryVariants}
                >
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="relative group/skill cursor-pointer"
                      variants={skillVariants}
                      whileHover="hover"
                      onHoverStart={() => setHoveredSkill(`${category.title}-${skill.name}`)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {/* Skill Card */}
                      <motion.div
                        className="relative flex flex-col items-center justify-center p-4 bg-gradient-to-br from-gray-800/60 to-gray-900/60 rounded-2xl border border-gray-600/30 shadow-lg backdrop-blur-sm overflow-hidden"
                        whileHover={{
                          scale: 1.05,
                          rotateY: 5,
                          boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Hover Glow Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"
                          style={{ filter: "blur(10px)" }}
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
                              opacity: hoveredSkill === `${category.title}-${skill.name}` ? [0.3, 0.6, 0.3] : [0.1, 0.3, 0.1],
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
                            className="w-10 h-10 sm:w-12 sm:h-12 relative z-10 filter drop-shadow-lg"
                            drag
                            dragConstraints={{
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                            }}
                            dragElastic={0.1}
                            whileDrag={{ 
                              scale: 1.3,
                              rotate: 15,
                              filter: "brightness(1.2) drop-shadow(0 0 20px rgba(147, 51, 234, 0.8))"
                            }}
                          />
                        </motion.div>

                        {/* Skill Name */}
                        <motion.span 
                          className="text-sm sm:text-base font-medium text-gray-200 group-hover/skill:text-purple-300 transition-colors text-center leading-tight"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          {skill.name}
                        </motion.span>

                        {/* Skill Level Indicator */}
                        <motion.div
                          className="w-full h-1 bg-gray-700 rounded-full mt-2 overflow-hidden"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                        >
                          <motion.div
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: `${70 + Math.random() * 30}%` }}
                            transition={{ delay: index * 0.1 + 0.7, duration: 1 }}
                          />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
