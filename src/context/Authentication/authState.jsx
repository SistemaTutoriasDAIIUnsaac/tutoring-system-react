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
  SET_NAVBAR_LIST,
  SELECT_NAV_ITEM,
  GET_CURRENT_URL,
  CHANGE_PASSWORD_SUCCESSFUL,
  SET_LAST_URL,
  CLEAR_MESSAGE,
} from "../types";

const AuthState = ({ children }) => {
  const loadNavBarList = (role) => {
    if (role === "student") {
      return [
        // Students
        {
          name: "Novedades",
          icon: "fas fa-newspaper nav-icon",
          _state: false,
        },
        {
          name: "Informacion Estudiante",
          icon: "fas fa-list nav-icon",
          _state: false,
        },
      ];
    } else if (role === "tutor") {
      return [
        // tutors
        {
          name: "Informacion Tutor",
          icon: "fas fa-list nav-icon",
          _state: false,
        },
        {
          name: "Novedades",
          icon: "fas fa-newspaper nav-icon",
          _state: false,
        },
        {
          name: "Lista de Tutorados",
          icon: "fas fa-list nav-icon",
          _state: false,
        }
      ];
    } else if (role === "coordinator") {
      return [
        // Coordinator
        {
          name: "Informacion Coordinador",
          icon: "fas fa-list nav-icon",
          _state: false,
        },
        {
          name: "Novedades",
          icon: "fas fa-newspaper nav-icon",
          _state: false,
        },
        {
          name: "Agregar Novedad",
          icon: "fas fa-list nav-icon",
          _state: false,
        },
        {
          name: "Subir Datos",
          icon: "fas fa-list nav-icon",
          _state: false,
        },
        {
          name: "Distribuir Estudiantes",
          icon: "fas fa-list nav-icon",
          _state: false,
        },
        {
          name: "Actualizar Coordinador",
          icon: "fas fa-list nav-icon", 
          _state: false,
        },
        {
          name: "Crear Programa de Tutoria",
          icon: "fas fa-list nav-icon",
          _state: false,
        },
        {
          name: "Asignar Director",
          icon: "fas fa-list nav-icon",
          _state: false,
        },
      ];
    } else if (role === "principal") {
      return [
        // Principal
        {
          name: "Novedades",
          icon: "fas fa-list nav-icon",
          _state: false,
        },
        {
          name: "Informacion director",
          icon: "fas fa-list nav-icon",
          _state: false,
        },
        {
          name: "Lista de tutores",
          icon: "fas fa-newspaper nav-icon",
          _state: false,
        },
        {
          name: "Lista de estudiantes",
          icon: "fas fa-list nav-icon",
          _state: false,
        }
      ];
    }
  };

  const initialState = {
    token: localStorage.getItem("token"),
    authenticated: null,
    user: null,
    message: null,
    navbarList: [],
    currentURL: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Functions

  const updateUser = async (data) => {
    try {
      const res = await clienteAxios.put("/update_credentials", data);
      console.log(res.data);
      dispatch({
        type: CHANGE_PASSWORD_SUCCESSFUL,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.response.data.message);
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
      console.log(error.response.data.message);
      dispatch({
        type: LOGIN_FAILED,
        payload: error.response.data.message,
      });
    }
  };

  const logOut = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  const getUserData = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      // Set auth token header auth
      tokenAuth(token);
    }
    try {
      const res = await clienteAxios.get("/authenticate_user");
      console.log(res.data);
      dispatch({
        type: GET_USER,
        payload: res.data,
      });
      dispatch({
        type: SET_NAVBAR_LIST,
        payload: loadNavBarList(res.data.role),
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_FAILED,
      });
    }
  };

  const selectNavItem = (name) => {
    if (state.navbarList.length > 0) {
      dispatch({
        type: SET_NAVBAR_LIST,
        payload: state.navbarList.map((item) => {
          if (item.name === name) {
            item._state = true;
          } else {
            item._state = false;
          }
        }),
      });
    }
  };

  const setLastURL = () => {
    var url = window.location.pathname;
    if (
      !(
        url.includes("/login")
        // url.includes("/Novedades")
      )
    ) {
      dispatch({
        type: SET_LAST_URL,
        payload: window.location.pathname,
      });
    }
  };

  const clearMessage = () => {
    dispatch({
      type: CLEAR_MESSAGE,
    });
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
        currentURL: state.currentURl,
        // Functions
        loginUser,
        getUserData,
        selectNavItem,
        setLastURL,
        logOut,
        clearMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
