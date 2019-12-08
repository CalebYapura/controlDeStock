
const models = require('../models');



function get(request, response) {
    models.producto.findAll({
        include: [
            {model: models.categoria, as: models.categoria},
            {model: models.proveedor, as: models.proveedor}
        ]
    }).then(data => {
         return response.json(data);
        }
    )
    // response.json('hola');
}

function create(request, response) {
    console.log(request);
    models.producto.create({
        nombreproducto: request.body.nombreproducto,
        precioproducto: request.body.precioproducto,
        categoriaId: request.body.categoriaId,
        proveedorId: request.body.proveedorId,

    }).then(function (data) {
        if (data) {
            response.status(200).send({message: 'se registro'});
        } else {
            response.status(400).send({message: 'no se registro'});
        }
    });
}

function update(req, res) { //falta actualizar
    const nuevoDato = req.body;
    models.producto.update(nuevoDato, {where: {id: req.params.id}})
        .then(date => {
            return res.status(200).json({message: "actualizado"});
        })
        .catch(function (err) {
            return res.status(404).json({message: "Server con problemas"});
        });
}

function eliminar(req, res) {
    // // console.log(req.params.id);
    models.producto.destroy({where: {id: req.params.id}})
        .then(date => {
            return res.status(200).json({message: "Eliminado correctamente "});
        })
        .catch(function (err) {
            return res.status(404).json({message: "No ha sido eliminado"});
        });
}

function getId(req, res) {
    // // models.socios.find(req.params.id)
    models.producto.findOne({
        where: {id: req.params.id},
        include: [
            {model: models.categoria, as: models.categoria},
            {model: models.proveedor, as: models.proveedor}
        ]
    })
        .then(data => {
            console.log(data);
            return res.status(200).json(data);
        })
        .catch(function (err) {
            return res.status(404).json({message: "No existe Tipo Socio"});
        });
}

module.exports = {get, create, update, eliminar, getId}
