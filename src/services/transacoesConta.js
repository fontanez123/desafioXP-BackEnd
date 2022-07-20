const clientesModel = require('../models/clientes');
const transacoesContaModel = require('../models/transacoesConta');

const deposito = async ({ idCliente, valor }) => {
  const tipo = 'deposito';
  const operacao = await transacoesContaModel.transacao(idCliente, tipo, valor);
  await clientesModel.aumentarSaldo(idCliente, valor);

  return operacao;
};

const saque = async ({ idCliente, valor }) => {
  const tipo = 'saque';
  const operacao = await transacoesContaModel.transacao(idCliente, tipo, valor);
  await clientesModel.diminuirSaldo(idCliente, valor);

  return operacao;
};

module.exports = {
  deposito,
  saque,
};
