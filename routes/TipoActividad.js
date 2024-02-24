var express = require('express');
var router = express.Router();
const TipoActividadController = require('../src/controller/TipoActividadController');

/* GET users listing. */
router.get('/', TipoActividadController.findAll);
module.exports = router;