import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Página no encontrada - 404',
  description: 'La página que buscas no existe. Vuelve al portfolio de Pepe Hurtado.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-4">Página no encontrada</h2>
        <p className="mb-8 text-gray-300">
          Lo siento, la página que buscas no existe.
        </p>
        <Link 
          href="/" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
