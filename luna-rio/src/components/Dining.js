import React from 'react';
import '../index.css';
//Components
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import FaStar from "react-icons/lib/fa/star";

const Dining = props => {
  const renderDining = () => {
    return (
      props.restaurants.map((restaurant) => {
        return (
          <div className="restaurant-list" key={restaurant.id}>
            <p>
              <FaStar style={{color: 'goldenrod'}} size={14} /> &nbsp;
              {restaurant.name} - {restaurant.description} &nbsp;
              {restaurant.phone}
              <p><a href={restaurant.website} target="_blank"> View Website</a></p>
            </p>
          </div>
        );
      })
    );
  }
  const renderShops = () => {
    return (
      props.shops.map((shop) => {
        return (
          <div className="restaurant-list" key={shop.id}>
            <p>
              <FaStar style={{color: 'goldenrod'}} size={14} /> &nbsp;
              {shop.name} - {shop.description} &nbsp;
            </p>
          </div>
        );
      })
    );
  }
  return (
    <div className="dining">
      <Header />
      <Nav />
      <div className="dining-container">
        <img src={require('../images/trattoria.png')} className="img-left" alt=" "/>
        <div className="dining-lists">
          <h6><strong>Restaurants - Some of our favorites!</strong></h6>
          {renderDining()}
        </div>
      </div>
      <div className="dining-container">
        <img src="https://thetexasiantravels.files.wordpress.com/2014/09/image34.jpg" className="img-left" alt= "" />
        <div className="dining-lists">
          <h6><strong>Market Days are the first Saturday of each month, April through December.</strong></h6>
          {renderShops()}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Dining;
