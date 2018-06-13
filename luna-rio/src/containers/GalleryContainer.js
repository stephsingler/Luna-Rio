import { connect } from 'react-redux';
import Gallery from '../components/Gallery';


const mapStateToProps = (state) => {
  return {
    photos: state.photos
  }
};
export default connect(mapStateToProps)(Gallery);
