import React from "react";
import { EvervaultCard } from "../components/ui/evervault-card";

export function EvervaultCardDemo() {
  return (
    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-center max-w-sm mx-auto p-4 relative h-[12rem] justify-center items-center lg:-mt-24">
      <EvervaultCard text="Proyectos" />
    </div>
  );
}

export default EvervaultCardDemo;
