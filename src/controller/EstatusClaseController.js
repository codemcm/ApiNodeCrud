const EstatusClase = require("../models/EstatusClase");
const ResponseClass = require("../models/Response");

exports.findAll = function (req, res) {
    EstatusClase.getAll(function (err, EstatusClase) {
      var responseReturn = new ResponseClass();
      console.log("controller");
      if (err){
        res.send(err);
      } 
      console.log("res", EstatusClase);
      responseReturn.status = true;
      responseReturn.code = 200;
      responseReturn.message = "Success";
      responseReturn.data = EstatusClase;
      res.status(200);
      res.send(responseReturn);
    });
};