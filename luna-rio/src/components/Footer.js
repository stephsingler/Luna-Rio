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
        <a href="#">(707) 494-3844</a>
        <FaEnvelope className="footer-contact-icon"/>
        <a href="#">brooke@gmail.com</a>
        <h5>&copy; 2018 Luna Rio. All Rights Reserved</h5>
      </div>
    </div>
  );
}
export default Footer;
