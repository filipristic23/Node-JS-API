const express = require('express'); 


const router = express.Router()

const employeeController =   require('../controllers/login.controller');
const userMiddleweare = require('../middlewares/user.middleware');

router.post('/', userMiddleweare.validateRegister, employeeController.register);

router.post('/login', employeeController.login);

module.exports = router