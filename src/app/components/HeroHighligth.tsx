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
        className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto md:mt-0"
      style={{
        marginTop: '-60px',
      }
      }>
        <Highlight className="text-black dark:text-white md:text-base lg:text-4xl">
          Full Stack Developer & Technical Lead
        </Highlight>
        <p className="text-white text-sm md:text-base lg:text-lg max-w-md md:max-w-3xl mt-6 text-center mx-auto px-12 md:px-8 lg:px-6">
          Desarrollo soluciones completas con un enfoque full stack,{' '}
          <strong className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-300">
            liderando técnicamente{' '}
          </strong>{' '}
          varios proyectos y siendo el principal{' '}
          <strong className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-300">
            responsable{' '}
          </strong>{' '} en otros.
          </p>
          <p className="text-white text-sm md:text-base lg:text-lg max-w-md md:max-w-3xl mt-6 text-center mx-auto px-12 md:px-8 lg:px-6">
           Especializado en el diseño, desarrollo y mantenimiento de{' '}
          <strong className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-300">
            backend APIs REST{' '}
          </strong>{' '}
          asegurando calidad, escalabilidad y estructura clara.
        </p>
          <p className="text-white text-sm md:text-base lg:text-lg max-w-md md:max-w-3xl mt-6 text-center mx-auto px-12 md:px-8 lg:px-6">
           Maqueto interfaces creando componentes reutilizables integrados con APIs, manejo{' '}
          <strong className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-300">
            RxJS{' '}
          </strong>{' '}
          para reactividad, desarrollo formularios avanzados y gráficos, aplicando principios de{' '}
          <strong className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-300">
            UX/UI{' '}
          </strong>{' '}
          para vistas intuitivas y accesibles.
        </p>

      </motion.h1>
    </HeroHighlight>
  );
}

export default HeroHighlightDemo;
