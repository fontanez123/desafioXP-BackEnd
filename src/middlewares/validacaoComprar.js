const valorAtivo = require('../utils/valorTotalAtivo');
const clientesModel = require('../models/clientes');
const ativosModel = require('../models/ativos');

const Saldo = async (req, res, next) => {
  const { idCliente, idAtivo, quantidade } = req.body;
  const { saldo } = await clientesModel.getById(idCliente);
  const valorTotalAtivo = await valorAtivo(idAtivo, quantidade);

  if (valorTotalAtivo > saldo) {
    const message = 'Saldo Insuficiente';
    return res.status(400).json({ message });
  }

  return next();
};

const Quantidade = async (req, res, next) => {
  const { idAtivo, quantidade } = req.body;
  const ativo = await ativosModel.getById(idAtivo);

  if (quantidade > ativo.quantidade) {
    const message = 'Quantidade de ativo a ser comprada não pode ser maior que a quantidade disponível na corretora';
    return res.status(400).json({ message });
  }

  if (quantidade <= 0) {
    const message = 'A quantidade de ativos não pode ser negativa ou igual a zero.';
    return res.status(400).json({ message });
  }

  if (typeof quantidade !== 'number') {
    const message = 'A quantidade precisa ser um número';
    return res.status(400).json({ message });
  }

  return next();
};

module.exports = {
  Saldo,
  Quantidade,
};
