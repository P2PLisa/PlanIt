var express = require('express');
var app = express();

// process.env.PORT has Heroku set the port
var port = process.env.PORT || 8080;

// make express look in the right directory...
app.use(express.static(__dirname));

// set the home page route
app.get('/', function(req, res) {

    // make sure index is in the right directory. In this case /index.html
    res.render('index');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
