const ativosService = require('../services/ativos');

const getAll = async (_req, res) => {
    const ativos = await ativosService.getAll();

    return res.status(200).json(ativos);
};

module.exports = {
    getAll,
};