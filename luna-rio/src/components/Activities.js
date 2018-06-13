import React from 'react';
//Components
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import FaStar from "react-icons/lib/fa/star";

const Activities = props => {
  const renderActivities = () => {
    return (
      props.activities.map((activity) => {
        return (
          <div className="activity" key={activity.id}>
            <p>
              <FaStar style={{color: 'goldenrod'}} size={14} /> &nbsp;
              <a href={activity.website} target="_blank">{activity.name}</a> - {activity.description} &nbsp;
            </p>
          </div>
        );
      })
    );
  }
  const renderSpa = () => {
    return (
      <div className="activity">
        <p>
          <h6><strong>Massage & Spa</strong></h6>
          <FaStar style={{color: 'goldenrod'}} size={14} /> &nbsp;
          {props.spa.description} <a href={props.spa.website1} target="_blank">{props.spa.subtitle}</a> or <a href={props.spa.website2} target="_blank">{props.spa.subtitle2}</a> &nbsp;
        </p>
      </div>
    );
  }
  const renderBreweries = () => {
    return (
      <div className = "activity">
        <p>
          <FaStar style={{color: 'goldenrod'}} size={14} /> &nbsp;
          {props.breweries.title} - Wimberley is also home to the <a href={props.breweries.website1} target="_blank">{props.breweries.name1}</a>,
          <a href={props.breweries.website2} target="_blank">{props.breweries.name2}</a>,
          <a href={props.breweries.website3} target="_blank">{props.breweries.name3}</a>,
          <a href={props.breweries.website4} target="_blank">{props.breweries.name4}</a>, and the <a href={props.breweries.website5} target="_blank">{props.breweries.name5}</a>, which is a rum distillery. Each of these places offers tastings and tours. If you would like someone else to do the driving contact <a href={props.breweries.website6} target="_blank">{props.breweries.name6}</a> to arrange a tour and activities throughout the beautiful Wimberley Valley.
        </p>
      </div>
    );
  }
  const renderTheatre = () => {
    return (
      <div className="activity">
        <p>
          <h6><strong>Theatre</strong></h6>
          <FaStar style={{color: 'goldenrod'}} size={14} /> &nbsp;
          Many rural towns had outdoor movie theatres years ago. Wimberley still has one. The &nbsp;
          <a href={props.theatre.website1} target="_blank">{props.theatre.name1}</a> features first run movies every Friday, Saturday and Sunday nights from Memorial Day through Labor Day. You can even bring your own chair. Call (512) 847-2513 or visit <a href={props.theatre.website1} target="_blank">{props.theatre.website1}</a> for shows and times. If you taste runs to live theatres, try <a href={props.theatre.website2} target="_blank">{props.theatre.name2}</a>, or the &nbsp;
          <a href={props.theatre.website3} target="_blank">{props.theatre.name3}</a>, for year round theatrical events.
        </p>
      </div>
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
          {renderSpa()}
          <h6><strong>Things To Do</strong></h6>
          {renderActivities()}
          {renderBreweries()}
          {renderTheatre()}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Activities;
