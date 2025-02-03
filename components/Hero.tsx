"use client";
import React from 'react';
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";


const Hero = () => {
    return (
        <div>
        <HeroHighlight>
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
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            Hi ! Welcome to my digital garden! This is {" "}
            <Highlight className="text-black dark:text-white">
              Musaddiq Rafi 
            </Highlight>

          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 2, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-lg px-4 md:text-xl lg:text-2xl text-neutral-700 dark:text-white max-w-2xl leading-relaxed lg:leading-snug text-center mx-auto mt-4"
          >
            I&apos;m an aspiring software Engineer from Bangladesh 🇧🇩
          </motion.p>
        </HeroHighlight>
        
        </div>
      );
    }

export default Hero