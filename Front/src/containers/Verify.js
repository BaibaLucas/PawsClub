/* Package imports */
import { connect } from 'react-redux';

/* Local imports */
import Verify from '../components/Verify';
// Action

/* Container */

// Component States (Verify)
const mapStateToProps = (state) => ({
  
});

// Component Func (Verify)
const mapDispatchToProps = (dispatch) => ({

  accountValidation: (token) => {
    dispatch({type: 'ACCOUNT_VALIDATION', token});
  },

  refresh: () => {
    dispatch({type: 'REFRESH_PENDING'});
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Verify);