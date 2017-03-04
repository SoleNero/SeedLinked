/* eslint-disable */
// import React, { Component } from 'react';



// class MainMap extends Component {
// render () {
//     return (

//       <div>
//       MainMap Component
//      </div>
//     )
//   }
// };
// // 

// export default MainMap;

import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from '../../node_modules/react-leaflet/lib';
import axios from 'axios';

const ROOT_URL = 'http://localhost:5000';

class MainMap extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      markers: []
   }
 }

 componentWillMount() {
   axios.get(`${ROOT_URL}/city`)
   .then((response) => {
     console.log(response);
     this.setState({markers:response.data});
   })
 }

 showState(){
   console.log(this.state);
 }

  render () {
    const position = [this.state.lat, this.state.lng]
    return (
      <div>
      <button onClick={this.showState.bind(this)}>State</button>
      <Map 
      className='map'
      center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup. <br /> Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
      </div>
    )
  }  
}
export default MainMap;
