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

// Component Func (Footer)
const mapDispatchToProps = (dispatch) => ({


});

export default connect(mapStateToProps, mapDispatchToProps)(News);