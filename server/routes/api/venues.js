// routes/api/venue.js

const express = require('express');
const router = express.Router();

// Load venue model
const Venue = require('../../models/Venue');

// @route GET api/venues/test
// @description tests venues route
// @access Public
router.get('/test', (req, res) => res.send('venue route testing!'));

// @route GET api/venues
// @description Get all venues
// @access Public
router.get('/', (req, res) => {
  Venue.find()
    .then(venues => res.json(venues))
    .catch(err => res.status(404).json({ novenuesfound: 'No venues found' }));
});

// @route GET api/venues/:id
// @description Get single venue by id
// @access Public
router.get('/:id', (req, res) => {
  Venue.findById(req.params.id)
    .then(venue => res.json(venue))
    .catch(err => res.status(404).json({ novenuefound: 'No venue found' }));
});

// @route GET api/venues
// @description add/save venue
// @access Public
router.post('/', (req, res) => {
  Venue.create(req.body)
    .then(venue => res.json({ msg: 'venue added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this venue' }));
});

// @route GET api/venues/:id
// @description Update venue
// @access Public
router.put('/:id', (req, res) => {
  Venue.findByIdAndUpdate(req.params.id, req.body)
    .then(venue => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/venues/:id
// @description Delete venue by id
// @access Public
router.delete('/:id', (req, res) => {
  Venue.findByIdAndRemove(req.params.id, req.body)
    .then(venue => res.json({ mgs: 'venue entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a venue' }));
});

module.exports = router;