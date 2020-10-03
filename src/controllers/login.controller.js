var db = require('../../config/db.config');
var express    = require('express');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


//REGISTRACIJA KORISNIKA
exports.register = async function(req,res){
    const password = req.body.password;
    const saltRounds = 10;
    const encryptedPassword = await bcrypt.hash(password, saltRounds)
    var users={
       "name":req.body.name,
       "email":req.body.email,
       "password":encryptedPassword,
       "city":req.body.city
     }

  
    
    db.query('INSERT INTO admin4 SET ?',users, function (error, results, fields) {
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
  
 //LOGOVANJE KORISNIKA
    exports.login = async function(req,res){
 
      db.query(
        `SELECT * FROM admin2 WHERE name = ${db.escape(req.body.name)};`,
        (err, result) => {
          // user does not exists
          if (err) {
            throw err;
            return res.status(400).send({
              msg: err
            });
          }
          if (!result.length) {
            return res.status(401).send({
              msg: 'Username or password is incorrect!'
            });
          }
          // check password
          bcrypt.compare(
            req.body.password,
            result[0]['password'],
            (bErr, bResult) => {
              // wrong password
              if (bErr) {
                throw bErr;
                return res.status(401).send({
                  msg: 'Username or password is incorrect!'
                });
              }
              if (bResult) {
                const token = jwt.sign({
                    name: result[0].name,
                    id: result[0].id
                  },
                  'SECRETKEY', {
                    expiresIn: '7d'
                  }
                );
               
                return res.status(200).send({
                  msg: 'Logged in!',
                  token,
                  user: result[0]
                });
              }
              return res.status(401).send({
                msg: 'Username or password is incorrect!'
              });
            }
          );
        }
      );
      }


      //LOGIN KORISNIKA
 /* exports.login = async function(req,res){
    var name = req.body.name;
    var email= req.body.email;
    var password = req.body.password;
    
    db.query('SELECT * FROM admin2 WHERE name = ? AND email = ?',[name,email], async function (error, results, fields) {
      if (error) {
        res.send({
          "code":400,
          "failed":"error ocurred"
        })
        
      }else{
        if(results.length >0){
          const comparision = await bcrypt.compare(password, results[0].password)
          if(comparision){
            let token = jwt.sign({
              name: result[0].name,
              userId: result[0].id
            },"mak4rak666",{
              expiresIn:"1h"
            });
            return res.status(200).send({
              msg: 'Logged in!',
              token,
              result:[0]
            });
             -- res.send({
                "code":200,
                "success":"login sucessfull"
              })--
          }
          else{
            res.send({
                 "code":204,
                 "failed":"Email and password does not match"
            })
          }
        }
      
       else{
          res.send({
            "code":206,
            "failed":"Email or name does not exits"
              });
        }
      } 
      });
    } */
  