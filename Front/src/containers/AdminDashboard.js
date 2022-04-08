/* Package imports */
import { connect } from 'react-redux';

/* Local imports */
import AdminDashboard from '../components/AdminDashboard';

// Action

/* Container */

// Component States (Admin)
const mapStateToProps = (state) => ({
  username: state.auth.username,
  imgprofil: state.auth.profilurl,
});

// Component Func (Admin)
const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);