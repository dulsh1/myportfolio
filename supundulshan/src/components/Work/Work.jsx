import { useState } from "react";
import { projects } from "../../constants";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiFolder, FiGrid, FiSmartphone, FiCode, FiPenTool } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  // Determine project category
  const getProjectCategory = (tags) => {
    if (tags.some(tag => ["Figma", "UI/UX", "Prototyping"].includes(tag))) return "UI/UX Design";
    if (tags.some(tag => ["Kotlin", "Android", "Firebase"].includes(tag))) return "Mobile App";
    if (tags.some(tag => ["React", "JavaScript", "Express", "Bootstrap", "Tailwind CSS", "MySQL", "Full Stack"].includes(tag))) return "Web Development";
    return "Other";
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case "UI/UX Design": return "from-pink-500 to-rose-500";
      case "Mobile App": return "from-green-500 to-emerald-500";
      case "Web Development": return "from-blue-500 to-cyan-500";
      default: return "from-purple-500 to-indigo-500";
    }
  };

  const category = getProjectCategory(project.tags);
  const categoryColor = getCategoryColor(category);

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative bg-[#1a1a1a]/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800/50 hover:border-purple-500/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/10">
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <motion.span
            className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${categoryColor} text-white shadow-lg`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {category}
          </motion.span>
        </div>

        {/* Project Image with Overlay */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent opacity-90" />
          
          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex items-center space-x-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-20">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-black/30 backdrop-blur-md rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 border border-white/10 hover:border-purple-500/50 cursor-pointer z-30"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
                title="View GitHub Repository"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(project.github, '_blank', 'noopener,noreferrer');
                }}
              >
                <FiGithub className="w-5 h-5" />
              </motion.a>
            )}
            {project.webapp && (
              <motion.a
                href={project.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-black/30 backdrop-blur-md rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 border border-white/10 hover:border-blue-500/50 cursor-pointer z-30"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                title="View Live Demo"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(project.webapp, '_blank', 'noopener,noreferrer');
                }}
              >
                <FiExternalLink className="w-5 h-5" />
              </motion.a>
            )}
          </div>

          {/* Gradient overlay on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${categoryColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        </div>

        {/* Project Info */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <motion.div
              whileHover={{ rotate: 15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FiFolder className="text-purple-500 w-5 h-5" />
            </motion.div>
            <h3 className="text-xl font-bold text-white group-hover:text-purple-500 transition-colors duration-300">
              {project.title}
            </h3>
          </div>
          
          <p className="text-gray-400 text-sm mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
            {project.description}
          </p>
          
          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 4).map((tag, index) => (
              <motion.span
                key={index}
                className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 hover:bg-purple-500/20 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {tag}
              </motion.span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-3 py-1 text-xs rounded-full bg-gray-500/10 text-gray-400 border border-gray-500/20">
                +{project.tags.length - 4} more
              </span>
            )}
          </div>

          {/* Project Links - Enhanced Bottom Section */}
          <div className="flex justify-between items-center border-t border-gray-700/30 pt-4 mt-4 relative z-10">
            <div className="flex space-x-4">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-github flex items-center space-x-2 px-4 py-2 bg-gray-800/50 hover:bg-purple-500/20 border border-gray-600/30 hover:border-purple-500/50 rounded-lg text-gray-400 hover:text-purple-400 transition-all duration-300 group/link cursor-pointer z-20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  title="View source code on GitHub"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(project.github, '_blank', 'noopener,noreferrer');
                  }}
                >
                  <FiGithub className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
                  <span className="text-sm font-medium">GitHub</span>
                </motion.a>
              )}
              {project.webapp && (
                <motion.a
                  href={project.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-demo flex items-center space-x-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 hover:border-blue-500/50 rounded-lg text-blue-400 hover:text-blue-300 transition-all duration-300 group/link cursor-pointer z-20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  title="View live demo"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open(project.webapp, '_blank', 'noopener,noreferrer');
                  }}
                >
                  <FiExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                  <span className="text-sm font-medium">Live Demo</span>
                </motion.a>
              )}
            </div>
            
            {/* Project Status/Type Indicator */}
            <div className="flex items-center space-x-2">
              <motion.div
                className="status-indicator w-2 h-2 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-xs text-gray-500 font-medium">Active</span>
            </div>
          </div>
        </div>

        {/* Animated border effect */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${categoryColor} opacity-20 blur-xl`} />
        </div>
      </div>
    </motion.div>
  );
};

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { name: "All", icon: FiGrid, count: projects.length },
    { name: "Web Development", icon: FiCode, count: projects.filter(p => p.tags.some(tag => ["React", "JavaScript", "Express", "Bootstrap", "Tailwind CSS", "MySQL"].includes(tag))).length },
    { name: "Mobile Apps", icon: FiSmartphone, count: projects.filter(p => p.tags.some(tag => ["Kotlin", "Android", "Firebase"].includes(tag))).length },
    { name: "UI/UX Design", icon: FiPenTool, count: projects.filter(p => p.tags.some(tag => ["Figma", "UI/UX", "Prototyping"].includes(tag))).length },
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => {
        switch(selectedCategory) {
          case "Web Development":
            return project.tags.some(tag => ["React", "JavaScript", "Express", "Bootstrap", "Tailwind CSS", "MySQL", "Full Stack"].includes(tag));
          case "Mobile Apps":
            return project.tags.some(tag => ["Kotlin", "Android", "Firebase"].includes(tag));
          case "UI/UX Design":
            return project.tags.some(tag => ["Figma", "UI/UX", "Prototyping"].includes(tag));
          default:
            return true;
        }
      });

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#121212] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Projects
          </h2>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-gray-400 mt-4 text-lg">Showcasing my creative work across different domains</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`
                  group relative flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300
                  ${selectedCategory === category.name
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 border-transparent text-white shadow-lg shadow-purple-500/25'
                    : 'bg-[#1a1a1a]/80 backdrop-blur-sm border-gray-800/50 text-gray-400 hover:border-purple-500/50 hover:text-purple-400'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <IconComponent className="w-5 h-5" />
                <span className="font-medium">{category.name}</span>
                <span className={`
                  px-2 py-1 text-xs rounded-full font-bold
                  ${selectedCategory === category.name
                    ? 'bg-white/20 text-white'
                    : 'bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20'
                  }
                `}>
                  {category.count}
                </span>
                
                {/* Active indicator */}
                {selectedCategory === category.name && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-8"
        >
          <p className="text-gray-400">
            Showing <span className="text-purple-400 font-semibold">{filteredProjects.length}</span> projects
            {selectedCategory !== "All" && <span> in <span className="text-purple-400 font-semibold">{selectedCategory}</span></span>}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100 
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <FiFolder className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No projects found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </motion.div>
        )}
      </div>

      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
