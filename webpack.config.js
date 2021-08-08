const path = require("path");

module.exports = {
  mode: "development",

  entry: {
    'main': "./src/main.tsx",
    'form1': "./src/form1.tsx",
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  target: ["web", "es5"],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
  },
};



