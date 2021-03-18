const express = require('express'); 

const router = express.Router()

const imageController =   require('../controllers/get-image.controller');



// Retrieve all employees


// Create a new employee


// Retrieve a single employee with id
router.get('/:id', imageController.findById);





module.exports = router