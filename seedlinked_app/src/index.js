import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';

import Main from './component/main';
import Map from './component/map';
import './style/index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  constructor(props){
    super(props);
     
     this.state = { locations: {} };

     const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    onClick={props.onMapClick}
  >
    {props.markers.map((marker, index) => (
      <Marker
        onClick={() => props.onMarkerRightClick(index)}
      />
    ))}
  </GoogleMap>
));
  }
  render() {
    return(
    <div>
    <MuiThemeProvider>
      <Main/>
      </MuiThemeProvider>      
      <div>
        <Map/>
      </div>
  </div>
  )
 } 
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
