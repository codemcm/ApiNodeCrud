const Actividad = require("../models/Actividad");
const ResponseClass = require("../models/Response");

exports.findAll = function (req, res) {
    Actividad.getAll(function (err, Actividad) {
      var responseReturn = new ResponseClass();
      console.log("controller");
      if (err){
        res.send(err);
      } 
      console.log("res", Actividad);
      responseReturn.status = true;
      responseReturn.code = 200;
      responseReturn.message = "Success";
      responseReturn.data = Actividad;
      res.status(200);
      res.send(responseReturn);
    });
};