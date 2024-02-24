"use strict";
var dbConn = require("../../config/dbConfig");

var EstudianteActividad = function (entidad) {
    this.EstudianteActividadId = entidad.EstudianteActividadId;
    this.FechaRegistro = entidad.FechaRegistro;
    this.Calificacion = entidad.Calificacion;
    this.EstudianteId = entidad.EstudianteId;
    this.ClaseId = entidad.ClaseId;
    this.ActividadId = entidad.ActividadId;
}

EstudianteActividad.getAll = function (result) {
    dbConn.query("SELECT * FROM EstudianteActividad", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("user : ", res);
        result(null, res);
      }
    });
};
module.exports = EstudianteActividad;