/** @type {import('next').NextConfig} */
const nextConfig = {
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/photo-1472099645785-5658abf4ff4e/**",
      },
    ],
  },
};

module.exports = nextConfig;
