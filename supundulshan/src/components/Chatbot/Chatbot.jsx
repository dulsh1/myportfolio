import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMessageCircle, 
  FiX, 
  FiSend, 
  FiUser,
  FiMic,
  FiPaperclip,
  FiSmile
} from 'react-icons/fi';
import supunImage from '../../assets/Supunulshan.png';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Supun's AI assistant. How can I help you learn more about his skills and projects?",
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const botResponses = {
    skills: "🚀 Supun is skilled in React, JavaScript, Python, Java, Kotlin, and many other technologies. He specializes in full-stack development, mobile apps, and UI/UX design. Want to see his skills section?",
    projects: "💼 Check out his amazing projects including PAT PAT CLEANING (laundry management), Movie Recommendation App, E-commerce Store, and Finance Tracker App. All are live and on GitHub! Would you like specific details about any project?",
    experience: "🎓 Supun has completed various certification courses and has hands-on experience in software development, including practical GitHub Actions and career skills training from LinkedIn Learning.",
    education: "📚 He has a strong educational background in infromation technologhy and continues learning through professional development courses. Always staying updated with the latest technologies!",
    contact: "📧 You can reach out to Supun through the contact section below, or connect with him on LinkedIn and GitHub for collaboration opportunities. He's always open to new opportunities!",
    hello: "👋 Hello! Nice to meet you! I'm here to help you learn more about Supun's amazing work and skills. What would you like to know?",
    help: "🤖 I can tell you about Supun's skills, projects, experience, education, or how to contact him. Try asking: 'Tell me about his projects' or 'What are his skills?'",
    about: "👨‍💻 Supun is a passionate software developer with expertise in full-stack development, mobile applications, and UI/UX design. He's always eager to learn new technologies and work on innovative projects!",
    github: "💻 You can find all of Supun's projects on GitHub! Each project card has direct links to both the source code and live demos. Check out the projects section below!",
    demo: "🌐 All projects have live demos! Click on the 'Live Demo' buttons on any project card to see them in action. The links are fully functional!",
    default: "🤔 That's an interesting question! I'd recommend checking out Supun's portfolio sections or reaching out to him directly for more specific information. Is there anything specific about his work you'd like to know?"
  };

  const generateResponse = (input) => {
    const lowercaseInput = input.toLowerCase();
    
    if (lowercaseInput.includes('skill') || lowercaseInput.includes('technology') || lowercaseInput.includes('tech')) {
      return botResponses.skills;
    } else if (lowercaseInput.includes('project') || lowercaseInput.includes('work') || lowercaseInput.includes('portfolio')) {
      return botResponses.projects;
    } else if (lowercaseInput.includes('experience') || lowercaseInput.includes('job') || lowercaseInput.includes('career')) {
      return botResponses.experience;
    } else if (lowercaseInput.includes('education') || lowercaseInput.includes('study') || lowercaseInput.includes('learn')) {
      return botResponses.education;
    } else if (lowercaseInput.includes('contact') || lowercaseInput.includes('reach') || lowercaseInput.includes('email')) {
      return botResponses.contact;
    } else if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi') || lowercaseInput.includes('hey')) {
      return botResponses.hello;
    } else if (lowercaseInput.includes('help')) {
      return botResponses.help;
    } else if (lowercaseInput.includes('about') || lowercaseInput.includes('who')) {
      return botResponses.about;
    } else if (lowercaseInput.includes('github') || lowercaseInput.includes('code') || lowercaseInput.includes('repository')) {
      return botResponses.github;
    } else if (lowercaseInput.includes('demo') || lowercaseInput.includes('live') || lowercaseInput.includes('website')) {
      return botResponses.demo;
    } else {
      return botResponses.default;
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: generateResponse(inputValue),
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickReplies = [
    "Tell me about skills",
    "Show me projects", 
    "How to contact?",
    "GitHub repositories",
    "About Supun"
  ];

  const chatVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      y: 20,
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  const typingVariants = {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={() => setIsOpen(true)}
            className="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Pulsing Ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-purple-500"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 0, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Icon */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FiMessageCircle size={24} />
            </motion.div>
            
            {/* Notification Badge */}
            <motion.div
              className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
            >
              1
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mb-4 w-80 sm:w-96 h-[500px] bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 flex flex-col overflow-hidden"
            variants={chatVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Header */}
            <motion.div 
              className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 flex items-center justify-between relative overflow-hidden"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-30"
                animate={{
                  x: [-50, 50, -50],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="flex items-center space-x-3 relative z-10">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={supunImage}
                    alt="Supun"
                    className="w-10 h-10 rounded-full border-2 border-white/50 object-cover"
                  />
                  <motion.div
                    className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-white">Supun&apos;s AI Assistant</h3>
                  <p className="text-xs text-purple-100">Online • Ask me anything!</p>
                </div>
              </div>
              
              <motion.button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiX size={20} />
              </motion.button>
            </motion.div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-800">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  variants={messageVariants}
                  initial="hidden"
                  animate="visible"
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-end space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <motion.div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                    >
                      {message.sender === 'user' ? (
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                          <FiUser size={14} className="text-white" />
                        </div>
                      ) : (
                        <img
                          src={supunImage}
                          alt="Bot"
                          className="w-8 h-8 rounded-full border border-purple-500/50 object-cover"
                        />
                      )}
                    </motion.div>
                    
                    <motion.div
                      className={`p-3 rounded-2xl relative ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                          : 'bg-gray-800 text-gray-100 border border-gray-700'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-sm">{message.text}</p>
                      <span className={`text-xs mt-1 block ${
                        message.sender === 'user' ? 'text-purple-100' : 'text-gray-400'
                      }`}>
                        {message.timestamp}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex items-end space-x-2">
                    <img
                      src={supunImage}
                      alt="Bot typing"
                      className="w-8 h-8 rounded-full border border-purple-500/50 object-cover"
                    />
                    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-3">
                      <motion.div className="flex space-x-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            variants={typingVariants}
                            animate="animate"
                            className="w-2 h-2 bg-purple-400 rounded-full"
                            transition={{ delay: i * 0.2 }}
                          />
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 1 && (
              <motion.div 
                className="px-4 py-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-xs text-gray-400 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <motion.button
                      key={index}
                      onClick={() => {
                        setInputValue(reply);
                        setTimeout(handleSendMessage, 100);
                      }}
                      className="text-xs px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full hover:bg-purple-500/30 transition-colors border border-purple-500/30"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {reply}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Input Area */}
            <motion.div 
              className="p-4 border-t border-gray-700/50"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center space-x-2">
                <motion.button
                  className="text-gray-400 hover:text-purple-400 transition-colors p-2 rounded-full hover:bg-gray-800"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiPaperclip size={16} />
                </motion.button>
                
                <div className="flex-1 relative">
                  <textarea
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me about Supun's work..."
                    className="w-full bg-gray-800 text-gray-100 rounded-xl px-4 py-2 pr-10 resize-none h-10 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-gray-700 placeholder-gray-400"
                    rows="1"
                  />
                  <motion.button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiSmile size={16} />
                  </motion.button>
                </div>
                
                <motion.button
                  className="text-gray-400 hover:text-purple-400 transition-colors p-2 rounded-full hover:bg-gray-800"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiMic size={16} />
                </motion.button>
                
                <motion.button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: inputValue.trim() ? 1.1 : 1 }}
                  whileTap={{ scale: inputValue.trim() ? 0.9 : 1 }}
                >
                  <FiSend size={16} />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
