const Profesor = require("../models/Profesor");
const ResponseClass = require("../models/Response");

exports.findAll = function (req, res) {
    Profesor.getAll(function (err, Profesor) {
      var responseReturn = new ResponseClass();
      console.log("controller");
      if (err){
        res.send(err);
      } 
      console.log("res", Profesor);
      responseReturn.status = true;
      responseReturn.code = 200;
      responseReturn.message = "Success";
      responseReturn.data = Profesor;
      res.status(200);
      res.send(responseReturn);
    });
};