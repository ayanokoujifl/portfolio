import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
    optimizePackageImports: ["lucide-react"],
  },
  async headers() {
    return [
      {
        source: "/media/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/icon.svg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: false,
      },
    ]
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve = config.resolve || {}
      config.resolve.alias = {
        ...config.resolve.alias,
        "../build/polyfills/polyfill-module": false,
        "next/dist/build/polyfills/polyfill-module": false,
      }
    }
    return config
  },
}

export default nextConfig

