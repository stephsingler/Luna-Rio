import React from "react";
// components
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
//UI
import FaStar from "react-icons/lib/fa/star";

const BookNow = props => {
  const renderBookings = () => {
    return (
      props.booknow.map((booking) => {
        return (
          <p key={booking.id}>
            <FaStar style={{color: 'goldenrod'}} size={12} /> &nbsp;
             <strong>
              {booking.title}
            </strong> &nbsp;
            <FaStar style={{color: 'goldenrod'}} size={12} /> <br /><br/>
            <p>
              <a href={booking.url1} target="_blank">{booking.house1}</a>
            </p>
            <p>
              <a href={booking.url2} target="_blank">{booking.house2}</a>
            </p>
          </p>
        );
      })
    );
  }
  return (
    <div className="book-now">
        <Header />
        <div className="page-section" style={{marginBottom: "-20px"}}>
          <Nav /> <br/><br />
          <div className="container">
            <div className="row">
              <div className="col-xl-8 mx-auto">
                <div className="inner">
                  {renderBookings()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  );
}
export default BookNow;
