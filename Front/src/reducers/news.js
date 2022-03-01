/* Actions */
import {
  GET_NEWS_SUCCESS,
} from '../store/action';

/* Initial State user infos */
const initialState = {
  news: [],
};

/* Api Paws News reducer */

const Reducer = (oldState = initialState, action = {}) => {

  switch (action.type) {
    case GET_NEWS_SUCCESS:
      return {
        ...oldState,
        news: action.data
      }
    default:
      return {...oldState}
  }
};

export default Reducer;