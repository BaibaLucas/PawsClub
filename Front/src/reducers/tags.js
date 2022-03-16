/* Actions */
import {
  GET_TAGS_SUCCESS,
  CHANGE_TAGS_FIELD,
  SELECT_TAG,
} from '../store/action';

/* Initial State user infos */
const initialState = {
  tags: [],
  tag_id: '',
  tag_name: '',

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

    default:
      return {...oldState}
  }
};

export default Reducer;