var express = require('express');
var router = express.Router();
var tipoAsambleaController = require('../controller/clienteController');
/* GET users listing. */
router.get('', tipoAsambleaController.get);
router.post('', tipoAsambleaController.create);
router.put('/:id', tipoAsambleaController.update);
router.delete('/:id', tipoAsambleaController.eliminar);
router.get('/:id', tipoAsambleaController.getId);
module.exports = router;
