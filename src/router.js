import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch } from 'dva/router';

// import { authenticated } from 'utils/auth';
import PrivateRoute from 'app/components/privateRoute/';
import IndexPage from './routes/index';
import LoginPage from './routes/login';
import NotFound from './routes/comm/404';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <PrivateRoute path="/" exact component={IndexPage} />
        <PrivateRoute path="*" exact component={NotFound} />
      </Switch>
    </Router>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object.isRequired,
};

export default RouterConfig;
