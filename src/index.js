import 'umi-plugin-polyfill/lib/global';
import dva from 'dva';
import './index.css';
import './theme/index.less';
// 1. Initialize
const app = dva({
  initialState: {
    productsModel: [{
      name: 'dvas',
      id: 1,
    }, {
      name: 'antd',
      id: 2,
    }],
  },
});

// 2. Plugins
// app.use({});

// 3. Model
// TODO: 好神奇的model加载啊，注释了都不行，就是得删掉，，，
// app.model(require('./models/example').default);
// app.model(require('./models/products').default);
app.model(require('./models/tabPanes').default);
app.model(require('./models/user').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
