/* Actions */
import {
  GET_NEWS_SUCCESS,
  CHANGE_NEWS_FIELD,
} from '../store/action';

/* Initial State user infos */
const initialState = {
  news: [],
  id: null,
  title: null,
  subtitle: null,
  content: null,

};

/* Api Paws News reducer */

const Reducer = (oldState = initialState, action = {}) => {

  switch (action.type) {
    case GET_NEWS_SUCCESS:
      return {
        ...oldState,
        news: action.data
      }

    case CHANGE_NEWS_FIELD:
      return {
        ...oldState,
        [action.name]: action.value,
      };
    default:
      return {...oldState}
  }
};

export default Reducer;