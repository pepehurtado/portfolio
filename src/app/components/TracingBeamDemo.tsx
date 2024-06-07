import React from "react";
import Image from "next/image";
import { TracingBeam } from "../components/ui/tracing-beam";
import { motion } from "framer-motion";
import MeteorsDemo from "../components/MeteorsDemo"; // Asegúrate de que la ruta es correcta

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-6xl mx-auto antialiased pt-4 relative">
<h1 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-left">
    Desarrollador web SmartWay Studio
  </h1>
  <h2 className="bg-gradient-to-r from-gray-700 via-gray-800 to-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4 shadow-lg mt-2 ">
    Noviembre 2023 - Febrero 2024
  </h2>
        <div className="flex flex-wrap -mx-2">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="w-full md:w-1/2 lg:w-1/2 px-5 mb-5 ">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl mb-2"
              >
              </motion.h1>
              <div className="text-sm prose prose-sm dark:prose-invert">
                <MeteorsDemo titulo={item.title} image={item.image} descripcion={item.description.join(' ')} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Django",
    description: [
      "Participación en un proyecto nacional de carácter sanitario para implementar nuevas funcionalidades como listados en base al tipo de usuario que seas, creación de nuevas entidades, gestión de usuarios y contraseñas",
    ],
    badge: "Launch Week",
    image: "DJANGO LOGO",
  },
  {
    title: "Angular",
    description: [
      "Participación en un proyecto nacional de carácter sanitario para implementar nuevas rutas con formularios, gestión de login y contraseñas, nuevos modales, listar objetos y poder filtrar por determinados parámetros",
    ],
    badge: "Launch Week",
    image: "ANGULAR LOGO",
  },
  {
    title: ".NET CORE",
    description: [
      "Desarrollo de API REST usando interfaces, controladores, autenticación basada en JWT y definición de relaciones entre objetos para su posterior CRUD",
    ],
    badge: "Noviembre 2023-Febrero 2024",
    image: "NET CORE",
  },
  {
    title: "Vue.js",
    description: [
      "Desarrollo de un frontend con distintas rutas para hacer login, generar listados en base a peticiones del backend, listar con filtros y paginación, tratamiento para generar nuevos objetos y uso de cabeceras y JWT para solicitar los endpoints"
    ],
    badge: "Changelog",
    image: "VUE",
  },
  {
    title: "Base de datos relacionales",
    description: [
      "Uso y manejo de PostgreSQL y MySQL para almacenar y modificar objetos",
    ],
    badge: "Launch Week",
    image: "DATABASE LOGO",
  },
  {
    title: "JWT",
    description: [
      "Uso de JSON Web Token en frontend/backend para la gestión de autenticación y autorización de usuarios",
    ],
    badge: "Launch Week",
    image: "JWT LOGO",
  },
  {
    title: "DTO",
    description: [
      "Manejo de DTOs para creación de objetos parciales evitando y facilitando la creación de nuevos objetos más complejos",
    ],
    badge: "Launch Week",
    image: "DTO LOGO",
  },
];

export default TracingBeamDemo;
