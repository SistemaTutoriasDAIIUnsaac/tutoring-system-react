import React, { useReducer } from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import axios from "axios";
import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/token";

import {
  REGISTER_SUCCESSFUL,
  REGISTER_FAILED,
  GET_USER,
  LOGIN_SUCCESSFUL,
  LOGIN_FAILED,
  LOGOUT,
  SET_NAVBAR_LIST
} from "../types";

const AuthState = ({ children }) => {
  const loadNavBarList = (role) => {
    if (role === "student") {
      return [// Students
        {
          name: "Estudiante",
          icon: "nav-icon fas fa-wrench",
          _state: false,
          SubItems: [
            {
              name: "Novedades",
              icon: "fas fa-newspaper nav-icon",
              _state: false,
            },
            {
              name: "Informacion personal",
              icon: "fas fa-list nav-icon",
              _state: false,
            },
          ],
        } ];
    } else if (role === "tutor") {
      return [// Teachers
        {
          name: "Tutor",
          icon: "nav-icon fas fa-wrench",
          _state: false,
          SubItems: [
            {
              name: "Novedades",
              icon: "fas fa-newspaper nav-icon",
              _state: false,
            },
            {
              name: "Lista de Tutorados",
              icon: "fas fa-list nav-icon",
              _state: false,
            },
            {
              name: "Lista_de_citas",
              icon: "fas fa-list nav-icon",
              _state: false,
            },
          ],
        } ];
    } else if (role === "coordinator") {
      return [// Coordinator
        {
          name: "Coordinator",
          icon: "nav-icon fas fa-wrench",
          _state: false,
          SubItems: [
            {
              name: "Novedades",
              icon: "fas fa-newspaper nav-icon",
              _state: false,
            },
            {
              name: "Subir Datos",
              icon: "fas fa-list nav-icon",
              _state: false,
            },            
          ],
        } ];
    }

    return [];
  };

  const initialState = {
    token: localStorage.getItem("token"),
    authenticated: null,
    user: null,
    message: null,
    navbarList: [],
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Functions

  const registerUser = async (data) => {
    try {
      const res = await clienteAxios.post("/register", data);
      console.log(res.data);
      dispatch({
        type: REGISTER_SUCCESSFUL,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.response.data.message);
      dispatch({
        type: REGISTER_FAILED,
      });
    }
  };

  const loginUser = async (data) => {
    try {
      const res = await clienteAxios.post("/login", data);
      console.log(res.data);
      dispatch({
        type: LOGIN_SUCCESSFUL,
        payload: res.data,
      });
      // getting user data
      getUserData();
    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: LOGIN_FAILED,
      });
    }
  };

  const getUserData = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      // Set auth token header auth
      tokenAuth(token);
    }
    try {
      const res = await clienteAxios.get("/login");
      console.log(res.data);
      dispatch({
        type: GET_USER,
        payload: res.data,
      });
      dispatch({
        type: SET_NAVBAR_LIST,
        payload: loadNavBarList(res.data.role),
      })
    } catch (error) {
      console.log(error.res.data);
      dispatch({
        type: LOGIN_FAILED,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        // Values
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        navbarList: state.navbarList,
        // Functions
        registerUser,
        loginUser,
        getUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
