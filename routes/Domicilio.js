var express = require('express');
var router = express.Router();
const DomicilioController = require('../src/controller/DomicilioController');

/* GET users listing. */
router.get('/', DomicilioController.findAll);
module.exports = router;