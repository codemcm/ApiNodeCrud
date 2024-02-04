"use strict";
var dbConn = require("../../config/dbConfig");

var Carrera = function (entidad) {
    this.CarreraId = entidad.CarreraId;
    this.NombreCarrera = entidad.NombreCarrera;
    this.Clave = entidad.Clave;
    this.Active = entidad.Active;
    this.CreateBy = entidad.CreateBy;
}

Carrera.getAll = function (result) {
    dbConn.query("SELECT * FROM Carrera", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("user : ", res);
        result(null, res);
      }
    });
};
module.exports = Carrera;