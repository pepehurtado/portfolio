/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['images.unsplash.com', 'aceternity.com', 'unavatar.io', 'private-user-images.githubusercontent.com'],
    },
    // Optimizaciones para SEO
    compress: true,
    poweredByHeader: false,
    generateEtags: true,
    // Configuración para sitemap
    trailingSlash: false,
    // Headers para SEO y seguridad
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'ALLOWALL',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'Referrer-Policy',
              value: 'strict-origin-when-cross-origin',
            },
            {
              key: 'X-Robots-Tag',
              value: 'index, follow',
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  