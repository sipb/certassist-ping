const webpack = require("webpack");

module.exports = {
  target: "node",
  entry: "./certassist-ping.js",
  optimization: { minimize: false },
  plugins: [new webpack.IgnorePlugin({ resourceRegExp: /^canvas$/ })],
};
