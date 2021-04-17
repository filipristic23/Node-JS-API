const express = require('express'); 

const router = express.Router()

const imageController =   require('../controllers/get-image.controller');



// Retrieve all employees


// Create a new employee


// Retrieve a single employee with id
router.get('/:id', imageController.findById);

router.get('/image/:path', imageController.getImage); 

router.get('/multiple/:id', imageController.findMultiple); 

router.put('/delete', imageController.delete);

router.put('/online', imageController.online);

router.put('/ofline', imageController.ofline);


module.exports = router 