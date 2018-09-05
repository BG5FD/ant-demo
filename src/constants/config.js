export default {
  // localStorage中token的key
  TOKEN_KEY: 'token',
  // localStorage中login_user的key
  USER_KEY: 'user',
  // localStorage中login_user的到期时间
  USER_END_DATE: 'endDate',
  // localStorage中login_user的帐号剩余的天数
  USER_LEFT_DAYS: 'leftDays',
  // localStorage中login_user是否为弱密码
  USER_IS_COMPLEXITY: 'isComplexity',
  // localStorage中menus的key
  USER_MENUS_KEY: 'menus',
  // 显示通栏用户过期信息提示窗口的开关
  SHOW_OVERDUE_TIP: 'showOverdueTip',
  // 显示通栏用户过期信息提示按钮的开关
  SHOW_OVERDUE_BUTTON: 'showOverdueButton',
  // sessionStorage中的定义任务是否在操作中的标志的key
  OPERATE_KEY: 'isOperate',
  // 登录页面路径
  LOGIN_PATH: '/login',
  // 重置密码页面
  RESET_PASSWORD_PATH: '/resetpwd',
  // 公共路由路径
  COMM_PATH: '/comm',
  // 错误页面路径
  ERROR_PATH: '/error',
  // 修改密码页面路径
  SETTING_PATH: '/setting',
  // 设置用户信息页面路径
  SETTING_PROFILE_PATH: '/setting/profile',
  // 首页页面路径
  HOME_PATH: '/tasks/baseline',
  // 跳转路径参数名: /login?redirect_to=/tasks/baseline
  PARAM_KEY_REDIRECT: 'redirect_to',
  // 每页记录数量： Records count per page.
  COUNT_PER_PAGE: 20,
  // 对话框数据每页记录数量： Records count per page.
  COUNT_PER_DIALOG_PAGE: 5,
  // 通知信息的显示时间
  NOTIFICATION_TIME: 5000,
  // Virtual root menu id.
  ROOT_MENU_ID: 'init_menu_001',
  // 如果菜单的排序号为7个9（后台限定的最大值），那么不显示该菜单。
  HIDDEN_MENU_ORDER_NO: 9999999,
  // 强制撤回命令后缀
  FORCE_RECALL_SUFFIX: '_FORCE_RECALL',
  // 组织机构虚拟根节点ID
  ROOT_ORG_ID: '',
  // 集团组织机构ID
  GROUP_ORG_ID: 'f2925ed11e8a43029ab09d0b2833ba8a',
  // App框架是否显示的控制参数，QueryString中，如?noframe=true
  QS_KEY_APP_NO_FRAME: 'noframe',
  // 报表QS传参使用的Key：机构ID
  QS_KEY_RPT_ORG_ID: 'orgId',
  // 报表QS传参使用的Key：检查类型
  QS_KEY_RPT_CHECK_TYPE: 'checkType',
  // 报表QS传参使用的Key：开始日期
  QS_KEY_RPT_FROM_DATE: 'fromDate',
  // 报表QS传参使用的Key：结束日期
  QS_KEY_RPT_TO_DATE: 'toDate',
  // 报表QS传参使用的Key：(最近)检查时间
  QS_KEY_RPT_CHECK_TIME: 'checkTime',
  // 报表QS传参使用的Key：高风险
  QS_KEY_RPT_RISK_HIGH: 'high',
  // 报表QS传参使用的Key：中风险
  QS_KEY_RPT_RISK_MID: 'mid',
  // 报表QS传参使用的Key：低风险
  QS_KEY_RPT_RISK_LOW: 'low',
  // 报表三级页面使用的Key: 首部标题
  QS_KEY_RPT_3th_HEAD_TITLE: 'headTitle',
  // 报表三级页面使用的Key: 数量
  QS_KEY_RPT_3th_HEAD_COUNT: 'headCount',
  // 报表三级页面使用的Key： 请求路径
  QS_KEY_RPT_3th_PATH: 'queryPath',
  // 报表风险三级页面请求参数使用KEY: 风险等级
  QS_KEY_RPT_3th_RISK_LEVEL: 'leakLevel',
  // 报表风险三级页面请求参数使用KEY: 风险名称
  QS_KEY_RPT_3th_RISK_NAME: 'leakName',
  // 报表风险三级页面请求参数使用KEY: 风险类型
  QS_KEY_RPT_3th_RISK_TYPE: 'leakType',
  // 报表整改三级页面请求参数使用KEY: 整改类型
  QS_KEY_RPT_3th_CORRECT_TYPE: 'modifyType',
  // 个人设备风险详情跳转路径。
  PC_RPT_RISK_DETAIL_PATH: 'get-risk-detail',
  // 个人设备整改详情
  PC_RPT_CORRECTION_DETAIL_PATH: 'compare-modify',
  // 个人设备三级页面-合计-数据接口
  PC_RPT_3TH_DEV_ALL_PATH: 'sb-level-failure-distribution',
  // 个人设备三级页面-单个-数据接口
  PC_RPT_3TH_DEV_PER_PATH: 'sb-item-failure-distribution',
  // 个人设备整改详情-设备列表-总计-数据接口路径
  PC_RPT_3TH_MODIFY_DEV_PER_PATH: 'person-modify-list',
  // 2.0菜单MEMO标识
  MENU_V2: 'V2',
  // 组织机构下拉树在不加载情况下初始化配置值
  ORG_INIT: 'orgInit',
  // 后台查询时分页相关显示当前页面开始的值参数名
  FIRST_INDEX: 'firstIndex',
  // 后台查询时分页相关每页值参数名
  MAX_NUM: 'maxNum',
  // colors
  Colors: ['#CCFF99', '#00FFFF', '#B088FF', '#77DDFF', '#E8CCFF', '#FFFF77', '#33FFAA', '#CCEEFF', '#B94FFF', '#FFCCCC', '#ff9900', '#FFF0F5', '#4B0082', '#8B008B', '#8A2BE2', '#800000', '#A52A2A', '#DC143C', '#C71585', '#FF1493', '#FF69B4', '#FFB6C1', '#6A5ACD', '#7B68EE', '#EE82EE', '#D8BFD8', '#8B4513', '#FF7F50'],
};
