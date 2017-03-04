/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router';


class Navbar extends Component {
  render() {
    return(
      <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Mymap">Map</Link>
        </nav>
      </div>
    )
  }
}
export default Navbar;