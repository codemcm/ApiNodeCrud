const Usuario = require("../models/Usuario");
const ResponseClass = require("../models/Response");

exports.findAll = function (req, res) {
    Usuario.getAll(function (err, Usuario) {
      var responseReturn = new ResponseClass();
      console.log("controller");
      if (err){
        res.send(err);
      } 
      console.log("res", Usuario);
      responseReturn.status = true;
      responseReturn.code = 200;
      responseReturn.message = "Success";
      responseReturn.data = Usuario;
      res.status(200);
      res.send(responseReturn);
    });
};