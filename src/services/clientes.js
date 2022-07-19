const clientesModel = require('../models/clientes');

const getById = (id) => clientesModel.getById(id);

module.exports = {
    getById,
};