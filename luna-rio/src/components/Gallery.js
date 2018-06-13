import React from 'react';
import Paper from "material-ui/Paper";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//Components
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';

const Gallery = props => {
  const renderPhotos = () => {
    return(
      props.photos.map((photo) => {
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
      <div className="photo-gallery">
        {renderPhotos()}
      </div>
      <Footer />
    </div>
  );
}
export default Gallery;
