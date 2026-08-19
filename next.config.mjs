/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export -> deploy to Cloudflare Pages / Vercel / any static host
  output: "export",
  // Static hosts can't optimize images on the fly
  images: { unoptimized: true },
  // Clean URLs (no trailing .html) for nicer long-tail URLs
  trailingSlash: false,
};

export default nextConfig;
