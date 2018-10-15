const lambdaConfig = require("./src/lambda/webpack.js");
const clientConfig = require("./src/client/webpack.js");

module.exports = [
  lambdaConfig,
  clientConfig,
]
