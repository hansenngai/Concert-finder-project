import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import BookCard from './BookCard';

class ShowVenueList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/venues')
      .then(res => {
        this.setState({
          venues: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowVenueList');
      })
  };


  render() {
    const venues = this.state.venues;
    console.log("PrintVenue: " + venues);
    let venueList;

    if(!venues) {
      venueList = "there is no venue record!";
    } else {
      venueList = venues.map((venue, k) =>
        <VenueCard venue={venue} key={k} /> //card for venue
      );
    }

    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Venues List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-venue" className="btn btn-outline-warning float-right">
                + Add New Venue
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {VenueList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowVenueList;