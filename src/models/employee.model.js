'use strict';

var dbConn = require('./../../config/db.config');

var Employee = function(employee){
    this.productName         = employee.productName;
    this.ProductDescription  = employee.ProductDescription;
    this.ProductPrice        = employee.ProductPrice;
};

Employee.create = function(newEmp, result){

    dbConn.query("INSERT INTO user set ?", newEmp, function (err, res){

        if(err){
            console.log("error: ", err);

            result(err, null);

        }

        else{
            console.log(res.insertId);

            result(null, res.insertId);
        }         

    });

};

Employee.findById = function(id, result){

    dbConn.query("Select * from user where id = ?" ,id, function(err, res){

        if(err){
            console.log("error: ",err);

            result(err, null);
        }

        else{
            result(null, res);  
        }
    });

};


Employee.findAll = function(result){

    dbConn.query("SELECT * FROM user", function(err, res){

        if(err){
            console.log("error: ",err);

            result(null, err);
        }
        else{
            console.log('employees : ', res);

            result(null, res)
        }
    });
};

Employee.update = function(id, employee, result){
    dbConn.query("UPDATE user SET productName=?,ProductDescription=?,ProductPrice=? WHERE id=?",
    [employee.productName,employee.ProductDescription,employee.ProductPrice,id],
    function(err, res){

        if(err){
            console.log("error: ", err);

            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

Employee.delete = function(id, result){
    dbConn.query("DELETE FROM user WHERE id =?", [id], function(err, res){

        if(err){
            console.log("error: ", err);

            result(null, err);
        }
        else{
            result(null, res);
        }

    });
};

module.exports= Employee;