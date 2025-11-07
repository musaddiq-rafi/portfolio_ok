"use client";
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

const TypewriterEffect = ({ phrases }: { phrases: string[] }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.substring(0, currentText.length + 1));
          setTypingSpeed(50 + Math.random() * 50);
        } else {
          // Pause at the end
          setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentPhrase.substring(0, currentText.length - 1));
          setTypingSpeed(30);
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, typingSpeed]);

  return (
    <span className="inline-block min-h-[1.2em]">
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[3px] h-[1em] bg-neutral-700 dark:bg-white ml-1 align-middle"
      />
    </span>
  );
};

const Hero = () => {
  const typewriterPhrases = [
    "AI-Powered Full-Stack Developer",
    "Next.js & n8n Specialist",
    "RAG & LLM Systems Builder",
    "Prompt Engineering Expert",
    "Docker Enthusiast",
    "Startup & Innovation Enthusiast"
  ];

  return (
    <div>
      <HeroHighlight>
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="relative group"
          >
            {/* <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-ping"></div> */}
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full opacity-60 group-hover:opacity-90 blur-sm animate-pulse transition duration-1000 group-hover:duration-300"></div>
            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
              <img
                src="/assets/image.png"
                alt="Musaddiq Rafi"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to placeholder if image not found
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=Musaddiq+Rafi&size=200&background=random`;
                }}
              />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
              delay: 0.2,
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
          >
            Hi! Welcome to my digital garden! I&apos;m{" "}
            <Highlight className="text-black dark:text-white">
              Musaddiq Rafi
            </Highlight>
          </motion.h1>

          {/* Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1], delay: 0.4 }}
            className="text-lg px-4 md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed lg:leading-snug text-center mx-auto mt-4 min-h-[3rem] flex items-center justify-center"
          >
            <TypewriterEffect phrases={typewriterPhrases} />
          </motion.div>

          {/* Subtitle */}
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1], delay: 0.6 }}
            className="text-base px-4 md:text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed text-center mx-auto"
          >
            Aspiring Software Engineer from Bangladesh 🇧🇩
          </motion.p> */}
        </div>
      </HeroHighlight>
    </div>
  );
};

export default Hero;