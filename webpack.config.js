const path = require("path");

module.exports = {
  entry: {
    app: path.join(__dirname, "./src/index.js")
  },
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_module/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        ]
      }
    ]
  }
}
