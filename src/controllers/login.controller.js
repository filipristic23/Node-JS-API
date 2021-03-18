var db = require('../../config/db.config');
var express    = require('express');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var crypto = require('crypto');
var nodemailer = require('nodemailer');
const { POINT_CONVERSION_COMPRESSED } = require('constants');




//REGISTRACIJA KORISNIKA
exports.register = async function(req,res){
    const password = req.body.password;
    const saltRounds = 10;
    const encryptedPassword = await bcrypt.hash(password, saltRounds)
    var users={
       "name":req.body.name,
       "email":req.body.email,
      /* "email_token":crypto.randomBytes(64).toString('hex'),*/
       "password":encryptedPassword,
       "age":req.body.age,
       "gender":req.body.gender,
       "class":req.body.klasa,
      // "is_verfy":false
     }

  
    
    db.query('INSERT INTO date_users4 SET ?',users, function (error, results, fields) {
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

    //Varified email
    let transporter = nodemailer.createTransport({
      service: 'protonmail',
      auth:{
        user:'f.ristic@protonmail.com',
        pass:'mak4rak666'
      }
    
    });
    let mailOptions = {
      from:'f.ristic@protonmail.com',
      to:'filipristic2@gmail.com',
      subject:'Ide kuracccc',
      text:'Radiii'
    }

    transporter.sendEmail(mailOptions, function(){
      if(err){
        res.status(401).send({
          msg:'Greska'
        })
      }else{
        res.status(200).send({
          msg:'dobarrrrr'
        })
      }
    });
    
     
  }

  //EMAIL VERIFICATION ROUTE
  exports.verify = async function(req,res, next){

    let transporter = nodemailer.createTransport({
      service: 'protonmail',
      auth:{
        user:'f.ristic@protonmail.com',
        pass:'mak4rak666'
      }
    
    });
    let mailOptions = {
      from:'f.ristic@protonmail.com',
      to:'filipristic2@gmail.com',
      subject:'Ide mail',
      text:'Radiii'
    }

    transporter.sendEmail(mailOptions, function(error, info){
      if(error){
        res.status(401).send({
          msg:'Greska'
        })
      }else{
        res.status(200).send({
          msg:'dobarrrrr'
        })
      }
    });

  } 
  


  
 //LOGOVANJE KORISNIKA
    exports.login = async function(req,res){
 
      db.query(
        `SELECT * FROM date_users4 WHERE name = ${db.escape(req.body.name)};`,
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
                  user: result[0],
                  
                  
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


    /* var msg ={
      from:'f.ristic@protonmail.com',
      to: user.email,
      subject:'My dates - verfy your account',
      text:`
        Hello, tenx for frgistring on our site.
        Please copy and paste the adress bellow.
        http://${req.headers.host}/verfy-email?token=${user.email_token}
      `,
      html:`
      <h1>Hello,</h1> 
      <p>Thanks for registring on our site.</p>
      <p>Please click link below to verify your account.</p>
      <a href="http://${req.headers.host}/verfy-email?token=${user.email_token}" >Verify your account</a>
      `
    }

    try{
      await sgMail.send(msg);
      req.flash('success','Thanks for registring.Please check your email adres.')
      res.status(200).send({
        msg:'Uspjeh'
      })
    } catch(error){
      console.log(error);
      res.status(401).send({
        msg:'Ovo je greska'
      })
    }

     
  }*/
  