const path = require("path");

export default {
  root: path.resolve(__dirname, "./src"),
  build: "./dist",
  server: { hot: true }
}