const ativosModel = require('../models/ativos');

const getAll = () => ativosModel.getAll();

const getById = (id) => ativosModel.getById(id);

module.exports = {
    getAll,
    getById,    
};