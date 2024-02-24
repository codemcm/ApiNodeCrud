var express = require('express');
var router = express.Router();
const EstudianteController = require('../src/controller/EstudianteController');

/* GET users listing. */
router.get('/', EstudianteController.findAll);
module.exports = router;