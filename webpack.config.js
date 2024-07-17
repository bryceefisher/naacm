const webpack = require("webpack");
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const copyPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: {
    // sets the entry point for each page to general.js
    home: "./src/assets/js/general.js",
    contact: "./src/assets/js/general.js",
    about: "./src/assets/js/general.js",
    vendors: "./src/assets/js/general.js",
    fashion: "./src/assets/js/general.js", // Add this line
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    assetModuleFilename: "images/[name][ext]",
    clean: true,
  },
  target: "web",
  devServer: {
    static: "./src",
    port: 3000,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(svg|eot|ttf|woff|woff2)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      chunks: ["home"],
      inject: "body",
      filename: "index.html",
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/contact.html"),
      chunks: ["contact"],
      inject: "body",
      filename: "contact.html",
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/about.html"),
      chunks: ["about"],
      inject: "body",
      filename: "about.html",
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/vendors.html"),
      chunks: ["vendors"],
      inject: "body",
      filename: "vendors.html",
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/fashion.html"),
      chunks: ["fashion"],
      inject: "body",
      filename: "fashion.html",
    }),
    new Dotenv(),
    new copyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets"),
          to: path.resolve(__dirname, "dist/assets"),
        },
      ],
    }),
  ],
};
