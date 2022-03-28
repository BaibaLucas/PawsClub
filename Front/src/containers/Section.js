/* Package imports */
import { connect } from 'react-redux';

/* Local imports */
import Section from '../components/Section';
import { getSectionBySlug, withRouter } from '../utils';

// Action

/* Container */


// Component States (Section)
const mapStateToProps = (state, ownProps) => ({
  /**
   * Get section by slug 
   * state.sections.sections = all sections
   * => ownProps.match = prop create by withRouter
   * in ownProps, we have acces to all props including those of withRouter
   */
  sections: state.sections.sections,
  section: getSectionBySlug(state.sections.sections, ownProps.match.params.slug),
});

// Component Func (Section)
const mapDispatchToProps = (dispatch) => ({

});

// with connect Section have access to props.state (section title)
const container = connect(mapStateToProps, mapDispatchToProps)(Section);

// with withrouter hooks container have access to props.router (slug url)
const containerWithRouter = withRouter(container);

export default containerWithRouter;


