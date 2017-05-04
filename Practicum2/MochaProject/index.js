/**
 * Created by twanv on 4-5-2017.
 */
var http = require('http');
var express = require('express');
var app = express();
var config = require('./config.json');

app.set("PORT", config.webPort);
var port = process.env.PORT || app.get('PORT');

app.get("/about", function (req, res) {
    res.json({
        "Info": "Dit is een simpele server"
    })
});

app.get('/', function(request, response) {
    response.send('Hello Avans!');
})

app.get("*", function (res, req) {
    res.status(404);
    res.send("404- Not Found");

});

app.listen(port, function () {
    console.log("Server is listening on port: " + port);
});
