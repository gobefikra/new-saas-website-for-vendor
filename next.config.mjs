/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo-**",
      },
    ],
  },
  // Tree-shake icon packages so route JS stays smaller / faster to parse
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons"],
  },
  // OneDrive/sync can corrupt filesystem webpack cache — use in-memory instead of disabling entirely
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = { type: "memory" };
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ["**/node_modules/**"],
      };
    }
    return config;
  },
};

export default nextConfig;
