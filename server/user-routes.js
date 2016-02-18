var express = require('express'),
    _       = require('lodash'),
    userSV  = require('./user.server');

var app = module.exports = express.Router();

app.get('/', function(req, res) {
  
  return res.status(200).send(userSV.parsehdr(req,res));
  
});

