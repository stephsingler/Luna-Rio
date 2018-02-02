import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

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
        <a href="https://www.homeaway.com/vacation-rental/p3718650" target="_blank">Book Now</a>
      </li>
    </ul>
  );
}
export default Nav;
