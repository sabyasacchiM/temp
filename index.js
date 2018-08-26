var express = require('express'); 
var app = express(); 
var fs = require("fs"); 
// var jsonData = require("./temp.json"); 
var path = require("path");

//app.set('port',(process.env.PORT || 8082));

app.get('/', function (req, res) { 
    res.send("Welcome to heroku !!!");
}) 

app.get('/list', function (req, res) { 
    fs.readFile( __dirname + "/" + "temp.json", 'utf8', function (err, data) { 
        console.log( data ); 
        res.end( data ); 
    }); 
}) 

app.get('/addtemp/:temp', function (req, res) { 
    data = req.params.temp; 
    fs.appendFile( __dirname + "/" + "temp.json", "\n"+data , function(err) {
        if(err){throw err}
        else{res.send(data)}
    }) 
}) 

//var server = app.listen(app.get('port'), function () {
var server = app.listen(1995, function () {
    var host = server.address().address 
    var port = server.address().port 
    console.log("Example app listening at https://test-tempt.herokuapp.com:1995", host, port) 
})
