const express = require('express');
const router = express.Router();
const productoController = require('../controller/productoController');
/* GET users listing. */
router.get('', productoController.get);
router.post('', productoController.create);
router.put('/:id', productoController.update);
router.delete('/:id', productoController.eliminar);
router.get('/:id', productoController.getId);
module.exports = router;
