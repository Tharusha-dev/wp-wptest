import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'grannexe.co.uk'
      },
      {
        protocol: 'https',
        hostname: '*.grannexe.co.uk'
      },
      {
        protocol: 'https',
        hostname: 'wptest.tharusha.dev'
      }
    ]
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
