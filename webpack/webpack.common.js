const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = {
  resolve: {
    extensions: ['.js', '.json']
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Wangming',
      favicon: path.resolve(__dirname, '..', 'public', 'favicon.ico')
    })
  ]
};

module.exports = commonConfig;