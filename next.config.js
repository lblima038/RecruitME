// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... outras configurações ...
  images: {
    // ESSENCIAL para carregar imagens de domínios externos como o unpkg.com
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unpkg.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;