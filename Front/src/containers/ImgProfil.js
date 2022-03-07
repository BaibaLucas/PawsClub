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
});

// Component Func (imgProfil)
const mapDispatchToProps = (dispatch) => ({

  handleSubmit: (formData) => {
    dispatch({ type: 'UPDATE_IMG_PROFIL', formData});
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(ImgProfil);