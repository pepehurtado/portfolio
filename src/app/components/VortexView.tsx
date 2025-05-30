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
  const [descargado, setDescargado] = useState(false);
  const [descargando, setDescargando] = useState(false);
  const emailAddress = "pepeke2000@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

    const handleDownload = () => {
    setDescargando(true);
    const link = document.createElement("a");
    link.href = "/Pepe_Hurtado_CV.pdf"; // Ruta al archivo en public
    link.download = "Pepe_Hurtado_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDescargado(true);
    setTimeout(() => setDescargado(false), 5000);
  };
  

  return (
    <div className="min-h-screen items-center scrollbar">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex flex-col items-center justify-center px-2 md:px-6 py-4 mt:0 pt-0 md:pt-0"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <ThreeDCardDemo />
          <div className="flex flex-col items-center md:items-center">
            <HeroHighlightDemo />

            <div className="flex flex-row sm:flex-row items-center justify-center mx-auto gap-6 mt-6 sm:mt-8">
<Button
      style={{ borderRadius: "3rem" }}
      className="bg-back dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800 hover:bg-[rgba(75,25,250,0.5)] hover:transition transform duration-300 ease-in-out hover:scale-105 flex items-center gap-2 px-4 py-2"
      onClick={handleDownload}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        /* que solo se vea si no está descargando */
        style={{ display: descargando ? "none" : "block" }
        }
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
        />
      </svg>
      Descargar CV
    </Button>
              {copied ? (
                <Button
                  borderRadius="3rem"
                  className="bg-back dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800 hover:bg-[rgba(75,25,250,0.5)]  hover:text-slate-400 redtransition transform duration-300 ease-in-out"
                >
                  Copiado!
                </Button>
              ) : (
                
                <Button
                  borderRadius="3rem"
                  className="bg-back dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800 hover:bg-[rgba(75,25,250,0.5)] hover:transition transform duration-300 ease-in-out hover:scale-105"
                  onClick={copyToClipboard}
                >
                  Copiar correo
                </Button>
              )}
            </div>
          </div>
        </div>

            <div className="mt-8 md:mt-0 overflow-hidden">
        <TracingBeamDemo />
      </div>
{/*         <div className="mt-12 md:mt-40">
          <SparklesPreview texto="Proyectos destacados" />
        </div>

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
        </div> */}
      </Vortex>
    </div>
  );
}
