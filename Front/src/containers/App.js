/* Package imports */
import { connect } from 'react-redux';

/* Local imports */
import App from '../components/App';

// Action

/* Container */

// Component States (App)
const mapStateToProps = (state) => ({
  logged: state.auth.logged,
  role_id: state.auth.role_id,
});

// Component Func (App)
const mapDispatchToProps = (dispatch) => ({

  loadNewsData: () => {
    dispatch({type: 'GET_NEWS'});
  },

  loadSectionsData: () => {
    dispatch({type: 'GET_SECTIONS'});
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(App);