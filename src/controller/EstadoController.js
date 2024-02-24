const Estado = require("../models/Estado");
const ResponseClass = require("../models/Response");

exports.findAll = function (req, res) {
    Estado.getAll(function (err, Estado) {
      var responseReturn = new ResponseClass();
      console.log("controller");
      if (err){
        res.send(err);
      } 
      console.log("res", Estado);
      responseReturn.status = true;
      responseReturn.code = 200;
      responseReturn.message = "Success";
      responseReturn.data = Estado;
      res.status(200);
      res.send(responseReturn);
    });
};