import moment from 'moment';
import {
  message,
} from 'antd';
import { routerRedux } from 'dva/router';
// import { Cookies } from 'react-cookie';

import {
  requestPostQuery,
  requestGet,
} from 'utils/request';
import { api } from 'utils/enums';
import { setCookie, logout } from 'utils/auth';
import config from 'app/constants/config';

export default {
  namespace: 'user',
  state: {

  },
  effects: {
    * login({
      payload,
    }, { put, call }) {
      const data = yield call(requestPostQuery, {
        url: api.login,
        query: payload,
      });
      if (!data.success) {
        message.error(data.error.message);
        return;
      }
      // message.loading('验证成功，登录中～');
      // TODO: 判断是否有from,有的话跳转到from的路由，暂时似乎只有一个index路由，不考虑别的跳转
      const {
        user, token, endDate, leftDays, isComplexity,
      } = data.data;
      const menus = yield call(requestGet, {
        url: api.getUserMenus,
        query: {
          userId: user.userId,
        },
      });
      if (!menus.success) {
        message.error('获取菜单失败');
        return;
      }
      setCookie({
        key: 'token',
        value: token,
      });
      localStorage[config.USER_MENUS_KEY] = JSON.stringify(menus.data);
      localStorage[config.USER_KEY] = JSON.stringify(user);
      localStorage[config.TOKEN_KEY] = token;
      localStorage[config.USER_KEY] = JSON.stringify(user);
      localStorage[config.USER_END_DATE] = moment(+endDate).format('YYYY年M月D日');
      localStorage[config.USER_LEFT_DAYS] = leftDays;
      localStorage[config.USER_IS_COMPLEXITY] = isComplexity;
      yield put(routerRedux.push('/'));
    },
    * logout({ payload }, { put }) {
      // localStorage.clear();
      logout();
      // TODO: 需要增加登出接口
      yield put(routerRedux.push('/login'));
    },
  },
  reducers: {
  },
};
