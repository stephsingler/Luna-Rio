import React, { Component } from 'react';
import '../index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Components
import Home from './Home';
import Properties from './Properties';
import Lifestyle from './Lifestyle';
import Gallery from './Gallery';
import Activities from './Activities';
import Dining from './Dining';
import Events from './Events'
import EstateInformation from './EstateInformation';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="app">
            <Route exact path="/" component={ Home} />
            <Route path="/Properties" component={ Properties } />
            <Route path="/Lifestyle" component={ Lifestyle } />
            <Route path="/Gallery" component={ Gallery } />
            <Route path="/Activities" component={ Activities } />
            <Route path="/Dining" component={ Dining } />
            <Route path="/Events" component={ Events } />
            <Route path="/EstateInformation" component={EstateInformation} />
          </div>
        </Router>
    );
  }
}

export default App;
