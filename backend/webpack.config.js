// webpack.config.js
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./../frontend/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
   plugins: [
    new HtmlWebpackPlugin({
      template: "./../frontend/template.html",
    }),
  ],
};
