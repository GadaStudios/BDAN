/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: true,
  experimental: { typedEnv: true },
  images: { qualities: [100] },
}

export default nextConfig
