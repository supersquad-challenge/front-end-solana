/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home/onApplication",
        permanent: false,
      },
      {
        source: "/home",
        destination: "/home/onApplication",
        permanent: false,
      },
      {
        source: "/myChallenges",
        destination: "/myChallenges/ongoing",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
