import React from "react";
import { services } from "../../constants";
import { FaMobileAlt, FaCloud, FaPalette, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
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
    rotate: 15,
    color: "#a855f7", // Purple color
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

// Update the iconMap with motion.div wrapper
const iconMap = {
  mobile: (
    <motion.div
      whileHover="hover"
      variants={iconVariants}
      className="p-4 bg-purple-500/10 rounded-2xl backdrop-blur-sm"
    >
      <FaMobileAlt size={32} className="text-purple-400" />
    </motion.div>
  ),
  web: (
    <motion.div
      whileHover="hover"
      variants={iconVariants}
      className="p-4 bg-purple-500/10 rounded-2xl backdrop-blur-sm"
    >
      <FaCode size={32} className="text-purple-400" />
    </motion.div>
  ),
  uiux: (
    <motion.div
      whileHover="hover"
      variants={iconVariants}
      className="p-4 bg-purple-500/10 rounded-2xl backdrop-blur-sm"
    >
      <FaPalette size={32} className="text-purple-400" />
    </motion.div>
  ),
  cloud: (
    <motion.div
      whileHover="hover"
      variants={iconVariants}
      className="p-4 bg-purple-500/10 rounded-2xl backdrop-blur-sm"
    >
      <FaCloud size={32} className="text-purple-400" />
    </motion.div>
  ),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const serviceCardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 0 25px rgba(130,69,236,0.4)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const Service = () => (
  <motion.section
    id="services"
    className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={containerVariants}
  >
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-4xl font-bold text-white"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        My Services
      </motion.h2>
      <motion.div
        className="w-32 h-1 bg-purple-500 mx-auto mt-4"
        initial={{ width: 0 }}
        whileInView={{ width: "8rem" }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.p
        className="text-gray-400 mt-4 text-lg font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        I offer a range of specialized services to help businesses and individuals create
        exceptional digital experiences. Here's how I can help you.
      </motion.p>
    </motion.div>

    <motion.div
      className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      variants={containerVariants}
    >
      {services.map((service, idx) => (
        <motion.div
          key={idx}
          variants={serviceCardVariants}
          whileHover="hover"
          className="bg-gray-900 border border-white rounded-2xl shadow-2xl p-8 flex flex-col items-center transition group"
        >
          <motion.div
            className="mb-4 relative"
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            {/* Animated background circle */}
            <motion.div
              className="absolute inset-0 bg-purple-500/20 rounded-full filter blur-md"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            {iconMap[service.icon] || (
              <motion.div
                whileHover="hover"
                variants={iconVariants}
                className="p-4 bg-purple-500/10 rounded-2xl backdrop-blur-sm"
              >
                <FaCode size={32} className="text-purple-400" />
              </motion.div>
            )}
          </motion.div>
          <motion.h3
            className="text-xl font-bold text-white mb-2 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: idx * 0.2 }}
          >
            {service.title}
          </motion.h3>
          <motion.p
            className="text-gray-400 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: idx * 0.3 }}
          >
            {service.description}
          </motion.p>
        </motion.div>
      ))}
    </motion.div>
  </motion.section>
);

export default Service;