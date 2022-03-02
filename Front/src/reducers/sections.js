/* Actions */
import {
  GET_SECTIONS_SUCCESS,
  GET_ROSTER_SUCCESS,
} from '../store/action';

/* Initial State user infos */
const initialState = {
  sections: [],
  roster: [],
};

/* Api Paws Sections reducer */

const Reducer = (oldState = initialState, action = {}) => {

  switch (action.type) {
    case GET_SECTIONS_SUCCESS:
      return {
        ...oldState,
        sections: action.data
      };

    case GET_ROSTER_SUCCESS:
      return {
        ...oldState,
        roster: action.data
      }

    default:
      return {...oldState}
  }
};

export default Reducer;