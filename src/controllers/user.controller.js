var db = require('../../config/db.config');
var express    = require('express');
var bcrypt = require('bcrypt');


//REGISTRACIJA KORISNIKA
exports.register = async function(req,res){
    const password = req.body.password;
    const saltRounds = 10;
    const encryptedPassword = await bcrypt.hash(password, saltRounds)
    var users={
       "email":req.body.email,
       "password":encryptedPassword
     }
    
    db.query('INSERT INTO admin_test SET ?',users, function (error, results, fields) {
      if (error) {
        res.send({
          "code":400,
          "failed":"error ocurred"
        })
      } else {
        res.send({
          "code":200,
          "success":"user registered sucessfully"
            });
        }
    });
  }



//LOGIN KORISNIKA
  exports.login = async function(req,res){
    var email= req.body.email;
    var password = req.body.password;
    db.query('SELECT * FROM admin_test WHERE email = ?',[email], async function (error, results, fields) {
      if (error) {
        res.send({
          "code":400,
          "failed":"error ocurred"
        })
      }else{
        if(results.length >0){
          const comparision = await bcrypt.compare(password, results[0].password)
          if(comparision){
              res.send({
                "code":200,
                "success":"login sucessfull"
              })
          }
          else{
            res.send({
                 "code":204,
                 "success":"Email and password does not match"
            })
          }
        }
        else{
          res.send({
            "code":206,
            "success":"Email does not exits"
              });
        }
      }
      });
  }