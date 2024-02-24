"use strict";
var dbConn = require("../../config/dbConfig");

var TipoActividad = function (entidad) {
    this.TipoActividadId = entidad.TipoActividadId;
    this.Nombre = entidad.Nombre;
    this.Observaciones = entidad.Observaciones;
}

TipoActividad.getAll = function (result) {
    dbConn.query("SELECT * FROM TipoActividad", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("user : ", res);
        result(null, res);
      }
    });
};
module.exports = TipoActividad;