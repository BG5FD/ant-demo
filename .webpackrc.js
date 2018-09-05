import config from 'config';

const path = require('path');

const graphqlServer = config.get('servers.graphql');
const webSocketServer = config.get('servers.notification');
const logServer = config.get('servers.logging');
const reportServer = config.get('servers.reporting');
const pcServer = config.get('servers.pc');
const assetServer = config.get('servers.asset');
const commonServer = config.get('servers.tasking');
const adminServer = config.get('servers.admin');

const APP_PORT = process.env.NODE_ENV === 'development' ? 3000 : 80;
const APP_PORT_HTTPS = process.env.NODE_ENV === 'development' ? 8443 : 443;
const WEB_ROOT = process.env.NODE_ENV === 'development' ? './src/public' : './dist';
const GRAPHQL_SERVER = `http://${graphqlServer.host}:${graphqlServer.port}`;
const APP_WS_SERVER = `http://${webSocketServer.host}:${webSocketServer.port}`;
const LOG_SERVER = `http://${logServer.host}:${logServer.port}`;
const REPORTING_SERVER = `http://${reportServer.host}:${reportServer.port}`;
const PC_SERVER = `http://${pcServer.host}:${pcServer.port}`;
const ASSET_SERVER = `http://${assetServer.host}:${assetServer.port}${assetServer.entrance}`;
const COMMON_SERVER = `http://${commonServer.host}:${commonServer.port}${commonServer.entrance}/${commonServer.apiVersion}`;
const TASKING_SERVER = `http://${commonServer.host}:${commonServer.port}${commonServer.entrance}`;
const ADMIN_SERVER = `http://${adminServer.host}:${adminServer.port}${adminServer.entrance}`;

export default {
  extraBabelPlugins: [
    // "transform-runtime",
    [
      "import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: "css"
      },
    ],
    [
      "module-resolver", {
        // root: __dirname,
        alias: {
          "app": path.resolve(__dirname, './src'),
          "utils": path.resolve(__dirname, './src/utils')
        },
        "extensions": ['.js', '.jsx', '.css', '.less']
      }
    ],
    // "root-import"
    // [
    //   "transform-runtime", {
    //     regenerator: true,
    //     polyfill: true,
    //     helpers: true,
    //   }
    // ]
  ],
  env: {
    development: {
      extraBabelPlugins: [
        "dva-hmr",
      ],
      extraBabelPresets: [
        // "@babel/preset-flow",
      ]
    },
    production: {
      plugins: [

      ]
    }
  },
  proxy: {
    '/tasking': {
      'target': `${COMMON_SERVER}`,
      changeOrigin: true,
      pathRewrite: { "^/tasking": "" }
    },
    '/api': {
      'target': `${TASKING_SERVER}`,
      changeOrigin: true,
      pathRewrite: { "^/api": "" }
    }
  }
}
