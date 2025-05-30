import React from "react";
import { Meteors } from "../components/ui/meteors";
interface CardProps {
  titulo: string;
  descripcion: string;
  image?: string
}

export function MeteorsDemo(props: CardProps) {
  return (      
  <div className="w-full relative max-w-xl">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-center">
          <button className="border px-6 py-3 rounded-lg mb-4 border-gray-500 text-gray-300 flex items-center disabled" style={{ cursor: "default" }}>
            <img src={`/images/${props.image}.webp`} alt="Button Icon" className="mw-10 h-10 mr-3" />
            <h1 className="font-bold text-xl text-white relative z-50">
            {props.titulo}
          </h1>
          </button>
          <h2 className="text-sm text-white mb-4 relative z-50"
          style={{ textAlign: "center", fontWeight: 500, fontSize: "1rem" }}>
            {props.descripcion}
          </h2>
          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
  );
}

export default MeteorsDemo;
