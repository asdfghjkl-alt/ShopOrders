import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RestrictedRoute = ({ component: Component, ...rest }) => {
  const localData = JSON.parse(localStorage.getItem('userData'));

  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        localData.admin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default RestrictedRoute;
