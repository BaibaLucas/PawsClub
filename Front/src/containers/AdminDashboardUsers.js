/* Package imports */
import { connect } from 'react-redux';

/* Local imports */
import AdminDashboardUsers from '../components/AdminDashboardUsers';

// Action
import {
  changeUsersField,
  selectUser,
} from '../store/action';

/* Container */

// Component States (Admin)
const mapStateToProps = (state) => ({
  users: state.users.users,
  role_id: state.users.role_id,
  user_id: state.users.user_id,
  username: state.users.user_username,
  success: state.users.success,
  msg: state.users.msg,
});

// Component Func (Admin)
const mapDispatchToProps = (dispatch) => ({

  loadUsers: () => {
    dispatch({type: 'GET_USERS'});
  },

  handleChange: (value, name) => {
    dispatch(changeUsersField(value, name));
  },

  submitRole: () => {
    dispatch({type: 'SUBMIT_ROLE'});
  },

  submitDelete: () => {
    dispatch({type: 'DELETE_USER'});
  },

  selectedUser: (id, username) => {
    dispatch(selectUser(id, username));
  },

  refreshUserStatus: () => {
    dispatch({type: 'REFRESH_USER_STATUS'});
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboardUsers);