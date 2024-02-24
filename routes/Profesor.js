var express = require('express');
var router = express.Router();
const ProfesorController = require('../src/controller/ProfesorController');

/* GET users listing. */
router.get('/', ProfesorController.findAll);
module.exports = router;