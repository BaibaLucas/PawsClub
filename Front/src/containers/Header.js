/* Package imports */
import { connect } from 'react-redux';

/* Local imports */
import Header from '../components/Header';


// Action

/* Container */

// Component States (Header)
const mapStateToProps = (state) => ({
  logged: state.auth.logged,
});

// Component Func (Header)
const mapDispatchToProps = (dispatch) => ({


});

export default connect(mapStateToProps, mapDispatchToProps)(Header);