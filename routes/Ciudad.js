var express = require('express');
var router = express.Router();
const CiudadController = require('../src/controller/CiudadController');

/* GET users listing. */
router.get('/', CiudadController.findAll);
module.exports = router;