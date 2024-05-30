"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highligth";

export function HeroHighlightDemo() {
  return (  

    <HeroHighlight>
      
      <motion.h1
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration:0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "

      >
          
        <Highlight className="text-black dark:text-white">
          Full-stack developer
        </Highlight>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
              Me considero una persona con muchas ganas de aprender, mejorar y progresar como trabajador y persona. Destaca en mí la actitud que tengo frente a los problemas y adversidades.
        </p>
      </motion.h1>
    </HeroHighlight>
  );
}
export default HeroHighlightDemo;