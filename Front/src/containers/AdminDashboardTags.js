/* Package imports */
import { connect } from 'react-redux';

/* Local imports */
import AdminDashboardTags from '../components/AdminDashboardTags';

// Action
import {
  changeTagsField,
  selectTag,
} from '../store/action';

/* Container */

// Component States (AdminDashboardTags)
const mapStateToProps = (state) => ({
  tags: state.tags.tags,
  tagname: state.tags.tag_name,
  tag_id: state.tags.tag_id,
});

// Component Func (AdminDashboardTags)
const mapDispatchToProps = (dispatch) => ({

  loadTags: () => {
    dispatch({type: 'GET_TAGS'});
  },

  handleChange: (value, name) => {
    dispatch(changeTagsField(value, name));
  },

  submitTag: () => {
    dispatch({type: 'SUBMIT_TAG'});
  },

  submitDelete: () => {
    dispatch({type: 'DELETE_TAG'});
  },

  selectedTag: (id, name) => {
    dispatch(selectTag(id, name));
  },


});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboardTags);