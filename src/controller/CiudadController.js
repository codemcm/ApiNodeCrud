const Ciudad = require("../models/Ciudad");
const ResponseClass = require("../models/Response");

exports.findAll = function (req, res) {
    Ciudad.getAll(function (err, Ciudad) {
      var responseReturn = new ResponseClass();
      console.log("controller");
      if (err){
        res.send(err);
      } 
      console.log("res", Ciudad);
      responseReturn.status = true;
      responseReturn.code = 200;
      responseReturn.message = "Success";
      responseReturn.data = Ciudad;
      res.status(200);
      res.send(responseReturn);
    });
};