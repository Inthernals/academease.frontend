/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  async rewrites() {
    return [
      {
        source: "/:slug(api|uploads)/:path*",
        // destination: "https://cors-proxy-infinityfree.vercel.app/:slug/:path*",
        destination: "https://academease-backend.vercel.app/:slug/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
