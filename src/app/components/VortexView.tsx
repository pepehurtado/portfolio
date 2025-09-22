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
import YouTubeVideo from "./YouTubeVideo";
import ProjectsSection from "./ProjectsSection";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconHome,
  IconUser,
  IconBriefcase,
  IconDownload,
  IconFileDescription,
  IconCode,
  IconStar,
} from "@tabler/icons-react";

export function VortexDemoSecond() {
  const [copied, setCopied] = useState(false);
  const [descargado, setDescargado] = useState(false);
  const [descargando, setDescargando] = useState(false);
  const [presentacionDescargada, setPresentacionDescargada] = useState(false);
  const [presentacionDescargando, setPresentacionDescargando] = useState(false);
  const emailAddress = "pepeke2000@gmail.com";

  const links = [
    {
      title: "Sobre Mí",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Mis Proyectos",
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#proyectos",
    },
    {
      title: "Experiencia",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#experiencia",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/pepehurtado",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/pepehurtado",
    },
    {
      title: "CV",
      icon: (
        <IconDownload className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://pepehurtado.vercel.app/Pepe_Hurtado_CV.pdf",
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDownload = async () => {
    setDescargando(true);
    
    try {
      // Verificar que el archivo existe
      const response = await fetch("/Pepe_Hurtado_CV.pdf");
      if (!response.ok) {
        throw new Error("Archivo no encontrado");
      }
      
      // Crear y ejecutar la descarga
      const link = document.createElement("a");
      link.href = "/Pepe_Hurtado_CV.pdf";
      link.download = "Pepe_Hurtado_CV.pdf";
      link.target = "_blank"; // Abrir en nueva pestaña como respaldo
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setDescargado(true);
      setTimeout(() => {
        setDescargado(false);
        setDescargando(false);
      }, 5000);
    } catch (error) {
      console.error("Error al descargar el CV:", error);
      alert("Error al descargar el CV. Por favor, inténtalo de nuevo.");
      setDescargando(false);
    }
  };

  const handlePresentacionDownload = async () => {
    setPresentacionDescargando(true);
    
    try {
      // Verificar que el archivo existe
      const response = await fetch("/Presentacion_TFG_Pepe_Hurtado.pdf");
      if (!response.ok) {
        throw new Error("Archivo no encontrado");
      }
      
      // Crear y ejecutar la descarga
      const link = document.createElement("a");
      link.href = "/Presentacion_TFG_Pepe_Hurtado.pdf";
      link.download = "Presentacion_TFG_Pepe_Hurtado.pdf";
      link.target = "_blank"; // Abrir en nueva pestaña como respaldo
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setPresentacionDescargada(true);
      setTimeout(() => {
        setPresentacionDescargada(false);
        setPresentacionDescargando(false);
      }, 5000);
    } catch (error) {
      console.error("Error al descargar la presentación:", error);
      alert("Error al descargar la presentación. Por favor, inténtalo de nuevo.");
      setPresentacionDescargando(false);
    }
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
        <div id="about" className="flex flex-col md:flex-row items-center justify-center gap-4">
          <ThreeDCardDemo />
          <div className="flex flex-col items-center md:items-center">
            <HeroHighlightDemo />

            <div className="flex flex-col sm:flex-row items-center justify-center mx-auto gap-6 mt-6 sm:mt-8">
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
                  style={{
                    display: descargando ? "none" : "block",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                  />
                </svg>
                Descargar CV
              </Button>

              <Button
                style={{ borderRadius: "3rem" }}
                className="bg-back dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800 hover:bg-[rgba(120,25,250,0.5)] hover:transition transform duration-300 ease-in-out hover:scale-105 flex items-center gap-2 px-4 py-2"
                onClick={handlePresentacionDownload}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  style={{
                    display: presentacionDescargando ? "none" : "block",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m3 0H4a1 1 0 00-1 1v14a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1zM9 9h6m-6 4h6m-6 4h4"
                  />
                </svg>
                Documentación MusicStream
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
                <div className="mt-12 md:mt-16 w-full max-w-6xl mx-auto px-4">
          <YouTubeVideo 
            videoId="LcY-xoM4IZA"
            title="MusicStream - Aplicativo para artistas emergentes"
            className="mb-8"
          />
        </div>

        {/* Projects Section */}
        <div id="proyectos">
          <ProjectsSection />
        </div>

        <div id="experiencia" className="mt-8 md:mt-0 overflow-hidden">
          <TracingBeamDemo />
        </div>

        {/* YouTube Video Section */}

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
      
      {/* Floating Dock */}
      <div className="fixed bottom-4 md:bottom-10 left-1/2 transform -translate-x-1/2 z-50 px-4">
        <FloatingDock
          items={links}
          desktopClassName="bg-black/20 backdrop-blur-md border border-white/10 scale-90 md:scale-100"
          mobileClassName="bg-black/20 backdrop-blur-md border border-white/10"
        />
      </div>
    </div>
  );
}
