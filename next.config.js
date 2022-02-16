// next.config.js
const intercept = require('intercept-stdout');

intercept((text) => (text.includes('Duplicate atom key') ? '' : text));

module.exports = {
  images: {
    domains: ["rb.gy"]
  },
  reactStrictMode: true,
}
