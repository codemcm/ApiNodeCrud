var express = require('express');
var router = express.Router();

const carreras = require('../models/Carrera');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/carrera', carreras.getCarreras);

module.exports = router;
