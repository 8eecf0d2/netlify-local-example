const path = require("path");
const webpack = require("webpack");
const webWebpackPlugin = require("web-webpack-plugin").WebPlugin;

module.exports = {
  target: "web",
  entry: {
    bundle: "./src/client/ts/index.ts",
  },
  devtool: "source-map",
  mode: process.env.MODE,
  plugins: [
    new webWebpackPlugin({
        filename: 'index.html',
        template: './src/client/html/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: [ ".ts", ".js" ],
  },
  output: {
    path: path.resolve(__dirname, "../../.client"),
    filename: "[name].js",
  }
};