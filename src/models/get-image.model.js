'use strict';

var dbConn = require('./../../config/db.config');

var FindImage = function(employee){
    this.image_name  = employee.image_name;   
 
};


FindImage.findById = function(id, result){

    dbConn.query("Select p_image from users where id = ?" ,id, function(err, res){

        if(err){
            console.log("error: ",err);   
 
            result(err, null);
        }

        else{
            
           result(null, res);    
        
        }
    });

};

FindImage.delete = function(id, result){
    dbConn.query(`UPDATE users SET p_image = ? WHERE id = ?`, [null, id], function(err, res){
        if(err){
            console.log("error");
        }else{
            console.log("success"); 
        }
       
    });
}

FindImage.online = function(id){
    dbConn.query(`UPDATE users SET online = ? WHERE id = ?`, ['Y', id], function(err){
        if(err){
            console.log("error");
        }else{
            console.log("success");
        }
    });
}

FindImage.ofline = function(id){
    dbConn.query(`UPDATE users SET online = ? WHERE id = ?`, ['N', id], function(err){
        if(err){
            console.log("error");
        }else{
            console.log("success");
        }
    });
}

FindImage.findMultiple = function(id, result){

    dbConn.query("Select image_name from images3 where image_value = ?" ,id, function(err, res){

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