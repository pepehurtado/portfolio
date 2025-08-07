import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Pepe Hurtado - Portfolio',
    short_name: 'Pepe Hurtado',
    description: 'Portfolio de Pepe Hurtado - Desarrollador Full Stack',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/images/favico.webp',
        sizes: 'any',
        type: 'image/webp',
      },
    ],
  }
}
