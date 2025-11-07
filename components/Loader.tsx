"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

  const greetings = [
    "Hello",
    "Hola",
    "স্বাগতম",
    "नमस्ते",
    "مرحبا",
  ];

  useEffect(() => {
    // Cycle through greetings every 600ms (5 greetings in 3 seconds)
    const greetingInterval = setInterval(() => {
      setCurrentGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 600);

    // Hide loader after 3 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearInterval(greetingInterval);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.5,
            filter: "blur(20px)"
          }}
          transition={{ 
            duration: 1, 
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Main text with enhanced animations */}
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentGreetingIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                }}
                exit={{ 
                  opacity: 0, 
                  y: -10,
                }}
                transition={{ 
                  duration: 0.3, 
                  ease: "easeOut"
                }}
              >
                <motion.h1
                  className="text-6xl md:text-8xl lg:text-9xl font-bold text-white"
                  style={{
                    textShadow: "0 0 40px rgba(168, 85, 247, 0.9), 0 0 80px rgba(236, 72, 153, 0.7), 0 0 120px rgba(37, 99, 235, 0.6)",
                  }}
                >
                  {greetings[currentGreetingIndex]}
                </motion.h1>

                {/* Letter sparkles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${10 + i * 12}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.1,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Underline animation */}
            <motion.div
              className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full mt-4"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 3,
                ease: "linear",
              }}
            />
          </div>

          {/* Exit animation: Color burst effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-full h-2 origin-left"
                style={{
                  background: `linear-gradient(90deg, 
                    rgba(168, 85, 247, ${0.8 - i * 0.05}), 
                    rgba(236, 72, 153, ${0.8 - i * 0.05}), 
                    rgba(37, 99, 235, ${0.8 - i * 0.05}))`,
                  transform: `rotate(${i * 30}deg)`,
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                exit={{ 
                  scaleX: 2, 
                  opacity: [0, 1, 0],
                }}
                transition={{ 
                  duration: 1,
                  delay: i * 0.03,
                  ease: "easeOut"
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
