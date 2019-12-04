var express = require('express');
var router = express.Router();
var categoriaContoller = require('../controller/categoriaContoller');
/* GET users listing. */
router.get('', categoriaContoller.get);
router.post('', categoriaContoller.create);
router.put('/:id', categoriaContoller.update);
router.delete('/:id', categoriaContoller.eliminar);
router.get('/:id', categoriaContoller.getId);
module.exports = router;

