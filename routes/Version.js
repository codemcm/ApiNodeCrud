var express = require('express');
var router = express.Router();
const VersionController = require('../src/controller/VersionController');

/* GET users listing. */
router.get('/', VersionController.findAll);
module.exports = router;