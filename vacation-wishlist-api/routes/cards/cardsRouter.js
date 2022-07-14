const express = require('express');
const router = express.Router();
const {
  getAllDestinations,
  addDestination,
  updateDestination,
  deleteDestination
} = require('./cardsController');

router.get('/', getAllDestinations);
router.post('/add-destination', addDestination);
router.put('/update-destination', updateDestination);
router.delete('/delete-destination', deleteDestination);

module.exports = router;
