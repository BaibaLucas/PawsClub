/* Package imports */
import { connect } from 'react-redux';

/* Local imports */
import News from '../components/News';
import { selectNews } from '../store/action';

// Action

/* Container */

// Component States (News)
const mapStateToProps = (state) => ({
  news: state.news.news,
  sections: state.sections.sections,
  newsSection : state.sections.newsSection,
});


// Component Func (News)
const mapDispatchToProps = (dispatch) => ({

  loadNewsData: () => {
    dispatch({type: 'GET_NEWS'});
  },

  loadSectionsData: () => {
    dispatch({type: 'GET_SECTIONS'});
  },

  selectedNews: (id, title, subtitle, content, newsurl) => {
    dispatch(selectNews(id, title, subtitle, content, newsurl));
  },

  getNewsBySection: (id) => {
    dispatch({type: 'GET_SECTION_DETAILS', id});
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(News);