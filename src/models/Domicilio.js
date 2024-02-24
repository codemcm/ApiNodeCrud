"use strict";
var dbConn = require("../../config/dbConfig");

var Domicilio = function (entidad) {
    this.DomicilioId = entidad.DomicilioId;
    this.Direccion = entidad.Direccion;
    this.EstudianteId = entidad.EstudianteId;
    this.EstadoId = entidad.EstadoId;
    this.CiudadId = entidad.CiudadId;
}

Domicilio.getAll = function (result) {
    dbConn.query("SELECT * FROM Domicilio", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("user : ", res);
        result(null, res);
      }
    });
};
module.exports = Domicilio;