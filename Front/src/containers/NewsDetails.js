/* Package imports */
import { connect } from 'react-redux';

/* Local imports */
import NewsDetails from '../components/Newsdetails';
import { withRouter } from '../utils';


// Action

/* Container */


// Component States (Section)
const mapStateToProps = (state) => ({
  newsId: state.news.id,
  news: state.news.currentNews,
  allNews: state.news.news,
});

// Component Func (NewsDetails)
const mapDispatchToProps = (dispatch) => ({

  loadNewsData: () => {
    dispatch({type: 'GET_NEWS'});
  },

  getNewsDetailsBySlug: (slug) => {
    dispatch({type: 'GET_NEWS_DETAILS_BY_SLUG', slug});
  },

});

// with connect Section have access to props.state (news title)
const container = connect(mapStateToProps, mapDispatchToProps)(NewsDetails);

// with withrouter hooks container have access to props.router (slug url)
const containerWithRouter = withRouter(container);

export default containerWithRouter;


