"use strict";
var dbConn = require("../../config/dbConfig");

var TipoUsuario = function (entidad) {
    this.TipoUsuarioId = entidad.TipoUsuarioId;
    this.NombreTipo = entidad.NombreTipo;
    this.FechaRegistro = entidad.FechaRegistro;
}

TipoUsuario.getAll = function (result) {
    dbConn.query("SELECT * FROM TipoUsuario", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("user : ", res);
        result(null, res);
      }
    });
};
module.exports = TipoUsuario;