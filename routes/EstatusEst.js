var express = require('express');
var router = express.Router();
const EstatusEstController = require('../src/controller/EstatusEstController');

/* GET users listing. */
router.get('/', EstatusEstController.findAll);
module.exports = router;