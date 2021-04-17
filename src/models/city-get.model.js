'use strict';

var dbConn = require('./../../config/db.config');

var City = function(city){
    this.name         = city.name;
    this.email        = city.email;
    this.password     = city.password;
};

City.findAll = function(result){

    dbConn.query("SELECT * FROM city", function(err, res){

        if(err){
            console.log("error: ",err);

            result(null, err);
        }
        else{
            console.log('citys : ', res);

            result(null, res)
        }
    });
};

City.findUser = function(result){

    dbConn.query("SELECT * FROM users", function(err, res){

        if(err){
            console.log("error: ",err);

            result(null, err);
        }
        else{
            console.log('citys : ', res);

            result(null, res)
        }
    });
};


module.exports= City;