// next.config.js
module.exports = {
  output: 'export', // Za statički sajt
  images: {
    unoptimized: true, // Isključi optimizaciju slika
  },
  trailingSlash: true, // Dodaje / na kraju URL-ova
};
module.exports = {
  output: 'export',
  distDir: 'out',
}
module.exports = {
  experimental: {
    allowedDevOrigins: [
      "https://*.replit.dev",
      "https://*.replit.app",
      "http://localhost:3000"
    ]
  }
};
