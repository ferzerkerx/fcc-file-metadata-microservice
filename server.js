'use strict';

var express = require('express');
var routes = require('./app/routes/api.js');

var app = express();
require('dotenv').load();

routes(app);

var port = process.env.PORT || 8080;
app.listen(port,  function () {
    console.log('Node.js listening on port ' + port + '...');
});