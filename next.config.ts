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
  // NOTE: headers() is NOT supported with static export ('output: export')
  // Security headers must be configured at the hosting provider level:
  // 
  // For cPanel/Apache - Add to .htaccess:
  // <IfModule mod_headers.c>
  //   Header set X-DNS-Prefetch-Control "on"
  //   Header set X-Frame-Options "SAMEORIGIN"
  //   Header set X-Content-Type-Options "nosniff"
  //   Header set Referrer-Policy "origin-when-cross-origin"
  //   Header set Permissions-Policy "camera=(), microphone=(), geolocation=()"
  //   Header set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
  //   Header set X-XSS-Protection "1; mode=block"
  //   Header set Content-Language "en-US"
  //   Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:; frame-ancestors 'self'; base-uri 'self'; form-action 'self';"
  // </IfModule>
  // <FilesMatch "\.(jpg|jpeg|png|gif|webp|avif|svg|ico|woff|woff2)$">
  //   Header set Cache-Control "public, max-age=31536000, immutable"
  // </FilesMatch>
  //
  // For Netlify - Add to netlify.toml:
  // [[headers]]
  //   for = "/*"
  //   [headers.values]
  //     X-DNS-Prefetch-Control = "on"
  //     X-Frame-Options = "SAMEORIGIN"
  //     X-Content-Type-Options = "nosniff"
  //     ... (other headers)
  //
  // For Cloudflare - Configure Headers in Transform Rules
  // For Vercel - They can be configured in vercel.json (if not using serverless)
};

export default nextConfig;
