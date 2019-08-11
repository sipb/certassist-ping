const webpack = require("webpack");

module.exports = {
  target: "node",
  entry: "./certassist-ping.js",
  plugins: [new webpack.IgnorePlugin(/^canvas$/)],
};
