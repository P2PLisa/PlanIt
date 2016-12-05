var express = require('express');
var app = express();
var cfenv = require('cfenv'); //for cloud foundry shizz
// process.env.PORT has Heroku set the port
var port = process.env.PORT || 8080;

// make express look in the right directory...
app.use(express.static(__dirname));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// set the home page route
app.get('/', function(req, res, next) {

    // make sure index is in the right directory. In this case /index.html
    res.render('index');
});

app.get('/register/:username/', function(request, response, next){
  // Now we automatically get the story in the request object
  // We use story ID to create a new element for that story
  response.send({ username: request.username, password: "newElement"});
}); 

// app.get('/signin/:username/', function(request, response, next){
//   // Now we automatically get the story in the request object
//   // We use story ID to create a new element for that story
//   response.send({ username: request.username, password: "newElement"});
// }); 

app.all('/signin/:username/', function(request, response, next){
  response.send({ username: request.username, password: "newElement"});
}); //post

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

