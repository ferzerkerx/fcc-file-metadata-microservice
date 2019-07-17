'use strict';

var express = require('express');
var routes = require('./app/routes/api.js');
var routesIndex = require('./app/routes/index.js');

var app = express();
require('dotenv').config();

app.use('/public', express.static('./app/public'));
routes(app);
routesIndex(app);

var port = process.env.PORT || 8080;
app.listen(port,  function () {
    console.log('Node.js listening on port ' + port + '...');
});
