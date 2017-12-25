const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const methodOverride  = require("method-override");
const mongoose = require('mongoose');

const app = express();
       
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(methodOverride());

var config = require('./config/config');
require('./src/routes/routes')(app);

mongoose.connect(config.database);

mongoose.connection.on('connected', function() {
    console.log('MongoDB connected --->>> '+config.database);
});

mongoose.connection.on('error', function() {
    console.log('MongoDB error --->>> '+config.database);
});

app.listen(config.port, function() {  
    console.log('Server Running --->>> http://localhost:'+config.port);
});