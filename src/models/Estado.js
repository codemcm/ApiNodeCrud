"use strict";
var dbConn = require("../../config/dbConfig");

var Estado = function (entidad) {
    this.EstadoId = entidad.EstadoId;
    this.Clave = entidad.Clave;
    this.Nombre = entidad.Nombre;
}

Estado.getAll = function (result) {
    dbConn.query("SELECT * FROM Estado", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("user : ", res);
        result(null, res);
      }
    });
};
module.exports = Estado;