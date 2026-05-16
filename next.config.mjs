/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // You may want to drop this if using Next.js Image Optimization but starting safely
  },
};

export default nextConfig;
