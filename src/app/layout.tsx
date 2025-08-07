import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Pepe Hurtado - Desarrollador Full Stack | Portfolio",
    template: "%s | Pepe Hurtado"
  },
  description: "Desarrollador Full Stack especializado en Spring Boot, Angular, React, Next.js y bases de datos. Portfolio con proyectos web modernos y aplicaciones responsivas.",
  keywords: [
    "desarrollador full stack",
    "programador web",
    "Spring Boot",
    "Angular",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "portfolio developer",
    "desarrollador Madrid",
    "frontend",
    "backend",
    "bases de datos"
  ],
  authors: [{ name: "Pepe Hurtado" }],
  creator: "Pepe Hurtado",
  publisher: "Pepe Hurtado",
  metadataBase: new URL('https://pepehurtado.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Pepe Hurtado - Desarrollador Full Stack",
    description: "Portfolio de Pepe Hurtado - Desarrollador Full Stack con experiencia en tecnologías modernas",
    url: 'https://pepehurtado.vercel.app',
    siteName: 'Pepe Hurtado Portfolio',
    images: [
      {
        url: '/images/imagenperfilpepe.webp',
        width: 1200,
        height: 630,
        alt: 'Pepe Hurtado - Desarrollador Full Stack',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pepe Hurtado - Desarrollador Full Stack',
    description: 'Portfolio de Pepe Hurtado - Desarrollador Full Stack',
    images: ['/images/imagenperfilpepe.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-de-verificacion-aqui', // Añade tu código de Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
        <head>
        <link rel="icon" href="/images/favico.webp" />
        <link rel="canonical" href="https://pepehurtado.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
