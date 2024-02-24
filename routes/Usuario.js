var express = require('express');
var router = express.Router();
const UsuarioController = require('../src/controller/UsuarioController');

/* GET users listing. */
router.get('/', UsuarioController.findAll);
module.exports = router;