import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  reactCompiler: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  images: {
    // IMPORTANT: unoptimized is REQUIRED for static export ('output: export')
    // This is necessary because Next.js Image Optimization requires a server
    // For static sites, manually optimize images before adding them to /public
    // Recommended: Use tools like Squoosh, ImageOptim, or Sharp CLI to optimize images
    // Formats: Convert to WebP/AVIF for better compression (already configured below)
    // If deploying to Vercel/Netlify with server support, you can set unoptimized: false
    unoptimized: true,
    formats: ['image/avif', 'image/webp'], // Preferred formats for better compression
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Responsive breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Icon/thumbnail sizes
    minimumCacheTTL: 60, // Cache time-to-live in seconds
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Content-Language',
            value: 'en-US'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:; frame-ancestors 'self'; base-uri 'self'; form-action 'self';"
          },
        ],
      },
      {
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
        ],
      },
    ];
  },
};

export default nextConfig;
