import _ from 'lodash';
import { message } from 'antd';
import Welcome from 'app/routes/welcome';

//change函数用于实现当activeKey发生改变时所需要发生的state改变
const change = (allMenusF, topMenuActiveKeyF, openKeysF, menusF, activeKeyF, collapsedF) => {
  let topMenuCurKeyF = null;
  //找到对应key的左侧菜单
  allMenusF.map((menus) => {
    menus.menu.map((menu) => {
      menu.subs.map((item) => {
        if (item.key === activeKeyF) {
          menusF = menus.menu;
          topMenuCurKeyF = menus.key;
        }
        return;
      });
      return;
    });
    return;
  });
  //替换展开的子菜单key
  if (topMenuActiveKeyF !== topMenuCurKeyF && !collapsedF){
    openKeysF = menusF.map((menu) => {
      return menu.key
    });
  }

  topMenuActiveKeyF = topMenuCurKeyF;
  return [allMenusF, topMenuActiveKeyF, openKeysF, menusF];
};

export default {
  namespace: 'tabPanesModel',

  state: {
    allMenus: '',//前段所接受的有关menu的json数据
    menus: null, //当前菜单
    topMenuActiveKey: '',//顶部被选中的菜单key
    openKeys: [],//左侧展开的子菜单key
    activeKey: 'welcome',//左侧被选中的MenuItem的key
    panes:[{
      title: 'Welcome',
      key: 'welcome',
      content: <Welcome/>,
      closable: false,
    }],//pane列表
    collapsed: false,//该值为true时openKeys只能为空
  },

  subscriptions: {
    setup({ dispatch, history }) {
      //console.log('tabPanesModel 初始化~');
      // console.log(dispatch);
      //console.log(history);
    },
  },

  effects: {
    /**closeEffects(targetKey, { put }) {
      yield put({ type: 'remove', targetKey});
    }*/
  },

  reducers: {
    //最初获取数据，获得allMenus即可
    getData(state, {values}){
      state.allMenus = values.allMenus;
      state.menus = state.allMenus[0].menu;
      state.openKeys = state.menus.map((menu) => {
        return menu.key;
      });
      //默认显示欢迎页
      return {
        ...state
      };
    },
    //点击顶部菜单的逻辑操作
    changeMenus(state, {values}) {
      state.topMenuActiveKey = values.key;
      state.menus = _.find(state.allMenus, {key: state.topMenuActiveKey}).menu;
      if (!state.collapsed){
        state.openKeys = state.menus.map((menu) => {
          return menu.key
        });
      }
      return {
        ...state
      };
    },
    //点击左侧子菜单的操作
    subMenuClick(state, {values}){
      //对openKeys进行push或pop操作
      _.includes(state.openKeys, values.key) ? state.openKeys = state.openKeys.filter((key) => key !== values.key) : state.openKeys.push(values.key);
      return {
        ...state
      }
    },
    //由于子菜单点击事件重写，所以收缩功能也要手动实现
    toggleCollapsed(state, {values}){
      state.collapsed = !values.key;
      if (!state.collapsed){
        state.openKeys = state.menus.map((menu) => {
          return menu.key
        });
      }
      else{
        state.openKeys = [];
      }
      return{
        ...state
      };
    },

    save(state, action) {
      return {
        ...state,
        ...action.payload
      };
    },
    //pane发生变化的操作
    onChange(state, { activeKey }) {
      //改变当前选中的MenuItem进而改变state
      state.activeKey = activeKey;
      [state.allMenus, state.topMenuActiveKey, state.openKeys, state.menus] =
        change(state.allMenus, state.topMenuActiveKey, state.openKeys, state.menus, state.activeKey, state.collapsed);

      console.log('onchange'+state.activeKey);

      return {
        ...state,
      };
    },

    onEdit(state, { targetKey, action }) {
      //console.log(targetKey);
    },
    //pane移除操作
    remove(state, { targetKey }) {
      //console.log('will remove-----------------');
      const { panes, activeKey } = state;
      let lastIndex;
      panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });
      if (state.panes.length > 1)//welcome页不能删除
      {
        //改变当前选中的MenuItem进而改变state
        state.panes = panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
          state.activeKey = panes[lastIndex].key;
        }
        [state.allMenus, state.topMenuActiveKey, state.openKeys, state.menus] =
          change(state.allMenus, state.topMenuActiveKey, state.openKeys, state.menus, state.activeKey, state.collapsed);
      }

      return {
        ...state,
      };
    },
    //关闭左侧pane
    closeLeft(state, {targetKey}){
      const activePane = _.find(state.panes, {key: targetKey});
      const firstPane = state.panes.shift();//welcome页不能删除
      state.panes = _.drop(state.panes, _.indexOf(state.panes, activePane));
      state.panes.unshift(firstPane);
      if (!_.find(state.panes, {key: state.activeKey})) {
        state.activeKey = targetKey;
      }
      [state.allMenus, state.topMenuActiveKey, state.openKeys, state.menus] =
        change(state.allMenus, state.topMenuActiveKey, state.openKeys, state.menus, state.activeKey, state.collapsed);

      return {
        ...state,
      };
    },
    //关闭右侧pane
    closeRight(state, {targetKey}){
      const activePane = _.find(state.panes, {key: targetKey});
      state.panes = _.dropRight(state.panes, state.panes.length - _.indexOf(state.panes, activePane) - 1);
      if (!_.find(state.panes, {key: state.activeKey})) {
        state.activeKey = targetKey;
      }
      [state.allMenus, state.topMenuActiveKey, state.openKeys, state.menus] =
        change(state.allMenus, state.topMenuActiveKey, state.openKeys, state.menus, state.activeKey, state.collapsed);
      console.log(state.activeKey);
      return {
        ...state,
      };
    },
    //关闭其他pane
    closeOthers(state, {targetKey}){
      const activePane = _.find(state.panes, {key: targetKey});
      const firstPane = state.panes.shift();//welcome页不能删除
      state.panes = state.panes.filter(pane => pane === activePane);
      state.panes.unshift(firstPane);
      state.activeKey = targetKey;
      [state.allMenus, state.topMenuActiveKey, state.openKeys, state.menus] =
        change(state.allMenus, state.topMenuActiveKey, state.openKeys, state.menus, state.activeKey, state.collapsed);

      return {
        ...state,
      };
    },
    //增加pane操作
    addPane(state, { tabInfo }) {
      // 根据key判断pane是否被打开
      const isExist = _.find(state.panes, {key: tabInfo.key});
      if (state.panes.length < 10 || state.panes.length >= 10 && isExist){//默认标签页最多10个
        if (!isExist) {//不在state中
          state.panes.push(tabInfo);
        }
        state.activeKey = tabInfo.key;
        //对于个人信息和修改密码两个pane 特殊处理
        if (tabInfo.key == ("profile" || "changePwd")){
          state.topMenuActiveKey = null;
        }
        else{
          [state.allMenus, state.topMenuActiveKey, state.openKeys, state.menus] =
            change(state.allMenus, state.topMenuActiveKey, state.openKeys, state.menus, state.activeKey, state.collapsed);
        }
      }
      else{
        message.error("标签页不得超过10个！");
      }
      //console.log(state.topMenuActiveKey);
      return {
        ...state
      };
    }
  },
}
