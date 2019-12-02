var express = require('express');
var router = express.Router();
var artistaController = require('../controller/artistaController');
/* GET users listing. */
router.get('/get', artistaController.get);
router.post('/guardar', artistaController.guardar);
module.exports = router;