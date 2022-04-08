/* Package imports */
import { connect } from 'react-redux';

/* Local imports */
import CreateNews from '../components/CreateNews';

// Action
import { changeNewsField } from '../store/action';

/* Container */

// Component States (CreateNews)
const mapStateToProps = (state) => ({
  title: state.news.title,
  subtitle: state.news.subtitle,
  content: state.news.content,
  tag: state.news.tag,
  next: state.news.next,
  logged: state.auth.logged,
  msg: state.news.msg,
  success: state.news.success,
  
});

// Component Func (CreateNews)
const mapDispatchToProps = (dispatch) => ({

  handleChange: (value, name) => {
    dispatch(changeNewsField(value, name));
  },

  handleSubmit: () => {
    dispatch({ type: 'CREATE_NEWS'});
  },

  handleImgSubmit: (formData) => {
    dispatch({type: 'UPDATE_IMG_NEWS', formData});
  },

  handleSuccess: () => {
    dispatch({type: 'CHANGE_NEWS_STATUS' });
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(CreateNews);