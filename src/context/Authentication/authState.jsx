import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import axios from 'axios';
import baseURL from '../../cliente'

import {
  REGISTER_SUCCESSFUL,
  REGISTER_FAILED,
  GET_USER,
  LOGIN_SUCCESSFUL,
  LOGIN_FAILED,
  LOGOUT
  } from '../types';


const AuthState = ( { children } ) => {

  const initialState = {
    token: localStorage.getItem('token'),
    autenticate: null,
    user: null,
    message: null 
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState);


  // Functions

  const registerUser = async (data) => {
    try {
      const res = await axios.post(baseURL + '/users', data);
      console.log(res.data)
      dispatch({
        type: REGISTER_SUCCESSFUL,
        // payload: res.data.token
      });
    } catch (error) {
      console.log(error.response.data.message)
      dispatch({
        type: REGISTER_FAILED,
      })
    }
  }

  // const changePassword = async (data) => {
  //   try {
  //     const res = await axios.put(baseURL + '/change_password')
  //   } catch {

  //   }
  // }

  return (

    <AuthContext.Provider
      value={{
        // Values
        token: state.token,
        autenticate: state.autenticate,
        user: state.user,
        message: state.message,
        // Functions 
        registerUser,
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}

export default AuthState;