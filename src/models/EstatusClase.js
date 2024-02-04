"use strict";
var dbConn = require("../../config/dbConfig");

var EstatusClase = function (entidad) {
    this.EstatusClaseId = entidad.EstatusClaseId;
    this.NombreEstatus = entidad.NombreEstatus;
}

EstatusClase.getAll = function (result) {
    dbConn.query("SELECT * FROM EstatusClase", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("user : ", res);
        result(null, res);
      }
    });
};
module.exports = EstatusClase;