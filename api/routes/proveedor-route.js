var express = require('express');
var router = express.Router();
var proveedorController = require('../controller/proveedorController');
/* GET users listing. */
router.get('', proveedorController.get);
router.post('', proveedorController.create);
router.put('/:id', proveedorController.update);
router.delete('/:id', proveedorController.eliminar);
router.get('/:id', proveedorController.getId);
module.exports = router;
