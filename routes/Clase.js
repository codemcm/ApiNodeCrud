var express = require('express');
var router = express.Router();
const ClaseController = require('../src/controller/ClaseController');

/* GET users listing. */
router.get('/', ClaseController.findAll);
module.exports = router;