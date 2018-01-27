import React from 'react';
//Icons
import { FaFacebookSquare, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/lib/fa';
const Header = () => {
  return (
    <div className="header">
      <a href="https://www.facebook.com/stephanie.singler.1" target="_blank"><FaFacebookSquare className="social-icon"/></a>
      <a href="https://www.instagram.com/" target="_blank"><FaInstagram className="social-icon"/></a>
      <a href="#" className="contact-a">(707) 494-3844</a><FaPhone className="contact-icon"/>
      <a href="#" className="contact-a">brooke@gmail.com</a><FaEnvelope className="contact-icon"/>
    </div>
  );
}
export default Header;
