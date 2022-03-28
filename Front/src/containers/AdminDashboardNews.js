/* Package imports */
import { connect } from 'react-redux';

/* Local imports */
import AdminDashboardNews from '../components/AdminDashboardNews';

// Action
import {
  changeNewsField,
  selectNews,
} from '../store/action';

/* Container */

// Component States (Admin)
const mapStateToProps = (state) => ({
  id: state.news.id,
  news: state.news.news,
  title: state.news.title,
  subtitle: state.news.subtitle,
  newsurl: state.news.newsurl,
  content: state.news.content,
  tag: state.news.tag,
  msg: state.news.msg,
  success: state.news.success,
});

// Component Func (Admin)
const mapDispatchToProps = (dispatch) => ({

  loadNews: () => {
    dispatch({type: 'GET_NEWS'});
  },

  handleChange: (value, name) => {
    dispatch(changeNewsField(value, name));
  },

  submitCreate: (formData) => {
    dispatch({type: 'CREATE_NEWS', formData});
  },

  submitUpdate: () => {
    dispatch({type: 'UPDATE_NEWS'});
  },

  submitDelete: () => {
    dispatch({type: 'DELETE_NEWS'});
  },

  selectedNews: (id, title, subtitle, content, newsurl) => {
    dispatch(selectNews(id, title, subtitle, content, newsurl));
  },

  refreshNewsStatus: () => {
    dispatch({type: 'REFRESH_NEWS_STATUS'});
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboardNews);