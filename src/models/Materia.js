"use strict";
var dbConn=require("../../config/dbConfig");

var Materia = function(materia){
    this.MateriaId =materia.MateriaId;
    this.Nombre=materia.Nombre;
    this.Active=materia.Active;
    this.Clave=materia.Clave;
    this.CarreraId=materia.CarreraId;
}
Materia.getAll = function (result) {

    dbConn.query("SELECT * FROM materia", function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("user : ", res);
        result(null, res);
      }
    });
}
Materia.create= function (MateriaNew, result) {
    
    dbConn.query("INSERT INTO materia set?", MateriaNew, function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log(res.insertId);
        result(null, res.insertId);
      }
    });

}
module.exports = Materia;