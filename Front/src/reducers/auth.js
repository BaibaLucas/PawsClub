/* Actions */
import {
  CHANGE_AUTH_FIELD,
  SIGNUP_SUCCESS,
  AUTH_FAILED,
  LOGIN_SUCCESS,
  EDIT_USER_SUCCESS,
  IMG_UPLOAD_SUCCESS,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_AUTH_FAILED,
} from '../store/action';

/* Initial State user infos */
const initialState = {
  id: '',
  username: '',
  email: '',
  password: '',
  profilurl: '',
  role_id: '',
  token: '',
  logged: false,
  error: false,
  success: false,
  msg: '',
};

/* Auth reducer */

const Reducer = (oldState = initialState, action = {}) => {

  switch (action.type) {

    case CHANGE_AUTH_FIELD:
      return {
        ...oldState,
        [action.name]: action.value,
        error: false,
        msg: '',
      };
    
    case SIGNUP_SUCCESS:
      return {
        ...oldState,
        id: action.id,
        username: action.username,
        email: action.email,
        password: '',
        profilurl: action.profilurl,
        role_id: action.role_id,
        logged: true,
      };
    
    case AUTH_FAILED:
      return {
        ...oldState,
        error: true,
        msg: action.message,
      };

    case LOGIN_SUCCESS:
      return {
        ...oldState,
        id: action.id,
        token: action.token,
        username: action.username,
        email: action.email,
        profilurl: action.profilurl,
        role_id: action.role_id,
        password: '',
        logged: true,
      };

    case EDIT_USER_SUCCESS:
      return {
        ...oldState,
        id: action.id,
        token: action.token,
        username: action.username,
        email: action.email,
        profilurl: action.profilurl,
        role_id: action.role_id,
        password: '',
        logged: true,
      };

      case IMG_UPLOAD_SUCCESS:
        return {
          ...oldState,
          id: action.id,
          username: action.username,
          email: action.email,
          profilurl: action.profilurl,
          role_id: action.role_id,
          password: '',
          isLogged: true,
          msg: action.message,
          success: true,
        };

      case 'CHANGE_STATUS': 
        return {
          ...oldState,
          msg: '',
          success: false,
        };
      
      case ADMIN_LOGIN_SUCCESS:
        return {
          ...oldState,
        id: action.id,
        token: action.token,
        username: action.username,
        email: action.email,
        profilurl: action.profilurl,
        role_id: action.role_id,
        password: '',
        logged: true,
        };

      case ADMIN_AUTH_FAILED:
        return {
          ...oldState,
          error: true,
          msg: action.message,
        };
        
    default:
      return {...oldState}
  }
};

export default Reducer;