// var Artista = require('../models/artista');
var models = require('../models');

function get(request, response) {
    models.Artista.findAll().then(artista => {
        response.json(artista);
    })
}

function guardar(request, response) {
    models.Artista.create({
        nombre: request.body.nombre,
        descripcion: request.body.descripcion,
        imagen: request.body.imagen,
    }).then(function(data) {
        if (data) {
            response.status(200).send({ message: 'se registro' });
        } else {
            response.status(400).send({ message: 'no se registro' });
        }
    });
}

function actualizar(req, res) {
    const nuevoDato = req.body;
    models.Artista.update(nuevoDato, { where: { id: req.params.id } })
        .then(artista => {
            return res.status(404).json({ message: "actualizado" });
        })
        .catch(function(err) {
            return res.status(404).json({ message: "Server con problemas" });
        });
}

function eliminar(req, res) {
    models.Artista.destroy({ where: { id: req.params.id } })
        .then(artista => {
            return res.status(404).json({ message: "Eliminado" });
        })
        .catch(function(err) {
            return res.status(404).json({ message: "No ha sido eliminado" });
        });
}

module.exports = {get, guardar, actualizar, eliminar }