const Estudiante = require("../models/Estudiante");
const ResponseClass = require("../models/Response");

exports.findAll = function (req, res) {
    Estudiante.getAll(function (err, Estudiante) {
      var responseReturn = new ResponseClass();
      console.log("controller");
      if (err){
        res.send(err);
      } 
      console.log("res", Estudiante);
      responseReturn.status = true;
      responseReturn.code = 200;
      responseReturn.message = "Success";
      responseReturn.data = Estudiante;
      res.status(200);
      res.send(responseReturn);
    });
};