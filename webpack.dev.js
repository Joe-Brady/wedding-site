/* eslint @typescript-eslint/no-var-requires: "off" */
const { merge } = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.js");

module.exports = merge(webpackBaseConfig, {
  mode: "development",
  devServer: {
    contentBase: "./dist",
    publicPath: "/",
    historyApiFallback: true,
  },
});
