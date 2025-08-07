import React from 'react';

import HeroParallaxDemo from './components/HeroParallaxDemo';
import { SparklesPreview } from './components/SparklesPreview';
import HeroHighlightDemo from './components/HeroHighligth';
import { VortexDemoSecond } from './components/VortexView';
import ThreeDCardDemo from './components/ThreeDCardDemo';
import TracingBeamDemo from './components/TracingBeamDemo';
import { MeteorsDemo } from './components/MeteorsDemo';

export default function HomePage() {
  return (
    <>
      {/* Schema.org JSON-LD para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Pepe Hurtado",
            "jobTitle": "Desarrollador Full Stack",
            "description": "Desarrollador Full Stack especializado en Spring Boot, Angular, React y Next.js",
            "url": "https://pepehurtado.vercel.app",
            "sameAs": [
              "https://linkedin.com/in/tu-perfil",
              "https://github.com/pepehurtado"
            ],
            "knowsAbout": [
              "JavaScript",
              "TypeScript",
              "React",
              "Angular",
              "Spring Boot",
              "Next.js",
              "Node.js",
              "Desarrollo Web"
            ]
          })
        }}
      />
      
      <main>
        <header>
          <h1 className="sr-only">Pepe Hurtado - Portfolio de Desarrollador Full Stack</h1>
        </header>
        
        <VortexDemoSecond />
        
        {/* Puedes descomentar estos componentes según necesites */}
        {/* <SparklesPreview /> */}
        {/* <HeroHighlightDemo /> */}
        {/* <HeroParallaxDemo /> */}
        {/* <ThreeDCardDemo /> */}
        {/* <TracingBeamDemo /> */}
        {/* <MeteorsDemo /> */}
      </main>
    </>
  );
};
