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
  imgprofil: state.auth.imgprofil,
});

// Component Func (Account)
const mapDispatchToProps = (dispatch) => ({

  handleChange: (value, name) => {
    dispatch(changeAuthField(value, name));
  },

  handleSubmit: () => {
    dispatch({type: 'EDIT_USER'});
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Account);