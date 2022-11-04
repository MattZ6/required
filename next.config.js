/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'en-US',
  },

  images: {
    domains: ['avatars.githubusercontent.com'],
  },

  poweredByHeader: false,
}

module.exports = nextConfig
