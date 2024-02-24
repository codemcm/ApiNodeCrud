const EstatusEst = require("../models/EstatusEst");
const ResponseClass = require("../models/Response");

exports.findAll = function (req, res) {
    EstatusEst.getAll(function (err, EstatusEst) {
      var responseReturn = new ResponseClass();
      console.log("controller");
      if (err){
        res.send(err);
      } 
      console.log("res", EstatusEst);
      responseReturn.status = true;
      responseReturn.code = 200;
      responseReturn.message = "Success";
      responseReturn.data = EstatusEst;
      res.status(200);
      res.send(responseReturn);
    });
};