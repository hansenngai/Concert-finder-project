import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import '../App.css';

class UpdateVenueInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        description:'',
        longandlat:'',
        address:'',
        postal_code:'',
        file_submit:''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/venues/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          name: res.data.name,
          description: res.data.description,
          longandlat: res.data.longandlat,
          address: res.data.address,
          postal_code: res.data.postal_code,
          file_submit: res.data.file_submit
        })
      })
      .catch(err => {
        console.log("Error from UpdateVenueInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      description: this.state.description,
      longandlat: this.state.longandlat,
      address: this.state.address,
      postal_code: this.state.postal_code,
      file_submit: this.state.file_submit
    };

    axios
      .put('http://localhost:8082/api/venues/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-venue/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateVenueInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateBookInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Venue List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Venue</h1>
              <p className="lead text-center">
                  Update Venue's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="name">Name</label>
              <input
                type='text'
                placeholder='Title of the Book'
                name='name'
                className='form-control'
                value={this.state.name}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="description">Description</label>
              <input
                type='text'
                placeholder='ISBN'
                name='description'
                className='form-control'
                value={this.state.description}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="longandlat">Longandlat</label>
              <input
                type='text'
                placeholder='Author'
                name='longandlat'
                className='form-control'
                value={this.state.longandlat}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="address">Address</label>
              <input
                type='text'
                placeholder='Describe this book'
                name='address'
                className='form-control'
                value={this.state.address}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="postal_code">Postal code</label>
              <input
                type='date'
                placeholder='postal_code'
                name='postal_code'
                className='form-control'
                value={this.state.postal_code}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="file_submit">file submit</label>
              <input
                type='text'
                placeholder='Publisher of this Book'
                name='file_submit'
                className='form-control'
                value={this.state.file_submit}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Venue</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateVenueInfo;