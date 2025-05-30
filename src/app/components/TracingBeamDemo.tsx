import React from "react";
import Image from "next/image";
import { TracingBeam } from "../components/ui/tracing-beam";
import { motion } from "framer-motion";
import MeteorsDemo from "../components/MeteorsDemo"; // Asegúrate de que la ruta es correcta

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6" >
      <div className="max-w-6xl mx-auto antialiased pt-4 relative">

      <h1 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-left">
          Desarrollador web AUNNA IT
        </h1>
        <h2 className="bg-gradient-to-r from-gray-700 via-gray-800 to-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4 shadow-lg mt-2 mb-8 ">
          Mayo 2024 - Actualidad
        </h2>

        <div className="flex flex-wrap -mx-2">
          {aunnaContent.map((item, index) => (
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

        <h1 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-left mt-8">
          Desarrollador web SmartWay Studio
        </h1>
        <h2 className="bg-gradient-to-r from-gray-700 via-gray-800 to-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4 shadow-lg mt-2 mb-8">
          Octubre 2023 - Febrero 2024
        </h2>
        <div className="flex flex-wrap -mx-2">
          {smartwayContent.map((item, index) => (
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

const smartwayContent = [
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
];

const aunnaContent = [
  {
    title: "Spring Boot",
    description: [
      "Desarrollo e integro APIs REST robustas y escalables con Spring Boot. Tengo experiencia en seguridad con JWT, gestión de entidades con JPA/Hibernate, integración con servicios externos de cualquier tipo, pruebas unitarias, envío de correos, configuración avanzada y despliegue en entornos productivos manteniendo un backend limpio, mantenible y seguro."
    ],
    badge: "Launch Week",
    image: "SPRINGBOOT LOGO",
  },
  {
    title: "Angular",
    description: [
     "Encargado de la maquetación creando componentes reutilizables, servicios para integración con APIs REST, gestión reactiva con RxJS, formularios avanzados, gráficos con librerías como ApexCharts o amCharts, y soporte multilenguaje con ngx-translate. Tengo conocimientos en UX/UI adquiridos mediante formación, incluyendo diseño de wireframes y experiencia de usuario. También mantengo librerías y dependencias para garantizar estabilidad y rendimiento en producción."   ],
    badge: "Launch Week",
    image: "ANGULAR LOGO",
  },
  {
    title: "OpenAPI",
    description: [
      "Documentación clara y actualizada de APIs, facilitando la comunicación entre frontend y backend. Tengo experiencia generando especificaciones automáticas con Springdoc en proyectos Spring Boot, personalizando los endpoints, y asegurando que la API esté bien documentada y accesible desde entornos de desarrollo y producción."
    ],
    badge: "Launch Week",
    image: "OPENAPI LOGO",
  },
  {
    title: "Base de datos relacionales",
    description: [
      "Experiencia en diseño y modelado con MariaDB/MySQL, manejo de entidades y relaciones con JPA/Hibernate, migraciones con scripts y mapeos, consultas personalizadas y optimización. También uso triggers y procedimientos almacenados para lógica avanzada."
    ],
    badge: "Launch Week",
    image: "BBDD LOGO",
  },
  {
    title: "Git",
    description: [
      "Control y gestión de ramas, flujos de trabajo y merges con buenas prácticas para mantener un código limpio y ordenado. Realizo integraciones continuas y despliegues controlados a entornos de preproducción y producción, asegurando estabilidad y trazabilidad en el desarrollo."
    ],
    badge: "Launch Week",
    image: "GIT LOGO",
  },
  {
    title: "GitLab",
    description: [
      "Manejo de repositorios, pipelines CI/CD y automatizar despliegues. Configuro integraciones y revisiones de código, facilitando flujos de trabajo ágiles y entregas continuas con control de calidad.",
    ],
    badge: "Launch Week",
    image: "GITLAB LOGO",
  },
  {
    title: "Python",
    description: [
      "Uso Python para crear scripts SQL que automatizan mapeos y realizo migraciones complejas de bases de datos, facilitando la transformación y mantenimiento eficiente de la información.",
    ],
    badge: "Launch Week",
    image: "PYTHON LOGO",
  },
  {
    title: "Seguridad",
    description: [
      "Tengo experiencia en integración y configuración de sistemas de autenticación y autorización usando OAuth para control de acceso seguro y tokens JWT, y LDAP para la gestión centralizada de usuarios y permisos en entornos empresariales."
    ],
    badge: "Launch Week",
    image: "SEGURIDAD LOGO",
  },
];

export default TracingBeamDemo;
