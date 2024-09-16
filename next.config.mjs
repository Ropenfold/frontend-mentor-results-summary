/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/frontend-mentor-results-summary', 
  assetPrefix: '/frontend-mentor-results-summary/', 
  output: 'export',
  reactStrictMode: true, 
  images: {
    domains: ['frontend-mentor-results-summary.com'], 
  },
};

export default nextConfig;
