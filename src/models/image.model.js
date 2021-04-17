var db=require('../../config/db.config');
module.exports={ 
  storeImage:function(p_image, id, callback){
  // check unique email address   
 //this.db.query(`UPDATE user_table SET socketid = ?, online= ? WHERE socketid = ?`, ['','N',userSocketId]);
 // var sql = 'INSERT INTO images3 SET ?';
  var sql = `UPDATE users SET p_image = ? WHERE id = ?`;
  db.query(sql, [p_image, id], function (err, data) { 
	if (err){ 
		throw err;
	}
 });
 var msg = p_image+ "is uploaded successfully";
 return callback(msg)
/*
var sql='SELECT * FROM images3 WHERE image_name =?,image_value =?';
db.query(sql,[inputValues.image_name, inputValues.image_value],function (err, data, fields) {
 if(err) throw err
 if(data.length>1){
     var msg = inputValues.image_name + " is already exist";
 }else{ 
    // save users data into database
    var sql = 'INSERT INTO images3 SET ?';
   db.query(sql, inputValues, function (err, data) {
      if (err) throw err;
   });
  var msg = inputValues.image_name+ "is uploaded successfully";
 }
 return callback(msg) 
})*/
  }
} 
