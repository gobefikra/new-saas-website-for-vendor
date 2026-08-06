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
  // Next 16 enables Turbopack by default. Declaring an (empty) turbopack config is
  // what tells Next the webpack block below is deliberate legacy, not an oversight —
  // without it the build errors out rather than silently picking a bundler.
  turbopack: {},
  // Applies only under `next dev --webpack` / `next build --webpack`; Turbopack has
  // its own cache and does not read this.
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
