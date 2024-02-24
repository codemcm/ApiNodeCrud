var express = require('express');
var router = express.Router();
const ActividadController = require('../src/controller/ActividadController');

/* GET users listing. */
router.get('/', ActividadController.findAll);
module.exports = router;