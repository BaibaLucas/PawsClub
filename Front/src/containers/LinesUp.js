/* Package imports */
import { connect } from 'react-redux';

/* Local imports */
import LinesUp from '../components/LinesUp';

// Action
import { selectSection } from './../store/action';
/* Container */

// Component States (LinesUp)
const mapStateToProps = (state) => ({
  sections: state.sections.sections,
});

// Component Func (LinesUp)
const mapDispatchToProps = (dispatch) => ({

  selectedSection: (id, name, title, sectionurl, desc, content) => {
    dispatch(selectSection(id, name, title, sectionurl, desc, content));
  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(LinesUp);