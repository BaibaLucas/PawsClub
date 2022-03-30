/* Package imports */
import { connect } from 'react-redux';

/* Local imports */
import Section from '../components/Section';
import { getSectionBySlug, withRouter } from '../utils';
import { selectNews } from '../store/action';

// Action

/* Container */


// Component States (Section)
const mapStateToProps = (state, ownProps) => ({
  sections: state.sections.sections,
  section: getSectionBySlug(state.sections.sections, ownProps.match.params.slug),
  section_id: state.sections.section_id,
  newsSection : state.sections.newsSection,
  roster: state.sections.roster,
});

// Component Func (Section)
const mapDispatchToProps = (dispatch) => ({

  getSectionDetails: (id) => {
    dispatch({type: 'GET_SECTION_DETAILS', id});
  },

  selectedNews: (id, title, subtitle, content, newsurl) => {
    dispatch(selectNews(id, title, subtitle, content, newsurl));
  },

});

// with connect Section have access to props.state (section title)
const container = connect(mapStateToProps, mapDispatchToProps)(Section);

// with withrouter hooks container have access to props.router (slug url)
const containerWithRouter = withRouter(container);

export default containerWithRouter;


