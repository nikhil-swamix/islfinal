import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const SSRRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route {...rest} render={(props) => (
    authenticated === true
      ? <Component {...props} />
      : <Redirect to='/SSRlogin' />
  )} />
);

export default SSRRoute;
