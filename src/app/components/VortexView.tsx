"use client";
import React, { useState } from "react";
import { Vortex } from "../components/ui/vortex";
import SparklesPreview from "./SparklesPreview";
import { ThreeDCardDemo } from "./ThreeDCardDemo";
import HeroHighlightDemo from "./HeroHighligth";
import AnimatedPin from "./AnimatedPin";
import { BackgroundGradient } from "../components/ui/cardbackground";
import Image from "next/image";
import HeroScrollDemo from "./Scrolltablet";
import { MacbookScroll } from "./ui/macbook-scroll";
import TracingBeamDemo from "./TracingBeamDemo";
import EvervaultCardDemo from "./EvervaultCard";
import { Button } from "../components/ui/moving-border";

export function VortexDemoSecond() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "pepeke2000@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="min-h-screen items-center scrollbar">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex flex-col items-center justify-center px-2 md:px-6 py-4"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <ThreeDCardDemo />
          <div className="flex flex-col items-center md:items-center">
            <HeroHighlightDemo />

            <div className="flex flex-row sm:flex-row items-center justify-center mx-auto gap-6 mt-6 sm:mt-8">
              {copied ? (
                <Button
                  borderRadius="3rem"
                  className="bg-back dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800 hover:bg-[rgba(255,255,0,0.5)]  hover:text-slate-400 redtransition transform duration-300 ease-in-out"
                >
                  Copiado!
                </Button>
              ) : (
                <Button
                  borderRadius="3rem"
                  className="bg-back dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800 hover:bg-[rgba(255,255,0,0.5)] hover:text-black transition transform duration-300 ease-in-out hover:scale-105"
                  onClick={copyToClipboard}
                >
                  Copiar correo
                </Button>
              )}
            </div>
          </div>
        </div>

        <EvervaultCardDemo />

        {/* Container for AnimatedPin components */}
        <div className="flex flex-wrap justify-center items-center gap-44 mt-8">
        <div className="w-full sm:w-1/2 lg:w-1/3">
            <AnimatedPin
              titulo="Gifs Search App"
              descripcion="He desarrollado esta aplicación para poder gifs en base a un título usando Angular, consumiendo la API de Giphy y su respectiva paginación."
              foto="GIFSAPP"
              imagenUrl=""
              vinculo="https://giftapp-search-pepehurtado.vercel.app"
              link="vercel.com"
              lenguaje={["ANGULAR"]}
            />
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3">
            <AnimatedPin
              titulo="Backend Spring Boot"
              descripcion="He desarrollado este backend usando Spring Boot, uso de DTOs para objetos, relaciones usando una base de datos en Supabase. Uso de Mockito y JUnit para test unitarios. Filtros de busqueda usando QueryParams y paginación, teniendo métodos para ordenar y filtrar por todos los parametros disponibles."
              foto="musicstream"
              imagenUrl=""
              vinculo="https://github.com/pepehurtado/musicstream"
              link="github.com"
              lenguaje={["SPRING BOOT"]}
            />
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3">
            <AnimatedPin
              titulo="Frontend realizado con Vue"
              descripcion="He desarrollado este frontend usando Vue.js, paginación indexada, filtro de búsqueda, JWT para autenticar y autorizar acciones."
              foto="bytestormfront"
              imagenUrl=""
              vinculo="https://github.com/pepehurtado/Bytestorm-front"
              link="github.com"
              lenguaje={["VUE"]}
            />
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3">
            <AnimatedPin
              titulo="Backend realizado con .NET CORE"
              descripcion="He desarrollado este frontend usando .NET CORE para crear endpoints, uso de DTOs para objetos e implementar JWT para autenticar."
              foto="bytestormfront"
              imagenUrl=""
              vinculo="https://github.com/pepehurtado/Bytestorm-backend"
              link="github.com"
              lenguaje={["NET CORE"]}
            />
          </div>
        </div>
      </Vortex>

      <div className="mt-12 md:mt-40 overflow-hidden">
        <TracingBeamDemo />
      </div>
    </div>
  );
}
