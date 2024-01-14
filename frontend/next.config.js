/** @type {import('next').NextConfig} */

const withNextIntl = require("next-intl/plugin")("./src/i18n.ts");

const nextConfig = {
  output: "export",
  images: {
    domains: [
      "fakeimg.pl",
      "picsum.photos",
      "uzbekistan.travel",
      "flowbite.s3.amazonaws.com",
      "images.unsplash.com",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = withNextIntl(nextConfig);
