import {
REGISTER_SUCCESSFUL,
REGISTER_FAILED,
GET_USER,
LOGIN_SUCCESSFUL,
LOGIN_FAILED,
LOGOUT
} from '../types';

export default (state, action) => {
  switch (action.type) {

    case REGISTER_SUCCESSFUL:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        authenticate: true,
        message: null,
      }
    
    case REGISTER_FAILED:
      return {
        ...state,
        token: null,
        message: action.payload
      }
      
    default:
      return state;
  }
}

