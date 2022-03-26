/* Package imports */
import { connect } from 'react-redux';

/* Local imports */
import Streams from '../components/Streams';
// Action

/* Container */

// Component States (Streams)
const mapStateToProps = (state) => ({
  streams: state.users.streams,
});

// Component Func (Streams)
const mapDispatchToProps = (dispatch) => ({



});

export default connect(mapStateToProps, mapDispatchToProps)(Streams);