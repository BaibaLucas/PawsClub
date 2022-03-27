/* Actions */
import {
  GET_TAGS_SUCCESS,
  CHANGE_TAGS_FIELD,
  SELECT_TAG,
  CREATE_TAG_SUCCESS,
  DELETE_TAG_SUCCESS
} from '../store/action';

/* Initial State user infos */
const initialState = {
  tags: [],
  tag_id: '',
  tag_name: '',
  msg: '',
  success: false,

};

/* Api Paws Tags reducer */

const Reducer = (oldState = initialState, action = {}) => {

  switch (action.type) {

    case GET_TAGS_SUCCESS:
      return {
        ...oldState,
        tags: action.data
      };

    case CHANGE_TAGS_FIELD:
      return {
        ...oldState,
        [action.name]: action.value,
      };

    case SELECT_TAG:
      return {
        ...oldState,
        tag_id: action.id,
        tag_name: action.name
      };
    
    case CREATE_TAG_SUCCESS:
      return {
        ...oldState,
        msg: action.data.message,
        success: action.data.success
      };

    case DELETE_TAG_SUCCESS:
      return {
        ...oldState,
        msg: action.data.message,
        success: action.data.success
      };

    case 'REFRESH_TAG_STATUS':
      return {
        ...oldState,
        msg: '',
        success: false,
      };

    default:
      return {...oldState}
  }
};

export default Reducer;