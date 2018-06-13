import React from 'react';

//Components
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import LifestyleOptions from './LifestyleOptions';

const Lifestyle = () => {
  return (
    <div className="lifestyle">
      <Header />
      <Nav />
      <div className='life'>
        <LifestyleOptions />
      </div>
      <Footer />
    </div>
  );
}
export default Lifestyle;
