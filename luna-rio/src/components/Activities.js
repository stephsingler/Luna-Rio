import React from 'react';
import '../index.css';
import activities from '../data/activities';
//Components
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import FaStar from "react-icons/lib/fa/star";

const Activities = () => {
  const renderActivities = () => {
    return (
      activities.map((activity) => {
        return (
          <div className="activity" key={activity.id}>
            <p>
              <FaStar style={{color: 'goldenrod'}} size={14} /> &nbsp;
              {activity.name} - {activity.description} &nbsp;
              <a href={activity.website} target="_blank">View Website</a>
            </p>
          </div>
        );
      })
    );
  }
  return (
    <div className="activities">
      <Header />
      <Nav />
      <div className="activity-container">
        <div className="activity-images">
          <img src={require('../images/lavender-fields.jpg')} className="img-left2" alt="" />
          <img src={require('../images/wine-tour.jpg')} className="img-left2" alt="" />
        </div>
        <div className="activity-lists">
          {renderActivities()}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Activities;
