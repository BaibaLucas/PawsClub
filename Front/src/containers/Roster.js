/* Package imports */
import { connect } from 'react-redux';

/* Local imports */
import Roster from '../components/Roster';

// Action

/* Container */

// Component States (Roster)
const mapStateToProps = (state) => ({
  roster: state.sections.roster,
});

// Component Func (Roster)
const mapDispatchToProps = (dispatch) => ({

  loadRoster: () => {
    dispatch({type: 'GET_ROSTER'});
  },

  
});

export default connect(mapStateToProps, mapDispatchToProps)(Roster);