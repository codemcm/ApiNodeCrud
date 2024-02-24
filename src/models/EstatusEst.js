"use strict";
var dbConn = require("../../config/dbConfig");

var EstatusEst = function (entidad) {
    this.EstatusEstId = entidad.EstatusEstId;
    this.NombreEstatus = entidad.NombreEstatus;
    this.Active = entidad.Active;
}

EstatusEst.getAll = function (result) {
    dbConn.query("SELECT * FROM EstatusEst", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("user : ", res);
        result(null, res);
      }
    });
};
module.exports = EstatusEst;