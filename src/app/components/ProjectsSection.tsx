"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import SparklesPreview from "./SparklesPreview";
import { GalleryModal } from "./GalleryModal";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  technologies: string[];
  category: string;
  gallery: Array<{ title: string; src: string; hoverText?: string }>;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Andrea Perelló Psicología",
    description: "Sitio web profesional para psicóloga sanitaria colegiada. Incluye reserva de citas, Blog, enlaces a WhatsApp, información de servicios, ubicación etc.",
    image: "/images/andrea-psicologia.webp", // Temporal placeholder
    url: "https://andreaperellopsicologia.vercel.app/",
    technologies: ["A medida", "Blog", "Google Maps"],
    category: "Sitio Web Profesional",
    gallery: [
      { title: "Página Principal", src: "/images/imagenperfilpepe.webp", hoverText: "Diseño elegante y profesional con llamadas a la acción claras" },
      { title: "Sobre Mí", src: "/images/ANGULAR.webp", hoverText: "Sección personal que conecta con los clientes potenciales" },
      { title: "Servicios", src: "/images/VUE.webp", hoverText: "Detalle completo de todos los servicios psicológicos ofrecidos" },
      { title: "Contacto", src: "/images/SPRING BOOT.webp", hoverText: "Integración con WhatsApp y formulario de contacto funcional" },
      { title: "Blog", src: "/images/NET CORE.webp", hoverText: "Sistema de blog para compartir artículos y recursos" },
      { title: "Responsive Design", src: "/images/PYTHON LOGO.webp", hoverText: "Adaptación perfecta a dispositivos móviles y tablets" }
    ]
  },
  {
    id: 2,
    title: "Tu Posible Web - Restaurante",
    description: "Plataforma web para gestión de restaurantes con sistema de reservas, menús digitales y gestión de reseñas de clientes.",
    image: "/images/tuposibleweb.webp", // Temporal placeholder
    url: "https://tuposibleweb.vercel.app/restaurante/Tu-Bar/Calle-de-ejemplo/965-125-467/ChIJG3WZi-QXYg0R4Y1tbG-onuM/4.2/856",
    technologies: ["A medida", "Menús digitales", "Gestión de reseñas"],
    category: "Plataforma Web",
    gallery: [
      { title: "Dashboard Principal", src: "/images/musicstream.webp", hoverText: "Panel de control intuitivo para gestión completa del restaurante" },
      { title: "Menú Digital", src: "/images/GIFSAPP.webp", hoverText: "Menús interactivos con imágenes y descripciones detalladas" },
      { title: "Sistema de Reservas", src: "/images/bytestormfront.webp", hoverText: "Calendario inteligente para gestionar reservas en tiempo real" },
      { title: "Gestión de Reseñas", src: "/images/ANGULAR LOGO.webp", hoverText: "Herramientas para monitorear y responder reseñas de clientes" },
      { title: "Panel Administrativo", src: "/images/SPRINGBOOT LOGO.webp", hoverText: "Backend robusto para administración y análisis de datos" },
      { title: "Vista Móvil", src: "/images/DATABASE LOGO.webp", hoverText: "Experiencia optimizada para dispositivos móviles" }
    ]
  },
  {
    id: 3,
    title: "Car Detailing Premium",
    description: "Sitio web elegante para servicios de detailing automotriz. Incluye galería de trabajos (antes/después), servicios premium y sistema de citas online.",
    image: "/images/car-detailing.webp", // Temporal placeholder
    url: "https://car-detailing-chi.vercel.app/",
    technologies: ["A medida", "Antes/Después", "Vídeos integrados"],
    category: "Sitio Web Comercial",
    gallery: [
      { title: "Página de Inicio", src: "/images/DJANGO LOGO.webp", hoverText: "Landing page impactante con galería de trabajos destacados" },
      { title: "Galería Antes/Después", src: "/images/JWT LOGO.webp", hoverText: "Comparaciones visuales que demuestran la calidad del servicio" },
      { title: "Servicios Premium", src: "/images/MARIADB LOGO.webp", hoverText: "Catálogo detallado de servicios de detailing automotriz" },
      { title: "Sistema de Citas", src: "/images/OPENAPI LOGO.webp", hoverText: "Reserva online con calendario disponible y confirmación automática" },
      { title: "Videos Integrados", src: "/images/SEGURIDAD LOGO.webp", hoverText: "Videos promocionales y tutoriales integrados en la experiencia" },
      { title: "Diseño Responsivo", src: "/images/GIT LOGO.webp", hoverText: "Interfaz que se adapta perfectamente a cualquier dispositivo" }
    ]
  }
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const openGallery = (project: Project) => {
    setSelectedProject(project);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="w-full">
      <div  style={{ height: "5rem" }}>
        <SparklesPreview texto="Proyectos Destacados" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-6 md:px-4">
        {projects.map((project, index) => (
          <CardContainer key={project.id} className="inter-var w-full max-w-sm mx-auto md:max-w-none">
            <CardBody className="bg-violet-900/30 hover:bg-white/90 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.3] dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 md:p-6 border hover:shadow-2xl hover:shadow-purple-500/[0.2] transition-all duration-500 hover:scale-[1.02]">
              <CardItem
                translateZ="50"
                className="text-white hover:text-neutral-800 mb-2 transition-colors duration-300 text-lg md:text-xl font-bold"
              >
                {project.title}
              </CardItem>
              
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-300 group-hover/card:text-neutral-600 text-sm max-w-sm mt-2 mb-3 md:mb-4 leading-relaxed transition-colors duration-300"
              >
                {project.description}
              </CardItem>
              
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="w-full mt-3 md:mt-4 overflow-hidden rounded-xl cursor-pointer relative group"
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  openGallery(project);
                }}
              >
                <Image
                  src={project.image}
                  height="1000"
                  width="1000"
                  className="h-48 md:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl group-hover/card:scale-110 transition-all duration-500"
                  alt={project.title}
                />
                {/* Overlay para indicar que es clickeable */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 rounded-xl flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                    <svg 
                      className="w-6 h-6 text-gray-800" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                      />
                    </svg>
                  </div>
                </div>
              </CardItem>
              
              <div className="mt-4 md:mt-6">
                <CardItem
                  translateZ="40"
                  className="text-xs text-purple-300 group-hover/card:text-purple-600 mb-2 md:mb-3 font-semibold tracking-wide uppercase transition-colors duration-300"
                >
                  {project.category}
                </CardItem>
                
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <CardItem
                      key={techIndex}
                      translateZ="30"
                      className="px-2 md:px-3 py-1 bg-purple-500/30 group-hover/card:bg-purple-100 rounded-full text-xs text-purple-200 group-hover/card:text-purple-700 font-medium transition-all duration-300"
                    >
                      {tech}
                    </CardItem>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-0 mt-4 md:mt-6">
                  <CardItem
                    translateZ={20}
                    translateX={-40}
                    as="button"
                    className="w-full sm:w-auto px-3 md:px-4 py-2 rounded-xl text-xs font-normal text-white group-hover/card:text-neutral-800 hover:bg-purple-100/20 group-hover/card:hover:bg-purple-500/20 transition-all duration-300 border border-purple-200/50 group-hover/card:border-purple-400 hover:border-purple-400"
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
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
                    className="w-full sm:w-auto px-3 md:px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
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
      
      {/* Gallery Modal */}
      {selectedProject && (
        <GalleryModal
          isOpen={isGalleryOpen}
          onClose={closeGallery}
          projectTitle={selectedProject.title}
          images={selectedProject.gallery}
        />
      )}
      
      {/* Simple separator */}
      <div className="mt-20 w-full h-px bg-purple-500/30"></div>
    </div>
  );
}

export default ProjectsSection;
