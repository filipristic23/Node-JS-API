'use strict';

const City = require('../models/city-get.model');

exports.findAll = function(req, res){

    City.findAll(function(err, city) {
    
        console.log('controller')
    
        if(err)
    
        res.send(err);
    
        console.log('res', city);
    
        res.send(city);
    
    });    
    
    };