/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy:
      "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline';",
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
