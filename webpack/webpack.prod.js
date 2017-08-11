const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PATHS = {
  app: path.resolve(__dirname, '..', 'src', 'index.js'),
  build: path.resolve(__dirname, '..', 'build')
};

const prodConfig = {
  entry: {
    app: PATHS.app
  },

  output: {
    path: PATHS.build,
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].js'
  },

  plugins: [
    new CleanWebpackPlugin([PATHS.build], { root: path.resolve(__dirname, '..') }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) =>
        resource &&
        resource.indexOf("node_modules") >= 0 &&
        resource.match(/\.js$/)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      uglifyOptions: {
        ie8: true,
        ecma: 8,
        output: {
          comments: false,
          beautify: false
        }
      }
    })
  ]
};

module.exports = prodConfig;