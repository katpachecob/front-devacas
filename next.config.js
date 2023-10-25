/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://ec2-3-23-130-140.us-east-2.compute.amazonaws.com/:path*',
          },
        ]
      },
}

module.exports = nextConfig
