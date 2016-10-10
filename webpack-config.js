const path = require('path')

const PATHS = {
  entry: path.join(__dirname, '/client/index.js'),
  output: path.join(__dirname, '/public')
}

module.exports = {
  entry: PATHS.entry,
  output: {
    path: PATHS.output,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: PATHS.output,
    inline: true
  },
  module: {
    loaders: [
      {
        // tell webpack to apply babel to all our .js files
        test: /\.js$/,
        // node modules should already be in browser compliant code
        // so tell webpack not to transform these and speed things up
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  node: {
    fs: 'empty'
  }
}
