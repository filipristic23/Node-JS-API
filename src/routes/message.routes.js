const express = require('express'); 
const router = express.Router()


const message = require('../controllers/message.contoller');

router.get('/moderatorMessages/:id', message.findById);

//router.get('/:message_from', message.findByFrom);

module.exports = router 