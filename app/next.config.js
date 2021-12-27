const { merge } = require('webpack-merge')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  reactStrictMode: true,
  env: {
    API_NEXT: process.env.API_NEXT,
    API_ROOT: process.env.API_ROOT,
    BASE_URI: process.env.BASE_URI,
  },
}
