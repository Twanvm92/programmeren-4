/**
 * Created by twanv on 4-5-2017.
 */
var http = require('http');
var express = require('express');
var app = express();
var config = require('./config.json');

app.set("PORT", config.webPort);
var port = process.env.PORT || app.get('PORT');

app.all('*', function (req, res, next) {
    console.log(req.method + " " + req.url);
    next();
});

app.use('/api/v1', require('./routes/routes_api_v1'));
app.use('/api/v2', require('./routes/routes_api_v2'));

app.get("/about", function (req, res) {
    res.json({
        "Info": "Dit is een simpele server"
    })
});

app.get('/', function(request, response) {
    response.send('Hello Avans!');
})

app.get("*", function (req, res) {
    res.status(404);
    res.send("404- Not Found");

});

app.listen(port, function () {
    console.log("Server is listening on port: " + port);
});

module.exports = app;
