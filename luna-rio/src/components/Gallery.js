import React from 'react';
import photos from '../data/photos';
import Paper from "material-ui/Paper";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//Components
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';

const Gallery = () => {
  const renderPhotos = () => {
    return(
      photos.map((photo) => {
        return (
          <MuiThemeProvider key={photo.id}>
            <Paper zDepth={5} className="photo-container">
              <img className="photo" src={photo.url} alt="" />
            </Paper>
          </MuiThemeProvider>
        );
      })
    );
  }
  return (
    <div className="gallery">
      <Header />
      <Nav />
      <div className="tour-link">
        <a target="_blank" href="http://www.seetheproperty.com/259574">Take a Virtual Tour of the Property!</a>
      </div>
      <div className="photo-gallery">
        {renderPhotos()}
      </div>
      <Footer />
    </div>
  );
}
export default Gallery;
