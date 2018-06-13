import { connect } from 'react-redux';
import Dining from '../components/Dining';


const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
    shops: state.shops
  }
};
export default connect(mapStateToProps)(Dining);
