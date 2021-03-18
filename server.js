const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');



// create express app
const app = express();

app.use(cors())

// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

//Allowing public/images

app.use("/images", express.static(path.join("public/images")));

//for gettong images

var publicDir = require('path').join(__dirname,'/public/images'); 
app.use(express.static(publicDir)); 

// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Require employee routes
const employeeRoutes = require('./src/routes/employee.routes')
const loginRutes = require('./src/routes/login.routes')
const userRoutes = require('./src/routes/user.routes')
const cityRoutes = require('./src/routes/city-get.routes')
const uploadRoutes = require('./src/routes/image-upload.routes')
const imageRoutes = require('./src/routes/get-image.routes')


// using as middleware
app.use('/api/v1/employees', employeeRoutes)
app.use('/register', loginRutes)
app.use('/users', userRoutes)
app.use('/get', cityRoutes)
app.use('/upload', uploadRoutes)
app.use('/getImage', imageRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});