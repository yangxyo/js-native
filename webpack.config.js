const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    cards: "./src/cards/index.js",
    imgSwitch: "./src/img-switch/index.js",
    chatWindow: "./src/chat-window/index.js",
    carousel: "./src/carousel/index.js",
    svgPractice: "./src/svg-practice/index.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    open: "Google Chrome"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "卡片",
      filename: "./cards/index.html",
      chunks: ["cards"]
    }),
    new HtmlWebpackPlugin({
      title: "图片切换",
      filename: "./img-switch/index.html",
      chunks: ["imgSwitch"]
    }),
    new HtmlWebpackPlugin({
      title: "聊天窗口",
      filename: "./chat-window/index.html",
      chunks: ["chatWindow"]
    }),
    new HtmlWebpackPlugin({
      title: "轮播",
      filename: "./carousel/index.html",
      chunks: ["carousel"]
    }),
    new HtmlWebpackPlugin({
      title: "svg",
      filename: "./svg-practice/index.html",
      template: "",
      chunks: ["svgPractice"]
    })
  ],
  mode: "development",
  output: {
    filename: "js/[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource"
      }
    ]
  }
}
