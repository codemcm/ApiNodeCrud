var express = require('express');
var router = express.Router();
const EstudianteActividadController = require('../src/controller/EstudianteActividadController');

/* GET users listing. */
router.get('/', EstudianteActividadController.findAll);
module.exports = router;