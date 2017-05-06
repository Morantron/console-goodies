var path = require('path');

var entry = (
  process.env.DEMO === '1' ?
    './src/demo.js' :
    './src/index.js'
);

var filename = (
  process.env.DEMO === '1' ?
    'demo.js' :
    'index.js'
);

console.log('entry', entry);
console.log('filename', filename);

module.exports = {
  entry: entry,
  output: {
    filename: filename,
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
