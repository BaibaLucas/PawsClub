/* Package imports */
import { connect } from 'react-redux';

/* Local imports */
import Account from '../components/Account';
import { changeAuthField } from '../store/action';


// Action

/* Container */

// Component States (Account)
const mapStateToProps = (state) => ({
  logged: state.auth.logged,
  username: state.auth.username,
  email: state.auth.email,
  password: state.auth.password,
  avatar: state.auth.profilurl,
  profilurl: state.auth.profilurl,
  section_name: state.auth.section_name,
  section_id: state.auth.section_id,
  sections: state.sections.sections,
  success: state.auth.success,
  msg: state.auth.msg,
});

// Component Func (Account)
const mapDispatchToProps = (dispatch) => ({

  handleChange: (value, name) => {
    dispatch(changeAuthField(value, name));
  },

  handleSubmit: () => {
    dispatch({type: 'EDIT_USER'});
  },

  loadSectionsData: () => {
    dispatch({type: 'GET_SECTIONS'});
  },

  handleSubmitSection: () => {
    dispatch({type: 'EDIT_USER_SECTION'});
  },

  refreshStatus: () => {
    dispatch({type: 'CHANGE_STATUS'});
  },

  refreshUser: () => {
    dispatch({type: 'REFRESH_USER'});
  },

  disconnected: () => {
    dispatch({type: 'DISCONNECT'});
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Account);