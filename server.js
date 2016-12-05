var express = require('express');
var app = express();
var cfenv = require('cfenv'); //for cloud foundry shizz
// process.env.PORT has Heroku set the port
var port = process.env.PORT || 8080;

// make express look in the right directory...
app.use(express.static(__dirname));
//app.use('/register', require('iapp/r
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.set('views', __dirname + '/app/register/');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
var router = express.Router();
router.use(function(req, res, next) {
	next();
});

router.get('/:username', function(req, res) {
	console.log("kill me");
	res.send('req.username');
});

router.get('/register', function(req, res) {
	//console.log("kill me");
	res.render('register.html');
	//res.send('moooo');
});


// set the home page route
router.get('/', function(req, res, next) {
	console.log("yay this works");
    // make sure index is in the right directory. In this case /index.html
    res.render('index');
    next();

});
app.post('/signin/grr', function(request, response, next){
	console.log("meow");
	response.send({password: "newElement"});
});

app.use('/', router);

//app.get('/register', function(request, response, next){
//	response.send({password: "newElement"});
//});

//app.post('/register/:username/', function(request, response, next){
  // Now we automatically get the story in the request object
  // We use story ID to create a new element for that story
//  response.send({ username: request.username, password: "newElement"});
//}); 

// app.get('/signin/:username/', function(request, response, next){
//   // Now we automatically get the story in the request object
//   // We use story ID to create a new element for that story
//   response.send({ username: request.username, password: "newElement"});
// }); 

// app.all('/signin/:username/', function(request, response, next){
//   response.send({ username: request.username, password: "newElement"});
// }); //post

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

