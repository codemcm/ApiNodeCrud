"use strict";
var dbConn = require("../../config/dbConfig");

var Actividad = function (entidad) {
    this.ActividadId = entidad.ActividadId;
    this.Nombre = entidad.Nombre;
    this.Descripcion = entidad.Descripcion;
    this.ClaseId = entidad.ClaseId;
    this.ValorMaximo = entidad.ValorMaximo;
    this.FechaExpiracion = entidad.FechaExpiracion;
    this.FechaRegistro = entidad.FechaRegistro;
    this.TipoActividadId = entidad.TipoActividadId;
    this.Parcial = entidad.Parcial;
}

Actividad.getAll = function (result) {
    dbConn.query("SELECT * FROM Actividad", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("user : ", res);
        result(null, res);
      }
    });
};
module.exports = Actividad;