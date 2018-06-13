import React from "react";

//Components
import Nav from "./Nav";
import HouseLogo from "./HouseLogo";
const BackgroundPhoto = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <div className="carousel-caption">
            <p><HouseLogo /></p>
            <Nav />
          </div>
          <img className="d-block img-fluid slide-image one" src="https://i.imgur.com/nn22zYa.jpg" alt="First slide" />
        </div>
        <div className="carousel-item">
          <div className="carousel-caption">
            <p><HouseLogo /></p>
            <Nav />
          </div>
          <img className="d-block img-fluid slide-image" src="https://i.imgur.com/lqjviQ3.jpg" alt="Second slide"/>
        </div>
        <div className="carousel-item">
          <div className="carousel-caption">
            <p><HouseLogo /></p>
            <Nav />
          </div>
          <img className="three d-block img-fluid slide-image" src="https://i.imgur.com/sKinvm3.jpg?1" alt="Third slide"/>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
export default BackgroundPhoto;
