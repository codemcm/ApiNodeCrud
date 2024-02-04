const Periodo = require("../models/Periodo");
const ResponseClass = require("../models/Response");
exports.findAll = function (req, res) {
    Periodo.getAll(function (err, periodo) {
      var responseReturn = new ResponseClass();
      console.log("controller");
      if (err){
        res.send(err);
      } 
      console.log("res", periodo);
      responseReturn.status = true;
      responseReturn.code = 200;
      responseReturn.message = "Success";
      responseReturn.data = periodo;
      //res.status(200).json(periodo);
      res.send(responseReturn);
    });
};