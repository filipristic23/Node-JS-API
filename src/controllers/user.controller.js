'use strict';

const Employee = require('../models/user.model');

exports.findAll = function(req, res){

  Employee.findAll(function(err, employee){
    if(err)

    res.send(err);

    res.send(employee);
  });
}

exports.findById = function(req, res){

  Employee.findById(req.params.id, function(err, employee){
    if(err)

    res.send(err);

    res.send(employee);
  });
}

exports.findByClass = function(req, res){

  Employee.findByClass(function(err, employee){
    if(err)

    res.send(err);

    res.send(employee);
  });
}


