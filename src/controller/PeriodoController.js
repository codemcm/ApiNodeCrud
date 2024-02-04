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
      res.status(200);
      res.send(responseReturn);
    });
};

exports.create = function (req, res) {
  const periodoNew = new Periodo(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Periodo.create(periodoNew, function (err, periodo) {
      var responseReturn = new ResponseClass();
      if (err) res.send(err);
      console.log("res", periodo);
      responseReturn.status = true;
      responseReturn.code = 200;
      responseReturn.message = "Success";
      responseReturn.data = periodo;
      res.status(200);
      res.send(responseReturn);

    });
  }
};