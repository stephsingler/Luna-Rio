import React from 'react';
import '../index.css';
//Components
import Footer from './Footer';
import Header from './Header';
import BackgroundPhoto from './BackgroundPhoto';
import PropertyDetail from './PropertyDetail';

const Properties =  () => {
    return (
      <div className="properties">
        <Header />
        <BackgroundPhoto />
        <div id="our-properties">
          <p>Our Properties</p>
        </div>
        <div className="container">
          <div className="row">
            <div className="property-list">
              <PropertyDetail />
            </div>
          </div>
        </div>
          <Footer />
      </div>
    );
}
export default Properties;
