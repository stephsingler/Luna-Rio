import { connect } from 'react-redux';
import Activities from '../components/Activities';


const mapStateToProps = (state) => {
  return {
    activities: state.activities,
    spa: state.spa,
    breweries: state.breweries,
    theatre: state.theatre
  }
};
export default connect(mapStateToProps)(Activities);
