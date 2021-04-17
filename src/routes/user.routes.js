const express = require('express'); 
const jwtMiddleweare = require('../middlewares/jwt.middleware');

const router = express.Router()

const employeeController =   require('../controllers/user.controller');



// Retrieve all employees
router.get('/', employeeController.findAll);

router.get('/class', employeeController.findByClass);

router.get('/:id', employeeController.findById);



// Create a new employee


module.exports = router