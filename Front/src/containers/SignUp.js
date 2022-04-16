/* Package imports */
import { connect } from 'react-redux';

/* Local imports */
import Signup from '../components/SignUp';
// Action
import { changeAuthField } from '../store/action';

/* Container */

// Component States (Signup)
const mapStateToProps = (state) => ({
  username: state.auth.username,
  email: state.auth.email,
  password: state.auth.password,
  logged: state.auth.logged,
  error: state.auth.error,
  msg: state.auth.msg,
  pending: state.auth.pending,
});

// Component Func (Signup)
const mapDispatchToProps = (dispatch) => ({

  handleChange: (value, name) => {
    dispatch(changeAuthField(value, name));
  },

  handleSubmit: () => {
    dispatch({type: 'USER_SIGNUP'});
  },

  refresh: () => {
    dispatch({type: 'REFRESH_PENDING'});
  },


});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);