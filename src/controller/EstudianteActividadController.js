const EstudianteActividad = require("../models/EstudianteActividad");
const ResponseClass = require("../models/Response");

exports.findAll = function (req, res) {
    EstudianteActividad.getAll(function (err, EstudianteActividad) {
      var responseReturn = new ResponseClass();
      console.log("controller");
      if (err){
        res.send(err);
      } 
      console.log("res", EstudianteActividad);
      responseReturn.status = true;
      responseReturn.code = 200;
      responseReturn.message = "Success";
      responseReturn.data = EstudianteActividad;
      res.status(200);
      res.send(responseReturn);
    });
};