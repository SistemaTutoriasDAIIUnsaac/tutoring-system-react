import {
REGISTER_SUCCESSFUL,
REGISTER_FAILED,
GET_USER,
LOGIN_SUCCESSFUL,
LOGIN_FAILED,
LOGOUT,
SET_NAVBAR_LIST,
SELECT_NAV_ITEM,
SET_LAST_URL,
CHANGE_PASSWORD_SUCCESSFUL,
CLEAR_MESSAGE,
} from '../types';

export default (state, action) => {
  switch (action.type) {

    case CHANGE_PASSWORD_SUCCESSFUL:
    case LOGIN_SUCCESSFUL:
    case REGISTER_SUCCESSFUL:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        token: action.payload.token,
        authenticated: true,
        message: null,
      }
    case LOGOUT:
    case LOGIN_FAILED:
    case REGISTER_FAILED:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        authenticated: null,
        user: null,
        navbarList: [],
        currentURL: null,
        message: action.payload
      }
    case GET_USER:
      return {
        ...state,
        authenticated: true,
        user: action.payload,    
        }
    case SET_NAVBAR_LIST:
      return {
        ...state,
        navbarList: action.payload
      }
    case SET_LAST_URL:      
      localStorage.setItem('lastURL', action.payload)
      return {
        ...state,
        currentURL: action.payload
      }
    case CLEAR_MESSAGE:
      return {
        ...state,
        message: null
      }

    default:
      return state;
  }
}

