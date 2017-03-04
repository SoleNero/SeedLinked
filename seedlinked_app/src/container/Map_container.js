/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

let GoogleApiWrapper;

export class Map_container extends Component {
  render(){
    if(!this.props.loaded) {
      return <div>Loading..</div>
    }
    return (
      <div>Map go here</div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBEFCJEB2PAORJilE22B76k071qkgz7_Ww'
})(Container);

