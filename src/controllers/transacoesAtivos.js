const transacoesAtivosService = require('../services/transacoesAtivos');

const comprarAtivos = async(req, res) => {
    const operacao = await transacoesAtivosService.comprarAtivos(req.body);

    return res.status(201).json(operacao);
};

module.exports = { 
    comprarAtivos,
};