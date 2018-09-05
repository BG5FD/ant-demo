const merge = require('webpack-merge');

const { config: commonConfig } = require('../webpack.common');
// const productionConfig = require('./webpack.production');
const developmentConfig = require('./webpack.development');

module.exports = (env) => {
  // eslint-disable-next-line no-console
  // console.log('env:', env);
  let config = null;
  switch (env) {
    case 'production':
      config = productionConfig;
      break;
    default:
      config = developmentConfig;
  }

  // config = merge(commonConfig, config);
  // // eslint-disable-next-line no-console
  // console.log('config:', config);
  // return config;
  return merge(commonConfig, config);
};
