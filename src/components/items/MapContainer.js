import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

//trying to add a link inside the infowindow
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import ObjectPage from './../pages/ObjectPage';

import CurrentLocation from './Map';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

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

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
          
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>


    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCjNntlsCbXB1MPAjkWF_19ZVO2gfgj8m8'
})(MapContainer);