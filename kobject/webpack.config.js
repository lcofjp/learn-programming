const path = require('path')

module.exports = {
  mode: 'development',
  entry: './index.src.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'stage-0']
        }
      }
    ]
  }
}
