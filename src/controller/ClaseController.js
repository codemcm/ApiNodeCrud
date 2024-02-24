const Clase = require("../models/Clase");
const ResponseClass = require("../models/Response");

exports.findAll = function (req, res) {
    Clase.getAll(function (err, Clase) {
      var responseReturn = new ResponseClass();
      console.log("controller");
      if (err){
        res.send(err);
      } 
      console.log("res", Clase);
      responseReturn.status = true;
      responseReturn.code = 200;
      responseReturn.message = "Success";
      responseReturn.data = Clase;
      res.status(200);
      res.send(responseReturn);
    });
};