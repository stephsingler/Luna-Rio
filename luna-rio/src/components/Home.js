import React from 'react';

//Components
import Header from './Header';
import TestimonialContainer from '../containers/TestimonialContainer';
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
        <TestimonialContainer />
      </div>
      <Footer />
    </div>
  );
}
export default Home;
