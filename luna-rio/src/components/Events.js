import React from 'react';
import '../index.css';
//Components
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import FaStar from "react-icons/lib/fa/star";

const Events = props => {
  const renderEvents = () => {
    return (
      props.events.map((event) => {
        return (
          <div className="event" key={event.id}>
            <p>
              <FaStar style={{color: 'goldenrod'}} size={14} /> &nbsp;
              {event.name} - {event.description} &nbsp;
              <a href={event.website} target="_blank">View Website</a>
            </p>
          </div>
        );
      })
    );
  }
  return (
    <div className="events">
      <Header />
      <Nav />
      <div className="dining-container">
        <div className="event-images">
          <img src="https://i0.wp.com/oldgloryranch.com/wp-content/uploads/2014/12/bg-wedding-05.jpg?resize=1500%2C938&ssl=1" className="img-left2" alt="" />
          <img src={require('../images/theatre.png')} className="img-left2" alt="" />
        </div>
        <div className="event-lists">
          {renderEvents()}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Events;
