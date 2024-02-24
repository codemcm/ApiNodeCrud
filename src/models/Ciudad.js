"use strict";
var dbConn = require("../../config/dbConfig");

var Ciudad = function (entidad) {
    this.CiudadId = entidad.CiudadId;
    this.NombreCiudad = entidad.NombreCiudad;
    this.Clave = entidad.Clave;
    this.EstadoId = entidad.EstadoId;
}

Ciudad.getAll = function (result) {
    dbConn.query("SELECT * FROM Ciudad", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("user : ", res);
        result(null, res);
      }
    });
};
module.exports = Ciudad;