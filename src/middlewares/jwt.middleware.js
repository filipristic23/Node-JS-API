const express = require('express')
const jwt = require('jsonwebtoken')


module.exports = {
 verifyToken(req, res, next){

    if(!req.headers.authorization){
        return res.status(401).send('Unauthorised request')
    }
    
    let token = req.headers.authorization.split(' ')[1];

    if(token === null ){
        return res.status(401).send('Unauthorised request')
    }
    /*
    let payload = jwt.verfy(token, 'SECRETKEY')
    if(!payload){
        return res.status(401).send('Unauthorised request')
    }
    req.id = payload.subject
    next()
   */
  try {
    let payload = jwt.verify (token, 'SECRETKEY')
    req.userId = payload.subject
    next ()

} catch (err) {
    return res.status (401) .send ('Unauthorized request')

}
    
}
}