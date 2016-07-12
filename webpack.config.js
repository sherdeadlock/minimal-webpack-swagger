var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: [
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 
          'babel', 
          'imports?define=>false' 
        ],
        exclude: /node_modules/,
        include: __dirname
      },
    ]
  }
}
