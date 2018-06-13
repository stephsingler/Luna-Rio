import { connect } from 'react-redux';
import BookNow from '../components/BookNow';


const mapStateToProps = (state) => {
  return {
    bookNow: state.bookNow
  }
};
export default connect(mapStateToProps)(BookNow);
