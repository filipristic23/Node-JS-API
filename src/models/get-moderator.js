'use strict';

var dbConn = require('./../../config/db.config');

var ModeratorMessages = function(){}

ModeratorMessages.findMessages = function(id, result){
    var sql = "SELECT * FROM message_table WHERE from_user_id = ?"; 
    dbConn.query(sql, id, function(err, res){
        if(err){
            console.log("error: ",err);

            result(null, err);
        }else{
            result(null, res); 
        }
    });
}

module.exports= ModeratorMessages;