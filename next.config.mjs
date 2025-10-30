/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hotclube.s3.sa-east-1.amazonaws.com",
      },
    ],
  },
}

export default nextConfig
