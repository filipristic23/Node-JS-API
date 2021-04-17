
const ModeratorMessages = require('../models/get-moderator');

exports.findById = function(req, res){

  ModeratorMessages.findMessages(req.params.id, function(err, employee){
    if(err)

    res.send(err);

    res.send(employee);
  });
}

