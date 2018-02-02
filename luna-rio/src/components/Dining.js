import React from 'react';
import '../index.css';
import restaurants from '../data/restaurants';
import shops from '../data/shops';
//Components
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

const Dining = () => {
  const renderDining = () => {
    return (
      restaurants.map((restaurant) => {
        return (
          <div className="restaurant-list" key={restaurant.id}>
            <p>
              <span className="glyphicon glyphicon-star" style={{color: 'goldenrod'}}></span> &nbsp;
              {restaurant.name} - {restaurant.description} &nbsp;
              {restaurant.phone}
            </p>
          </div>
        );
      })
    );
  }
  const renderShops = () => {
    return (
      shops.map((shop) => {
        return (
          <div className="restaurant-list" key={shop.id}>
            <p>
              <span className="glyphicon glyphicon-star" style={{color: 'goldenrod'}}></span> &nbsp;
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
          {renderDining()}
        </div>
      </div>
      <div className="dining-container">
        <img src="https://thetexasiantravels.files.wordpress.com/2014/09/image34.jpg" className="img-left" alt= "" />
        <div className="dining-lists">
          <h5><strong>Market Days are the first Saturday of each month, April through December.</strong></h5>
          {renderShops()}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Dining;
