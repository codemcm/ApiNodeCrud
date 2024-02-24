"use strict";
var dbConn = require("../../config/dbConfig");

var Usuario = function (entidad) {
    this.UsuarioId = entidad.UsuarioId;
    this.NickName = entidad.NickName;
    this.Conasenia = entidad.Conasenia;
    this.TipoUsuarioId = entidad.TipoUsuarioId;
    this.UltimoAcceso = entidad.UltimoAcceso;
    this.FechaRegistro = entidad.FechaRegistro;
    this.Activo = entidad.Activo;
}

Usuario.getAll = function (result) {
    dbConn.query("SELECT * FROM Usuario", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("user : ", res);
        result(null, res);
      }
    });
};
module.exports = Usuario;