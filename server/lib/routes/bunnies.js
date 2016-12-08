const express = require('express');
const router = express.Router();
const Bunny = require('../models/bunny');
const bodyParser = require('body-parser').json();

router
    .get('/', (req, res, next) => {
        const query = {};

        Bunny.find(query)
        .select('name link description')
        .lean()
        .then(bunnies => res.send(bunnies))
        .catch(next);
    })
    .post('/', bodyParser, (req, res, next) => {
        new Bunny (req.body).save()
        .then(saved => res.send(saved));
    })

module.exports = router;