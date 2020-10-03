import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from './../context/auth/authContext';

const AdminRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading, user } = authContext;
  let role = user ? user.role : '';

  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated && !loading && role != 'admin' ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default AdminRoute;
