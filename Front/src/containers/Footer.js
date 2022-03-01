/* Package imports */
import { connect } from 'react-redux';

/* Local imports */
import Footer from '../components/Footer';


// Action

/* Container */

// Component States (Footer)
const mapStateToProps = (state) => ({
  logged: state.auth.logged,
});

// Component Func (Footer)
const mapDispatchToProps = (dispatch) => ({


});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);