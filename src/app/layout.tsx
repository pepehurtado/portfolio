import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pepe Hurtado - Desarrollador full-stack",
  description: "Desarrollador full-stack con experiencia en Spring Boot, Angular, React, Tailwind CSS, MongoDB, PostgreSQL, MySQL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
        <link rel="icon" href="/images/favico.webp" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
