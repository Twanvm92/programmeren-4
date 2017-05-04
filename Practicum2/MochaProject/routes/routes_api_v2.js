/**
 * Created by twanv on 4-5-2017.
 */
// API version 2
var express = require('express');
var router = express.Router();
var path = require('path');
var recipes = require('../recipes');

router.get('/info', function (req, res) {
    res.status(200);
    res.json({
        'beschrijving': 'Deze server is bedoeld voor het testen van mocha en chai'
    })
});

router.get('/recipes', function (req, res) {
    res.json(recipes);
})

router.all('*', function (req, res) {
    res.status(404);
    res.json({
        'melding': '404 - Not Found'
    });
});

module.exports = router;
