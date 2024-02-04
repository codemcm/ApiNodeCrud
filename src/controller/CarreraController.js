const Carrera = require("../models/Carrera");
const ResponseClass = require("../models/Response");

exports.findAll = function (req, res) {
    Carrera.getAll(function (err, Carrera) {
      var responseReturn = new ResponseClass();
      console.log("controller");
      if (err){
        res.send(err);
      } 
      console.log("res", Carrera);
      responseReturn.status = true;
      responseReturn.code = 200;
      responseReturn.message = "Success";
      responseReturn.data = Carrera;
      res.status(200);
      res.send(responseReturn);
    });
};