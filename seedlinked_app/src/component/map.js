import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'
import { withGoogleMap } from "react-google-maps";

class Map extends Component {
  render() {
    const mapContainer = (
      <div style={{height: '100%', width:'100%'}}></div>
    )
    return <h1>map</h1>
      // <GoogleMapLoader
      //   containerElement = { mapContainer }
      //   googleMapElement = {
      //     <GoogleMap
      //       defaultZoom={15}
      //       defaultCenter={this.props.center}
      //       options={{streetViewControl: false, mapTypeControl: false}}>
      //       </GoogleMap>
      //   } />
    // )
  }
}

export default Map;