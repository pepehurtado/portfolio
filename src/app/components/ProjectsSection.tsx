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
      { title: "Página Principal", src: "/images/andrea-psicologia.webp", hoverText: "Diseño elegante y profesional con llamadas a la acción claras" },
      { title: "Sobre Mí", src: "/images/andrea-sobremi.webp", hoverText: "Sección personal que conecta con los clientes potenciales" },
      { title: "Servicios", src: "/images/andrea-servicios.webp", hoverText: "Presentación clara y organizada de servicios psicológicos con un diseño limpio y enfocado en la confianza." },
      { title: "Preguntas frecuentes", src: "/images/andrea-preguntas.webp", hoverText: "Sistema de blog para compartir artículos y recursos" },
      { title: "Contacto", src: "/images/andrea-contacto.webp", hoverText: "Integración con WhatsApp funcional" },
      { title: "Diseño adaptado", src: "/images/andrea-adaptado.webp", hoverText: "Adaptación perfecta a dispositivos móviles y tablets" }
    ]
  },
  {
    id: 2,
    title: "Tu Posible Web - Restaurante",
    description: "Plataforma web para gestión de restaurantes con sistema de reservas, menús digitales y gestión de reseñas de clientes.",
    image: "/images/posible-inicio.webp", // Temporal placeholder
    url: "https://tuposibleweb.vercel.app/restaurante/Tu-Bar/Calle-de-ejemplo/965-125-467/ChIJG3WZi-QXYg0R4Y1tbG-onuM/4.2/856",
    technologies: ["A medida", "Menús digitales", "Gestión de reseñas"],
    category: "Plataforma Web",
    gallery: [
      { title: "Dashboard Principal", src: "/images/posible-inicio.webp", hoverText: "Diseño inmersivo y atractivo se combina con una interfaz limpia y moderna para ofrecer una experiencia de usuario fluida" },
      { title: "Paleta de color personalizable", src: "/images/posible-paleta.webp", hoverText: "Personalización completa de la paleta de colores para adaptarse a la identidad de la marca" },
      { title: "Menú Digital", src: "/images/posible-menu.webp", hoverText: "Menús interactivos con imágenes, descripciones detalladas y navegación del menú fluida e intuitiva con acceso directo a cada categoría" },
      { title: "Ubicación", src: "/images/posible-ubicacion.webp", hoverText: "Contacto y ubicación del restaurante en un mapa interactivo" },
      { title: "Vista Móvil", src: "/images/posible-adaptado.webp", hoverText: "Experiencia optimizada para dispositivos móviles" }
    ]
  },
  {
    id: 3,
    title: "Car Detailing Premium",
    description: "Sitio web elegante para servicios de detailing automotriz. Incluye galería de trabajos (antes/después), servicios premium y sistema de citas online.",
    image: "/images/car-inicio.webp", // Temporal placeholder
    url: "https://car-detailing-chi.vercel.app/",
    technologies: ["A medida", "Antes/Después", "Vídeos integrados"],
    category: "Sitio Web Comercial",
    gallery: [
      { title: "Página de Inicio", src: "/images/car-inicio.webp", hoverText: "Página de inicio para un servicio de detallado de coches con un diseño de lujo, llamativo y directo, enfocado en la conversión del cliente" },
      { title: "Galería Antes/Después", src: "/images/car-comparar.webp", hoverText: "Sección de resultados 'Antes y Después' que muestra la calidad del trabajo de forma visual y atractiva mediante un slider interactivo y claro" },
      { title: "Servicios Premium", src: "/images/car-servicios.webp", hoverText: "Sección de servicios con un diseño elegante de modo oscuro, que organiza la información en tarjetas claras y concisas para una fácil comprensión y selección" },
      { title: "Contacto", src: "/images/car-formulario.webp", hoverText: "Sección de contacto y reserva con un formulario de presupuesto claro y accesible, diseñado para maximizar la conversión de clientes" },
      { title: "Diseño Responsivo", src: "/images/car-adaptado.webp", hoverText: "Interfaz que se adapta perfectamente a cualquier dispositivo" },
      { title: "Términos y chat", src: "/images/car-terminos.webp", hoverText: "Sección de términos y condiciones para acceder al chat" }
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
                {/* Contenedor principal para la imagen con efectos */}
                <div className="relative rounded-xl overflow-hidden">
                  {/* Borde animado visible */}
                  <div className="absolute -inset-[3px] bg-gradient-to-r from-purple-500 via-blue-500 via-cyan-400 via-purple-500 to-blue-500 rounded-xl animate-spin-slow opacity-90"></div>
                  
                  {/* Efectos de brillo adicionales */}
                  <div className="absolute -inset-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-xl animate-pulse"></div>
                  <div className="absolute -inset-[2px] bg-gradient-to-l from-transparent via-blue-400 to-transparent rounded-xl animate-pulse delay-700"></div>
                  
                  {/* Contenedor de la imagen */}
                  <div className="relative rounded-xl overflow-hidden bg-gray-900">
                    <Image
                      src={project.image}
                      height="1000"
                      width="1000"
                      className="h-48 md:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl group-hover:scale-105 transition-all duration-500 relative z-10"
                      alt={project.title}
                    />
                    
                    {/* Badge permanente en la esquina superior derecha */}
                    <div className="absolute top-2 right-2 z-20">
                      <div className="bg-gradient-to-r from-purple-600/90 to-blue-600/90 backdrop-blur-sm rounded-full px-2 py-1 border border-white/20 shadow-lg">
                        <div className="flex items-center gap-1">
                          <svg 
                            className="w-3 h-3 text-white" 
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
                          <span className="text-white text-xs font-medium">Galería</span>
                        </div>
                      </div>
                    </div>

                    {/* Badge en la esquina inferior izquierda */}
                    <div className="absolute bottom-2 left-2 z-20">
                      <div className="bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1 border border-white/20">
                        <span className="text-white text-xs font-medium">📸 {project.gallery.length} imágenes</span>
                      </div>
                    </div>
                    
                    {/* Overlay mejorado para hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl flex items-center justify-center z-10">
                      <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-3 mx-auto w-fit border border-white/30">
                          <svg 
                            className="w-8 h-8 text-white animate-pulse" 
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
                        <p className="text-sm font-semibold mb-1">Ver Galería</p>
                        <p className="text-xs opacity-90">{project.gallery.length} capturas disponibles</p>
                      </div>
                    </div>

                    {/* Indicador de clic siempre visible */}
                    <div className="absolute top-2 left-2 z-20">
                      <div className="bg-green-500/90 backdrop-blur-sm rounded-full p-1.5 border border-white/30 shadow-lg animate-pulse">
                        <svg 
                          className="w-3 h-3 text-white" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" 
                          />
                        </svg>
                      </div>
                    </div>
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
