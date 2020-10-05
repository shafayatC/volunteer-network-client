import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
import { ManageContext } from '../../App';

const PrivateRoute=({ children, ...rest })=> {
    const [setEventSelect, user, setUser] = useContext(ManageContext); 

    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
export default PrivateRoute;