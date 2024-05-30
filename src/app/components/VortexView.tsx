"use client";

import React, { useState } from "react";
import { Vortex } from "../components/ui/vortex";
import SparklesPreview from "./SparklesPreview";
import { ThreeDCardDemo } from "./ThreeDCardDemo";
import HeroHighlightDemo from "./HeroHighligth";

export function VortexDemoSecond() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "pepeke2000@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="w-[calc(100%)] mx-auto rounded-md h-screen overflow-auto">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex flex-col items-center justify-center px-2 md:px-10 py-4 w-full min-h-screen"
      >
        <div className="flex flex-row items-center justify-center gap-20">
          <ThreeDCardDemo />
          <div className="flex flex-col items-center">
            <SparklesPreview />
            <HeroHighlightDemo />
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                <a
                  href="https://www.linkedin.com/in/pepehurtado/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </button>
              <button
                className="px-4 py-2 bg-red-800 hover:bg-red-500 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
                onClick={copyToClipboard}
              >
                {copied ? "¡Copiado!" : "Copiar Correo"}
              </button>
            </div>
          </div>
        </div>
        
      </Vortex>
    </div>
  );
}
