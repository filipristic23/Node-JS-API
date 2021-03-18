
'use strict';

const FindImage = require('../models/get-image.model');


exports.findById = function(req, res) {

    FindImage.findById(req.params.id, function(err, employee) {


      

      if (err)

      res.send(err);

      res.json(employee);

    });

    };
 