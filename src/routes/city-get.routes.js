const express = require('express'); 


const router = express.Router()

const cityController =   require('../controllers/city-get.controller');



router.get('/', cityController.findAll);

module.exports = router