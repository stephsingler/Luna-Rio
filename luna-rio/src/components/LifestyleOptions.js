import React from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const LifestyleOptions = () => {
  return (
      <MuiThemeProvider>
        <div className="mui-paper">
          <Paper className="nav-paper" zDepth={5}>
            <Link to="/Activities">
              <h4>Outdoor Activities</h4>
              <img src="https://scontent-sea1-1.cdninstagram.com/vp/5ecf848458bc9845da307db92a0a0180/5AF4C281/t51.2885-15/s480x480/e35/c0.75.600.600/15802158_823128964492246_2290988817575837696_n.jpg?ig_cache_key=MTQyNzczNzE5MzI4MDMwOTQzNQ%3D%3D.2.c" style={{width: '350px', height: '300px', borderRadius: '3px'}} alt="" />
            </Link>
          </Paper>
          <Paper className="nav-paper" zDepth={5}>
            <Link to="/Dining">
              <h4>Restaurants & Shopping</h4>
              <img src={require('../images/wimberley-boot.jpg')} style={{width: '350px', height: '300px', borderRadius: '3px'}} alt="" />
            </Link>
          </Paper>
          <Paper className="nav-paper" zDepth={5}>
            <Link to="/Events">
              <h4>Events & Services</h4>
              <img src={require('../images/welcome-wimberley.jpg')} style={{width: '350px', height: '300px', borderRadius: '3px'}} alt="" />
            </Link>
          </Paper>
        </div>
      </MuiThemeProvider>
  );
}
export default LifestyleOptions;
