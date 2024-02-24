"use strict";
var dbConn = require("../../config/dbConfig");

var Clase = function (entidad) {
    this.ClaseId = entidad.ClaseId;
    this.Nombre = entidad.Nombre;
    this.Horario = entidad.Horario;
    this.MateriaId = entidad.MateriaId;
    this.Active = entidad.Active;
    this.ProfesorId = entidad.ProfesorId;
    this.Semestre = entidad.Semestre;
    this.Anio = entidad.Anio;
    this.PeriodoId = entidad.PeriodoId;
    this.EstatusClaseId = entidad.EstatusClaseId;
}

Clase.getAll = function (result) {
    dbConn.query("SELECT * FROM Clase", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("user : ", res);
        result(null, res);
      }
    });
};
module.exports = Clase;