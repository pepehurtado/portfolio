/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['images.unsplash.com', 'aceternity.com', 'unavatar.io', 'private-user-images.githubusercontent.com'],
    },
    // Optimizaciones para SEO
    compress: true,
    poweredByHeader: false,
    generateEtags: true,
    // Headers para SEO y seguridad
    async headers() {
      return [
        {
          source: '/sitemap-pepe.xml',
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
  