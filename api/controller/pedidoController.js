
const models = require('../models');



function get(request, response) {
    models.pedido.findAll().then(data => {
            response.json(data);
        }
    )
}

function create(request, response) {
    console.log(request);
    models.pedido.create({
        precioventa: request.body.precioventa,
        productoId: request.body.productoId,
        clienteId: request.body.clienteId,

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
    models.pedido.update(nuevoDato, {where: {id: req.params.id}})
        .then(date => {
            return res.status(200).json({message: "actualizado"});
        })
        .catch(function (err) {
            return res.status(404).json({message: "Server con problemas"});
        });
}

function eliminar(req, res) {
    // console.log(req.params.id);
    models.pedido.destroy({where: {id: req.params.id}})
        .then(date => {
            return res.status(200).json({message: "Eliminado correctamente "});
        })
        .catch(function (err) {
            return res.status(404).json({message: "No ha sido eliminado"});
        });
}

function getId(req, res) {
    // models.socios.find(req.params.id)
    models.pedido.findOne({
        where: {id: req.params.id},
        include: [
            {model: models.producto, as: models.producto},
            {model: models.cliente, as: models.cliente}
        ]
    })
        .then(data => {
            console.log(data);
            return res.status(200).json(data);
        })
        .catch(function (err) {
            return res.status(404).json({message: "No existe el pedido"});
        });
}

module.exports = {get, create, update, eliminar, getId}
