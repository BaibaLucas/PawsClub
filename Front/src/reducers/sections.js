/* Actions */
import {
  GET_SECTIONS_SUCCESS,
  GET_ROSTER_SUCCESS,
  SELECT_SECTION,
  CHANGE_SECTIONS_FIELD,
  CREATE_SECTION_SUCCESS,
  DELETE_SECTION_SUCCESS,
  UPDATE_SECTION_SUCCESS,
} from '../store/action';

/* Initial State user infos */
const initialState = {
  sections: [],
  roster: [],
  section_id: '',
  section_name: '',
  section_title: '',
  section_sectionurl: '',
  section_desc: '',
  section_content: '',
  msg: '',
  success: false,
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
      };

    case SELECT_SECTION:
      return {
        ...oldState,
        section_id: action.id,
        section_name: action.name,
        section_title: action.title,
        section_sectionurl: action.sectionurl,
        section_desc: action.desc,
        section_content: action.content,
      };

    case CHANGE_SECTIONS_FIELD:
      return {
        ...oldState,
        [action.name]: action.value, 
      };

    case CREATE_SECTION_SUCCESS:
      return {
        ...oldState,
        section_id: action.data.data.id,
        section_name: action.data.data.name,
        section_title: action.data.data.title,
        section_sectionurl: action.data.data.sectionurl,
        section_desc: action.data.data.desc,
        section_content: action.data.data.content,
        msg: action.data.message,
        success: action.data.success,
      };

    case DELETE_SECTION_SUCCESS:
      return {
        ...oldState,
        msg: action.data.message,
        success: action.data.success,
      };

    case 'REFRESH_STATUS': 
      return {
        ...oldState,
        section_id: '',
        section_name: '',
        section_title: '',
        section_desc: '',
        section_content: '',
        msg: '',
        success: false,
      };
      
    case UPDATE_SECTION_SUCCESS:
      return {
        ...oldState,
        msg: action.data.message,
        success: action.data.success,
      }
    default:
      return {...oldState}
  }
};

export default Reducer;