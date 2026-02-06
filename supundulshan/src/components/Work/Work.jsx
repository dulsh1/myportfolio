import { useState, useEffect, useMemo, useCallback } from "react";
import { projects } from "../../constants";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiFolder, FiGrid, FiSmartphone, FiCode, FiPenTool } from "react-icons/fi";
import dffPng from '../../assets/ITSC/dff.png';
import rugby1 from '../../assets/tshirt/ghhhhhh.jpg';
import rugby2 from '../../assets/tshirt/new rygby jersy.jpg';
import footballJersey from '../../assets/tshirt/football.jpeg';
import dblImg from '../../assets/tshirt/DBL.jpg';
import boomImg from '../../assets/tshirt/boom.jpg';
import img7729 from '../../assets/tshirt/IMG_7729.jpg';
import img7730 from '../../assets/tshirt/IMG_7730.jpg';
import img7732 from '../../assets/tshirt/IMG_7732.jpg';
import mataraImg from '../../assets/tshirt/matara.JPG';
import img24df from '../../assets/tshirt/24df.JPG';
import img25le from '../../assets/tshirt/25 le.JPG';
import imgSdd from '../../assets/tshirt/sdd.JPG';

// Helper to extract a design number from a file/url path
const extractDesignNumber = (src, fallbackIndex) => {
  try {
    const name = src.split('?')[0].split('#')[0].split('/').pop() || '';
    const match = name.match(/(\d{1,4})/); // first sequence of digits
    if (match) return parseInt(match[1], 10);
    return fallbackIndex + 1; // fallback to display index if no digits
  } catch {
    return fallbackIndex + 1;
  }
};

const ProjectCard = ({ project }) => {
  // Determine project category
  const getProjectCategory = (tags) => {
    // Specific graphic sub-categories
    if (tags.some(tag => ["FCSC Design", "FCSC", "fcsc"].includes(tag))) return "FCSC Design";
    if (tags.some(tag => ["ITSC Design", "ITSC", "itsc"].includes(tag))) return "ITSC Design";
    if (tags.some(tag => ["Football Tournament Design", "Football", "Tournament"].includes(tag))) return "Football Tournament Design";
    if (tags.some(tag => ["SLIIT Rugby Design", "SLIIT Rugby", "Rugby"].includes(tag))) return "Tshirt and bangle artwork";
    // Existing categories
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
      case "FCSC Design": return "from-yellow-500 to-amber-500";
      case "ITSC Design": return "from-orange-500 to-red-500";
      case "Football Tournament Design": return "from-lime-500 to-green-500";
      case "Tshirt and bangle artwork": return "from-red-600 to-rose-600";
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
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [lightboxType, setLightboxType] = useState('image');
  const [lightboxList, setLightboxList] = useState([]); // list of media for navigation
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxSrc(null);
      if (!lightboxSrc) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxSrc, lightboxIndex, lightboxList]);

  const openLightbox = (list, index) => {
    const item = list[index];
    setLightboxList(list);
    setLightboxIndex(index);
    setLightboxSrc(item.src);
    setLightboxType(item.type);
  };

  const handleNext = useCallback(() => {
    if (!lightboxList.length) return;
    const next = (lightboxIndex + 1) % lightboxList.length;
    setLightboxIndex(next);
    setLightboxSrc(lightboxList[next].src);
    setLightboxType(lightboxList[next].type);
  }, [lightboxIndex, lightboxList]);

  const handlePrev = useCallback(() => {
    if (!lightboxList.length) return;
    const prev = (lightboxIndex - 1 + lightboxList.length) % lightboxList.length;
    setLightboxIndex(prev);
    setLightboxSrc(lightboxList[prev].src);
    setLightboxType(lightboxList[prev].type);
  }, [lightboxIndex, lightboxList]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxSrc(null);
      if (!lightboxSrc) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxSrc, handleNext, handlePrev]);

  const excludeDesignNumbers = useMemo(() => new Set([69, 71, 78, 81, 82, 98, 100]), []);

  // Auto-close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setLightboxSrc(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Load ITSC media (images + videos) from assets
  const itscImages = useMemo(() => {
    try {
      const lower = import.meta.glob('../../assets/itsc/*.{png,jpg,jpeg,webp,gif,svg}', { eager: true });
      const upper = import.meta.glob('../../assets/ITSC/*.{png,jpg,jpeg,webp,gif,svg}', { eager: true });
      const auto = [...Object.values(lower), ...Object.values(upper)].map(m => m.default).filter(Boolean);
      const manual = dffPng ? [dffPng] : [];
      const set = new Set([...auto, ...manual]);
      return Array.from(set);
    } catch {
      return dffPng ? [dffPng] : [];
    }
  }, []);

  const itscVideos = useMemo(() => {
    const modules = import.meta.glob('../../assets/itsc/*.{mp4,MP4}', { eager: true });
    return Object.values(modules).map((m) => m.default).filter(Boolean);
  }, []);

  // Build ITSC media with derived design numbers and sort ascending
  const itscMedia = useMemo(() => {
    const images = itscImages.map((src, idx) => ({ type: 'image', src, number: extractDesignNumber(src, idx) }));
    const videos = itscVideos.map((src, idx) => ({ type: 'video', src, number: extractDesignNumber(src, idx) }));
    const combined = [...images, ...videos]
      .filter((_, idx) => !excludeDesignNumbers.has(idx + 1));
    combined.sort((a, b) => a.number - b.number);
    return combined;
  }, [itscImages, itscVideos, excludeDesignNumbers]);

  // Load Football Tournament images from both lowercase and uppercase folders
  const footballImages = useMemo(() => {
    try {
      const lower = import.meta.glob('../../assets/football/*.{png,jpg,jpeg,webp,gif,svg,JPG,PNG,JPEG,WEBP,GIF,SVG}', { eager: true });
      const upper = import.meta.glob('../../assets/FOOTBALL/*.{png,jpg,jpeg,webp,gif,svg,JPG,PNG,JPEG,WEBP,GIF,SVG}', { eager: true });
      const all = [...Object.values(lower), ...Object.values(upper)].map((m) => m.default).filter(Boolean);
      // Deduplicate by URL
      return Array.from(new Set(all));
    } catch {
      return [];
    }
  }, []);

  // Football gallery media objects (images only)
  const footballMedia = useMemo(() => {
    const unique = Array.from(new Set(footballImages));
    const media = unique.map((src, idx) => ({ type: 'image', src, number: extractDesignNumber(src, idx) }))
      .filter((_, idx) => !excludeDesignNumbers.has(idx + 1));
    media.sort((a, b) => a.number - b.number);
    return media;
  }, [footballImages, excludeDesignNumbers]);

  // Tshirt & Bangle artwork media (manual list)
  const tshirtMedia = useMemo(() => {
    const imgs = [
      rugby1,
      rugby2,
      footballJersey,
      dblImg,
      boomImg,
      img7729,
      img7730,
      img7732,
      mataraImg,
      img24df,
      img25le,
      imgSdd,
    ].filter(Boolean);
    const unique = Array.from(new Set(imgs));
    const media = unique.map((src, idx) => ({ type: 'image', src, number: extractDesignNumber(src, idx) }));
    media.sort((a, b) => a.number - b.number);
    return media;
  }, []);

  // Initialize from URL hash
  useEffect(() => {
    const hash = (window.location.hash || '').replace('#', '').toLowerCase();
    switch (hash) {
      case 'web':
        setSelectedCategory('Web Development');
        break;
      case 'mobile':
        setSelectedCategory('Mobile Apps');
        break;
      case 'uiux':
      case 'design':
        setSelectedCategory('UI/UX Design');
        break;
      case 'fcsc':
      case 'fcsc-design':
        setSelectedCategory('FCSC Design');
        break;
      case 'itsc':
      case 'itsc-design':
        setSelectedCategory('ITSC Design');
        break;
      case 'football':
      case 'football-tournament':
        setSelectedCategory('Football Tournament Design');
        break;
      case 'sliit-rugby':
      case 'rugby':
        setSelectedCategory('Tshirt and bangle artwork');
        break;
      default:
        // leave as All
        break;
    }
  }, []);

  const categories = [
    { name: "All", icon: FiGrid, count: projects.length },
    { name: "Web Development", icon: FiCode, count: projects.filter(p => p.tags?.some(tag => ["React", "JavaScript", "Express", "Bootstrap", "Tailwind CSS", "MySQL"].includes(tag))).length },
    { name: "Mobile Apps", icon: FiSmartphone, count: projects.filter(p => p.tags?.some(tag => ["Kotlin", "Android", "Firebase"].includes(tag))).length },
    { name: "UI/UX Design", icon: FiPenTool, count: projects.filter(p => p.tags?.some(tag => ["Figma", "UI/UX", "Prototyping"].includes(tag))).length },
    { name: "ITSC Design", icon: FiPenTool, count: itscMedia.length },
    { name: "Football Tournament Design", icon: FiPenTool, count: footballMedia.length },
    { name: "Tshirt and bangle artwork", icon: FiPenTool, count: tshirtMedia.length },
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
          case "FCSC Design":
            return project.tags.some(tag => ["FCSC Design", "FCSC", "fcsc"].includes(tag));
          case "ITSC Design":
            return project.tags.some(tag => ["ITSC Design", "ITSC", "itsc"].includes(tag));
          case "Football Tournament Design":
            return project.tags.some(tag => ["Football Tournament Design", "Football", "Tournament"].includes(tag));
          case "Tshirt and bangle artwork":
            return project.tags.some(tag => ["SLIIT Rugby Design", "SLIIT Rugby", "Rugby"].includes(tag));
          default:
            return true;
        }
      });

  return (
    <section id="work" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#121212] relative overflow-hidden">
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

        {/* Modern ITSC Design Gallery (images + videos) */}
        {selectedCategory === 'ITSC Design' && itscMedia.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-white">ITSC Design Gallery</h3>
              <span className="text-sm text-gray-400">{itscMedia.length} items</span>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:balance]">
              {itscMedia.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="break-inside-avoid mb-6 group relative rounded-2xl overflow-hidden border border-white/10 bg-[#101010]/60 backdrop-blur-md shadow-xl"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                >
                  <div className="absolute inset-0 rounded-2xl pointer-events-none">
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-yellow-500/30 via-amber-500/20 to-orange-500/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {item.type === 'image' ? (
                    <img src={item.src} alt={`ITSC Design ${idx + 1}`} className="w-full h-auto object-cover" loading="lazy" />
                  ) : (
                    <video src={item.src} className="w-full h-auto object-cover" controls preload="metadata" />
                  )}

                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 shadow-sm">
                      {item.type === 'video' ? 'ITSC • Video' : 'ITSC'}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-end p-4">
                    <div className="flex w-full items-center justify-between">
                      <div>
                        <p className="text-white text-sm font-medium">Design {item.number}</p>
                        <p className="text-gray-400 text-xs">Tap to view fullscreen</p>
                      </div>
                      <motion.button
                        type="button"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/40 backdrop-blur hover:bg-yellow-500/30 hover:text-white transition"
                        whileHover={{ scale: 1.08, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openLightbox(itscMedia, idx)}
                        title="View fullscreen"
                        aria-label="View fullscreen"
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Football Tournament Design Gallery */}
        {selectedCategory === 'Football Tournament Design' && footballMedia.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-white">Football Tournament Gallery</h3>
              <span className="text-sm text-gray-400">{footballMedia.length} images</span>
            </div>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:balance]">
              {footballMedia.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="break-inside-avoid mb-6 group relative rounded-2xl overflow-hidden border border-white/10 bg-[#101010]/60 backdrop-blur-md shadow-xl"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                >
                  <img src={item.src} alt={`Football Design ${idx + 1}`} className="w-full h-auto object-cover" loading="lazy" />

                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-lime-500/20 text-lime-300 border border-lime-500/30 shadow-sm">Football</span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-end p-4">
                    <div className="flex w-full items-center justify-between">
                      <div>
                        <p className="text-white text-sm font-medium">Design {item.number}</p>
                        <p className="text-gray-400 text-xs">Tap to view fullscreen</p>
                      </div>
                      <motion.button
                        type="button"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-lime-500/20 text-lime-300 border border-lime-500/40 backdrop-blur hover:bg-lime-500/30 hover:text-white transition"
                        whileHover={{ scale: 1.08, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openLightbox(footballMedia, idx)}
                        title="View fullscreen"
                        aria-label="View fullscreen"
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tshirt and Bangle Artwork Gallery */}
        {selectedCategory === 'Tshirt and bangle artwork' && tshirtMedia.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-white">Tshirt & Bangle Artwork Gallery</h3>
              <span className="text-sm text-gray-400">{tshirtMedia.length} artworks</span>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:balance]">
              {tshirtMedia.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="break-inside-avoid mb-6 group relative rounded-2xl overflow-hidden border border-white/10 bg-[#101010]/60 backdrop-blur-md shadow-xl"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                >
                  <img src={item.src} alt={`Tshirt Artwork ${idx + 1}`} className="w-full h-auto object-cover" loading="lazy" />

                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 shadow-sm">
                      Tshirt & Bangle
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-end p-4">
                    <div className="flex w-full items-center justify-between">
                      <div>
                        <p className="text-white text-sm font-medium">Artwork {item.number}</p>
                        <p className="text-gray-400 text-xs">Tap to view fullscreen</p>
                      </div>
                      <motion.button
                        type="button"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 backdrop-blur hover:bg-rose-500/30 hover:text-white transition"
                        whileHover={{ scale: 1.08, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openLightbox(tshirtMedia, idx)}
                        title="View fullscreen"
                        aria-label="View fullscreen"
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Projects Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-8"
        >
          {selectedCategory === 'ITSC Design' ? (
            <p className="text-gray-400">
              Showing <span className="text-purple-400 font-semibold">{(itscImages?.length || 0)}</span> projects
              <span> in <span className="text-purple-400 font-semibold">ITSC Design</span></span>
            </p>
          ) : selectedCategory === 'Football Tournament Design' ? (
            <p className="text-gray-400">
              Showing <span className="text-purple-400 font-semibold">{footballMedia.length}</span> images
              <span> in <span className="text-purple-400 font-semibold">Football Tournament Design</span></span>
            </p>
          ) : selectedCategory === 'Tshirt and bangle artwork' ? (
            <p className="text-gray-400">
              Showing <span className="text-purple-400 font-semibold">{tshirtMedia.length}</span> artworks
              <span> in <span className="text-purple-400 font-semibold">Tshirt and bangle artwork</span></span>
            </p>
          ) : (
            <p className="text-gray-400">
              Showing <span className="text-purple-400 font-semibold">{filteredProjects.length}</span> projects
              {selectedCategory !== "All" && <span> in <span className="text-purple-400 font-semibold">{selectedCategory}</span></span>}
            </p>
          )}
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

        {/* Removed: No projects message */}
      </div>

      {/* Lightbox fullscreen overlay: image or video */}
      {lightboxSrc && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightboxSrc(null)}
        >
          {lightboxType === 'video' ? (
            <motion.video
              src={lightboxSrc}
              className="max-w-[90vw] max-h-[85vh] rounded-lg shadow-2xl"
              controls
              autoPlay
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <motion.img
              src={lightboxSrc}
              alt="Fullscreen"
              className="max-w-[90vw] max-h-[85vh] rounded-lg shadow-2xl"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            />
          )}

          {/* Caption and pagination */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-300 text-sm">
            {lightboxList.length > 0 && (
              <span>{lightboxIndex + 1} / {lightboxList.length}</span>
            )}
          </div>

          {/* Prev/Next buttons */}
          <button
            type="button"
            className="absolute left-6 top-1/2 -translate-y-1/2 px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white text-sm border border-white/20"
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            aria-label="Previous"
          >
            Prev
          </button>
          <button
            type="button"
            className="absolute right-6 top-1/2 -translate-y-1/2 px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white text-sm border border-white/20"
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            aria-label="Next"
          >
            Next
          </button>

          <button
            type="button"
            className="absolute top-6 right-6 px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white text-sm border border-white/20"
            onClick={() => setLightboxSrc(null)}
            aria-label="Close fullscreen"
          >
            Close
          </button>
        </motion.div>
      )}

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
