/* Package imports */
import { connect } from 'react-redux';

/* Local imports */
import Login from '../components/Login';
// Action
import { changeAuthField } from '../store/action';

/* Container */

// Component States (Login)
const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  logged: state.auth.logged,
  error: state.auth.error,
  msg: state.auth.msg,
});

// Component Func (Login)
const mapDispatchToProps = (dispatch) => ({

  handleChange: (value, name) => {
    dispatch(changeAuthField(value, name));
  },

  handleSubmit: () => {
    dispatch({type: 'LOGIN'});
  },


});

export default connect(mapStateToProps, mapDispatchToProps)(Login);