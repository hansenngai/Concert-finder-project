import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import ReactDOM from 'react-dom';


//trying to add a link inside the infowindow
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import ObjectPage from './../pages/ObjectPage';

export default class InfoWindowEx extends Component {
    constructor(props) {
      super(props);
      this.infoWindowRef = React.createRef();
      this.contentElement = document.createElement(`div`);
    }
  
    componentDidUpdate(prevProps) {
      if (this.props.children !== prevProps.children) {
        ReactDOM.render(
          React.Children.only(this.props.children),
          this.contentElement
        );
        this.infoWindowRef.current.infowindow.setContent(this.contentElement);
      }
    }
  
    render() {
      return <InfoWindow ref={this.infoWindowRef} {...this.props} />;
    }
  }