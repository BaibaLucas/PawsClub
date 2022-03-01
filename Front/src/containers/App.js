/* Package imports */
import { connect } from 'react-redux';

/* Local imports */
import App from '../components/App';

// Action

/* Container */

// Component States (App)
const mapStateToProps = (state) => ({
  
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