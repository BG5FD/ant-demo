// import config from '../config';
// import { Cookies } from 'react-cookie';
import Cookies from 'js-cookie';
// import cookie from 'cookie';
const config = {
  domain: 'http://passport.corp.visiondk.com',
  redirectUrl: 'http://passport.corp.visiondk.com/login?redirect_url=',
  appName: 'ant_passport',
  appVision: '0.1',
  appAuthor: 'tkvern',
  email: 'verncake@gmail.com',
};
// Replace Status text
export function getUserStatus(status) {
  if (status === 1) {
    return { status: 'success', text: '正常' };
  }
  return { status: 'default', text: '禁用' };
}

export function getIsAdminStatus(status) {
  if (status === 1) {
    return { status: 'success', text: '是' };
  }
  return { status: 'default', text: '否' };
}

export const setCookie = ({ key, value, options }) => {
  // Cookies.set(key, value, {
  //   path: '/',
  // });
  // console.log(Cookies)
  // const val = cookie.serialize('token', 'value');
  // document.cookie = val;
  Cookies.set(key, value, {
    // path: '/',
    // expires: 0.001,
  });
};
// Operation Cookie
export function getCookie(name) {
  const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
  const arr = document.cookie.match(reg);
  if (arr) {
    return decodeURIComponent(arr[2]);
  }
  return null;
}

export function delCookie({ name, domain, path }) {
  Cookies.remove(name);
  // if (getCookie(name)) {
  //   document.cookie = `
  //     ${name}=;
  //     expires=Thu, 01-Jan-70 00:00:01 GMT;
  //     path=${path};
  //     domain=${domain}
  //   `;
  // }
}

// Operation LocalStorage
export function setLocalStorage(key, vaule) {
  return localStorage.setItem(key, JSON.stringify(vaule));
}

export function getLocalStorage(key) {
  const value = localStorage.getItem(key);
  return value;
}

// Auth
export function getAuthHeader(ssoToken) {
  return ({
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${ssoToken}`,
      'Content-Type': 'application/json',
    },
  });
}

// export function redirectLogin() {
//   localStorage.clear();
//   window.location.href = config.redirectUrl + window.location.origin;
// }
//
// export function authenticated() {
//   const ssoToken = getCookie('ssoToken');
//   if (!ssoToken) {
//     redirectLogin();
//   }
// }

export function logout() {
  delCookie({
    name: 'token',
  });
  localStorage.clear();
  // authenticated();
}
