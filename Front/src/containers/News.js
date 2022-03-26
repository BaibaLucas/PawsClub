/* Package imports */
import { connect } from 'react-redux';

/* Local imports */
import News from '../components/News';


// Action

/* Container */

// Component States (News)
const mapStateToProps = (state) => ({
  news: state.news.news,
  sections: state.sections.sections,
});


// Component Func (News)
const mapDispatchToProps = (dispatch) => ({

  loadNewsData: () => {
    dispatch({type: 'GET_NEWS'});
  },

  loadSectionsData: () => {
    dispatch({type: 'GET_SECTIONS'});
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(News);