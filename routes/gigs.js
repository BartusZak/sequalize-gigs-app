const express = require('express');
const db = require('../config/database');

const router = express.Router();
const Gig = require('../models/Gig');

router.get('/', (req, res) =>
  Gig.findAll()
    .then(gigs => {
      console.log(gigs);
      res.sendStatus(200);
    })
    .catch(err => console.log(err))
);

module.exports = router;
