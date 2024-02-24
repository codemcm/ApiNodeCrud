const Domicilio = require("../models/Domicilio");
const ResponseClass = require("../models/Response");

exports.findAll = function (req, res) {
    Domicilio.getAll(function (err, Domicilio) {
      var responseReturn = new ResponseClass();
      console.log("controller");
      if (err){
        res.send(err);
      } 
      console.log("res", Domicilio);
      responseReturn.status = true;
      responseReturn.code = 200;
      responseReturn.message = "Success";
      responseReturn.data = Domicilio;
      res.status(200);
      res.send(responseReturn);
    });
};