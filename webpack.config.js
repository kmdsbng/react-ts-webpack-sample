const path = require("path");

const MODE = "development";
const enabledSourceMap = MODE === "development";

module.exports = {
  mode: MODE,

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
      },

      {
        test: /\.css/,
        use: [
          // linkタグに出力する機能
          "style-loader",
          // CSSをバンドルするための機能
          {
            loader: "css-loader",
            options: {
              // オプションでCSS内のurl()メソッドの取り込みを禁止する
              url: false,
              sourceMap: enabledSourceMap
            }
          }
        ]
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



