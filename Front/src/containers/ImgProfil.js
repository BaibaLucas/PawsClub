/* Package imports */
import { connect } from 'react-redux';

/* Local imports */
import ImgProfil from '../components/ImgProfil';

// Action

/* Container */

// Component States (imgProfil)
const mapStateToProps = (state) => ({
  imgprofil: state.auth.imgprofil,
  msg: state.auth.msg,
  success: state.auth.success,
  logged: state.auth.logged,
});

// Component Func (imgProfil)
const mapDispatchToProps = (dispatch) => ({

  handleSubmit: (formData) => {
    dispatch({ type: 'UPDATE_IMG_PROFIL', formData});
  },

  handleSuccess: () => {
    dispatch({type: 'CHANGE_STATUS' });
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(ImgProfil);