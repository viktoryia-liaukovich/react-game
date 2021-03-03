const path = require("path");
// const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: ["babel-polyfill", "./src/index.jsx"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8000,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: ["babel-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2|gif|mp3|wav|ico|cur|ani|mp4)$/,
        use: [
            'file-loader?name=assets/[name].[ext]',
        ],
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    // new CopyPlugin({
    //   patterns: [
    //     { from: "./src/assets/", to: "assets/" },
    //     { from: "./src/index.html", to: "" },
    //   ],
    // }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
};
