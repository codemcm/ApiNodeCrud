"use strict";
var dbConn = require("../../config/dbConfig");

var Periodo = function (entidad) {
    this.PeriodoId = entidad.PeriodoId;
    this.NombrePeriodo = entidad.NombrePeriodo;
}

Periodo.getAll = function (result) {
    dbConn.query("SELECT * FROM Periodo", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("user : ", res);
        result(null, res);
      }
    });
  };

module.exports = Periodo;