'use strict';

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var swaggerize = require('swaggerize-express');
var api = require('./config/api.json');
var path = require('path');

var app = express();

app.use(bodyParser.json());

app.get('/api-docs', function (req, res) {
    res.json(api)
})

app.use(swaggerize({
    api: api,
    handlers: './handlers'
}));

app.listen(8000, function () {
    console.log('Listening on localhost:8000');
});
