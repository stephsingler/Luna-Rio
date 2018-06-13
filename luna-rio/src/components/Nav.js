import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = () => {
  return (
    <ul className="nav">
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/Properties">
          Properties
        </NavLink>
      </li>
      <li>
        <NavLink to="/Lifestyle">
          Lifestyle
        </NavLink>
      </li>
      <li>
        <NavLink to="/BookNow">
          Book Now
        </NavLink>
      </li>
    </ul>
  );
}
export default Nav;
