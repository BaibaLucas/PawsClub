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

  loadStreamersData: () => {
    dispatch({type: 'GET_STREAMERS'});
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(App);