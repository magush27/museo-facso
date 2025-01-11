/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/museo-facso",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['localhost'], // Add any other domains you might use for images
  },
}

module.exports = nextConfig