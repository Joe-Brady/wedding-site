/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require("path");
const { merge } = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.js");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = merge(webpackBaseConfig, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "[name].[chunkhash].bundle.js",
  },
  plugins: [
    new CompressionPlugin({
      test: /\.js$/,
    }),
  ],
});
