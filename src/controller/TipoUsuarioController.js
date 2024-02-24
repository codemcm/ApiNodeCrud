const TipoUsuario = require("../models/TipoUsuario");
const ResponseClass = require("../models/Response");

exports.findAll = function (req, res) {
    TipoUsuario.getAll(function (err, TipoUsuario) {
      var responseReturn = new ResponseClass();
      console.log("controller");
      if (err){
        res.send(err);
      } 
      console.log("res", TipoUsuario);
      responseReturn.status = true;
      responseReturn.code = 200;
      responseReturn.message = "Success";
      responseReturn.data = TipoUsuario;
      res.status(200);
      res.send(responseReturn);
    });
};