/* eslint-disable */
import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'
import { withGoogleMap } from "react-google-maps";

class Mymap extends Component {
  // componentDidMount(){
  //   new google.maps.Map(this.refs.map, {
  //     zoom: 12,
  //     center: {
  //       lat: this.props.lat,
  //       lng:this.props.lon
  //     }
  //   });
  // }

  render() {
    //this.ref.map <div ref="Mymap" />
    return (
      <div>
      <h1>Map Page</h1>
      </div>
    )
  }
}

export default Mymap;