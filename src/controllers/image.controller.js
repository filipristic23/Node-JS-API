var multer  = require('multer');
var imageMiddleware= require('../middlewares/image.middleware');
var imageModel= require('../models/image.model');
var multer  = require('multer');
var imageMiddleware= require('../middlewares/image.middleware');
var imageModel= require('../models/image.model');
module.exports={
    imageUploadForm:function(req,res){
       /* res.render('upload-form');*/
       res.status(200).send({ 
        msg:'dobarrrrr'
      })
     },
     storeImage:function(req,res){
        var upload = multer({
                    storage: imageMiddleware.image.storage(), 
                    allowedImage:imageMiddleware.image.allowedImage 
                    }).single('p_image');
        upload(req, res, function (err) {
           if (err instanceof multer.MulterError) {
              res.send(err);
           } else if (err) {
              res.send(err);
           }else{
              // store image in database
              /* var imageName = req.file.originalname;
               var imageValue = req.body.image_value;*/
            
               var p_image = req.file.originalname;
               var id = req.body.id;
               var inputValues = {
                  p_image: p_image
                  
               }
             // call model
             //res.render zamjenio sa res.send
             imageModel.storeImage(p_image, id, function(data){
              /* res.render('upload-form',{alertMsg:data})*/
              res.status(200).send({
                msg:'dobarrrrr'
              })
             })
              
           }
           
        }) 
        
     }
}




/*function upload(req, res){
if(req.file.filename){
    res.status(201).json({
        message:"Image upload successfuly",
        url: req.file.filename
    });
}else{
    res.status(500).json({
        message:"Wrong",
    });
}
}


module.exports = {
    upload: upload
}*/


/*
module.exports={
    imageUploadForm:function(req,res){
        res.render('upload-form');
       res.status(200).send({
         msg:'dobarrrrr'
       })
      },
      storeImage:function(req,res){
         var upload = multer({
                     storage: imageMiddleware.image.storage(), 
                     allowedImage:imageMiddleware.image.allowedImage 
                     }).single('image');
         upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
               res.send(err);
            } else if (err) {
               res.send(err);
            }else{
               // store image in database
                var imageName = req.file.originalname;
                var inputValues = {
                   image_id,
                   image_name: imageName
                }
                
              // call model
              //res.render zamjenio sa res.send
              imageModel.storeImage(inputValues, function(data){
              
               res.status(200).send({
                 msg:'dobarrrrr'
               })
              })
               
            }
            
         }) 
         
      }
 }*/ 