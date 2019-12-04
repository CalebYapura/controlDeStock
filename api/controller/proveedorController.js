const models = require('../models');


function get(request, response) {
    models.proveedor.findAll().then(data => {
            response.json(data);
        }
    )
}

function create(request, response) {
    console.log(request);
    models.proveedor.create({
        nombre: request.body.nombre,
        descripcion: request.body.descripcion,

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
    models.proveedor.update(nuevoDato, {where: {id: req.params.id}})
        .then(date => {
            return res.status(200).json({message: "actualizado"});
        })
        .catch(function (err) {
            return res.status(404).json({message: "Server con problemas"});
        });
}

function eliminar(req, res) {
    // console.log(req.params.id);
    models.proveedor.destroy({where: {id: req.params.id}})
        .then(date => {
            return res.status(200).json({message: "Eliminado correctamente "});
        })
        .catch(function (err) {
            return res.status(404).json({message: "No ha sido eliminado"});
        });
}

function getId(req, res) {
    // models.socios.find(req.params.id)
    models.proveedor.findOne({
        where: {id: req.params.id},

    })
        .then(data => {
            console.log(data);
            return res.status(200).json(data);
        })
        .catch(function (err) {
            return res.status(404).json({message: "No existe categoria"});
        });
}

module.exports = {get, create, update, eliminar, getId}
