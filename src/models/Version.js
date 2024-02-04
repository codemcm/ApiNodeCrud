"use strict";
var dbConn = require("../../config/dbConfig");

var Version = function (entidad) {
    this.VersionId = entidad.VersionId;
    this.Descripcion = entidad.Descripcion;
    this.VersionBD = entidad.VersionBD;
    this.VersionSistema = entidad.VersionSistema;
    this.Notas = entidad.Notas;
}

Version.getAll = function (result) {
    dbConn.query("SELECT * FROM Version", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("user : ", res);
        result(null, res);
      }
    });
};
module.exports = Version;