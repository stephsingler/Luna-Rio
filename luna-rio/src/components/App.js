import React, { Component } from 'react';
import '../css/index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Components
import Home from './Home';
import Properties from './Properties';
import Lifestyle from './Lifestyle';
import GalleryContainer from '../containers/GalleryContainer';
import ActivitiesContainer from '../containers/ActivitiesContainer';
import DiningContainer from '../containers/DiningContainer';
import EventsContainer from '../containers/EventsContainer'
import EstateInformation from './EstateInformation';
import BookNowContainer from '../containers/BookNowContainer';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="app">
            <Switch>
              <Route exact path="/" component={ Home} />
              <Route path="/Properties" component={ Properties } />
              <Route path="/Lifestyle" component={ Lifestyle } />
              <Route path="/Gallery" component={ GalleryContainer } />
              <Route path="/Activities" component={ ActivitiesContainer } />
              <Route path="/Dining" component={ DiningContainer } />
              <Route path="/Events" component={ EventsContainer } />
              <Route path="/EstateInformation" component={ EstateInformation } />
              <Route path="/BookNow" component={ BookNowContainer } />
              <Route render={() => {
                return <p>Page Not Found...</p>
              }} />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
