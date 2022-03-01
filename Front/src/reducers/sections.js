/* Actions */
import {
  GET_SECTIONS_SUCCESS,
} from '../store/action';

/* Initial State user infos */
const initialState = {
  sections: [],
};

/* Api Paws Sections reducer */

const Reducer = (oldState = initialState, action = {}) => {

  switch (action.type) {
    case GET_SECTIONS_SUCCESS:
      return {
        ...oldState,
        sections: action.data
      }
    default:
      return {...oldState}
  }
};

export default Reducer;