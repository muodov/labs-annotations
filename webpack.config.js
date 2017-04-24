var ManifestPlugin = require('webpack-manifest-plugin');
var path = require('path');

module.exports = {
  entry: './client/app.js',
  output: {
    // filename: '[name].[chunkhash].js',
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new ManifestPlugin()
  ]
};
