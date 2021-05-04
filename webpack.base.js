/* eslint @typescript-eslint/no-var-requires: "off" */
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  target: "web",
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.(woff2|woff)$/,
        use: {
          loader: "file-loader",
        },
      },
    ],
  },
  output: {
    publicPath: "/",
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new webpack.NamedChunksPlugin(),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
};
