/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    deviceSizes: [768, 1024, 1280],
    // Enable to use the Next.js Image Optimization API route - /_next/image/{hash}/{width}/{height}/*
    onlineImageOptimization: true,
    // The path where image-config.json will be created, relative to process.cwd().
    path: './public',
    // https://github.com/vercel/next.js/pull/29539
    disableStaticImages: false,
  },
};

export default nextConfig;
