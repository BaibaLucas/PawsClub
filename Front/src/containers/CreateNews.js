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
  
});

// Component Func (CreateNews)
const mapDispatchToProps = (dispatch) => ({

  handleChange: (value, name) => {
    dispatch(changeNewsField(value, name));
  },

  handleSubmit: (formData) => {
    dispatch({ type: 'CREATE_NEWS', formData});
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(CreateNews);