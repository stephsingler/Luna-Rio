import React from "react";
import "../index.css";

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
          <img className="d-block img-fluid slide-image" src="https://firebasestorage.googleapis.com/v0/b/luna-rio.appspot.com/o/Photos%2Ffullsizeoutput_86.jpeg?alt=media&token=609edee2-c05f-4c9c-9324-c761306c13ae" alt="First slide"/>
        </div>
        <div className="carousel-item">
          <div className="carousel-caption">
            <p><HouseLogo /></p>
            <Nav />
          </div>
          <img className="d-block img-fluid slide-image" src="https://firebasestorage.googleapis.com/v0/b/luna-rio.appspot.com/o/Photos%2Ffullsizeoutput_9c.jpeg?alt=media&token=7a9d34a6-3645-4ead-91d3-2da1f8214a92" alt="Second slide"/>
        </div>
        <div className="carousel-item">
          <div className="carousel-caption">
            <p><HouseLogo /></p>
            <Nav />
          </div>
          <img className="d-block img-fluid slide-image" src="https://firebasestorage.googleapis.com/v0/b/luna-rio.appspot.com/o/Photos%2Ffullsizeoutput_a2.jpeg?alt=media&token=f47e7ab2-6aac-4b29-903e-586c59cda240" alt="Third slide"/>
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
