import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Usado só pela seção opcional "últimos vídeos" (thumbnails do YouTube).
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" },
    ],
  },
};

export default nextConfig;
