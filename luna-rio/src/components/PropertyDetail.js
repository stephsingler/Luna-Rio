import React, { Component } from 'react';
import propertyDetail from '../data/propertyDetail';
import { Link }  from 'react-router-dom';

class PropertyDetail extends Component {
  constructor() {
    super();
    this.state={}
  }
  render() {
    return (
      propertyDetail.map((property)=> {
        return (
          <div className="property-detail col-sm-12 mx-auto" key={property.id}>
            <div className="property-info col-md-6 col-sm-12 col-xs-12 mx-auto">
              <h2>{property.title}</h2>
              <p>{property.location}</p>
              <h6>BR: {property.bedrooms} | BA: {property.bathrooms} | Sleeps: {property.sleeps}</h6>
              <p>{property.description}</p>
              <a href="https://www.homeaway.com/vacation-rental/p3718650" target="_blank">Learn More</a><br />
              <Link to="/Gallery" style={{fontSize: '13px'}}>
                Photo Gallery
              </Link> <br/>
              <a target="_blank" href="http://www.seetheproperty.com/259574" style={{fontSize: "13px"}}>Property Virtual Tour!</a>
            </div>
            <img src={property.avatar} className="property-pic col-md-6 col-sm-12 col-xs-12 mx-auto" alt="" />
          </div>
        );
      })
    );
  }
}
export default PropertyDetail;
