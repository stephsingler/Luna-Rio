import React from 'react';

//Components
import Footer from './Footer';
import Header from './Header';
import BackgroundPhoto from './BackgroundPhoto';
import PropertyDetailContainer from '../containers/PropertyDetailContainer';

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
              <PropertyDetailContainer />
            </div>
          </div>
        </div>
          <Footer />
      </div>
    );
}
export default Properties;
