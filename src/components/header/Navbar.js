/**
 * @Author: stephenmoran
 * @Date:   2019-10-29T16:58:36+00:00
 * @Last modified by:   stephenmoran
 * @Last modified time: 2019-11-08T23:00:28+00:00
 */

import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container" style={headerStyle}>

          <Link className="navbar-brand" to="/"><h3 className="logo d-inline align-middle"><span className="logoBold">Event</span><span className="logoReg">Finder</span></h3></Link>

          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto nav d-inline align-middle justify-content-end">
              <li className="nav-item hover">
                <Link className="nav-link hover" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link hover" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link hover" to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const headerStyle = {
  textAlign: 'right',
  padding: '5px',
  color: '#333'
}

export default Navbar;
