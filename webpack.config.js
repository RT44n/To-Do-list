const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    tasks: "./src/tasks.js",
    taskModifier: "./src/taskModifier.js",
    project: "./src/project.js",
    projectModifier: "./src/projectModifier.js",
  },
  devtool: "inline-source-map",

  devServer: {
    static: "./dist",
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "to-do-list",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,

        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
