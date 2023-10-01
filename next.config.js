/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    GOOGLE_LOGIN_URL: process.env.GOOGLE_LOGIN_URL,
    XUMM_API_KEY: process.env.XUMM_API_KEY,
    XUMM_API_SECRET: process.env.XUMM_API_SECRET,
  },
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
        destination: "/myChallenges/onApplication",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
