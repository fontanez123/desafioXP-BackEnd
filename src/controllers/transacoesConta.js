const transacoesContaService = require('../services/transacoesConta');

const deposito = async (req, res) => {
  const operacao = await transacoesContaService.deposito(req.body);

  res.status(200).json(operacao);
};

const saque = async (req, res) => {
  const operacao = await transacoesContaService.saque(req.body);

  res.status(200).json(operacao);
};

module.exports = {
  deposito,
  saque,
};
