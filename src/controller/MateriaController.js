const Materia = require("../models/Materia");
const Response = require("../models/Response");

exports.findAll = function(req,res){
    Materia.getAll(function (err, materia) {
      var responseReturn = new Response();
      console.log("controller");
      if (err){
        res.send(err);
      } 
      console.log("res", materia);
      responseReturn.status = true;
      responseReturn.code = 200;
      responseReturn.message = "Success";
      responseReturn.data = materia;
      res.status(200);
      res.send(responseReturn);
    });
}
exports.create= function(req, res){
    const MateriaNew = new Materia(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(404)
                     .send({ error: true, message: "Please provide all required field" });
    }else{
        Materia.create(MateriaNew, function (err, materia) {
            var responseReturn = new Response();
            if (err) res.send(err);
            console.log("res", materia);
            responseReturn.status = true;
            responseReturn.code = 200;
            responseReturn.message = "Success";
            responseReturn.data = materia;
            res.status(200);
            res.send(responseReturn);
        });
    }
};


