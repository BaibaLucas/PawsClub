/* Actions */
import {
  CHANGE_AUTH_FIELD,
  SIGNUP_SUCCESS,
  USER_CREATION_FAILED,
} from '../store/action';

/* Initial State user infos */
const initialState = {
  id: '',
  username: '',
  email: '',
  password: '',
  profilurl: '',
  logged: false,
  error: false,
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
        logged: true,
      };
    
    case USER_CREATION_FAILED:
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