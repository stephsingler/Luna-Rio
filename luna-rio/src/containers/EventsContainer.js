import { connect } from 'react-redux';
import Events from '../components/Events';


const mapStateToProps = (state) => {
  return {
    events: state.events
  }
};
export default connect(mapStateToProps)(Events);
