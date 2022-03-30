/* Package imports */
import { connect } from 'react-redux';

/* Local imports */
import Home from '../components/Home';

// Action
import { selectSection, selectNews } from './../store/action';

/* Container */

// Component States (Home)
const mapStateToProps = (state) => ({
  news: state.news.news,
  sections: state.sections.sections,
  streams: state.users.streams,
});

// Component Func (Home)
const mapDispatchToProps = (dispatch) => ({

loadStreamersData: () => {
  dispatch({type: 'GET_STREAMERS'});
},

getSectionDetails: (sectionId) => {
  dispatch({type: 'GET_SECTION_DETAILS', sectionId})
},

selectedSection: (id, name, title, sectionurl, desc, content) => {
  dispatch(selectSection(id, name, title, sectionurl, desc, content));
},

selectedNews: (id, title, subtitle, content, newsurl) => {
  dispatch(selectNews(id, title, subtitle, content, newsurl));
},

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);