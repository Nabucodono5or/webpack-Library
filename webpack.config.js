const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack-numbers.js",
    library: "webpackNumbers",
    libraryTarget: "umd",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  externals: {
    lodash: {
      commonjs: "lodash",
      commonjs2: "lodash",
      amd: "lodash",
      root: "_",
    },
  },
};
