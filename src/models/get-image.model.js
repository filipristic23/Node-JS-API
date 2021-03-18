'use strict';

var dbConn = require('./../../config/db.config');

var FindImage = function(employee){
    this.image_name  = employee.image_name;
 
};


FindImage.findById = function(id, result){

    dbConn.query("Select * from images where id = ?" ,id, function(err, res){

        if(err){
            console.log("error: ",err);

            result(err, null);
        }

        else{
            
           result(null, res);
        
        }
    });

};

module.exports= FindImage;