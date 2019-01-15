const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const methodOverride  = require("method-override");
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const swaggerJSDoc = require('swagger-jsdoc');

const config = require('./config/config');

const app = express();

// //////////////////////////////////////////////////////
// SWAGGER

var swaggerDefinition = {
    info: {
        title: 'Api Tasks',
        version: '1.0.0',
        description: 'Demonstrating how to describe a RESTful API with Swagger',
    },
    host: 'localhost:3000',
    basePath: '/',
};

var options = {
    swaggerDefinition: swaggerDefinition,
    apis: ['./src/routes/*.js'],
};

var swaggerSpec = swaggerJSDoc(options);

//  //////////////////////////////////////////////////////
//  MIDDLEWARES
       
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

//  //////////////////////////////////////////////////////
//  ROUTES

require('./src/routes/routes')(app);

app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

//  //////////////////////////////////////////////////////
//  START

mongoose.connect(config.database, {useMongoClient: true});

mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error!'));
db.on('connected', console.error.bind(console, 'MongoDB connection success!'));

app.listen(config.port, function() {  
    console.log('Server Running!');
});