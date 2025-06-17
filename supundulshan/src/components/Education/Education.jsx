import React from "react";
import { education } from "../../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", bounce: 0.22, duration: 0.8, delay: i * 0.1 },
  }),
};

const lineVariants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 1, delay: 0.2, ease: "easeInOut" },
  },
};

const dotVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
};

const Education = () => {
  return (
    <motion.section
      id="education"
      className="relative py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Decorative Animated Gradient Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-3xl z-0"
      />
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </motion.div>

      {/* Timeline */}
      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Vertical line with animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={lineVariants}
          className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 h-full"
        ></motion.div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
            variants={cardVariants}
            custom={index}
          >
            {/* Timeline Dot with animation */}
            <motion.div
              className="z-10 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-4 border-white shadow-lg flex items-center justify-center absolute sm:static left-[-1.5rem] sm:left-auto"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={dotVariants}
              whileHover={{ scale: 1.2, boxShadow: "0 0 24px #a855f7" }}
            >
              <img
                src={edu.img}
                alt={edu.school}
                className="w-6 h-6 object-contain rounded-full"
              />
            </motion.div>

            {/* Card */}
            <motion.div
              whileHover={{
                scale: 1.045,
                boxShadow: "0 8px 40px 0 rgba(130,69,236,0.25)",
              }}
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transition-transform duration-300`}
            >
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white rounded-full overflow-hidden flex items-center justify-center border-2 border-blue-400 shadow">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-14 h-14 object-contain rounded-full"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {edu.school}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-400 font-bold">{edu.grade}</p>
              <p className="mt-4 text-gray-400">{edu.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Education;
