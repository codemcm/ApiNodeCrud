"use strict";
var dbConn = require("../../config/dbConfig");

var Profesor = function (entidad) {
    this.ProfesorId = entidad.ProfesorId;
    this.Nombre = entidad.Nombre;
    this.APaterno = entidad.APaterno;
    this.AMaterno = entidad.AMaterno;
    this.Active = entidad.Active;
    this.RFC = entidad.RFC;
    this.CarreraId = entidad.CarreraId;
}

Profesor.getAll = function (result) {
    dbConn.query("SELECT * FROM Profesor", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("user : ", res);
        result(null, res);
      }
    });
};
module.exports = Profesor;