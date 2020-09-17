const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  entry: "./js/scripts.js",
  devServer: {
    publicPath: "/assets/"
  },
  output: {
    filename: "build.js",
    path: __dirname + "/build"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "assets"
        }
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: ["file-loader"]
      },
    ]
  }
};
