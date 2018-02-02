import React from 'react';
//Icons
import { FaFacebookSquare, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/lib/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div id="footer-top">
        <a href="https://www.facebook.com/stephanie.singler.1" target="_blank"><FaFacebookSquare className="social-icon" size={26} /></a>
        <a href="https://www.instagram.com/" target="_blank"><FaInstagram className="social-icon" size={26} /></a>
      </div>
      <div id="footer-bottom">
        <FaPhone className="footer-contact-icon"/>
        <a href="/">(512) 434-0442</a>
        <FaEnvelope className="footer-contact-icon"/>
        <a href="/">info@emersonrents.com</a>
        <h5>&copy; 2018 Luna Rio. All Rights Reserved</h5>
      </div>
    </div>
  );
}
export default Footer;
