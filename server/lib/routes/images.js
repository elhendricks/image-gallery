const express = require('express');
const router = express.Router();
const Image = require('../models/image');
const bodyParser = require('body-parser').json();

router
    .get('/', (req, res, next) => {
        const query = {};

        Image.find(query)
        .select('name link description')
        .lean()
        .then(images => res.send(images))
        .catch(next);
    })
    .put('/:id', bodyParser, (req, res, next) => {
        Image.findByIdAndUpdate(req.params.id, req.body, {new: true})
            .then(image => {res.send(image)})
            .catch(next);
    })
    .post('/', bodyParser, (req, res, next) => {
        new Image (req.body).save()
        .then(saved => res.send(saved));
    })
    .delete('/:id', (req, res, next) => {
        Image.findByIdAndRemove(req.params.id)
            .then(image => res.send(image))
            .catch(next);
    })

module.exports = router;