var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.post('/test', function(request, response) {
    console.log(request.body);
    var data = request.body.data;
    if (data){
        console.log(data);
        response.send('data received');
    }else{
        response.send('Please send the data properly');
    }

});

app.get('/', function(request, response) {
        console.log("Hi express");
		response.send('Please login to view this page!');

	response.end();
});


app.listen(3000);