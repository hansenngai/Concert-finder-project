import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

//trying to add a link inside the infowindow
import { BrowserRouter as Router, Link, Route, withRouter } from 'react-router-dom';
import ObjectPage from './../pages/ObjectPage';

import CurrentLocation from './Map';
import InfoWindowEx from './InfoWindowEx';


//This class contains the data to create the map. 
export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };
//show marker on click
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
      >
        <Marker onClick={this.onMarkerClick} name={'Current location'} />
        {/* hard coded example location, ex. pub on emerson*/}
        <Marker position={{ lat: 43.253231, lng: -79.921517}} onClick={this.onMarkerClick} name={'PUB'} />

        <InfoWindowEx
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}>
         <Router>
        <Link to = '/objectpage' >
        <button type="button" onClick={this.showDetails}>
            Show details      
        </button>
        </Link>
        </Router>
        </InfoWindowEx>
        {/* <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
          
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow> */}
      </CurrentLocation>


    );
  }
}

//export default withRouter(MapContainer);
//const MapContainer2 = withRouter(MapContainer);

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCjNntlsCbXB1MPAjkWF_19ZVO2gfgj8m8'
})(MapContainer);