import React, { Component } from 'react';
import '../index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Components
import Home from './Home';
import Properties from './Properties';
import Lifestyle from './Lifestyle';
import Gallery from './Gallery';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="app">
            <Route exact path="/" component={ Home } />
            <Route path="/Properties" component={ Properties } />
            <Route path="/Lifestyle" component={ Lifestyle } />
            <Route path="/Gallery" component={ Gallery } />
          </div>
        </Router>
    );
  }
}

export default App;
