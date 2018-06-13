import { connect } from 'react-redux';
import Testimonial from '../components/Testimonial';


const mapStateToProps = (state) => {
  return {
    testimonialObj: state.testimonialObj
  }
};
export default connect(mapStateToProps)(Testimonial);
