/* Actions */
import {
  GET_NEWS_SUCCESS,
  CHANGE_NEWS_FIELD,
  NEWS_CONTENT_SUCCESS,
  IMG_NEWS_UPLOAD_SUCCESS,
  SELECT_NEWS,
  DELETE_NEWS_SUCCESS,
  UPDATE_NEWS_SUCCESS,
  NEWS_DETAILS_SUCCESS
} from '../store/action';

/* Initial State user infos */
const initialState = {
  news: [],
  currentNews: [],
  id: '',
  title: '',
  subtitle: '',
  content: '',
  newsurl: '',
  tag: '',
  news_sectionId:'',
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
        msg: action.data.message,
        success: action.data.success,
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
        newsurl: action.newsurl,
        content: action.content,
        tag: action.tag,
      };

    case DELETE_NEWS_SUCCESS:
      return {
        ...oldState,
        msg: action.data.message,
        success: action.data.success,
      };

    case 'REFRESH_NEWS_STATUS': {
      return {
        ...oldState,
        msg: '',
        success: false,
      }
    }

    case UPDATE_NEWS_SUCCESS:
      return {
        ...oldState,
        msg: action.data.message,
        success: action.data.success,
      };

    case NEWS_DETAILS_SUCCESS:
      return {
        ...oldState,
        currentNews: action.data.data
      }

      
    default:
      return oldState
  }
};

export default Reducer;