const TipoActividad = require("../models/TipoActividad");
const ResponseClass = require("../models/Response");

exports.findAll = function (req, res) {
    TipoActividad.getAll(function (err, TipoActividad) {
      var responseReturn = new ResponseClass();
      console.log("controller");
      if (err){
        res.send(err);
      } 
      console.log("res", TipoActividad);
      responseReturn.status = true;
      responseReturn.code = 200;
      responseReturn.message = "Success";
      responseReturn.data = TipoActividad;
      res.status(200);
      res.send(responseReturn);
    });
};