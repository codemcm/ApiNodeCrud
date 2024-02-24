var express = require('express');
var router = express.Router();
const EstadoController = require('../src/controller/EstadoController');

/* GET users listing. */
router.get('/', EstadoController.findAll);
module.exports = router;