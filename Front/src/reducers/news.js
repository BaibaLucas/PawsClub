/* Actions */
import {
  GET_NEWS_SUCCESS,
  CHANGE_NEWS_FIELD,
  NEWS_CONTENT_SUCCESS,
  IMG_NEWS_UPLOAD_SUCCESS,
  SELECT_NEWS,
} from '../store/action';

/* Initial State user infos */
const initialState = {
  news: [],
  id: '',
  title: '',
  subtitle: '',
  content: '',
  tag: '',
  next: false,
  msg: '',
  success: false,

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

    case NEWS_CONTENT_SUCCESS:
      return {
        ...oldState,
        id: action.data.data.id,
        title: action.data.data.title,
        subtitle: action.data.data.subtitle,
        content: action.data.data.content,
        next: true,
      }

    case IMG_NEWS_UPLOAD_SUCCESS:
      return {
        ...oldState,
        id: action.id,
        title: action.title,
        subtitle: action.subtitle,
        content: action.content,
        newsurl: action.newsurl,
        msg: action.message,
        success: true,
      }

    case 'CHANGE_STATUS': {
      return {
        ...oldState,
        msg: '',
        success: false,
        next: false,
      }
    }

    case SELECT_NEWS:
      return {
        ...oldState,
        id: action.id,
        title: action.title,
        subtitle: action.subtitle,
        content: action.content,
        tag: action.tag,
      };
      
    default:
      return {...oldState}
  }
};

export default Reducer;