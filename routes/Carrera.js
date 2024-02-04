var express = require('express');
var router = express.Router();
const CarreraController = require('../src/controller/CarreraController');

/* GET users listing. */
router.get('/', CarreraController.findAll);
module.exports = router;