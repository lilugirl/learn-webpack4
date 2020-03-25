var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./dist",
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name]_[hash].[ext]",
            outputPath: "images/",
            limit: 10240
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              modules: true
            }
          },
          "sass-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.(eot|ttf|svg)$/,
        use: {
          loader: "file-loader"
        }
      }
    ]
  }
};
