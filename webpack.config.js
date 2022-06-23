const path = require("path")

module.exports = {
  entry: path.join(__dirname,'src/index'),
  output:  {
    filename: "bundle.js",
    path: path.join(__dirname,'dist')
  },
  mode: 'development',
  module:  {},
  plugins:  [],
  devServer: {

  }
}
