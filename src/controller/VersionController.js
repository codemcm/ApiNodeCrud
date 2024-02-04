const Version = require("../models/Version");
const ResponseClass = require("../models/Response");

exports.findAll = function (req, res) {
    Version.getAll(function (err, Version) {
      var responseReturn = new ResponseClass();
      console.log("controller");
      if (err){
        res.send(err);
      } 
      console.log("res", Version);
      responseReturn.status = true;
      responseReturn.code = 200;
      responseReturn.message = "Success";
      responseReturn.data = Version;
      res.status(200);
      res.send(responseReturn);
    });
};