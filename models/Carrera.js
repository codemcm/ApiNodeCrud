const ResponseClass = require("./Response") // opcional

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: 'controlescolaruniang'
});

const getCarreras = (request, response, next) => {
    var responseReturn = new ResponseClass();
    var sqlQuery ="SELECT * FROM Carrera";
    connection.connect();
    connection.query(sqlQuery, function(err, results, fields) {
    if (err) {
        throw err;
    }    
        responseReturn.status = true;
        responseReturn.code = 200;
        responseReturn.message = "Success";
        responseReturn.body = results;
        response.status(200).json(responseReturn);
    });
    connection.end();

}


module.exports = {
    getCarreras
}
