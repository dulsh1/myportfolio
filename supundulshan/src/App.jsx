import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './components/BlurBlob';
import Certificates from "./components/Experience/Experience";
import Service from "./components/service/service";
import Chatbot from "./components/Chatbot/Chatbot";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="bg-[#050414] min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Animated Gradient Blobs */}
        <BlurBlob 
          position={{ top: '5%', left: '10%' }} 
          size={{ width: '35%', height: '35%' }} 
        />
        <BlurBlob 
          position={{ top: '50%', left: '85%' }} 
          size={{ width: '40%', height: '40%' }} 
        />
        <BlurBlob 
          position={{ top: '85%', left: '15%' }} 
          size={{ width: '30%', height: '30%' }} 
        />

        {/* Light Beam Effects */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      {/* Content Container with Glass Effect */}
      <motion.div 
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        
        <main className="relative">
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <About />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Skills />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Certificates />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Work />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Education />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Service />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Contact />
          </motion.section>
        </main>
        
        <Footer />
      </motion.div>

      {/* Modern Animated Chatbot */}
      <Chatbot />

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed bottom-4 left-6 w-12 h-12 flex items-center justify-center bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 cursor-pointer hover:bg-purple-500/30 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <motion.div
          className="w-4 h-4 border-2 border-purple-500 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
  );
};

export default App;
