var express = require('express');
var app = express();
var fs = require("fs");
var jsonData = require("./temp.js");
var url = "test-tempt.herokuapp.com/";

app.get('/list', function (req, res) {
   fs.readFile( __dirname + "/" + "temp.js", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.post('/addtemp/:temp', function (req, res) {
   // First read existing users.
   /*fs.readFile( __dirname + "/" + "temp.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["temp"] = req.params.temp;
       console.log( data );
       res.end( JSON.stringify(data));   
   });*/
   data = req.params.temp;
   fs.appendFile(__dirname + "/" + "temp.js", "\n"+data , function(err) {if(err){throw err}else{console.log("TEMP_POSTED")}})
})

var server = app.listen((process.env.PORT || 8081), function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://"+url+" Port -"+port, host, port)

})
