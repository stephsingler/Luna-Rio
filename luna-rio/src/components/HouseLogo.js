import React from 'react';
import { Link } from 'react-router-dom';

const HouseLogo = () => {
  return (
    <Link to="/">
      <img className="house-logo" src={require('../images/MainHouse.jpg')} alt="" />
    </Link>
  );
}
export default HouseLogo;
