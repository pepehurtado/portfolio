"use client";
import React from "react";
import { FocusCards } from "./ui/focus-cards";

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  images: Array<{ title: string; src: string; hoverText?: string }>;
}

export function GalleryModal({ isOpen, onClose, projectTitle, images }: GalleryModalProps) {
  // Bloquear scroll del body cuando el modal está abierto
  React.useEffect(() => {
    if (isOpen) {
      // Guardar la posición actual del scroll
      const scrollY = window.scrollY;
      
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.height = '100vh';
      
      // Restaurar la posición del scroll al cerrar
      return () => {
        document.body.style.overflow = '';
        document.body.style.height = '';
        document.documentElement.style.overflow = '';
        document.documentElement.style.height = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center animate-in fade-in duration-300" style={{ zIndex: 9999 }}>
      {/* Backdrop premium con glassmorphism */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-indigo-900/40 backdrop-blur-xl"
        onClick={onClose}
      />
      
      {/* Efectos de fondo animados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      {/* Modal Content - Diseño premium */}
      <div className="relative z-[10000] bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95 backdrop-blur-2xl rounded-3xl max-w-[95vw] w-full mx-4 max-h-[90vh] overflow-hidden border border-white/10 shadow-2xl animate-in zoom-in-95 duration-300">
        
        {/* Header compacto */}
        <div className="sticky top-0 z-20 bg-gradient-to-r from-purple-600/20 via-blue-600/15 to-purple-600/20 backdrop-blur-2xl border-b border-white/10 p-4 md:p-6">
          <div className="flex justify-between items-center">
            <div className="space-y-1 md:space-y-2">
              {/* Indicador compacto */}
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-150" />
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-300" />
                </div>
                <span className="text-white/60 text-xs md:text-sm font-medium uppercase tracking-wider hidden md:inline">
                  Galería Activa
                </span>
              </div>
              
              {/* Título compacto */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
                  {projectTitle} <span className="text-white/70 text-xs md:text-sm">({images.length} {images.length === 1 ? 'imagen' : 'imágenes'})</span>
                </h2>
              </div>
            </div>
            
            {/* Botón de cierre compacto */}
            <button
              onClick={onClose}
              className="group relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-red-500/20 via-red-600/15 to-red-700/20 hover:from-red-500/30 hover:via-red-600/25 hover:to-red-700/30 rounded-xl border border-red-400/20 hover:border-red-400/40 transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-red-300 group-hover:text-red-200 transition-all duration-300 group-hover:rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Contenido optimizado para más espacio a las imágenes */}
        <div className="p-4 md:p-6 overflow-y-auto max-h-[calc(90vh-120px)] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-purple-500/30 hover:scrollbar-thumb-purple-500/50 scrollbar-thumb-rounded-full">
          {/* Mensaje de bienvenida compacto - solo desktop */}
          <div className="hidden md:block mb-4 p-4 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-xl border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/10">
                <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-white/70 text-sm">Pasa el cursor sobre las imágenes para ver más detalles</p>
              </div>
            </div>
          </div>
          
          {/* Galería optimizada */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-20 hidden md:block" />
            <div className="relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-3 md:p-4 backdrop-blur-sm border border-white/5">
              <FocusCards cards={images} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
