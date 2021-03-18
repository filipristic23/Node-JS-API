var db = require ('../../config/db.config');
var uuid = require('uuid');

exports.index = function(req, res){
   
    message = '';
   if(req.method == "POST"){
      var post  = req.body;
      var nam= post.name;
      var em= post.email;
      var pass= post.password;
      var cit= post.city;
      
 
	  if (!req.files)
				return res.status(400).send('No files were uploaded.');
 
		var file = req.files.uploaded_image;
		var img_name=file.name;
 
	  	 if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){
                                 
              file.mv('../public/images/uploaded_images'+file.name, function(err) {
                             
	              if (err)
 
	                return res.status(500).send(err);
      					var sql = "INSERT INTO `admin4_test`(`name`,`email`,`password`,`city`, `img`) VALUES ('" + nam + "','" + em + "','" + pass + "','" + cit + "','" + img_name + "')";
 
    						db.query(sql, function(err, result) {
    							 res.redirect('profile/'+result.insertId);
    						});
					   });
          } else {
            message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
           
          }
   } else {
      res.render('index');
   }
}