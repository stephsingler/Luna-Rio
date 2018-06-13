import React, { Component } from 'react';
import { Link }  from 'react-router-dom';

const PropertyDetail = props => {
  const renderPropertyDetail = () => {
    return props.propertyDetail.map((property)=> {
      return (
        <div className="property-detail col-sm-12 mx-auto" key={property.id}>
          <div className="property-info col-md-6 col-sm-12 col-xs-12 mx-auto">
            <h2>{property.title}</h2>
            <p>{property.location}</p>
            <h6>BR: {property.bedrooms} | BA: {property.bathrooms} | Sleeps: {property.sleeps}</h6>
            <p>{property.description}</p>
            <Link to="/BookNow">
              Book Now
            </Link><br />
            <Link to="/Gallery" style={{fontSize: '13px'}}>
              Photo Gallery
            </Link> <br/>
            <Link to="/EstateInformation" style={{fontSize: "13px"}}>Estate Information & Tour!</Link>
          </div>
          <img src={property.avatar} className="property-pic col-md-6 col-sm-12 col-xs-12 mx-auto" alt="" />
        </div>
      );
    })
  }
  return (
    <div>
      {renderPropertyDetail()}
    </div>
  );
}
export default PropertyDetail;
