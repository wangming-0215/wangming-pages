const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

module.exports = env => {
  process.env.BABEL_ENV = env;
  if (env === 'development') {
    return merge(commonConfig, devConfig);
  } else {
    return merge(commonConfig, prodConfig);
  }
};