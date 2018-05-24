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
              <img src="https://i0.wp.com/sanvada.com/wp-content/uploads/2017/01/Jacobs-Well-in-Wimberley-1.jpg?fit=1068%2C642&ssl=1" style={{width: '350px', height: '300px', borderRadius: '3px'}} alt="" />
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
