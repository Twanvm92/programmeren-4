/**
 * Created by twanv on 4-5-2017.
 */
var http = require('http');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get("/about", function (req, res) {
    res.json({
        "Info": "Dit is een simpele server"
    })
});

app.listen(port, function () {
    console.log("Server is listening on port: " + port);
});
