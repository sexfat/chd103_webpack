const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    index: "./src/main.js",
  }, // 入口文件
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./js/bundle.js",
  }, // 出口文件
  module: {
    rules: [
      {
        // 格式
        test: /\.(sass|scss|css)$/,
        //順序是由下到上 sass > css > style
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "./dist",
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  }, // 處裡對應模組
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new MiniCssExtractPlugin({
      filename: "./css/[name].css",
    }),
    new HtmlWebpackPlugin({
      chunks: ["index"], //選擇注入資源 chunk
      inject: "body", //預設<body> js </body>  head or body
      template: "./src/index.html",
      //來源
      filename: "index.html",
      // 目的地
    }),
  ],
  //對應的插件
  devServer: {
    contentBase: "./dist",
    host: "localhost",
    port: 3030,
    // 指定首頁檔案
    index: "index.html",
    open: true,
  }, // 服務器配置
  mode: "production", // 開發模式配置 production development
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
    },
  }// for vue
};
