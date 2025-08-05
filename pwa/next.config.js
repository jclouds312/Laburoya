/** @type {import('next').NextConfig} */
const nextConfig = {
  // Usa el modo standalone para servidor embebido compatible con Capacitor
  output: 'standalone',

  // Ignorar errores de compilación solo si es necesario (mejor evitarlos en producción)
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Configuración de imágenes externas (seguimos permitiéndolas)
  images: {
    unoptimized: true, // Necesario si más adelante deseas exportar estáticamente
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.mercadopago.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
