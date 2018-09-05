import React from 'react';
import { Route, withRouter } from 'dva/router';
import PropTypes from 'prop-types';
import { logout } from 'utils/auth';
// 私有路由，只有登录的用户才能访问
class PrivateRoute extends React.Component {
  componentWillMount() {
    // console.log(!!getLocalStorage('token'));
    // const isAuthenticated = !!getCookie('token');
    const isAuthenticated = true;

    // const isAuthenticated = false;
    if (!isAuthenticated) {
      const { history } = this.props;
      setTimeout(() => {
        logout();
        history.replace('/login');
      }, 1000);
    }
  }

  render() {
    const {
      component: Component, path = '/',
      exact,
      strict,
    } = this.props;
    // const { isAuthenticated } = this.state;
    const isAuthenticated = true;
    return isAuthenticated ? (
      <Route
        path={path}
        exact={exact}
        strict={strict}
        render={props => (<Component {...props} />)}
      />
    ) : ('请重新登录');
  }
}

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  strict: PropTypes.bool,
  component: PropTypes.func.isRequired,
};

PrivateRoute.defaultProps = {
  exact: false,
  strict: false,
};

export default withRouter(PrivateRoute);
