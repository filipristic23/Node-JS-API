'use strict';

const { query } = require('./../../config/db.config');
var dbConn = require('./../../config/db.config');

var Employee = function(employee){
    this.class = employee.class
};


Employee.findAll = function(result){
    var sql = "SELECT * from users where class = 2"; 
    dbConn.query(sql, function(err, res){
        if(err){
            console.log("error: ",err);

            result(null, err);
        }else{
            result(null, res); 
        }
    });
}
Employee.findById = function(id, result){
    var sql = "SELECT * from users where id = ? AND class = 2";
    dbConn.query(sql, id, function(err, res){
        if(err){
            console.log("error: ",err); 

            result(null, err);
        }else{
            result(null, res); 
        }
    });
}

Employee.findByClass = function(result){
    var sql = "SELECT * from users where class = 4"; 
    dbConn.query(sql, function(err, res){
        if(err){
            console.log("error: ",err);

            result(null, err);
        }else{
            result(null, res); 
        }
    });
}


module.exports= Employee;