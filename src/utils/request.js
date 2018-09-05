import _ from 'lodash';
import fetch from 'dva/fetch';
import qs from 'qs';
import { logout } from 'utils/auth';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response && response.status === 401) {
    logout();
  }
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

// TODO: 调接口的时候说是要加session,需要后期讨论
export const request = (url, options) => fetch(url, options)
  .then(checkStatus)
  .then(parseJSON)
  .then(data => data)
  .catch(err => ({ err }));

export const requestPostQuery = (params) => {
  if (!_.has(params, 'url')) {
    console.log('无请求参数');
    return false;
  }
  const { url, query } = params;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    credentials: 'include',
    mode: 'cors',
    body: qs.stringify(query),
  };
  return request(url, options);
};

export const requestGet = (params) => {
  if (!_.has(params, 'url')) {
    console.log('无请求参数');
    return false;
  }
  const { url, query } = params;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    credentials: 'include',
    mode: 'cors',
  };
  return request(`${url}?${qs.stringify(query)}`, options);
};
