/* Package imports */
import { connect } from 'react-redux';

/* Local imports */
import AdminDashboardSections from '../components/AdminDashboardSections';

// Action
import {
  changeSectionsField,
  selectSection,
} from '../store/action';

/* Container */

// Component States (Admin)
const mapStateToProps = (state) => ({
  sections: state.sections.sections,
  section_id: state.sections.section_id,
  section_name: state.sections.section_name,
  section_title: state.sections.section_title,
  section_desc: state.sections.section_desc,
  section_content: state.sections.section_content,
});

// Component Func (Admin)
const mapDispatchToProps = (dispatch) => ({

  loadSections: () => {
    dispatch({type: 'GET_SECTIONS'});
  },

  handleChange: (value, name) => {
    dispatch(changeSectionsField(value, name));
  },

  submitCreate: () => {
    dispatch({type: 'CREATE_SECTION'});
  },

  submitUpdate: () => {
    dispatch({type: 'UPDATE_SECTION'});
  },

  submitDelete: () => {
    dispatch({type: 'DELETE_SECTION'});
  },

  selectedSection: (id, name, title, desc, content) => {
    dispatch(selectSection(id, name, title, desc, content));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboardSections);