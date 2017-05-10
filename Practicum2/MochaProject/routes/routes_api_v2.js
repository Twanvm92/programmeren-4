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

router.get('/recipes', function (req, res, next) {
    res.json(recipes);
});
//

router.get('/recipe', function (req, res, next) {
    var category = req.query.category || "";
    var ingredient = req.query.ingredient || "";


        var recipe = recipes.filter(function (c) {

            return (c.category === category)
        });

        var recipe = recipes.filter(function (i) {


            for(b = 0; b < i.ingredients.length; b++) {
                if(i.ingredients[b].indexOf(ingredient) != -1) {
                    return true;
                }
            }
        });

    console.log(recipe);

    res.json(recipe);
});


router.get('/recipes/:number', function (req, res) {
    var recipeNmb = req.params.number || "";

    res.json(recipes[recipeNmb]);
});

router.all('*', function (req, res) {
    res.status(404);
    res.json({
        'melding': '404 - Not Found'
    });
});

module.exports = router;
