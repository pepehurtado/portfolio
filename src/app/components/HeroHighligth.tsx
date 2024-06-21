// HeroHighlightDemo.tsx
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
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto md:mt-8"
      >
        <Highlight className="text-black dark:text-white md:text-base lg:text-5xl">
          Full-stack developer
        </Highlight>
        <p className="text-white text-sm md:text-base lg:text-lg max-w-md  md:max-w-xl mt-6 text-center mx-auto px-12 md:px-8 lg:px-6">
          Soy un recién <strong className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-300">
             graduado en Ingeniería Informática
          </strong> que busca aplicar sus conocimientos para ayudar y dar soluciones óptimas. 
        </p>
        <p className="text-white text-sm md:text-base lg:text-lg max-w-md  md:max-w-xl mt-6 text-center mx-auto px-12 md:px-8 lg:px-6">
          Soy un cabezota cuando se trata de resolver problemas. No paro hasta encontrar la solución adecuada y hacer que las cosas funcionen.
        </p>
      </motion.h1>
    </HeroHighlight>
  );
}

export default HeroHighlightDemo;
