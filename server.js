var express = require('express');
var app = express();
var cfenv = require('cfenv'); //for cloud foundry shizz
var env = cfenv.getAppEnv();
var AWS = require("aws-sdk");
process.env.AWS_SECRET_ACCESS_KEY = '7fsriumvJQT7Ns1bzZwwI/pEtU38PjTvRoODWlKA';
process.env.AWS_ACCESS_KEY_ID = 'AKIAJ6JZETCZR4K5PQKA';
process.env.AWS_REGION = 'us-west-2';
var bodyParser = require('body-parser');
var fs = require('fs');
var dynamodb = new AWS.DynamoDB();
var myCredentials = new AWS.EnvironmentCredentials('AWS');
var myConfig = new AWS.Config({
  credentials: myCredentials, region: 'us-west-2'
});

var docClient = new AWS.DynamoDB.DocumentClient();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing 
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
app.set('view engine', 'ejs');
var router = express.Router();
router.use(function(req, res, next) {
	console.log("arf");
	next();
});

// router.get('/:username', function(req, res) {
// 	console.log("kill me");
// 	res.send('req.username');
// });

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
app.post('/signin/:username', function(request, response, next){
	console.log("meow");
	process.env.AWS_REGION = 'us-west-2';
	var docClient = new AWS.DynamoDB.DocumentClient();

	var params = {
	    TableName: 'UserInfo',
	    Key: { // a map of attribute name to AttributeValue for all primary key attributes
	    
	        username: { S: request.username }
	        // more attributes...

	    },
	    AttributesToGet: [ // optional (list of specific attribute names to return)
	        'email',
	        // ... more attribute names ...
	    ],
	    ConsistentRead: false, // optional (true | false)
	    ReturnConsumedCapacity: 'NONE', // optional (NONE | TOTAL | INDEXES)
	};
	dynamodb.getItem(params, function(err, data) {
	    if (err) console.log(err); // an error occurred
	    else console.log(data); // successful response
	    response.send(data);
	});


	// var username = request.user;
	// var params = {
	// TableName: 'UserInfo',
	// IndexName: 'username',
	// KeyConditions: [
 //            DynamoDB.Condition("username", "EQ", username)
 //        ]
	// };
	// docClient.query(params, function(err, data) {
	//     if (err) {
	//     	response.status(200).send(JSON.stringify(err, null, 2))
	//         //response.send("Unable to query. Error:", JSON.stringify(err, null, 2));
	//     } else {
	//         response.send("Query succeeded.");
	//         data.Items.forEach(function(item) {
	//             //response.send()
	//         });
	//     }
	// });
	//response.send({password: "newElement"});
});
app.post('/register/:username', function(request, response, next){
	console.log("meowy");
	//var docClient = new AWS.DynamoDB.DocumentClient();
	var username = request.username;
	var email = request.email;
	//var username = "grr";
	var email = "grr@gmail.com"

	var params = {
	TableName: 'UserInfo',
	Item:{
		"username": username,
		"email": email
	}
	};

	console.log("Adding a new item...");
	docClient.put(params, function(err, data) {
		if (err) {
		console.error("Unable to add item. Error JSON:", JSON.stringify(err, " ", 2));
		} else {
		console.log("Added item:", JSON.stringify(data, " ", 2));
		}
		});
 //    var params = {
 //        TableName: "UserInfo",
 //        KeyConditionExpression: "#username = :username",
 //        ExpressionAttributeNames:{
 //            "#username": "request.user"
 //            },
 //        ExpressionAttributeValues: {
 //            ":email": request.user,
 //            ":password": request.password
 //            }
 //        };
 //    docClient.query(params, function(err, data) {
	//     if (err) {
	//     	response.status("Unable to query. Error:").send(JSON.stringify(err, null, 2))
	//         //response.send("Unable to query. Error:", JSON.stringify(err, null, 2));
	//     } else {
	//         response.send("Query succeeded.");
	//         data.Items.forEach(function(item) {
	//             //response.send()
	//         });
	//     }
	// });
	
	response.send({username: request.user, password: "newElement", user: request.user});
});

// app.post('/register/:username', function(request, response, next){
// 	console.log("meowy");
// 	var docClient = new AWS.DynamoDB.DocumentClient();

// 	var table = "UserInfo";


// 	var params = {
// 	    TableName:table,
// 	    Item:{
// 	        "name": request.username,
// 	        "password": request.password,
// 	        "email": request.email
// 	    }
// 	};

// console.log("Adding a new item...");
// docClient.put(params, function(err, data) {
//     if (err) {
//         console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
//         response.send(200, "Unable to add item", JSON.stringify(err, null, 2));
//     } else {
//         console.log("Added item:", JSON.stringify(data, null, 2));
//         response.send("success!");
//     }
// });

// 	//response.send({username: request.username, password: "newElement"});
// });


app.route('/login')

    // show the form (GET http://localhost:8080/login)
    .get(function(req, res) {
        res.send('this is the login form');
    })

    // process the form (POST http://localhost:8080/login)
    .post(function(req, res) {
        console.log('processing');
        res.send('processing the login form!');
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

