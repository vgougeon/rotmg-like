const path = require("path");

module.exports = {
watch: true,
mode: 'development',
entry: ["./src/app.js"],
output: {
path: path.resolve(__dirname, "./dist"),
filename: "bundle.js"
},
devtool: "sourcemap"
};
