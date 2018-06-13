import { connect } from 'react-redux';
import PropertyDetail from '../components/PropertyDetail';


const mapStateToProps = (state) => {
  return {
    propertyDetail: state.propertyDetail
  }
};
export default connect(mapStateToProps)(PropertyDetail);
