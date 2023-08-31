/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  scope: "/pages/mindmelo",
  // sw: 'service-worker.js',
  //...
});

module.exports = withPWA({
  output: "export",
  experimental: {
    appDir: true,
  },

  images: {
    unoptimized: true,
    domains: [
      "openweathermap.org",
      "https://cloudinary.com/",
      "https://res.cloudinary.com/",
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    });

    return config;
  },
});
