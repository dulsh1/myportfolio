// components/BlurBlob.jsx
import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const BlurBlob = ({ position, size }) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        top,
        left,
        width,
        height,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: [0.4, 0.6, 0.4],
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear"
      }}
    >
      <div className="relative w-full h-full">
        {/* Main blob */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full filter blur-3xl animate-blob" />
        
        {/* Secondary blobs for layered effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000" 
          style={{ animationDelay: '2s' }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"
          style={{ animationDelay: '4s' }}
        />
      </div>
    </motion.div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string.isRequired,
    left: PropTypes.string.isRequired,
  }).isRequired,
  size: PropTypes.shape({
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlurBlob;
