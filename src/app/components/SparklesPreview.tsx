"use client";
import React from "react";
import { SparklesCore } from "../components/ui/sparkles";

interface SparklesPreviewProps {
  texto: string;
}

export function SparklesPreview({ texto }: SparklesPreviewProps) {
  return (
    <div className="relative h-[15rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md bg-transparent">
      <h1 className="md:text-5xl text-3xl lg:text-5xl font-bold text-center text-white relative z-20">
        {texto}
      </h1>
      <div className="w-[40rem] h-600 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
    </div>
  );
}

export default SparklesPreview;
