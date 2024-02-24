var express = require('express');
var router = express.Router();
const TipoUsuarioController = require('../src/controller/TipoUsuarioController');

/* GET users listing. */
router.get('/', TipoUsuarioController.findAll);
module.exports = router;