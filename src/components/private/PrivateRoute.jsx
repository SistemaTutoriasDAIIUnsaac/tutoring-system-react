import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/Authentication/authContext';


function PrivateRoute( { component: Component, ...props } ) {

  const authContext = useContext(AuthContext);
  const { authenticated, getUserData } = authContext;

  useEffect( () => {
    // getCurrentURL();
    getUserData();
    // eslint-disable-next-line
  },[])

  return (
    <Route { ...props } render={ props => !authenticated ? (
      <Redirect to='/login' />
    ) : (
      <Component { ...props } />
    )}/>
  )
}

export default PrivateRoute
