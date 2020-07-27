'use strict';

var dbConn = require('./../../config/db.config');

var Employee = function(employee){
    this.name         = employee.name;
    this.email  = employee.email;
    this.password        = employee.password;
};

Employee.create = function(newEmp, result){

    dbConn.query("INSERT INTO admin set ?", newEmp, function (err, res){

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

    dbConn.query("Select * from admin where idadmin = ?" ,id, function(err, res){

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

    dbConn.query("SELECT * FROM admin", function(err, res){

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
    dbConn.query("UPDATE admin SET name=?,email=?,password=? WHERE idadmin=?",
    [employee.name,employee.email,employee.password,id],
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
    dbConn.query("DELETE FROM admin WHERE idadmin =?", [id], function(err, res){

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