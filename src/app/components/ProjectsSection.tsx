"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import SparklesPreview from "./SparklesPreview";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  technologies: string[];
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Andrea Perelló Psicología",
    description: "Sitio web profesional para psicóloga sanitaria colegiada. Incluye reserva de citas, Blog, enlaces a WhatsApp, información de servicios, ubicación etc.",
    image: "/images/andrea-psicologia.webp", // Temporal placeholder
    url: "https://andreaperellopsicologia.vercel.app/",
    technologies: ["A medida", "Blog", "Google Maps"],
    category: "Sitio Web Profesional"
  },
  {
    id: 2,
    title: "Tu Posible Web - Restaurante",
    description: "Plataforma web para gestión de restaurantes con sistema de reservas, menús digitales y gestión de reseñas de clientes.",
    image: "/images/tuposibleweb.webp", // Temporal placeholder
    url: "https://tuposibleweb.vercel.app/restaurante/Tu-Bar/Calle-de-ejemplo/965-125-467/ChIJG3WZi-QXYg0R4Y1tbG-onuM/4.2/856",
    technologies: ["A medida", "Menús digitales", "Gestión de reseñas"],
    category: "Plataforma Web"
  },
  {
    id: 3,
    title: "Car Detailing Premium",
    description: "Sitio web elegante para servicios de detailing automotriz. Incluye galería de trabajos (antes/después), servicios premium y sistema de citas online.",
    image: "/images/car-detailing.webp", // Temporal placeholder
    url: "https://car-detailing-chi.vercel.app/",
    technologies: ["A medida", "Antes/Después", "Vídeos integrados"],
    category: "Sitio Web Comercial"
  }
];

export function ProjectsSection() {
  return (
    <div className="w-full">
      <div  style={{ height: "5rem" }}>
        <SparklesPreview texto="Proyectos Destacados" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {projects.map((project, index) => (
          <CardContainer key={project.id} className="inter-var">
            <CardBody className="bg-violet-900/30 hover:bg-white/90 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.3] dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border hover:shadow-2xl hover:shadow-purple-500/[0.2] transition-all duration-500 hover:scale-[1.02]">
              <CardItem
                translateZ="50"
                className="text-white hover:text-neutral-800 mb-2 transition-colors duration-300 text-xl font-bold"
              >
                {project.title}
              </CardItem>
              
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-300 group-hover/card:text-neutral-600 text-sm max-w-sm mt-2 mb-4 leading-relaxed transition-colors duration-300"
              >
                {project.description}
              </CardItem>
              
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="w-full mt-4 overflow-hidden rounded-xl"
              >
                <Image
                  src={project.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl group-hover/card:scale-110 transition-all duration-500"
                  alt={project.title}
                />
              </CardItem>
              
              <div className="mt-6">
                <CardItem
                  translateZ="40"
                  className="text-xs text-purple-300 group-hover/card:text-purple-600 mb-3 font-semibold tracking-wide uppercase transition-colors duration-300"
                >
                  {project.category}
                </CardItem>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <CardItem
                      key={techIndex}
                      translateZ="30"
                      className="px-3 py-1 bg-purple-500/30 group-hover/card:bg-purple-100 rounded-full text-xs text-purple-200 group-hover/card:text-purple-700 font-medium transition-all duration-300"
                    >
                      {tech}
                    </CardItem>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mt-6">
                  <CardItem
                    translateZ={20}
                    translateX={-40}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal text-white group-hover/card:text-neutral-800 hover:bg-purple-100/20 group-hover/card:hover:bg-purple-500/20 transition-all duration-300 border border-purple-200/50 group-hover/card:border-purple-400 hover:border-purple-400"
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <svg 
                        className="w-4 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                        />
                      </svg>
                      Ver Demo
                    </a>
                  </CardItem>
                  
                  <CardItem
                    translateZ={20}
                    translateX={40}
                    as="a"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 cursor-pointer"
                  >
                      <svg 
                        className="w-4 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                        />
                      </svg>
                    Visitar Sitio
                  </CardItem>
                </div>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
      
      {/* Simple separator */}
      <div className="mt-20 w-full h-px bg-purple-500/30"></div>
    </div>
  );
}

export default ProjectsSection;
