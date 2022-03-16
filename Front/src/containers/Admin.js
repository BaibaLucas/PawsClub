/* Package imports */
import { connect } from 'react-redux';

/* Local imports */
import Admin from '../components/Admin';
import { changeAuthField } from '../store/action';

// Action

/* Container */

// Component States (Admin)
const mapStateToProps = (state) => ({

  email: state.auth.email,
  password: state.auth.password,
  logged: state.auth.logged,
  error: state.auth.error,
  msg: state.auth.msg,
  role_id: state.auth.role_id,

});

// Component Func (Admin)
const mapDispatchToProps = (dispatch) => ({

  handleChange: (value, name) => {
    dispatch(changeAuthField(value, name));
  },

  handleSubmit: () => {
    dispatch({type: 'ADMIN_LOGIN'}, console.log('CONTAINER'));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);