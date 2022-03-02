/* Package imports */
import { connect } from 'react-redux';

/* Local imports */
import LinesUp from '../components/LinesUp';

// Action

/* Container */

// Component States (LinesUp)
const mapStateToProps = (state) => ({
  sections: state.sections.sections,
});

// Component Func (LinesUp)
const mapDispatchToProps = (dispatch) => ({


  
});

export default connect(mapStateToProps, mapDispatchToProps)(LinesUp);