/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['images.unsplash.com', 'aceternity.com', 'unavatar.io', 'private-user-images.githubusercontent.com'],
    },
    // Optimizaciones para SEO
    compress: true,
    poweredByHeader: false,
    generateEtags: true,
    // Configuración para sitemap y robots
    async rewrites() {
      return [
        {
          source: '/sitemap.xml',
          destination: '/api/sitemap',
        },
      ];
    },
    // Headers para SEO y seguridad
    async headers() {
      return [
        {
          source: '/sitemap.xml',
          headers: [
            {
              key: 'Content-Type',
              value: 'application/xml',
            },
            {
              key: 'Cache-Control',
              value: 'public, s-maxage=86400, stale-while-revalidate',
            },
          ],
        },
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'Referrer-Policy',
              value: 'strict-origin-when-cross-origin',
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  