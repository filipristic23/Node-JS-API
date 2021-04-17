var multer = require('multer');
'use strict';


const FindImage = require('../models/get-image.model');  


exports.findById = function(req, res) {

    FindImage.findById(req.params.id, function(err, employee) {   


      

      if (err)

      res.send(err);

      res.json(employee);  

    });

    };

    exports.findMultiple = function(req, res) {
      FindImage.findMultiple(id, function(err, employee){

        if (err)

        res.send(err);
  
        res.json(employee);   
        
      });
    };

    exports.getImage = function(req, res){

      res.download('./public/images/'+req.params.path);

    }

    exports.delete = function(req, res){
        FindImage.delete(req.body.id, function(){
        
            res.send('Obrisanoo!!'); 
          
        });
    }

    exports.online = function(req, res){
      FindImage.online(req.body.id, function(){
        res.send('Promjenjeno');
      });
    }

    exports.ofline = function(req, res){
      FindImage.ofline(req.body.id, function(){
        res.send('Promjenjeno');
      });
    }
 