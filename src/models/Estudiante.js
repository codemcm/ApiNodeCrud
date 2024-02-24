"use strict";
var dbConn = require("../../config/dbConfig");

var Estudiante = function (entidad) {
    this.EstudianteId = entidad.EstudianteId;
    this.Nombre = entidad.Nombre;
    this.APaterno = entidad.APaterno;
    this.AMaterno = entidad.AMaterno;
    this.AnioIngreso = entidad.AnioIngreso;
    this.PeriodoId = entidad.PeriodoId;
    this.Celular = entidad.Celular;
    this.EMail = entidad.EMail;
    this.EstatusEstId = entidad.EstatusEstId;
    this.FechaNacimiento = entidad.FechaNacimiento;
    this.UsuarioId = entidad.UsuarioId;
    this.CreadoPor = entidad.CreadoPor;
    this.CarreraId = entidad.CarreraId;
}

Estudiante.getAll = function (result) {
    dbConn.query("SELECT * FROM Estudiante", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("user : ", res);
        result(null, res);
      }
    });
};
module.exports = Estudiante;