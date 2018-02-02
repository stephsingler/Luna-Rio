import React from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Luna17 from '../images/LunaRio17.jpg';
import Luna25 from '../images/LunaRio25.jpg';
import Wimberley from '../images/wimberley.jpg';

const NavOptions = () => {
  return (
    <div className="nav-options">
      <ul className="nav-options-list">
        <li>
          <Link to="/Properties">
            Properties
          </Link>
        </li>
        <li>
          <Link to="/Lifestyle">
            Lifestyle
          </Link>
        </li>
        <li>
          <Link to="/Gallery">
            Gallery
          </Link>
        </li>
      </ul>
      <MuiThemeProvider>
        <div className="mui-paper">
          <Paper className="nav-paper" zDepth={5}>
            <Link to="/Properties">
              <img src={ Luna25 } style={{width: '350px', height: '300px', borderRadius: '3px'}} alt="" />
            </Link>
          </Paper>
          <Paper className="nav-paper" zDepth={5}>
            <Link to="/Lifestyle">
              <img src={ Wimberley } style={{width: '350px', height: '300px', borderRadius: '3px'}} alt="" />
            </Link>
          </Paper>
          <Paper className="nav-paper" zDepth={5}>
            <Link to="/Gallery">
              <img src={ Luna17 } style={{width: '350px', height: '300px', borderRadius: '3px'}} alt="" />
            </Link>
          </Paper>
        </div>
      </MuiThemeProvider>
    </div>
  );
}
export default NavOptions;
