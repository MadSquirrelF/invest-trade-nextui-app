const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'], // Добавьте 'localhost' в массив
  },
};
 
module.exports = withNextIntl(nextConfig);