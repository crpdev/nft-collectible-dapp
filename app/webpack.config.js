const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyWebpackPlugin([
    	{ from: "./src/index.html", to: "index.html" },
      { from: "./src/index.js", to: "index.js" },
      { from: "./src/create-nft.html", to: "create-nft.html" },
      { from: "./src/random-graph.js", to: "random-graph.js" },
      { from: "./src/svg-crowbar.js", to: "svg-crowbar.js" },
      { from: "./src/flask-loader.svg", to: "flask-loader.svg" },
      { from: "./src/bootstrap.min.css", to: "bootstrap.min.css" }]),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  devServer: { contentBase: path.join(__dirname, "dist"), compress: true },
};
