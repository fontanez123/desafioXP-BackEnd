const clientesModel = require('../models/clientes');
const ativosModel = require('../models/ativos');

const cliente = async (req, res, next) => {
  const { idCliente } = req.body;
  const clienteExiste = await clientesModel.getById(idCliente);

  if (!idCliente || idCliente <= 0) {
    const message = 'O campo idCliente é obrigatório ou precisa ser um número maior que 0';
    return res.status(400).json({ message });
  }

  if (typeof idCliente !== 'number') {
    const message = 'O campo idCliente precisa ser um número';
    return res.status(400).json({ message });
  }

  if (!clienteExiste) {
    const message = 'Cliente não encontrado';
    return res.status(404).json({ message });
  }

  return next();
};

const ativo = async (req, res, next) => {
  const { idAtivo } = req.body;
  const ativoExiste = await ativosModel.getById(idAtivo);

  if (idAtivo <= 0) {
    const message = 'O campo idAtivo é obrigatório ou precisa ser um número maior que 0';
    return res.status(400).json({ message });
  }

  if (typeof idAtivo !== 'number') {
    const message = 'O campo idAtivo precisa ser um número';
    return res.status(400).json({ message });
  }

  if (!ativoExiste) {
    const message = 'Ativo não encontrado';
    return res.status(404).json({ message });
  }

  return next();
};

module.exports = {
  cliente,
  ativo,
};
