var express = require('express');
var router = express.Router();
var materiaController = require("../src/controller/MateriaController");

router.get("/",materiaController.findAll);
router.get('',materiaController.create);
module.exports = router;

