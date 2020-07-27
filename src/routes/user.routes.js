const express = require('express'); 


const router = express.Router()

const employeeController =   require('../controllers/user.controller');

router.post('/', employeeController.register);

router.post('/login', employeeController.login);

module.exports = router