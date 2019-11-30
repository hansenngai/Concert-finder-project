import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import '../App.css';
import axios from 'axios';


class CreateVenue extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description:'',
      longandlat:'',
      address:'',
      postal_code:'',
      file_submit:''
    };
  }

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
      .post('http://localhost:8082/api/venues', data)
      .then(res => {
        this.setState({
          name: '',
          description:'',
          longandlat:'',
          address:'',
          postal_code:'',
          file_submit:''
        })
        this.props.history.push('/showvenuedetails');
      })
      .catch(err => {
        console.log("Error in CreateVenue!");
      })
  };

  render() {
    return (
      <div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/showvenuelist" className="btn btn-outline-warning float-left">
                  Show List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Venue</h1>
              <p className="lead text-center">
                  Create new venue
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Name of the venue'
                    name='name'
                    className='form-control'
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Description of the venue'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Longitude and Latitude'
                    name='longandlat'
                    className='form-control'
                    value={this.state.longandlat}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Address of venue'
                    name='address'
                    className='form-control'
                    value={this.state.address}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Postal Code'
                    pattern="[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d"
                    name='postal_code'
                    className='form-control'
                    value={this.state.postal_code}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='file_submit'
                    name='file_submit'
                    className='form-control'
                    value={this.state.file_submit}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateVenue;