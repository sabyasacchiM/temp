var express = require('express'); 
var app = express(); 
var fs = require("fs"); 
// var jsonData = require("./temp.json"); 
var path = require("path");

app.get('/list', function (req, res) 
{ 
    fs.readFile( __dirname + "/" + "temp.json", 'utf8', function (err, data) { 
        console.log( data ); 
        res.end( data ); 
    }); 
}) 

app.post('/addtemp/:temp', function (req, res) { 
    data = req.params.temp; 
    fs.appendFile( __dirname + "/" + "temp.json", "\n"+data , function(err) {
        if(err){throw err}
        else{console.log("")}
    }) 
}) 

var server = app.listen(8082, function () { 
    var host = server.address().address 
    var port = server.address().port 
    console.log("Example app listening at http://%s:%s", host, port) 
})