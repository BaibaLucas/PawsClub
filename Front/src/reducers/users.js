/* Actions */
import {
  GET_USERS_SUCCESS,
  CHANGE_USERS_FIELD,
  SELECT_USER,
  GET_STREAMERS_SUCCESS,
  EDIT_ROLE_SUCCESS,
} from '../store/action';

/* Initial State user infos */
const initialState = {
  users: [],
  role_id: '',
  user_id: '',
  user_username: '',
  streams: [],
  msg: '',
  success: false,
};

/* Api Paws Sections reducer */

const Reducer = (oldState = initialState, action = {}) => {

  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...oldState,
        users: action.data
      };

    case CHANGE_USERS_FIELD:
      return {
        ...oldState,
        [action.name]: action.value,
      };
    
    case SELECT_USER:
      return {
        ...oldState,
        user_id: action.id,
        user_username: action.username
      };

    case GET_STREAMERS_SUCCESS:
      return {
        ...oldState,
        streams: action.data
      };
    
    case EDIT_ROLE_SUCCESS:
      return {
        ...oldState,
        msg: action.data.message,
        success: action.data.success,
      };

    case 'REFRESH_USER_STATUS':
      return {
        ...oldState,
        msg: '',
        success: false,
      };

    default:
      return oldState
  }
};

export default Reducer;