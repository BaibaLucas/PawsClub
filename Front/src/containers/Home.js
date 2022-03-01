/* Package imports */
import { connect } from 'react-redux';

/* Local imports */
import Home from '../components/Home';

// Action

/* Container */

// Component States (Home)
const mapStateToProps = (state) => ({
  news: state.news.news,
  sections: state.sections.sections,
});

// Component Func (Home)
const mapDispatchToProps = (dispatch) => ({


});

export default connect(mapStateToProps, mapDispatchToProps)(Home);