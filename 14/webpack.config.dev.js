var HtmlWebpackPlugin = require("html-webpack-plugin");
var { CleanWebpackPlugin } = require("clean-webpack-plugin");

var path = require("path");
module.exports = {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  entry: {
    main: "./src/index.js",
    list: "./src/list.js"
  },
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "./dist"),
    filename: "[name]-bundle.js"
  },
  devServer: {
    contentBase: "./dist",
    open: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
      chunks: ["main"]
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "list.html",
      chunks: ["list"]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
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
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
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
