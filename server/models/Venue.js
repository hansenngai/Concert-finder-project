// models/Venue.js

const mongoose = require('mongoose');

const VenueSchema = new mongoose.Schema({
  name: { //title
    type: String,
    required: true
  },
  description: { //isbn
    type: String,
    required: true
  },
  longandlat: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  postal_code: {
    type: String
  },
  file_submit: {
    type: String
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Venue = mongoose.model('venue', VenueSchema);