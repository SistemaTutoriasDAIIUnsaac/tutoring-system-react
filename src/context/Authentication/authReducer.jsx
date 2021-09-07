import {
REGISTER_SUCCESSFUL,
REGISTER_FAILED,
GET_USER,
LOGIN_SUCCESSFUL,
LOGIN_FAILED,
LOGOUT,
SET_NAVBAR_LIST
} from '../types';

export default (state, action) => {
  switch (action.type) {

    case LOGIN_SUCCESSFUL:
    case REGISTER_SUCCESSFUL:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        authenticated: true,
        message: null,
      }
    case LOGIN_FAILED:
    case REGISTER_FAILED:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        message: action.payload
      }
    case GET_USER:
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload.username,
          id: action.payload.id,
          role: action.payload.role,
        },
        message: action.payload.message
        }
    case SET_NAVBAR_LIST:
      return {
        ...state,
        navbarList: action.payload
      }
    default:
      return state;
  }
}

