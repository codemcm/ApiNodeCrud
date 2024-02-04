var express = require('express');
var router = express.Router();
const periodoController = require('../src/controller/PeriodoController');

/* GET users listing. */
router.get('/', periodoController.findAll);

module.exports = router;