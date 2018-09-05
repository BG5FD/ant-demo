import Baseline from '../../tasks/baseline/list/index';
const menus = [{
  title: '任务管理',
  key: 'tasks',
  subs: [{
    title: '基线核查',
    tabTitle: '基线核查',
    key: 'baseline',
    target: <Baseline />,
  }, {
    title: '漏洞扫描',
    tabTitle: '漏洞扫描',
    key: 'vul',
    target: 'vul',
  }, {
    title: '离线核查',
    tabTitle: '离线核查',
    key: 'offline',
    target: 'offline',
  }, {
    title: '弱口令扫描',
    tabTitle: '弱口令扫描',
    key: 'weakpwd',
    target: 'weakpwd',
  }, {
    title: '网站漏扫',
    tabTitle: '网站漏扫',
    key: 'web',
    target: 'web',
  }, {
    title: '年度专项检查',
    tabTitle: '年度专项检查',
    key: 'eight',
    target: 'eight',
  }, {
    title: '资产探测',
    tabTitle: '资产探测',
    key: 'nmap',
    target: 'nmap',
  }]
}, {
  title: '报表管理',
  key: 'reports',
  subs: [{
    title: '业务报表',
    tabTitle: '业务报表',
    key: 'business',
    target: 'business',
  }, {
    title: '定制化报表',
    tabTitle: '定制化报表',
    key: 'customize',
    target: 'customize',
  }, {
    title: '个人设备报表',
    tabTitle: '个人设备报表',
    key: 'customPc',
    target: 'customPc',
  }, {
    title: '原2.0业务报表(开发用)',
    tabTitle: '原2.0业务报表(开发用)',
    key: 'business2.0',
    target: 'business2.0',
  }]
}];

const menus1 = [{
  title: '任务管理1',
  key: 'tasks1',
  subs: [{
    title: '基线核查1',
    tabTitle: '基线核查1',
    key: 'baseline1',
    target: <Baseline />,
  }, {
    title: '漏洞扫描1',
    tabTitle: '漏洞扫描1',
    key: 'vul1',
    target: 'vul',
  }, {
    title: '离线核查1',
    tabTitle: '离线核查1',
    key: 'offline1',
    target: 'offline',
  }, {
    title: '弱口令扫描1',
    tabTitle: '弱口令扫描1',
    key: 'weakpwd1',
    target: 'weakpwd',
  }, {
    title: '网站漏扫1',
    tabTitle: '网站漏扫1',
    key: 'web1',
    target: 'web',
  }, {
    title: '年度专项检查1',
    tabTitle: '年度专项检查1',
    key: 'eight1',
    target: 'eight',
  }]
}, {
  title: '报表管理1',
  key: 'reports1',
  subs: [{
    title: '业务报表1',
    tabTitle: '业务报表1',
    key: 'business1',
    target: 'business',
  }, {
    title: '定制化报表1',
    tabTitle: '定制化报表1',
    key: 'customize1',
    target: 'customize',
  }, {
    title: '个人设备报表1',
    tabTitle: '个人设备报表1',
    key: 'customPc1',
    target: 'customPc',
  }]
}];

const menus2 = [{
  title: '任务管理2',
  key: 'tasks2',
  subs: [{
    title: '基线核查2',
    tabTitle: '基线核查2',
    key: 'baseline2',
    target: <Baseline />,
  }, {
    title: '漏洞扫描2',
    tabTitle: '漏洞扫描2',
    key: 'vul2',
    target: 'vul',
  }, {
    title: '离线核查2',
    tabTitle: '离线核查2',
    key: 'offline2',
    target: 'offline',
  }, {
    title: '弱口令扫描2',
    tabTitle: '弱口令扫描2',
    key: 'weakpwd2',
    target: 'weakpwd',
  }, ]
}, {
  title: '报表管理2',
  key: 'reports2',
  subs: [{
    title: '业务报表2',
    tabTitle: '业务报表2',
    key: 'business2',
    target: 'business',
  }, {
    title: '定制化报表2',
    tabTitle: '定制化报表2',
    key: 'customize2',
    target: 'customize',
  }]
}];

const allMenus = [
  {
    key: '1',
    menu: menus,
  },
  {
    key: '2',
    menu: menus1,
  },
  {
    key: '3',
    menu: menus2,
  }
];
export default allMenus;
