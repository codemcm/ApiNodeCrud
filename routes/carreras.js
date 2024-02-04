var express = require('express');
var router = express.Router();
const carreras = require('../models/Carrera');

/* GET users listing. */
router.get('/', carreras.getCarreras);

module.exports = router;