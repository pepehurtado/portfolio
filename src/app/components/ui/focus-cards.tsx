"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/app/utils/cn";

type Card = {
  title: string;
  src: string;
  hoverText?: string; // Texto adicional para mostrar en hover
};

// Componente Modal para mostrar la imagen en grande
const ImageModal = ({ 
  isOpen, 
  onClose, 
  imageSrc, 
  imageTitle 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  imageSrc: string; 
  imageTitle: string; 
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/20 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Imagen */}
        <div className="relative w-full h-full max-w-5xl max-h-[80vh]">
          <Image
            src={imageSrc}
            alt={imageTitle}
            fill
            className="object-contain"
            quality={100}
          />
        </div>
        
        {/* Título */}
        <div className="absolute bottom-4 left-4 right-4 text-center">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
            <h3 className="text-white text-lg font-semibold">{imageTitle}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    onCardClick,
  }: {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    onCardClick: (card: Card) => void;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      onClick={() => onCardClick(card)}
      className={cn(
        "rounded-2xl relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-72 md:h-80 w-full transition-all duration-500 ease-out cursor-pointer group",
        hovered !== null && hovered !== index && "blur-sm scale-[0.96] opacity-70",
        hovered === index && "scale-[1.02] shadow-2xl shadow-purple-500/20"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0 transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Gradiente overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      
      {/* Etiqueta optimizada para móvil */}
      <div className={cn(
        "absolute top-2 left-2 md:top-4 md:left-4 z-10 transition-opacity duration-500",
        hovered === index ? "opacity-0" : "opacity-100"
      )}>
        <div className="bg-gradient-to-r from-purple-600/90 to-blue-600/90 backdrop-blur-sm rounded-full px-3 py-1.5 md:px-4 md:py-2 border border-white/20 shadow-lg">
          <span className="text-white text-xs md:text-sm font-semibold tracking-wide">
            {card.title}
          </span>
        </div>
      </div>
      
      {/* Contenido inferior optimizado para móvil */}
      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
        <div className="space-y-1 md:space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse" />
            <span className="text-white/80 text-xs md:text-xs uppercase tracking-wider font-medium">
              Vista Previa
            </span>
          </div>
          <h3 className="text-white text-sm md:text-lg font-bold leading-tight">
            {card.title}
          </h3>
        </div>
      </div>
      
      {/* Overlay optimizado para mejor legibilidad móvil */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-purple-600/95 via-blue-600/90 to-purple-800/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 transition-all duration-500",
          hovered === index ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}
      >
        <div className="text-center text-white space-y-3 md:space-y-4 max-w-sm">
          <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full mb-2 md:mb-4 backdrop-blur-sm border border-white/30">
            <svg 
              className="w-6 h-6 md:w-8 md:h-8 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
              />
            </svg>
          </div>
          <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3">
            {card.title}
          </h3>
          {card.hoverText && (
            <p className="text-white/90 text-sm md:text-sm leading-relaxed px-2">
              {card.hoverText}
            </p>
          )}
          <div className="pt-1 md:pt-2">
            <div className="inline-flex items-center gap-2 text-white/80 text-xs">
              <span className="w-1 h-1 bg-white/60 rounded-full" />
              <span>Clic para explorar</span>
              <span className="w-1 h-1 bg-white/60 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [modalImage, setModalImage] = useState<{ src: string; title: string } | null>(null);

  const handleCardClick = (card: Card) => {
    setModalImage({ src: card.src, title: card.title });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
        {cards.map((card, index) => (
          <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
            onCardClick={handleCardClick}
          />
        ))}
      </div>
      
      {/* Modal */}
      <ImageModal
        isOpen={modalImage !== null}
        onClose={closeModal}
        imageSrc={modalImage?.src || ""}
        imageTitle={modalImage?.title || ""}
      />
    </>
  );
}
