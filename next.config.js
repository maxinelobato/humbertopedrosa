/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  images: {
    domains: ['https://humbertopedrosa.vercel.app/'],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
