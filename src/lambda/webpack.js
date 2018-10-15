const path = require("path");
const webpackNetlifyLambdaPlugin = require("webpack-netlify-lambda-plugin");

module.exports = {
  target: "node",
  entry: webpackNetlifyLambdaPlugin.entry("./src/lambda/ts/handlers/", [
    "foo.ts",
    "bar.ts",
  ]),
  devtool: "source-map",
  mode: process.env.MODE,
  plugins: [],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: [ ".ts", ".js" ],
  },
  output: webpackNetlifyLambdaPlugin.output(path.resolve(__dirname, "../../.lambda")),
};
