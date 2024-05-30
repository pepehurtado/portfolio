"use client";
import React from "react";
import { SparklesCore } from "../components/ui/sparkles";

export function SparklesPreview() {
  return (
    <div className="h-[15rem] md:h-[10rem] w-[15rem] md:w-[20rem] bg-transparent flex flex-col items-center overflow-hidden rounded-md mt-10">


      <h1 className="md:text-5xl text-2xl lg:text-6xl font-bold text-center text-white relative z-20">
        Pepe Hurtado
      </h1>
      <div className="w-[20rem] h-20 relative">
        {/* Gradients */}
        <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[10px] w-4/4 blur-sm" />
        <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-30 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={1}
          maxSize={2}
          particleDensity={1000}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(175px_100px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
export default SparklesPreview;
