const path = require('path');
const webpack = require('webpack');

const devConfig = {
  entry: {
    app: [
      'react-hot-loader/patch',
      path.resolve(__dirname, '..', 'src', 'index.js')
    ]
  },

  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: 'js/[name].js'
  },

  devtool: 'cheap-module-source-map',

  devServer: {
    host: process.env.HOST,
    port: process.env.PORT,
    historyApiFallback: true
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        "NODE_ENV": JSON.stringify('development')
      }
    })
  ]
};

module.exports = devConfig;