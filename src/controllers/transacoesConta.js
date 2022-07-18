const transacoesContaService = require('../services/transacoesConta');

const deposito = async (req, res) => {
    const operacao = await transacoesContaService.deposito(req.body);

    res.status(201).json(operacao);
};

module.exports = {
    deposito,
};