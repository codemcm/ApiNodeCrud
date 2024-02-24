var express = require('express');
var router = express.Router();
const EstatusClaseController = require('../src/controller/EstatusClaseController');

/* GET users listing. */
router.get('/', EstatusClaseController.findAll);
module.exports = router;