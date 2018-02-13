import React from 'react';
import '../index.css';
//Components
import Header from './Header';
import Testimonial from './Testimonial';
import Footer from './Footer';
import BackgroundPhoto from "./BackgroundPhoto";
import NavOptions from './NavOptions';
import HomeDescription from './HomeDescription';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <BackgroundPhoto />
      <HomeDescription />
      <NavOptions />
      <div className="testimonials">
        <Testimonial />
      </div>
      <Footer />
    </div>
  );
}
export default Home;
