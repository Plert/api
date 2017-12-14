var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
// Models
User = require('./app/models/userModel'); //created model loading here

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Plertdb'); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
var routes = require('./app/routes/userRoutes'); //importing user routes
routes(app); //register the route

// Start server
app.listen(port);
console.log('Plert RESTful API server started on: ' + port);

// Error Route
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});