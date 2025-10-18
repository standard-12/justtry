// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
//   context: path.resolve(__dirname, '../frontend'),
  entry: "./../frontend/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "../frontend/dist"),
    clean: true,
  },
    devtool: "eval-source-map",
   devServer: {
    watchFiles: ["./src/template.html"],
  },
   plugins: [
    new HtmlWebpackPlugin({
      template: "./../frontend/template.html",
    }),
  ],
    module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
