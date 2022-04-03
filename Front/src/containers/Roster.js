/* Package imports */
import { connect } from 'react-redux';

/* Local imports */
import Roster from '../components/Roster';

// Action

/* Container */

// Component States (Roster)
const mapStateToProps = (state) => ({
  roster: state.sections.roster,
  users: state.users.users,
  sections: state.sections.sections,
});

// Component Func (Roster)
const mapDispatchToProps = (dispatch) => ({


  loadUsers: () => {
    dispatch({type: 'GET_USERS'});
  },

  loadSectionsData: () => {
    dispatch({type: 'GET_SECTIONS'});
  },

  getSectionDetails: (id) => {
    dispatch({type: 'GET_SECTION_DETAILS', id});
  },

  
});

export default connect(mapStateToProps, mapDispatchToProps)(Roster);